import { Injectable } from '@nestjs/common';
import { CreateCraftingDto } from './dto/create-crafting.dto';
import { UpdateCraftingDto } from './dto/update-crafting.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CraftingService {
  constructor(private readonly httpService: HttpService) { }
  create(createCraftingDto: CreateCraftingDto) {
    return 'This action adds a new crafting';
  }

  async findAll() {
    let map = []
    const url = `https://api.mozambiquehe.re/crafting?auth=5db383ed2423f11e969f404a25ba7d53`
    const { status, data } = await this.httpService.get(url).toPromise()
    if (status === 200) {
      map = data
    }
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} crafting`;
  }

  update(id: number, updateCraftingDto: UpdateCraftingDto) {
    return `This action updates a #${id} crafting`;
  }

  remove(id: number) {
    return `This action removes a #${id} crafting`;
  }
}
