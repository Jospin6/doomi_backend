import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubCategoryService {
  constructor (private readonly prisma: PrismaService) {}
  async create(createSubCategoryDto: Prisma.SubCategoryCreateInput) {
    return await this.prisma.subCategory.create({
      data: {...createSubCategoryDto}
    });
  }

  async findAll() {
    return await this.prisma.subCategory.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.subCategory.findUnique({where: {id,}});
  }

  async update(id: string, updateSubCategoryDto: Prisma.SubCategoryUpdateInput) {
    return await this.prisma.subCategory.update({
      where: {id,},
      data: {...updateSubCategoryDto}
    });
  }

  async remove(id: string) {
    return await this.prisma.subCategory.delete({where: {id,}});
  }
}
