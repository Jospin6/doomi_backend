import { Module } from '@nestjs/common';
import { BusinessProfileService } from './business-profile.service';
import { BusinessProfileController } from './business-profile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  exports: [PrismaModule],
  controllers: [BusinessProfileController],
  providers: [BusinessProfileService],
})
export class BusinessProfileModule {}
