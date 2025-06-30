import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Props } from "./UserLoginCheck";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export const GuestUserCheckOut = () => {
  const router = useRouter();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(true);

  const handleNavigate = (path: string) => {
    setDialogOpen(false);
    setSheetOpen(false);
    router.push(path);
  };

  const signupHandler = () => {
    router.push("/signup");
  };

  const loginHandler = () => {
    router.push("/login");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#EF4444] rounded-full">Checkout</Button>
      </DialogTrigger>
      <DialogContent className="!w-[320px] !max-w-[320px] fixed h-[200px]  rounded-lg bg-white shadow-xl">
        <DialogTitle></DialogTitle>
        <DialogClose asChild>
          <Button variant="ghost" className="absolute top-2 right-2">
            X
          </Button>
        </DialogClose>
        <div className=" bg-white flex flex-col justify-center items-center  gap-4 rounded-xl">
          <p>Бүртгэлтэй хаягаараа нэвтрэнэ үү</p>
          <div className="w-full border border-b-[#09090B]"></div>
          <div className="flex w-full justify-evenly ">
            <Button className="w-[60px]" onClick={signupHandler}>
              Sign up
            </Button>
            <Button className="w-[60px]" onClick={loginHandler}>
              Login
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
