-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "contractReference" TEXT,
    "serviceDescription" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "workPeriod" TEXT,
    "completionDate" TIMESTAMP(3),
    "bankName" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "bankBranch" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "swiftCode" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "project" TEXT,
    "advance" DECIMAL(65,30),
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
