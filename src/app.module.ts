import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsController } from './units/units.controller';
import { UnitsService } from './units/units.service';

@Module({
  controllers: [AppController, UnitsController],
  providers: [AppService, UnitsService],
})
export class AppModule {}
