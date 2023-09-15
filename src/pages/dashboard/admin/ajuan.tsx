import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import { getAdmin } from "@/lib/check/check-admin";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

export default function Ajuan() {
  return (
    <main>
      <Navbar />
      <Layout className="h-[80vh] flex flex-col">
        <Typography variant="h4">Kotak masuk</Typography>
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getAdmin(ctx);
}
