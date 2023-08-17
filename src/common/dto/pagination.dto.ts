import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class PaginationDto {

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?: number

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  sortBy?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  sortOrder?: string
}