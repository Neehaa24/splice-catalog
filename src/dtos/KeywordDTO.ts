import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class KeywordDTO {
  @IsString() @IsNotEmpty() @MaxLength(200)
  name!: string;

  @IsString() @IsOptional()
  description?: string;
}
