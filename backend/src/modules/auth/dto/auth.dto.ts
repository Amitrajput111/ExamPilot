import { Role } from '@prisma/client';

export class AuthRegisterDto {
  email!: string;
  password!: string;
  name!: string;
  role?: Role;
}

export class AuthLoginDto {
  email!: string;
  password!: string;
}
