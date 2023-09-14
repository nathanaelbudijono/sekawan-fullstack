import Breadcrumbs from "@/components/core/breadcrumb";
import Layout from "@/components/core/layout";
import { getUser } from "@/lib/check/check-user";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

export default function User() {
  return (
    <main>
      <Navbar />
      <Layout className="flex h-screen flex-col">
        <h1>user page</h1>
      </Layout>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
