import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoostService } from './boost.service';
import { Prisma } from '@prisma/client';

@Controller('boost')
export class BoostController {
  constructor(private readonly boostService: BoostService) {}

  @Post()
  create(@Body() createBoostDto: Prisma.BoostCreateInput) {
    return this.boostService.create(createBoostDto);
  }

  @Get()
  findAll() {
    return this.boostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boostService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoostDto: Prisma.BoostUpdateInput) {
    return this.boostService.update(id, updateBoostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boostService.remove(id);
  }
}
