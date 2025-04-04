import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}
  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: {id,}
    });
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: {id,},
      data: {...updateUserDto}
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({where: {id,}});
  }
}
