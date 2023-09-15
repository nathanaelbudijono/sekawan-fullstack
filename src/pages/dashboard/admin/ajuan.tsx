import * as React from "react";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import Footer from "@/modules/footer";
import Navbar from "@/modules/navbar";
import SelectInput from "@/components/forms/select-input";
import Button from "@/components/buttons/button";
import axios from "axios";
import { apiUrl } from "@/constant/env";
import Seo from "@/components/core/seo";
import Table2 from "@/modules/admin/riwayat";

import useAdminForm from "@/lib/get-admin-form";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { getAdmin } from "@/lib/check/check-admin";
import { GetServerSidePropsContext } from "next";

type Inputs = {
  status: string;
};

const ItemComponent = ({ item }: any) => {
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(`${apiUrl}/pengajuan/update`, {
        newStatus: data.status,
        itemId: item.id,
      });

      if (response.status === 200) {
        console.log("Status updated successfully");
      } else {
        console.error("Error updating status:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div
      className="bg-red-200 w-full px-3 py-2 rounded-sm shadow-sm"
      key={item.id}
    >
      <div className="flex justify-between items-center">
        <Typography variant="p">{item?.namaPengaju}</Typography>
        <Typography variant="small">
          {item?.tanggal.substring(0, 10)}
        </Typography>
      </div>

      <div className="flex gap-1 mt-2 flex-col">
        <Typography variant="small">Kota asal : {item?.kotaAsal}</Typography>
        <Typography variant="small">
          Kota tujuan : {item?.kotaTujuan}
        </Typography>

        <Typography variant="small">Keterangan : {item?.keterangan}</Typography>
      </div>
      <div className="mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <SelectInput
              id="status"
              defaultInputValue={item.status}
              options={[
                { value: "Diterima", label: "Diterima" },
                {
                  label: "Diproses",
                  value: "Diproses",
                },
                {
                  label: "Disetujui",
                  value: "Disetujui",
                },
                {
                  label: "Ditolak",
                  value: "Ditolak",
                },
              ]}
            />
            <Button
              variant="primary"
              size="sm"
              className="mt-2 text-xs w-full"
              type="submit"
            >
              Update Status
            </Button>
          </FormProvider>
        </form>
      </div>
    </div>
  );
};

export default function Ajuan() {
  const { adminforms } = useAdminForm();

  return (
    <main>
      <Seo
        title="Ajuan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacinia mi."
      />
      <Navbar />
      <Layout className="h-[80vh] flex flex-col max-sm:h-full">
        <Typography variant="h4">Kotak masuk</Typography>
        <section className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
          {adminforms?.rows?.map((item) => (
            <ItemComponent key={item.id} item={item} />
          ))}
        </section>
      </Layout>
      <Layout>
        <Table2 adminforms={adminforms?.rows} />
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getAdmin(ctx);
}
