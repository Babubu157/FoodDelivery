"use client";

import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LeftLogin } from "./_components/Login";
import { Right } from "../signup/_components/Right";
import { redirect, useRouter } from "next/navigation";
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
};

type TouchedType = {
  email?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
};

export type InputPropsType = {
  values: FormikValues;
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  touched: TouchedType;
  errors: Errors;
  handleSubmit: (_e: React.FormEvent<HTMLFormElement>) => void;
};

const validationSchemaLogin = Yup.object({
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
});

const Login = () => {
  const router = useRouter();
  const { user, tokenChecker } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://fooddeliverybe.onrender.com/login",
          {
            email: values.email,
            password: values.password,
          }
        );

        localStorage.setItem("token", response.data.token);
        await tokenChecker(response.data.token);
      } catch (err: any) {
        console.log(err);
      }
    },
  });

  const inputProps = {
    values: formik.values,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    touched: formik.touched,
    errors: formik.errors,
    handleSubmit: formik.handleSubmit,
  } as InputPropsType;

  if (user?.userId) {
    if (user?.isAdmin) {
      redirect("/admin/orders");
    } else {
      redirect("/");
    }
  }

  return (
    <div className="w-screen h-screen flex p-5">
      <LeftLogin {...inputProps} />
      <Right />
    </div>
  );
};
export default Login;
