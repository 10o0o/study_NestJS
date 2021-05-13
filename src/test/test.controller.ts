import { Controller, Get } from '@nestjs/common';
import { UnitsService } from 'src/units/units.service';

@Controller('test')
export class TestController {
  constructor(private unitsService: UnitsService) {}

  @Get()
  test(): any {
    return this.unitsService.findAll();
  }
}
