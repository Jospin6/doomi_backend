import { Module } from '@nestjs/common';
import { BoostService } from './boost.service';
import { BoostController } from './boost.controller';

@Module({
  controllers: [BoostController],
  providers: [BoostService],
})
export class BoostModule {}
