import { Injectable, NotFoundException } from '@nestjs/common';
import { Unit } from './interfaces/unit.interface';

@Injectable()
export class UnitsService {
  private readonly units: Unit[] = [];

  create(unit: Unit) {
    this.units.push(unit);
  }

  findOne(name): Unit {
    for (const unit of this.units) {
      if (unit.name === name) return unit;
    }
  }

  findAll(): Unit[] {
    return this.units;
  }
}
