import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { ListingService } from './listing.service';
import { Prisma } from '@prisma/client';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('listing')
export class ListingController {
  constructor(
    private readonly listingService: ListingService,
    private readonly cloudinaryService: CloudinaryService) { }

  @Post()
  @UseInterceptors(FilesInterceptor('images[]', 5))
  async create(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() createListingDto: Prisma.ListingCreateInput) {
    try {
      console.log("putain file: ", files)
      console.log('Données reçues :', createListingDto);
      const imageUrls = await Promise.all(
        files.map(async (file) => {
          const uploadedImage = await this.cloudinaryService.uploadFile(file);
          return uploadedImage.secure_url;
        })
      );

      const listingData = {
        ...createListingDto,
        images: imageUrls,
      };

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
