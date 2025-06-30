import { Button } from "@/components/ui/button";
import { useAuth } from "./UserProvider";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { GuestUser } from "./GuestUser";
import { LoggedUser } from "./LoggedUser";
import { Dispatch, SetStateAction } from "react";

// type User = {
//   userId: string;
// };

// type AccountSectionProps = {
//   user: User | null;
// };

export type Props = {
  setClick: Dispatch<SetStateAction<boolean>>;
};

export const UserLoginCheck = ({ setClick }: Props) => {
  const { user, logOut } = useAuth();

  console.log(user?.userId);

  return user?.userId ? (
    <LoggedUser setClick={setClick} />
  ) : (
    <GuestUser setClick={setClick} />
  );
};
