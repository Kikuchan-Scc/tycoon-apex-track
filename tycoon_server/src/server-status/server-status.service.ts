import { Injectable } from '@nestjs/common';
import { CreateServerStatusDto } from './dto/create-server-status.dto';
import { UpdateServerStatusDto } from './dto/update-server-status.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ServerStatusService {
  constructor(private readonly httpService: HttpService) { }
  create(createServerStatusDto: CreateServerStatusDto) {
    return 'This action adds a new serverStatus';
  }

  async findAll() {
    let map = []
    const url = `https://api.mozambiquehe.re/servers?auth=5db383ed2423f11e969f404a25ba7d53`
    const { status, data } = await this.httpService.get(url).toPromise()
    if (status === 200) {
      map = data
    }
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} serverStatus`;
  }

  update(id: number, updateServerStatusDto: UpdateServerStatusDto) {
    return `This action updates a #${id} serverStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} serverStatus`;
  }
}
