/* eslint-disable @typescript-eslint/no-unsafe-return */
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('contracts')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() dto: CreateInvoiceDto) {
    return this.contractService.createInvoice(dto);
  }

  @Get()
  async findAll() {
    return this.contractService.listInvoices();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contractService.getInvoiceById(Number(id));
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.contractService.listInvoicesByUser(Number(userId));
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.contractService.deleteInvoice(Number(id));
  }
}
