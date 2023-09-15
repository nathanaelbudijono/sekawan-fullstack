// pages/api/updateStatus.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { itemId, newStatus } = req.body;

      const updatedItem = await prisma.pengajuan.update({
        where: { id: itemId },
        data: {
          status: newStatus,
        },
      });

      res
        .status(200)
        .json({ message: "Status updated successfully", updatedItem });
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
