import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full h-[755px] bg-[#18181B] pt-15">
      <div className="w-full h-[92px] bg-[#EF4444]"> Fresh Fast Delivered</div>
      <div className="h-[228px] mt-[76px] mb-[104px] mx-22 border border-amber-50 flex items-start justify-start gap-55">
        <Image src={"/smLogo.png"} alt="small logo" width={88} height={94} />
        <div className="flex gap-28">
          <div className="text-[#71717A] text-[14px] flex flex-col gap-4">
            <p>NOMNOM</p>
            <Link href={"/"} className="text-[#FAFAFA]">
              Home
            </Link>
            <Link href={"/"} className="text-[#FAFAFA]">
              Contact us
            </Link>
            <Link href={"/"} className="text-[#FAFAFA]">
              Delivery zone
            </Link>
          </div>
          <div>
            <p className="text-[#71717A] text-[14px]">MENU</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#71717A] text-[14px]">FOLLOW US</p>
            <div className="flex gap-4">
              <Image src={"/fb.png"} alt="facebook" width={28} height={28} />
              <Image src={"/insta.png"} alt="insta" width={28} height={28} />
            </div>
          </div>
        </div>
      </div>
      <div className="border  border-t-amber-300 mx-22 h-[84px] flex justify-start items-center gap-12 ">
        <p className="text-[#71717A] text-[14px]">
          {" "}
          Copy right 2024 © Nomnom LLC
        </p>
        <p className="text-[#71717A] text-[14px]"> Privacy policy</p>
        <p className="text-[#71717A] text-[14px]">Terms and condition</p>
        <p className="text-[#71717A] text-[14px]">Coockie policy</p>
      </div>
    </div>
  );
};
