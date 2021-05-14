import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('사용자 정의 에러 발생!', HttpStatus.FORBIDDEN);
  }
}
