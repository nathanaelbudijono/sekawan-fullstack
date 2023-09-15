import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

interface Admin {
  username: string;
  password: string;
  userid: number;
  role: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  switch (req.method) {
    case "POST":
      try {
        const resUser: Admin | null = await prisma.admin.findFirst({
          where: { username: username },
        });
        if (resUser) {
          if (resUser.password === password) {
            try {
              const token = await new Promise((resolve, reject) => {
                jwt.sign(
                  { username, id: resUser.userid, role: resUser.role },
                  process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
                  {},
                  (err, token) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(token);
                  }
                );
              });
              const serializedData = serialize("token", JSON.stringify(token), {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
              });
              res.setHeader("Set-Cookie", serializedData);
              res.status(200).json({ token });
            } catch (err) {
              console.log(err);
            }
          } else {
            res
              .status(404)
              .json({ message: "username/password is incorrect." });
          }
        } else {
          res.status(404).json({ message: "User not found." });
        }
      } catch (err) {
        res.status(404).json({ message: "Internal server error." });
      }
      break;
    case "GET":
      try {
        const token = req.cookies.token as string;
        if (token) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
            {},
            (err, token) => {
              if (err) {
                res.status(400).json({ message: "Credential not found" });
              } else {
                res.json(token);
              }
            }
          );
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (err) {
        res.status(404).json({ message: "Internal server error." });
      }
      break;
  }
}
