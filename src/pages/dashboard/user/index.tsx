import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import UnstyledLink from "@/components/links/unstyled-link";

import { AiOutlineHistory } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

import clsx from "clsx";
import Footer from "@/modules/footer";

type User = {
  username: string;
  role: string;
};

export default function User({ user }: { user: User }) {
  return (
    <main>
      <Navbar />
      <Layout className="flex h-[80vh] flex-col">
        <Typography variant="h4">Welcome {user?.username}</Typography>
        <section className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
          {Links?.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                className={clsx(
                  "bg-orange-100 w-full h-[20vh]",
                  "flex items-center justify-center text-center",
                  "rounded-sm shadow-sm",
                  "hover:scale-105",
                  "transition-all duration-200 ease-in-out"
                )}
              >
                <UnstyledLink href={item?.link}>
                  <Icon icon={icons[index]} className="text-7xl text-black" />
                  <Typography
                    variant="small"
                    className="bg-blue-200 px-2 py-1 rounded-sm mt-3"
                  >
                    {item?.title}
                  </Typography>
                </UnstyledLink>
              </div>
            );
          })}
        </section>
      </Layout>
      <Footer />
    </main>
  );
}
const icons = [AiOutlineHistory, BsTruck];

const Links = [
  {
    title: "Pengajuan",
    link: "/dashboard/user/pengajuan",
  },
  {
    title: "Riwayat",
    link: "/dashboard/user/riwayat",
  },
];

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
