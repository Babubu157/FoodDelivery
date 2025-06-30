"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { InputPropsType } from "@/app/signup/page";
import Link from "next/link";

export const LeftEmail = ({
  values,
  onChange,
  onBlur,
  touched,
  handleNextStep,
  errors,
}: InputPropsType) => {
  const emailInputProps = {
    placeholder: "Enter your email address",
    name: "email",
    value: values.email,
    onChange: onChange,
    onBlur: onBlur,
  };

  const isButtonDisabled = !errors.email && values.email;

  return (
    <div className="flex flex-col gap-6 justify-center h-full w-[416px]">
      <div className="flex items-start justify-start w-full">
        <Button variant="outline">
          <ChevronLeft size={16} />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Create your account</p>
        <p className="text-[16px] text-[#71717A]">
          Sign up to explore your favorite dishes
        </p>
      </div>

      <form onSubmit={handleNextStep}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Input {...emailInputProps} />
            <div className="text-red-500">{touched && errors.email}</div>
          </div>
          <Button
            type="submit"
            disabled={!isButtonDisabled}
            className="w-full h-[36px] rounded-md  bg-[#18181B] text-[#FAFAFA]"
          >
            Let's Go
          </Button>
        </div>
      </form>

      <div className="text-[16px] flex gap-1 items-center justify-center">
        <p className="text-gray-400">Already have an account?</p>
        <Link href={"/login"}>
          <Button variant="ghost" className="text-blue-600">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
};
