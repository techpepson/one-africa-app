import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [AuthService, PrismaService, JwtService],
})
export class AuthModule {}
