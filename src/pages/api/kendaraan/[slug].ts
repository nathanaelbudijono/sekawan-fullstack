import { NextApiResponse, NextApiRequest } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export default async function KendaraanHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const token = req.cookies.token as string;
        const id = req.query.slug as string;
        if (token) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
            {},
            async (err, decodedToken) => {
              if (err) {
                throw err;
              } else {
                const rows = await prisma.pengajuan.findUnique({
                  where: { id: parseInt(id) },
                  include: {
                    kendaraan: true,
                  },
                });
                return res.status(200).json({ rows });
              }
            }
          );
        } else {
          res.status(404).json({ message: "Not authorized." });
        }
      } catch {
        res.status(404).json({ message: "Internal server error." });
      }
      break;
  }
}
