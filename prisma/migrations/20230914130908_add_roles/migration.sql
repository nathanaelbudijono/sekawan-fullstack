/*
  Warnings:

  - The `role` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `driver` to the `Kendaraan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kendaraan" ADD COLUMN     "driver" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "role",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER';

-- DropEnum
DROP TYPE "UserRoles";

-- CreateTable
CREATE TABLE "Admin" (
    "userid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN',

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("userid")
);
