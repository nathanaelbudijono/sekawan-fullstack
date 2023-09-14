/*
  Warnings:

  - Added the required column `namaPengaju` to the `Pengajuan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pengajuan" ADD COLUMN     "namaPengaju" TEXT NOT NULL;
