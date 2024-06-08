/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bairro` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inscricaoEstadual` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipio` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeRazaoSocial` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefoneFax` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cnpj" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "inscricaoEstadual" TEXT NOT NULL,
ADD COLUMN     "municipio" TEXT NOT NULL,
ADD COLUMN     "nomeRazaoSocial" TEXT NOT NULL,
ADD COLUMN     "telefoneFax" TEXT NOT NULL,
ADD COLUMN     "uf" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "nomeRazaoSocial" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "telefoneFax" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "inscricaoEstadual" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");
