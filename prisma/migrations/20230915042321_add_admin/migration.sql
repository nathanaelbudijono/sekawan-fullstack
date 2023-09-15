-- AlterTable
ALTER TABLE "Pengajuan" ADD COLUMN     "adminUserid" INTEGER;

-- AddForeignKey
ALTER TABLE "Pengajuan" ADD CONSTRAINT "Pengajuan_adminUserid_fkey" FOREIGN KEY ("adminUserid") REFERENCES "Admin"("userid") ON DELETE SET NULL ON UPDATE CASCADE;
