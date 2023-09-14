import { getUser } from "@/lib/check/check-user";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";

export default function User() {
  return (
    <main>
      <Navbar />
      <h1>user page</h1>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
