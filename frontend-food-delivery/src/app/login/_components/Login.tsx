"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { InputPropsType } from "@/app/login/page";

export const LeftLogin = ({
  values,
  onChange,
  onBlur,
  touched,
  errors,
  handleSubmit,
}: InputPropsType) => {
  const emailInputProps = {
    placeholder: "Please enter your email",
    name: "email",
    value: values.email,
    onChange: onChange,
    onBlur: onBlur,
    touched: touched,
    errors: errors,
  };

  const passwordInputProps = {
    placeholder: "Please enter your password",
    name: "password",
    value: values.password,
    onChange: onChange,
    onBlur: onBlur,
    touched: touched,
    errors: errors,
  };

  const isButtonDisabled = !errors.password;

  return (
    <div className="relative flex-2/5 h-full ">
      <div className="flex flex-col gap-6 justify-center h-full w-[416px]">
        <div className="flex items-start justify-start w-full">
          <Link href={"/"}>
            <Button variant="outline">
              <ChevronLeft size={16} />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold">Log in</p>
          <p className="text-[16px] text-[#71717A]">
            Log in to enjoy your favourite dishes.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Input
                  {...emailInputProps}
                  // type={showPassword ? "text" : "password"}
                />
                <div className="text-red-500">{touched && errors.email}</div>
              </div>
              <div className="flex flex-col gap-1">
                <Input
                  {...passwordInputProps}
                  // type={showPassword ? "text" : "password"}
                />
                <div className="text-red-500">{touched && errors.password}</div>
              </div>
              {/* <div className="flex w-full  items-center justify-start gap-2">
              <Input
              type="checkbox"
              // checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="w-[15px] h-[15px]"
              />
               <p>Show password</p>
              </div> */}

              <Link href={"/reset"} className="text-[#18181B] underline">
                Forgot password ?
              </Link>
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
          <p className="text-gray-400">Don't have an account?</p>
          <Link href={"/signup"}>
            <Button variant="ghost" className="text-blue-600">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
