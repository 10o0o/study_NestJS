import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarcraftController } from './starcraft/starcraft.controller';
import { StartcraftModule } from './startcraft/startcraft.module';
import { UnitsController } from './units/units.controller';

@Module({
  imports: [StartcraftModule],
  controllers: [AppController, StarcraftController, UnitsController],
  providers: [AppService],
})
export class AppModule {}
