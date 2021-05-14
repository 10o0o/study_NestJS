import { IsInt, IsString } from 'class-validator';

export class unitDto {
  @IsString()
  name: string;

  @IsInt()
  health: number;

  @IsInt()
  damage: number;
}
