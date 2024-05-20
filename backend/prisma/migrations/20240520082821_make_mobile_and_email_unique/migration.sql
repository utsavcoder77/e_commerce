/*
  Warnings:

  - A unique constraint covering the columns `[mobile,email]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Client_mobile_email_key" ON "Client"("mobile", "email");
