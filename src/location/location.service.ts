import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocationService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  async create(createLocationDto: Prisma.LocationCreateInput) {
    return await this.prisma.location.create({
      data: { ...createLocationDto }
    });
  }

  async findAll(q?: string) {
    return await this.prisma.location.findMany({
      where: q
        ? {
          OR: [{ country: q }, { city: q }],
        }
        : undefined,
    });
  }

  async findOne(id: string) {
    return await this.prisma.location.findUnique({
      where: { id, }
    });
  }

  async update(id: string, updateLocationDto: Prisma.LocationUpdateInput) {
    return await this.prisma.location.update({
      where: { id, },
      data: { ...updateLocationDto }
    });
  }

  async remove(id: string) {
    return await this.prisma.location.delete({ where: { id, } });
  }
}
