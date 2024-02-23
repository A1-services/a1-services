"use client";

import { Button, Input } from "@nextui-org/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import toast from "react-hot-toast";

type Form = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

function SignInPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = (data) => {
    const loading = async () => {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your account has been created");
        router.push("/login")
      } else {
        toast.error("Something went wrong");
      }
      setisLoading(false);
    };
    setisLoading(true);
    loading();
  };
  const onInValid: SubmitErrorHandler<Form> = (errors) => console.log(errors);

  const watchPassword = watch("password");
  const [isLoading, setisLoading] = useState(false);
  
  return (
    <section className="mx-auto max-w-md">
      <h1 className="mx-auto text-4xl font-semibold text-primary underline">
        Create account
      </h1>
      <form className="my-5" onSubmit={handleSubmit(onSubmit, onInValid)}>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="email">Email: </label>
          <input
            className={`rounded p-3 ${
              errors.email ? "border border-danger" : ""
            }`}
            id="email"
            type="text"
            {...register("email", {
              required: "Fill in Email",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Fill in a proper email."
              }
            })}
          />
          {errors.email !== undefined && (
            <p className="text-xs text-danger">{errors.email.message}</p>
          )}

          <label htmlFor="firstname">Firstname: </label>
          <input
            className={`rounded p-3 ${
              errors.firstName ? "border border-danger" : ""
            }`}
            id="firstname"
            {...register("firstName", { required: "Fill in First name" })}
          />
          {errors.firstName !== undefined && (
            <p className="text-xs text-danger">{errors.firstName.message}</p>
          )}

          <label htmlFor="lastname">Lastname: </label>
          <input
            className={`rounded p-3 ${
              errors.lastName ? "border border-danger" : ""
            }`}
            id="lastname"
            {...register("lastName", { required: "Fill in Last name" })}
          />
          {errors.lastName !== undefined && (
            <p className="text-xs text-danger">{errors.lastName.message}</p>
          )}

          <label htmlFor="password">Pin: </label>
          <input
            type="password"
            className={`rounded p-3 ${
              errors.password ? "border border-danger" : ""
            }`}
            id="password"
            {...register("password", {
              required: "Fill in Password",
              minLength: { value: 6, message: "Must have more then 6 characters"}
            })}
          />
          {errors.password !== undefined && (
            <p className="text-xs text-danger">{errors.password.message}</p>
          )}

          <label htmlFor="confirmPassword">ConfirmPin: </label>
          <input
            type="password"
            className={`rounded p-3 ${
              errors.confirmPassword ? "border border-danger" : ""
            }`}
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Fill in Confirm password",
              validate: {
                equal: (v) =>
                  v === watchPassword ||
                  "The value is not the same as Password",
              },
            })}
          />
          {errors.confirmPassword !== undefined && (
            <p className="text-xs text-danger">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="my-4 w-full font-bold"
          color="primary"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Create account
        </Button>
      </form>
    </section>
  );
}

export default SignInPage;
