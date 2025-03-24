import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoriteService {
  constructor (private readonly prisma: PrismaService) {}
  async create(createFavoriteDto: Prisma.FavoriteCreateInput) {
    return await this.prisma.favorite.create({data: {...createFavoriteDto}});
  }

  async findAll() {
    return await this.prisma.favorite.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.favorite.findUnique({
      where: {id,}
    });
  }

  async update(id: string, updateFavoriteDto: Prisma.FavoriteUpdateInput) {
    return await this.prisma.favorite.update({
      where: {id,},
      data: {...updateFavoriteDto}
    });
  }

  async remove(id: string) {
    return await this.prisma.favorite.delete({where: {id}});
  }
}
