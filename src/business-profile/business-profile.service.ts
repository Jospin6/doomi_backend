import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BusinessProfileService {
  constructor (private readonly prisma: PrismaService) {}
  async create(createBusinessProfileDto: Prisma.BusinessProfileCreateInput) {
    return await this.prisma.businessProfile.create({
      data: {...createBusinessProfileDto}
    });
  }

  async findAll() {
    return await this.prisma.businessProfile.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.businessProfile.findUnique({where: {id,}});
  }

  async update(id: string, updateBusinessProfileDto: Prisma.BusinessProfileUpdateInput) {
    return await this.prisma.businessProfile.update({
      where: {id,},
      data: {...updateBusinessProfileDto}
    });
  }

  async remove(id: string) {
    return await this.prisma.businessProfile.delete({where: {id,}});
  }
}
