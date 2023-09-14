import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

export default function User() {
  return (
    <main>
      <h1>user page</h1>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
