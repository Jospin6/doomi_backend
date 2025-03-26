import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { MessageService } from '../message/message.service';

@Controller('conversations')
export class ConversationController {
  constructor(
    private readonly conversationService: ConversationService,
    private readonly messageService: MessageService,
  ) {}

  @Post()
  async createConversation(
    @Body('isGroup') isGroup: boolean,
    @Body('name') name: string,
    @Body('userIds') userIds: string[],
  ) {
    return this.conversationService.createConversation(isGroup, userIds, name);
  }

  @Get(':id')
  async getConversation(@Param('id') id: string) {
    return this.conversationService.getConversationById(id);
  }

  @Get('user/:userId')
  async getConversationsByUserId(@Param('userId') userId: string) {
    return this.conversationService.getConversationsByUserId(userId);
  }

  @Post(':conversationId/messages')
  async sendMessage(
    @Param('conversationId') conversationId: string,
    @Body('content') content: string,
    @Body('senderId') senderId: string,
  ) {
    return this.messageService.sendMessage(content, senderId, conversationId);
  }
}

