import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConversationService {
    constructor(private readonly prisma: PrismaService) { }

    async createConversation(isGroup: boolean, userIds: string[], name?: string) {
        const conversation = await this.prisma.conversation.create({
            data: {
                isGroup,
                name,
                users: {
                    create: userIds.map(userId => ({
                        userId,
                        joinedAt: new Date(),
                    })),
                },
            },
        });
        return conversation;
    }

    async getConversationById(id: string) {
        return this.prisma.conversation.findUnique({
            where: { id },
            include: {
                users: true,
                messages: true,
            },
        });
    }

    async getConversationsByUserId(userId: string) {
        return this.prisma.conversation.findMany({
            where: {
                users: {
                    some: {
                        userId,
                    },
                },
            },
            include: {
                users: true,
                messages: true,
            },
        });
    }
}

