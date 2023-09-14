import * as React from "react";

import Button from "@/components/buttons/button";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import Input from "@/components/forms/input";
import PasswordInput from "@/components/forms/password-input";

import { useAppStore } from "@/lib/store";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import { redirectUser } from "@/lib/redirect/redirect-user";
import { GetServerSidePropsContext } from "next";

type Inputs = {
  username: string;
  password: string;
};

export default function Home() {
  const { loginUser, errorMessage } = useAppStore();
  const router = useRouter();
  const methods = useForm<Inputs>({
    mode: "onTouched",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await loginUser(data.username, data.password);
    router.push("/dashboard/user");
    return;
  };
  return (
    <main>
      <Layout className="justify-center items-center flex-col h-screen bg-gray-300">
        <Typography variant="h4">Selamat datang di Pt Tambang</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 flex-col">
          <FormProvider {...methods}>
            <Input
              id="username"
              validation={{ required: "Name must be filled" }}
              placeholder="Enter your username"
              leftIcon={AiOutlineUser}
            />
            <PasswordInput
              id="password"
              validation={{ required: "Password must be filled" }}
              placeholder="Enter your password"
              leftIcon={RiLockPasswordFill}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Typography variant="small" className="text-center">
              {errorMessage}
            </Typography>
          </FormProvider>
        </form>
      </Layout>
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await redirectUser(ctx);
}
