"use client"
import {Divider, Button, Link} from "@nextui-org/react";
import { useForm } from "react-hook-form";

type FormData = {
    phoneNumber: number;
    firstName: string;
    lastname: string;
    password: string;
    confirmPassword: string;
}

function SignInPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
    return (
    <>
        <h1 className="text-3xl text-primary font-semibold">Register Account</h1>
        <Divider className="my-3"/>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
            <label className="text-accent" htmlFor="firstName">First Name</label>
            <input className="outline rounded" type="text" id="firstName" {...register("firstName")}/>
            <label className="text-accent" htmlFor="lastName">Last Name</label>
            <input className="outline rounded" type="text" id="lastName" {...register("lastName")}/>
            <label className="text-accent" htmlFor="phoneNumber">Phone numbers</label>
            <input className="outline rounded" type="number" id="phoneNumber" {...register("phoneNumber")}/>
            <label className="text-accent" htmlFor="password">Password</label>
            <input className="outline rounded" type="number" id="password" {...register("password")}/>
            <label className="text-accent" htmlFor="confirmPassword">Confirm Password</label>
            <input className="outline rounded" type="number" id="confirmPassword" {...register("confirmPassword")}/>

            <Divider className="my-3" className="col-span-2"/>

            <Button href="/" color="danger" variant="light" as={Link}>Back</Button>
            <Button type="submit" color="primary">Submit</Button>
        </form>
    </>
    )
}

export default SignInPage