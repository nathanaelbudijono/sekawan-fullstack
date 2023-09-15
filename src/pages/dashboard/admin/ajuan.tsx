import Layout from "@/components/core/layout";
import { getAdmin } from "@/lib/check/check-admin";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

export default function Ajuan() {
  return (
    <main>
      <Navbar />
      <Layout className="h-[80vh] flex flex-col">
        <h1>Ajuan tersedia</h1>
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getAdmin(ctx);
}
