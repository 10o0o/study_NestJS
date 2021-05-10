import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { unitDto } from './dto/unitDto';

@Controller('units')
export class UnitsController {
  @Get()
  findAll(@Req() req: Request): string {
    return 'This action returns all units';
  }

  @Post('/create')
  create(@Body() body: unitDto): string {
    return Object.assign({
      name: body.name,
      damage: body.damage,
      health: body.health,
    });
  }
}
