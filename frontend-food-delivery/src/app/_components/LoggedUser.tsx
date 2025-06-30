import { Button } from "@/components/ui/button";

import { useAuth } from "./UserProvider";
import { useRouter } from "next/navigation";
import { Props } from "./UserLoginCheck";
import { useCart } from "./CartContext";

export const LoggedUser = ({ setClick }: Props) => {
  const router = useRouter();
  const { logOut } = useAuth();
  const { clearCart } = useCart();

  const logoutHandler = () => {
    logOut();
    clearCart();
    setClick(false);
    router.push("/login");
  };

  return (
    <div className="w-[188px] h-[104px] bg-red-400 flex flex-col justify-center items-center absolute gap-2 rounded-xl top-[40px] right-0">
      <p>User email</p>
      <div className="w-full border border-b-[#09090B]"></div>
      <Button className="w-[60px]" onClick={logoutHandler}>
        Sign out
      </Button>
    </div>
  );
};
