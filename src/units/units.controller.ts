import { Body, Controller, Get, Post } from '@nestjs/common';
import { unitDto } from './dto/unitDto';
import { Unit } from './interfaces/unit.interface';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
  constructor(private unitsService: UnitsService) {}

  @Get()
  findAll(): Unit[] {
    return this.unitsService.findAll();
  }

  @Post('/create')
  create(@Body() body: unitDto) {
    this.unitsService.create(body);
  }
}
