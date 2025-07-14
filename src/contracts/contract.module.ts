import { PrismaModule } from 'src/prisma/prisma.module';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [ContractController],
  providers: [ContractService, PrismaService, JwtService],
})
export class ContractModule {}
