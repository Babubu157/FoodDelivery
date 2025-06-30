"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputPropsType } from "@/app/signup/page";

export const LeftPassword = ({
  values,
  onChange,
  onBlur,
  touched,
  handlePrevStep,
  errors,
  handleSubmit,
}: InputPropsType) => {
  const router = useRouter();

  const passInputProps = {
    placeholder: "Password",
    name: "password",
    value: values.password,
    onChange: onChange,
    onBlur: onBlur,
  };

  const confirmInputProps = {
    placeholder: "Confirm Password",
    name: "confirmPassword",
    value: values.confirmPassword,
    onChange: onChange,
    onBlur: onBlur,
  };

  const isButtonDisabled = !errors.password;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6 justify-center h-full w-[416px]">
      <div className="flex items-start justify-start w-full">
        <Button variant="outline" onClick={handlePrevStep}>
          <ChevronLeft size={16} />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Create a strong password</p>
        <p className="text-[16px] text-[#71717A]">
          Create a strong password with letters, numbers
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Input
              {...passInputProps}
              type={showPassword ? "text" : "password"}
            />
            <div className="text-red-500">{touched && errors.password}</div>
          </div>
          <div className="flex flex-col gap-1">
            <Input
              {...confirmInputProps}
              type={showPassword ? "text" : "password"}
            />
            <div className="text-red-500">
              {touched && errors.confirmPassword}
            </div>
          </div>
          <div className="flex w-full  items-center justify-start gap-2">
            <Input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="w-[15px] h-[15px]"
            />
            <p>Show password</p>
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
        <Button variant="ghost" className="text-blue-600">
          Log in
        </Button>
      </div>
    </div>
  );
};
