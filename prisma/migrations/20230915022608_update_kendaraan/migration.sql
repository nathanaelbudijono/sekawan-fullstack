/*
  Warnings:

  - You are about to drop the column `PilihanKendaraan` on the `Pengajuan` table. All the data in the column will be lost.
  - Added the required column `kendaraanId` to the `Pengajuan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengajuan" DROP COLUMN "PilihanKendaraan",
ADD COLUMN     "kendaraanId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pengajuan" ADD CONSTRAINT "Pengajuan_kendaraanId_fkey" FOREIGN KEY ("kendaraanId") REFERENCES "Kendaraan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
