import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor (private readonly prisma: PrismaService) {}
  async create(createCategoryDto: Prisma.CategoryCreateInput) {
    return await this.prisma.category.create({data: {...createCategoryDto}});
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.category.findUnique({where: {id,}});
  }

  async update(id: string, updateCategoryDto: Prisma.CategoryUpdateInput) {
    return await this.prisma.category.update({
      where: {id,},
      data: {...updateCategoryDto}
    });
  }

  async remove(id: string) {
    return await this.prisma.category.delete({where: {id,}});
  }
}
