import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private readonly httpService: HttpService) { }
  create(createNewsDto: CreateNewsDto) {
    return 'This action adds a new news';
  }

  async findAll() {
    let news = []
    const url = `https://api.mozambiquehe.re/news?auth=5db383ed2423f11e969f404a25ba7d53&lang=zh-TW`
    const { status, data } = await this.httpService.get(url).toPromise()
    if (status === 200) {
      news = data
    }
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} news`;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
