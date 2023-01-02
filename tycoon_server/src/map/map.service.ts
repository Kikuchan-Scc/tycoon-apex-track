import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';

@Injectable()
export class MapService {
  constructor(private readonly httpService: HttpService) { }
  create(createMapDto: CreateMapDto) {
    return 'This action adds a new map';
  }

  async findAll() {
    let map = []
    const url = `https://api.mozambiquehe.re/maprotation?auth=5db383ed2423f11e969f404a25ba7d53&version=2`
    const { status, data } = await this.httpService.get(url).toPromise()
    if (status === 200) {
      map = data
    }
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} map`;
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    return `This action updates a #${id} map`;
  }

  remove(id: number) {
    return `This action removes a #${id} map`;
  }
}
