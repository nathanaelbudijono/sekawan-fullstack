/*
  Warnings:

  - Added the required column `kotaAsal` to the `Pengajuan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kotaTujuan` to the `Pengajuan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengajuan" ADD COLUMN     "kotaAsal" TEXT NOT NULL,
ADD COLUMN     "kotaTujuan" TEXT NOT NULL;
