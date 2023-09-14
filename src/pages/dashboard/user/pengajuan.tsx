import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/forms/input";
import SelectInput from "@/components/forms/select-input";
import DatePicker from "@/components/forms/date-picker";

import { HiOutlineCalendar } from "react-icons/hi";

type Inputs = {
  name: string;
  kotaasal: string;
  kotatujuan: string;
  kendaraan: string;
  date: string;
};

export default function Pengajuan() {
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    return;
  };
  return (
    <main>
      <Navbar />
      <Layout className="flex flex-col">
        <Typography variant="h4">Formulir Pengajuan</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col">
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
              placeholder="Select something"
              options={[
                { value: "Truck", label: "Truck" },
                {
                  label: "PickUp",
                  value: "PickUp",
                },
                {
                  label: "Container",
                  value: "Container",
                },
                {
                  label: "Box",
                  value: "Box",
                },
              ]}
              validation={{ required: "Kendaraan harus diisi" }}
            />
            <DatePicker
              id="date"
              validation={{
                required: "Date must be filled",
                valueAsDate: true,
              }}
              placeholder="dd/mm/yyyy"
              leftIcon={HiOutlineCalendar}
            />
          </FormProvider>
        </form>
      </Layout>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await getUser(ctx);
}
