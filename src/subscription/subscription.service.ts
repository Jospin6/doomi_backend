import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubscriptionService {
  constructor (private readonly prisma: PrismaService) {}
  async create(createSubscriptionDto: Prisma.SubscriptionCreateInput) {
    return await this.prisma.subscription.create({data: {...createSubscriptionDto}});
  }

  async findAll() {
    return await this.prisma.subscription.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.subscription.findUnique({where: {id,}});
  }

  async update(id: string, updateSubscriptionDto: Prisma.SubscriptionUpdateInput) {
    return await this.prisma.subscription.update({
      where: {id,},
      data: {...updateSubscriptionDto}
    });
  }

  async remove(id: string) {
    return await this.prisma.subscription.delete({where: {id,}});
  }
}
