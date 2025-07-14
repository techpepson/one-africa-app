/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Invoice } from '@prisma/client';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  async createInvoice(dto: CreateInvoiceDto): Promise<Invoice> {
    return await this.prisma.invoice.create({ data: dto });
  }

  async listInvoices(): Promise<Invoice[]> {
    return await this.prisma.invoice.findMany();
  }

  async getInvoiceById(id: number): Promise<Invoice> {
    const invoice = await this.prisma.invoice.findUnique({ where: { id } });
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }

  async listInvoicesByUser(userId: number): Promise<Invoice[]> {
    return await this.prisma.invoice.findMany({ where: { userId } });
  }

  async deleteInvoice(id: number): Promise<{ message: string }> {
    await this.prisma.invoice.delete({ where: { id } });
    return { message: 'Invoice deleted successfully' };
  }
}
