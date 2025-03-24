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
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { ListingModule } from './listing/listing.module';
import { BoostModule } from './boost/boost.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, LocationModule, BusinessProfileModule, SubscriptionModule, CategoryModule, SubCategoryModule, ListingModule, BoostModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
