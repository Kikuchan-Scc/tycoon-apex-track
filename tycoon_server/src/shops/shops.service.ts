import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ShopsService {
  constructor(private readonly httpService: HttpService) { }
  create(createShopDto: CreateShopDto) {
    return 'This action adds a new shop';
  }

  async findAll() {
    let map = []
    const url = `https://api.mozambiquehe.re/store?auth=5db383ed2423f11e969f404a25ba7d53`
    const { status, data } = await this.httpService.get(url).toPromise()
    if (status === 200) {
      map = data
    }
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} shop`;
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
