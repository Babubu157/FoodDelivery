import { SquareMenu, Truck } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex">
      <div className="h-screen w-[200px] flex flex-col gap-10 bg-white py-9 px-5">
        <div className="flex gap-2 items-center">
          <Image src={"/plate.png"} alt="logo" width={40} height={40} />
          <div className="flex flex-col justify-center">
            <p className="text-[#09090B] text-lg font-bold">NomNom</p>
            <p className="text-[#71717A] text-xs font-normal">Swift delivery</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Link href={"/admin/menu"} className="flex items-center gap-1">
            <SquareMenu />
            Food menu
          </Link>
          <Link href={"/admin/orders"} className="flex items-center gap-1">
            <Truck /> Orders
          </Link>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
