-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agency" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditorGeneral" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "AuditorGeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinanceMinistry" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "FinanceMinistry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contractor_id_key" ON "Contractor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Agency_id_key" ON "Agency"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AuditorGeneral_id_key" ON "AuditorGeneral"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FinanceMinistry_id_key" ON "FinanceMinistry"("id");
