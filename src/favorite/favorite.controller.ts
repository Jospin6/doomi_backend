import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { Prisma } from '@prisma/client';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  create(@Body() createFavoriteDto: Prisma.FavoriteCreateInput) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteDto: Prisma.FavoriteUpdateInput) {
    return this.favoriteService.update(id, updateFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(id);
  }
}
