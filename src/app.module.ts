import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitsModule } from './units/units.module';
import { TestModule } from './test/test.module';
import { DynamicModuleTest } from './dynamic/dynamic.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('units');
  }
}
