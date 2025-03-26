import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ParticipantService {
  constructor(private readonly prisma: PrismaService) {}

  async addParticipant(conversationId: string, userId: string) {
    return this.prisma.conversationParticipant.create({
      data: {
        userId,
        conversationId,
      },
    });
  }

  async removeParticipant(conversationId: string, userId: string) {
    return this.prisma.conversationParticipant.delete({
      where: {
        conversationId_userId: {
          conversationId,
          userId,
        },
      },
    });
  }
}

