import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService],
  exports: [TestModule],
})
export class TestModule {}
