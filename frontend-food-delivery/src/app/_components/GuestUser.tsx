import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Props } from "./UserLoginCheck";

export const GuestUser = ({ setClick }: Props) => {
  const router = useRouter();

  const signupHandler = () => {
    setClick(false);
    router.push("/signup");
  };

  const loginHandler = () => {
    router.push("/login");
    setClick(false);
  };
  return (
    <div className="w-[320px] h-[100px] z-1 bg-red-400 flex flex-col justify-center items-center absolute gap-2 rounded-xl top-[40px] right-0">
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
  );
};
