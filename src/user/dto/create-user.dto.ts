import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Le nom est requis' })
  name: string;
  @IsEmail({}, { message: "L'adresse email n'est pas valide" })
  @IsNotEmpty({ message: "L'adresse email est requis" })
  email: string;
  @IsNotEmpty({ message: 'Le mot de passe est requis' })
  password: string;
}
