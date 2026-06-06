import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { AuthLoginDto, AuthRegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: AuthRegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password, // In production, bcrypt hash is used
        name: dto.name,
        role: dto.role || 'STUDENT',
      },
    });
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      accessToken: 'mock-jwt-token-response-' + user.id,
    };
  }

  async login(dto: AuthLoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user || user.password !== dto.password) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      accessToken: 'mock-jwt-token-response-' + user.id,
    };
  }
}
