import { getAdmin } from "@/lib/check/check-admin";
import { GetServerSidePropsContext } from "next";

export default function Admin() {
  return (
    <main>
      <h1>Admin page</h1>
    </main>
  );
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getAdmin(ctx);
}
