// http://localhost:3000/api/register/user
// import prisma from "@/lib/prisma";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handleRegister(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { username, password } = req.body;
//   console.log(req.body);
//   switch (req.method) {
//     case "POST":
//       try {
//         const user = await prisma.users.create({
//           data: {
//             username: username,
//             password: password,
//           },
//         });
//         return res.status(200).json({ user });
//       } catch (err) {
//         res.status(500).json({ message: "Something went wrong" });
//       }
//   }
// }
