/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateInvoiceDto {
  @IsString()
  invoiceNumber: string;

  @IsString()
  agency: string;

  @IsOptional()
  @IsString()
  contractReference?: string;

  @IsString()
  serviceDescription: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  workPeriod?: string;

  @IsOptional()
  @IsDateString()
  completionDate?: string;

  @IsString()
  bankName: string;

  @IsString()
  accountName: string;

  @IsString()
  accountNumber: string;

  @IsString()
  bankBranch: string;

  @IsString()
  branchCode: string;

  @IsString()
  swiftCode: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  project?: string;

  @IsOptional()
  @IsNumber()
  advance?: number;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsNumber()
  userId: number;
}
