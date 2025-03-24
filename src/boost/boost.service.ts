import { Injectable } from '@nestjs/common';
import { CreateBoostDto } from './dto/create-boost.dto';
import { UpdateBoostDto } from './dto/update-boost.dto';

@Injectable()
export class BoostService {
  create(createBoostDto: CreateBoostDto) {
    return 'This action adds a new boost';
  }

  findAll() {
    return `This action returns all boost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boost`;
  }

  update(id: number, updateBoostDto: UpdateBoostDto) {
    return `This action updates a #${id} boost`;
  }

  remove(id: number) {
    return `This action removes a #${id} boost`;
  }
}
