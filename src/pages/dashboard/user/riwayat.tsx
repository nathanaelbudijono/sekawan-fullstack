import * as React from "react";

import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import Footer from "@/modules/footer";
import useForm from "@/lib/get-form";

export default function Riwayat() {
  const forms = useForm();
  console.log(forms);
  return (
    <main>
      <Navbar />
      <Layout className="flex flex-col h-screen">
        <Typography variant="h4">Riwayat & Status Pengajuan</Typography>
        {forms?.rows?.map((item) => (
          <main>
            <p>{item?.kotaAsal}</p>
          </main>
        ))}
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
