import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MessageService {
    constructor(private readonly prisma: PrismaService) { }

    async sendMessage(content: string, senderId: string, conversationId: string) {
        return this.prisma.message.create({
            data: {
                content,
                senderId,
                conversationId,
                sentAt: new Date(),
            },
        });
    }

    async getMessagesByConversationId(conversationId: string) {
        return this.prisma.message.findMany({
            where: { conversationId },
            orderBy: { sentAt: 'asc' },
        });
    }

    async markMessagesAsRead(conversationId: string, userId: string) {
        return this.prisma.message.updateMany({
            where: {
                conversationId,
                senderId: { not: userId },
                isRead: false,
            },
            data: { isRead: true },
        });
    }
}

