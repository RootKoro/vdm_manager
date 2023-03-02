import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAcheteurDto } from '../dto/create-acheteur.dto'
import { UpdateAcheteurDto } from '../dto/update-acheteur.dto'
import { AcheteurService } from './acheteur.service';

@Controller('acheteur')
export class AcheteurController {
    constructor(private readonly acheteurService: AcheteurService) {}
    
    @Get()
    async index() {
        return await this.acheteurService.findAll();
    }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.acheteurService.findOne(id);
  }

  @Post()
  async create(@Body() createAcheteurDto: CreateAcheteurDto) {
    return await this.acheteurService.create(createAcheteurDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAcheteurDto: UpdateAcheteurDto) {
    return await this.acheteurService.update(id, updateAcheteurDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.acheteurService.delete(id);
  }
}
