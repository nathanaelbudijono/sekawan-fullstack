import * as React from "react";

import Button from "@/components/buttons/button";
import Layout from "@/components/core/layout";
import Typography from "@/components/core/typography";
import Input from "@/components/forms/input";
import PasswordInput from "@/components/forms/password-input";
import Footer from "@/modules/footer";
import Seo from "@/components/core/seo";

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
      <Seo
        title="Login"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacinia mi."
      />
      <Layout className="justify-center items-center flex-col h-[80vh]">
        <section className="bg-secondary-100 p-5 rounded-md shadow-sm">
          <Typography variant="h3">Login</Typography>
          <Typography variant="p" className="mb-3">
            Please sign in to continue
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-2 flex-col"
          >
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
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return await redirectUser(ctx);
}
