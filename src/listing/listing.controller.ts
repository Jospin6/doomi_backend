import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListingService } from './listing.service';
import { Prisma } from '@prisma/client';

@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post()
  create(@Body() createListingDto: Prisma.ListingCreateInput) {
    return this.listingService.create(createListingDto);
  }

  @Get()
  findAll() {
    return this.listingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListingDto: Prisma.ListingUpdateInput) {
    return this.listingService.update(id, updateListingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listingService.remove(id);
  }
}
