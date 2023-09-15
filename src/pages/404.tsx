import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import ButtonLink from "@/components/links/button-links";

export default function Notfound() {
  return (
    <Layout className="h-screen first-line:gap-2 items-center justify-center text-center flex flex-col gap-2">
      <Typography variant="p">Halaman tidak ditemukan</Typography>
      <ButtonLink href="/" variant="primary">
        Return Home
      </ButtonLink>
    </Layout>
  );
}
