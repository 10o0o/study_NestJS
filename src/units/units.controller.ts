import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ForbiddenException } from 'src/exception/forbidden.exception';
import { AllExceptionsFilterFilter } from 'src/filter/all-exceptions-filter.filter';
import { unitDto } from './dto/unitDto';
import { Unit } from './interfaces/unit.interface';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
  constructor(private unitsService: UnitsService) {}

  @Get()
  findAll(): Unit[] {
    return this.unitsService.findAll();
  }

  @Get('/:name')
  async findOne(@Param('name') name: string) {
    const unit = await this.unitsService.findOne(name);

    if (!unit) throw new NotFoundException();
    else return unit;
  }

  @Post('/create')
  async create(@Body(new ValidationPipe()) body: unitDto) {
    console.log('파이프 통과');
    this.unitsService.create(body);
  }

  @Get('/error/:code')
  @UseFilters(new AllExceptionsFilterFilter())
  getError(@Param('code', ParseIntPipe) code: HttpStatus) {
    if (code >= 200 && code < 400) {
      console.log(typeof code);
      return 'status ok';
    } else if (code === 403) {
      console.log(code);
      throw new ForbiddenException();
    }
    // throw new HttpException('금지', HttpStatus.FORBIDDEN);
    // 그냥 에러 발생
    // async getError(): Promise<void> {
    //   throw new ForbiddenException();
  }
}
