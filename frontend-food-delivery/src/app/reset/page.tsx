"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Right } from "./_components/Right";
import { CheckAccount } from "./_components/CheckAccount";
import { ConfirmOTP } from "./_components/ConfirmOTP";
import { ResetPass } from "./_components/ResetPass";
import axios from "axios";
import { useAuth } from "../_components/UserProvider";

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

type FormikValues = {
  email: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

type TouchedType = {
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
};

export type ResetPropsType = {
  values: FormikValues;
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  touched: TouchedType;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  errors: Errors;
  handleSubmit: (_e: React.FormEvent<HTMLFormElement>) => void;
};

const validationSchemaLogin = Yup.object({
  // otp: Yup.string().required().min(4, "verify code"),
  email: Yup.string()
    .required()
    .test(
      "email",
      "Invalid email. Use a format like example@email.com",
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      }
    ),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be 4 characters long")
    .matches(/[a-z]/, "Password requires a lowercase letter"),
  confirmPassword: Yup.string()
    .required("Confirm a password is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

const PassResetPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const Components = [CheckAccount, ConfirmOTP, ResetPass];
  const [step, setStep] = useState<number>(0);

  const RenderingComponent = Components[step];

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      try {
        const response = await axios.put("http://localhost:8000/updatePass", {
          email: values.email,
          password: values.password,
        });
        console.log("Password updated", response);
        router.push("/login");
      } catch (err: any) {
        alert(
          err?.response?.data?.message || "Password not updated, try again"
        );
        console.error(err);
      }
    },
  });

  // console.log(formik.errors);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };
  const inputProps: ResetPropsType = {
    values: formik.values,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    touched: formik.touched,
    errors: formik.errors,
    handlePrevStep: handlePrevStep,
    handleNextStep: handleNextStep,
    handleSubmit: formik.handleSubmit,
  };

  if (user?.userId) {
    redirect("/");
  }

  return (
    <div className="w-screen h-screen flex p-5">
      <div className="relative flex-1/5 h-full">
        <RenderingComponent {...inputProps} />
      </div>
      <div className="relative flex-2/5 h-full">
        <Right />
      </div>
    </div>
  );
};

export default PassResetPage;
