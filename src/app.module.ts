import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsController } from './units/units.controller';

@Module({
  controllers: [AppController, UnitsController],
  providers: [AppService],
})
export class AppModule {}
