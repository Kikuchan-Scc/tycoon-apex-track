import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PlayerService {
  constructor(private readonly httpService: HttpService) { }
  create(createPlayerDto: CreatePlayerDto) {
    return 'This action adds a new player';
  }

  findAll() {
    return `This action returns all player`;
  }

  async findOne(id: string, plat: string) {
    let uid = []
    const url = `https://api.mozambiquehe.re/bridge?auth=5db383ed2423f11e969f404a25ba7d53&uid=${id}&platform=${plat}&enableClubsBeta=true`
    const { status, data } = await this.httpService.get(url).toPromise();
    if (status === 200) {
      uid = data
    }
    return data
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
