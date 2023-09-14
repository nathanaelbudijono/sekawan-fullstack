-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "TipeBBM" AS ENUM ('Solar', 'Pertalite', 'Pertamax');

-- CreateEnum
CREATE TYPE "TipeKendaraan" AS ENUM ('Truck', 'PickUp', 'Container', 'Box');

-- CreateEnum
CREATE TYPE "StatusPengajuan" AS ENUM ('Diterima', 'Diproses', 'Disetujui', 'Ditolak');

-- CreateTable
CREATE TABLE "Users" (
    "userid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Kendaraan" (
    "id" SERIAL NOT NULL,
    "jenis" "TipeKendaraan" NOT NULL,
    "plat" TEXT NOT NULL,
    "Service" TEXT NOT NULL,
    "BBM" "TipeBBM" NOT NULL,

    CONSTRAINT "Kendaraan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengajuan" (
    "id" SERIAL NOT NULL,
    "usersUserid" INTEGER NOT NULL,
    "tanggal" TEXT NOT NULL,
    "status" "StatusPengajuan" NOT NULL,
    "kendaraanId" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL,

    CONSTRAINT "Pengajuan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pengajuan" ADD CONSTRAINT "Pengajuan_usersUserid_fkey" FOREIGN KEY ("usersUserid") REFERENCES "Users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pengajuan" ADD CONSTRAINT "Pengajuan_kendaraanId_fkey" FOREIGN KEY ("kendaraanId") REFERENCES "Kendaraan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
