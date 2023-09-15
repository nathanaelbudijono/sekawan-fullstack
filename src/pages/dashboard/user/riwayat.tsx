import * as React from "react";

import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Footer from "@/modules/footer";
import useForm from "@/lib/get-form";
import Table from "@/modules/user/riwayat";
import SearchHeader from "@/modules/user/search-header";
import Seo from "@/components/core/seo";

export default function Riwayat() {
  const { formFilter, search, setSearch } = useForm();

  return (
    <main>
      <Seo
        title="Riwayat Pengajuan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacinia mi."
      />
      <Navbar />
      <Layout className="flex flex-col h-screen">
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
