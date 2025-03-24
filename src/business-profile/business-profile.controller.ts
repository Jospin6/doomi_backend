import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessProfileService } from './business-profile.service';
import { Prisma } from '@prisma/client';

@Controller('business-profile')
export class BusinessProfileController {
  constructor(private readonly businessProfileService: BusinessProfileService) {}

  @Post()
  create(@Body() createBusinessProfileDto: Prisma.BusinessProfileCreateInput) {
    return this.businessProfileService.create(createBusinessProfileDto);
  }

  @Get()
  findAll() {
    return this.businessProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessProfileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessProfileDto: Prisma.BusinessProfileUpdateInput) {
    return this.businessProfileService.update(id, updateBusinessProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessProfileService.remove(id);
  }
}
