import { getUser } from "@/lib/check/check-user";
import { GetServerSidePropsContext } from "next";

import Navbar from "@/modules/navbar";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/forms/input";

type Inputs = {
  name: string;
  password: string;
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
              validation={{ required: "Name must be filled" }}
              placeholder="John Doe"
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
