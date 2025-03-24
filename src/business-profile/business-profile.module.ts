import { Module } from '@nestjs/common';
import { BusinessProfileService } from './business-profile.service';
import { BusinessProfileController } from './business-profile.controller';

@Module({
  controllers: [BusinessProfileController],
  providers: [BusinessProfileService],
})
export class BusinessProfileModule {}
