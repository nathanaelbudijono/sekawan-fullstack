/*
  Warnings:

  - Added the required column `PilihanKendaraan` to the `Pengajuan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengajuan" ADD COLUMN     "PilihanKendaraan" "TipeKendaraan" NOT NULL;
