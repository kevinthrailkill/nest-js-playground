import { IsString, isString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee.' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of a coffee.' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ description: 'The flavors of a coffee.' })
  @IsString({ each: true })
  readonly flavors: string[];
}
