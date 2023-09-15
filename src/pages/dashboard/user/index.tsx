import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import UnstyledLink from "@/components/links/unstyled-link";
import Footer from "@/modules/footer";
import Seo from "@/components/core/seo";

import { AiOutlineHistory } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

import clsx from "clsx";

type User = {
  username: string;
  role: string;
};

export default function User({ user }: { user: User }) {
  return (
    <main>
      <Seo
        title="Dashboard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacinia mi."
      />
      <Navbar />
      <Layout className="flex h-[80vh] flex-col max-sm:h-full">
        <Typography variant="h4">Welcome {user?.username}</Typography>
        <section className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
          {Links?.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                className={clsx(
                  "bg-secondary-100 w-full h-[50vh]",
                  "flex items-center justify-center text-center",
                  "rounded-sm shadow-sm",
                  "hover:bg-secondary-300 hover:bg-opacity-50",
                  "transition-all duration-200 ease-in-out"
                )}
              >
                <UnstyledLink href={item?.link}>
                  <Icon
                    icon={icons[index]}
                    className="text-7xl text-black text-opacity-50"
                  />
                  <div className="w-full">
                    <Typography
                      variant="small"
                      className="bg-primary-100 p-2 rounded-sm mt-3 text-typography-100"
                    >
                      {item?.title}
                    </Typography>
                  </div>
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
const icons = [BsTruck, AiOutlineHistory];

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
