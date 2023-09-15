import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export default async function handleForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.token as string;

  switch (req.method) {
    case "GET":
      try {
        if (token) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
            {},
            async (err, decodedToken) => {
              if (err) {
                res.status(400).json({ message: "Credential not found" });
              } else {
                const rows = await prisma.pengajuan.findMany({
                  orderBy: { id: "desc" },
                });
                return res.status(200).json({ rows });
              }
            }
          );
        } else {
          console.log("no token");
        }
      } catch (err) {
        console.log(err);
      }
  }
}
