import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ListingService } from './listing.service';
import { Prisma } from '@prisma/client';
import { multerOptions } from "../common/multer.config";

@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) { }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: "images", maxCount: 5 }], multerOptions))
  create(
    @UploadedFiles() files: { images?: Array<Express.Multer.File> },
    @Body() createListingDto: Prisma.ListingCreateInput) {
    try {
      if (!files || !files.images || files.images.length === 0) {
        return { message: "No images uploaded" };
      }

      const imageUrls = files.images.map((file) => file.path);

      createListingDto.images = imageUrls;

      return this.listingService.create(createListingDto);
    } catch (error) {
      console.error(error);
      throw new Error("Image upload failed");
    }
  }

  @Get()
  findAll(@Query('locationId') locationId?: string) {
    return this.listingService.findAll(locationId);
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
