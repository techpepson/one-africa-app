/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { AuthDto } from 'src/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async registerUserByEmail(payload: AuthDto) {
    // Check if user already exists
    const userExists = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (userExists) {
      throw new ConflictException('User already exists.');
    }
    // Hash password
    const hashedPassword = await argon2.hash(payload.password);
    // Create user
    const user = await this.prisma.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
        userType: payload.userType,
        contractorId: `user${Date.now()}`,
      },
    });
    // Generate JWT
    const token = await this.signJwt(user.id, user.email, user.userType);
    return {
      message: 'User registration successful',
      access_token: token,
    };
  }

  async login(payload: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const valid = await argon2.verify(user.password, payload.password);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (user.userType !== payload.userType) {
      throw new UnauthorizedException('Invalid user type');
    }
    const token = await this.signJwt(user.id, user.email, user.userType);
    return { access_token: token };
  }

  async signJwt(userId: number, email: string, userType: string) {
    const payload = { sub: userId, email, userType };
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });
    return this.jwtService.signAsync({ email: user?.email, id: user?.id });
  }
}
