import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class StoreService {
  constructor(private readonly httpService: HttpService) { }
  create(createStoreDto: CreateStoreDto) {
    return 'This action adds a new store';
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
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
