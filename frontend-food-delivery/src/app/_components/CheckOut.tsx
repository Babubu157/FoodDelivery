// import { Button } from "@/components/ui/button";
// import { useAuth } from "./UserProvider";
// import Link from "next/link";
// import { redirect, useRouter } from "next/navigation";
// import { GuestUser } from "./GuestUser";
// import { LoggedUser } from "./LoggedUser";
// import { Dispatch, SetStateAction } from "react";
// import { LoggedUserCheckOut } from "./LoggedUserCheckOut";
// import { GuestUserCheckOut } from "./GuestUserCheckOut";

// // type User = {
// //   userId: string;
// // };

// // type AccountSectionProps = {
// //   user: User | null;
// // };

// export type Props = {
//   setClick: Dispatch<SetStateAction<boolean>>;
// };

// export const CheckOut = () => {
//   const { user, logOut } = useAuth();

//   // console.log(user?.userId);

//   return user?.userId ? <LoggedUserCheckOut /> : <GuestUserCheckOut />;
// };
