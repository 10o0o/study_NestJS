import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';
import { TestModule } from './test/test.module';
import { DynamicModuleTest } from './dynamic/dynamic.module';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UnitsModule,
    TestModule,
    DynamicModuleTest.forRoot({
      yourName: 'JS',
    }),
  ],
  exports: [],
})
export class AppModule {}
