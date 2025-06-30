"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { ResetPropsType } from "../page";
import axios from "axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export const ConfirmOTP = ({
  values,
  onChange,
  onBlur,
  touched,
  handlePrevStep,
  handleNextStep,
  errors,
}: ResetPropsType) => {
  const otpInputProps = {
    placeholder: "4 digit code",
    name: "otp",
    value: values.otp,
    onChange: onChange,
    onBlur: onBlur,
  };

  const [valuesOtp, setValuesOtp] = useState<string>("");
  const isButtonDisabled = !errors.email && values.email;

  const verifyHandler = async (valuesOtp: string) => {
    try {
      const response = await axios.post("http://localhost:8000/verifyOtp", {
        // otp: values.otp,
        otp: valuesOtp,
        email: values.email,
      });
      // console.log("code matched", response);
      handleNextStep();
    } catch (error: any) {
      console.log(error);
      alert(error?.response?.data?.message || "Code verify failed");
    }
  };

  const resendHandler = async () => {
    try {
      const response = await axios.post("http://localhost:8000/sendOtp", {
        email: values.email,
      });
      console.log("email sent OK", response);
    } catch (err: any) {
      alert(err?.response?.data?.message || "failed to resend code ");
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center h-full w-[416px]">
      <div className="flex items-start justify-start w-full">
        <Button variant="outline" onClick={handlePrevStep}>
          <ChevronLeft size={16} />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">Please verify Your Email</p>
        <p className="text-[16px] text-[#71717A]">
          We just sent a verifying code to {values.email}.
        </p>
        <p className="text-[16px] text-[#71717A]">
          Please check email, enter the code below.
        </p>
      </div>

      <form onSubmit={handleNextStep}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <InputOTP
              maxLength={4}
              value={valuesOtp}
              onChange={(valuesOtp) => setValuesOtp(valuesOtp)}
              className="w-[200px] "
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="w-full flex gap-[10px]">
            <Button
              type="button"
              disabled={!isButtonDisabled}
              className="flex-1/3  h-[36px] rounded-md  bg-[#ED80E9] text-[#FAFAFA]"
              onClick={() => verifyHandler(valuesOtp)}
            >
              Verify
            </Button>
            <Button
              type="button"
              disabled={!isButtonDisabled}
              className="flex-1/3 h-[36px] rounded-md  bg-[#18181B] text-[#FAFAFA]"
              onClick={resendHandler}
            >
              Resend code
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
