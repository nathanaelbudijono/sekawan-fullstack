import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/forms/input";
import SelectInput from "@/components/forms/select-input";
import DatePicker from "@/components/forms/date-picker";
import TextAreaInput from "@/components/forms/text-area";
import Button from "@/components/buttons/button";
import Seo from "@/components/core/seo";

import clsx from "clsx";
import Footer from "@/modules/footer";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/router";

type Inputs = {
  name: string;
  kotaasal: string;
  kotatujuan: string;
  kendaraan: string;
  date: string;
  keterangan: string;
};

export default function Pengajuan() {
  const { postForm } = useAppStore();
  const router = useRouter();
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const forms = new FormData();
    forms.append("name", data.name);
    forms.append("kotaasal", data.kotaasal);
    forms.append("kotatujuan", data.kotatujuan);
    forms.append("kendaraan", data.kendaraan);
    forms.append("date", data.date);
    forms.append("keterangan", data.keterangan);
    await postForm(forms);
    router.push("/dashboard/user/riwayat");
    return;
  };
  return (
    <main>
      <Seo
        title="Pengajuan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacinia mi."
      />
      <Navbar />
      <Layout className="flex flex-col">
        <Typography variant="h4">Formulir Pengajuan</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={clsx(
            "flex flex-col gap-3",
            "bg-secondary-100 bg-opacity-50 px-3 py-2 shadow-sm rounded-sm"
          )}
        >
          <FormProvider {...methods}>
            <Input
              id="name"
              label="Nama pengaju"
              validation={{ required: "Name harus diisi" }}
              placeholder="John Doe"
            />
            <Input
              id="kotaasal"
              label="Kota Asal"
              validation={{ required: "Kota asal harus diisi" }}
              placeholder="Surabaya"
            />
            <Input
              id="kotatujuan"
              label="Kota Tujuan"
              validation={{ required: "Kota tujuan harus diisi" }}
              placeholder="Jakarta"
            />
            <SelectInput
              id="kendaraan"
              label="Pilih Kendaraan"
              placeholder="Pilih satu kendaraan"
              options={[
                { value: "1", label: "Truck" },
                {
                  label: "PickUp",
                  value: "2",
                },
                {
                  label: "Container",
                  value: "3",
                },
                {
                  label: "Box",
                  value: "4",
                },
              ]}
              validation={{ required: "Kendaraan harus diisi" }}
            />
            <DatePicker
              id="date"
              label="Tanggal Perjalanan"
              validation={{
                required: "Tanggal harus diisi",
                valueAsDate: true,
              }}
              placeholder="dd/mm/yyyy"
            />
            <TextAreaInput
              label="Keterangan"
              id="keterangan"
              placeholder="Keterangan"
              validation={{ required: "Keterangan harus diisi" }}
            />
            <Button type="submit" variant="primary" className="mt-3">
              Ajukan
            </Button>
          </FormProvider>
        </form>
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
