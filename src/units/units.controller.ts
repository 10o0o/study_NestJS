import { Body, Controller, Get, Post } from '@nestjs/common';
import { unitDto } from './dto/unitDto';

@Controller('units')
export class UnitsController {
  @Get()
  findAll(): string {
    return 'This action returns all units';
  }

  @Post('/create')
  create(@Body() body: unitDto): unitDto {
    console.log(body.name);
    return Object.assign({
      name: body.name,
      damage: body.damage,
      health: body.health,
    });
  }
}
