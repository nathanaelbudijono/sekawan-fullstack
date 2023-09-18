import Layout from "@/components/core/layout";
import Seo from "@/components/core/seo";
import Typography from "@/components/core/typography";
import UnstyledLink from "@/components/links/unstyled-link";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";

import clsx from "clsx";
import { GetServerSidePropsContext } from "next";
import { getAdmin } from "@/lib/check/check-admin";
import { Admin } from "@/lib/slice/user-slices";

import { BsTruck } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

export default function Admin({ admin }: { admin: Admin }) {
  return (
    <main>
      <Seo
        title="Dashboard Admin"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacinia mi."
      />
      <Navbar />
      <Layout className="h-[80vh] flex flex-col max-sm:h-full">
        <Typography variant="h4">Welcome {admin?.username}</Typography>
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
                key={index}
              >
                <UnstyledLink href={item?.link}>
                  <Icon
                    icon={icons[index]}
                    className="text-7xl text-black text-opacity-50"
                  />
                  <Typography
                    variant="small"
                    className="bg-primary-100 p-2 rounded-sm text-typography-100 mt-3"
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
