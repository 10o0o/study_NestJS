import { DynamicModule, Module } from '@nestjs/common';
import { SimpleOption } from './simple.interface';
import { DynamicService } from './dynamic.service';

@Module({})
export class DynamicModuleTest {
  static forRoot(options: SimpleOption): DynamicModule {
    return {
      global: true,
      module: DynamicModuleTest,
      providers: [
        DynamicService,
        {
          provide: 'Name',
          useValue: options,
        },
      ],
      exports: [DynamicService],
    };
  }
}
