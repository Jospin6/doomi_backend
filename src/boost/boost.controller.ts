import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoostService } from './boost.service';
import { CreateBoostDto } from './dto/create-boost.dto';
import { UpdateBoostDto } from './dto/update-boost.dto';

@Controller('boost')
export class BoostController {
  constructor(private readonly boostService: BoostService) {}

  @Post()
  create(@Body() createBoostDto: CreateBoostDto) {
    return this.boostService.create(createBoostDto);
  }

  @Get()
  findAll() {
    return this.boostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoostDto: UpdateBoostDto) {
    return this.boostService.update(+id, updateBoostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boostService.remove(+id);
  }
}
