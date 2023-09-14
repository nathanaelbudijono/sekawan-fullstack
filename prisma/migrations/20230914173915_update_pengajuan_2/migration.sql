/*
  Warnings:

  - Changed the type of `PilihanKendaraan` on the `Pengajuan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pengajuan" DROP COLUMN "PilihanKendaraan",
ADD COLUMN     "PilihanKendaraan" TEXT NOT NULL;
