import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListingService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createListingDto: Prisma.ListingCreateInput) {
    return await this.prisma.listing.create({ data: { ...createListingDto } });
  }

  async findAll(locationId?: string) {
    return await this.prisma.listing.findMany({
      where: {
        ...(locationId ? { locationId: locationId } : {})
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.listing.findUnique({ where: { id, } });
  }

  async update(id: string, updateListingDto: Prisma.ListingUpdateInput) {
    return await this.prisma.listing.update({
      where: { id, },
      data: { ...updateListingDto }
    });
  }

  async remove(id: string) {
    return await this.prisma.listing.delete({ where: { id, } });
  }
}
