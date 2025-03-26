import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConversationService } from './conversation.service';
import { MessageService } from '../message/message.service';
import { ConversationController } from './conversation.controller';

@Module({
  providers: [PrismaService, ConversationService, MessageService],
  controllers: [ConversationController],
})
export class ConversationModule {}
