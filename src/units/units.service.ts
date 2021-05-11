import { Injectable } from '@nestjs/common';
import { Unit } from './interfaces/unit.interface';

@Injectable()
export class UnitsService {
  private readonly units: Unit[] = [];

  create(unit: Unit) {
    this.units.push(unit);
  }

  findAll(): Unit[] {
    return this.units;
  }
}
