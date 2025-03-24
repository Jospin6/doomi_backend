import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoostService {
  constructor (private readonly prisma: PrismaService) {}
  async create(createBoostDto: Prisma.BoostCreateInput) {
    return await this.prisma.boost.create({data: {...createBoostDto}});
  }

  async findAll() {
    return await this.prisma.boost.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.boost.findUnique({where: {id,}});
  }

  async update(id: string, updateBoostDto: Prisma.BoostUpdateInput) {
    return await this.prisma.boost.update({
      where: {id,},
      data: {...updateBoostDto}
    });
  }

  async remove(id: string) {
    return await this.prisma.boost.delete({where: {id,}});
  }
}
