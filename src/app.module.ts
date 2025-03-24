import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { BusinessProfileModule } from './business-profile/business-profile.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, LocationModule, BusinessProfileModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
