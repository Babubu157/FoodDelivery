"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { bg } from "date-fns/locale";
import { ShoppingCart, User, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ShoppingCartDetail } from "./ShoppingCart";
import { DeliveryAddress } from "./DeliveryAddress";
import { useEffect, useState } from "react";
import { UserLoginCheck } from "./UserLoginCheck";
import { GuestUser } from "./GuestUser";
import { LoggedUser } from "./LoggedUser";
import { useAuth } from "./UserProvider";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [click, setClick] = useState<boolean>(false);
  const accountHandler = () => {
    setClick(!click);
  };

  const path = usePathname();
  const hide = ["/login", "/signup", "/admin/orders", "/admin/menu"];

  if (hide.includes(path)) {
    return null;
  }

  return (
    <div className="w-screen h-[68px] bg-[#18181B] flex justify-between items-center px-22">
      <Image src="/logo.png" alt="logo" width={146} height={44} />
      <div className="flex gap-3 relative">
        <DeliveryAddress />
        <ShoppingCartDetail />
        <Button
          className="bg-[#EF4444] w-[36px] h-[36px] flex justify-center items-center rounded-full hover:bg-primary-none "
          onClick={accountHandler}
        >
          <User className="" />
        </Button>
        {click && <UserLoginCheck setClick={setClick} />}
      </div>
    </div>
  );
};
