import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export default async function KendaraanHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const token = req.cookies.token as string;
      try {
        if (token) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
            {},
            async (err, decoded) => {
              if (err) {
                throw err;
              } else {
                const rows = await prisma.kendaraan.findMany();
                return res.status(200).json({ rows });
              }
            }
          );
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      } catch {
        res.status(404).json({ message: "Internal server error" });
      }
      break;
  }
}
