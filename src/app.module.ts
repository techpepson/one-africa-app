import { PrismaModule } from './prisma/prisma.module';
import { ContractModule } from './contracts/contract.module';
import { ContractController } from './contracts/contract.controller';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractService } from './contracts/contract.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, ContractModule, AuthModule],
  controllers: [
    ContractController,
    AuthController,
    AppController,
    AuthController,
  ],
  providers: [
    AppService,
    ContractService,
    PrismaService,
    AuthService,
    JwtService,
  ],
})
export class AppModule {}
