import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Le titre est requis' })
  @IsString({ message: 'Le titre doit être une chaîne de caractère' })
  title: string;

  @IsOptional()
  @IsString({ message: 'La description doit être une chaîne de caractère' })
  description: string;

  @IsOptional()
  @IsEnum(['todo', 'in_progress', 'done'], {
    message: 'Le status est invalide',
  })
  status: 'todo' | 'in_progress' | 'done';

  @IsNotEmpty({ message: "L'utilisateur est requis" })
  @IsInt({ message: "L'ID de l'utilisateur doit être un nombre" })
  userId: number;
}
