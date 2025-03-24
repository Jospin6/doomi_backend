import { Injectable } from '@nestjs/common';
import { CreateBusinessProfileDto } from './dto/create-business-profile.dto';
import { UpdateBusinessProfileDto } from './dto/update-business-profile.dto';

@Injectable()
export class BusinessProfileService {
  create(createBusinessProfileDto: CreateBusinessProfileDto) {
    return 'This action adds a new businessProfile';
  }

  findAll() {
    return `This action returns all businessProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessProfile`;
  }

  update(id: number, updateBusinessProfileDto: UpdateBusinessProfileDto) {
    return `This action updates a #${id} businessProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessProfile`;
  }
}
