import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import UnstyledLink from "@/components/links/unstyled-link";
import { getAdmin } from "@/lib/check/check-admin";
import { Admin } from "@/lib/slice/user-slices";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import clsx from "clsx";
import { GetServerSidePropsContext } from "next";

import { BsTruck } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

export default function Admin({ admin }: { admin: Admin }) {
  return (
    <main>
      <Navbar />
      <Layout className="h-[80vh] flex flex-col">
        <Typography variant="h4">Welcome {admin?.username}</Typography>
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

const icons = [IoNewspaperOutline, BsTruck];

const Links = [
  {
    title: "Ajuan",
    link: "/dashboard/admin/ajuan",
  },
  {
    title: "Kendaraan",
    link: "/dashboard/admin/kendaraan",
  },
];

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getAdmin(ctx);
}
