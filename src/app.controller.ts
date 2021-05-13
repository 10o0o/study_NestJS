import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DynamicService } from './dynamic/dynamic.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dynamicService: DynamicService,
  ) {}

  @Get('/testDynamic')
  testDynamic() {
    return this.dynamicService.sayHi();
  }
}
