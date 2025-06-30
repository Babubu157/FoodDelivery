"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Loader } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ResetPropsType } from "../page";
import Link from "next/link";

import axios from "axios";

export const CheckAccount = ({
  values,
  onChange,
  onBlur,
  touched,
  handleNextStep,
  errors,
}: ResetPropsType) => {
  const emailInputProps = {
    placeholder: "Enter your registerd email address",
    name: "email",
    value: values.email,
    onChange: onChange,
    onBlur: onBlur,
  };

  const [loading, setLoading] = useState<boolean>(false);

  const isButtonDisabled = !errors.email && values.email;

  const clickHandler = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://fooddeliverybe.onrender.com/sendOtp",
        {
          email: values.email,
        }
      );
      console.log("email sent OK", response);
      handleNextStep();
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center h-full w-[416px]">
      <div className="flex items-start justify-start w-full">
        <Link href={"/login"}>
          <Button variant="outline">
            <ChevronLeft size={16} />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Reset your password</p>
        <p className="text-[16px] text-[#71717A]">
          Enter your email to receive a password reset link
        </p>
      </div>

      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Input {...emailInputProps} />
            <div className="text-red-500">{touched && errors.email}</div>
          </div>
          {loading && (
            <div className="flex justify-center items-center w-[400px] h-[30px]">
              <Loading />
            </div>
          )}
          <Button
            type="button"
            disabled={!isButtonDisabled}
            className="w-full h-[36px] rounded-md  bg-[#18181B] text-[#FAFAFA]"
            onClick={clickHandler}
          >
            Send verify code
          </Button>
        </div>
      </form>

      <div className="text-[16px] flex gap-1 items-center justify-center">
        <p className="text-gray-400">Don't have an account?</p>
        <Link href={"/signup"}>
          <Button variant="ghost" className="text-blue-600">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const Loading = () => {
  return (
    <div className="animate-spin  text-[#E619B8]">
      <Loader size={32} />
    </div>
  );
};
