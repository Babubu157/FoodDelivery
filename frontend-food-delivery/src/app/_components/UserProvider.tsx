"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { useCart } from "./CartContext";

type UserData = {
  userId: string | null;
  isAdmin: boolean;
};

export type AuthContextType = {
  user: UserData | null;
  tokenChecker: (token: string) => Promise<void>;
  setUser: (value: UserData | null) => void;
  logOut: () => void;
  deliveryAddress: string;
  setDeliveryAddress: (value: string) => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);

  const [deliveryAddress, setDeliveryAddress] = useState<string>("");
  const storageKey = "DeliveryAddress";

  const tokenChecker = async (token: string) => {
    try {
      const response = await axios.post(
        "https://fooddeliverybe.onrender.com/verify",
        {
          token: token,
        }
      );
      setUser({
        userId: response.data.destructToken.userId,
        isAdmin: response.data.destructToken.isAdmin,
      });
    } catch (err) {}
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    // const address = localStorage.getItem("DeliveryAddress");
    if (token) {
      tokenChecker(token);
    }
  }, []);

  // const { clearCart } = useCart();

  const logOut = () => {
    localStorage.removeItem("token");
    setUser({ userId: null, isAdmin: false });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        tokenChecker,
        setUser,
        logOut,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);
