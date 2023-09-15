import * as React from "react";

import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import Footer from "@/modules/footer";
import useForm from "@/lib/get-form";
import Table from "@/modules/user/riwayat";
import SearchHeader from "@/modules/user/search-header";

export default function Riwayat() {
  const { formFilter, search, setSearch } = useForm();

  return (
    <main>
      <Navbar />
      <Layout className="flex flex-col h-screen">
        <Typography variant="h4">Riwayat & Status Pengajuan</Typography>
        <SearchHeader search={search} setSearch={setSearch} />
        <Table formFilter={formFilter} />
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
