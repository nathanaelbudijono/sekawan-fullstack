import * as React from "react";

import Layout from "@/components/core/layout";
import { getAdmin } from "@/lib/check/check-admin";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import { GetServerSidePropsContext } from "next";
import getKendaraan from "@/lib/get-kendaraan";
import Typography from "@/components/core/typography";

export default function Kendaraan() {
  const kendaraan2 = getKendaraan();
  return (
    <main>
      <Navbar />
      <Layout className="h-[80vh] flex flex-col">
        <Typography variant="h4">Kendaraan tersedia</Typography>
        <section className="grid grid-cols-2 gap-5">
          {kendaraan2?.rows?.map((item) => {
            return (
              <div className="bg-red-200 w-full px-3 py-2 rounded-sm shadow-sm">
                <Typography variant="p">Mobil {item?.jenis}</Typography>
                <Typography variant="small" className="mt-2">
                  Keterangan
                </Typography>
                <div className="flex flex-col gap-1 mt-2">
                  <Typography variant="small">{item?.plat}</Typography>
                  <Typography variant="small">
                    Service berikutnya {item?.Service}
                  </Typography>
                  <Typography variant="small">Jenis BBM {item?.BBM}</Typography>
                  <Typography variant="small">Driver {item?.driver}</Typography>
                </div>
              </div>
            );
          })}
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getAdmin(ctx);
}
