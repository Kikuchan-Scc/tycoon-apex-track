import { Injectable } from '@nestjs/common';
import { CreateUidDto } from './dto/create-uid.dto';
import { UpdateUidDto } from './dto/update-uid.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UidService {
  constructor(private readonly httpService: HttpService) { }
  create(createUidDto: CreateUidDto) {
    return 'This action adds a new uid';
  }

  async findOne(id: string, plat: string) {
    let uid = []
    const url = `https://api.mozambiquehe.re/nametouid?auth=5db383ed2423f11e969f404a25ba7d53&player=${id}&platform=${plat}`
    const { status, data } = await this.httpService.get(url).toPromise();
    if (status === 200) {
      uid = data
    }
    return data
  }

  update(id: number, updateUidDto: UpdateUidDto) {
    return `This action updates a #${id} uid`;
  }

  remove(id: number) {
    return `This action removes a #${id} uid`;
  }
}
