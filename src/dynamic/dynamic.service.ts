import { Inject, Injectable } from '@nestjs/common';
import { SimpleOption } from './simple.interface';

@Injectable()
export class DynamicService {
  constructor(@Inject('Name') private readonly options: SimpleOption) {
    console.log(options);
  }

  sayHi() {
    return 'Hi';
  }
}
