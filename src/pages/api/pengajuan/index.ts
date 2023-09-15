import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import formidable from "formidable";

interface DecodedToken {
  id: number;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

type ParsedData =
  | {
      fields: formidable.Fields;
      files: formidable.Files;
    }
  | {
      err: any;
    };

const getFormData = async (req: NextApiRequest) => {
  const data: ParsedData = await new Promise((resolve, reject) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
  return data;
};

export default async function handleForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.token as string;

  switch (req.method) {
    case "POST":
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
                const { id } = decodedToken as DecodedToken;
                const data = await getFormData(req);
                if ("err" in data) {
                  res.status(400).json({ message: "Error" });
                } else {
                  const Laporan = await prisma.pengajuan.create({
                    data: {
                      namaPengaju: data.fields.name[0] as string,
                      kotaAsal: data.fields.kotaasal[0] as string,
                      kotaTujuan: data.fields.kotatujuan[0] as string,
                      kendaraanId: parseInt(data.fields.kendaraan[0]) as number,
                      keterangan: data.fields.keterangan[0] as string,
                      tanggal: data.fields.date[0] as string,
                      status: "Diterima",
                      usersUserid: id,
                    },
                  });

                  res.status(200).json({ Laporan });
                }
              }
            }
          );
        } else {
          console.log("no token");
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
