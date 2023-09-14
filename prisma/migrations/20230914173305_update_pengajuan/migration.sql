/*
  Warnings:

  - You are about to drop the column `kendaraanId` on the `Pengajuan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pengajuan" DROP CONSTRAINT "Pengajuan_kendaraanId_fkey";

-- AlterTable
ALTER TABLE "Pengajuan" DROP COLUMN "kendaraanId";
