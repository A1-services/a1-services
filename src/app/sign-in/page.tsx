"use client";
import { Divider, Button, Link, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

type FormData = {
  phoneNumber: number;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

function SignInPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <>
      <h1 className="text-3xl font-semibold text-primary">Register Account</h1>
      <Divider className="my-3" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3"
      >
        <label className="text-accent" htmlFor="firstName">
          First Name
        </label>
        <Input
          className="rounded outline"
          type="text"
          id="firstName"
          {...register("firstName")}
        />
        <label className="text-accent" htmlFor="lastName">
          Last Name
        </label>
        <Input
          className="rounded outline"
          type="text"
          id="lastName"
          {...register("lastName")}
        />
        <label className="text-accent" htmlFor="phoneNumber">
          Phone numbers
        </label>
        <Input
          className="rounded outline"
          type="number"
          id="phoneNumber"
          {...register("phoneNumber")}
        />
        <label className="text-accent" htmlFor="password">
          Password
        </label>
        <Input
          className="rounded outline"
          type="number"
          id="password"
          {...register("password")}
        />
        <label className="text-accent" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <Input
          className="rounded outline"
          type="number"
          id="confirmPassword"
          {...register("confirmPassword")}
        />

        <Divider className="my-3col-span-2" />

        <Button href="/" color="danger" variant="light" as={Link}>
          Back
        </Button>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

export default SignInPage;
