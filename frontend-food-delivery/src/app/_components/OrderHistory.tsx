import axios from "axios";
import { useEffect, useState } from "react";
import { OrderHistoryCard } from "./OrderHistoryCard";
import { CartItemType } from "./CartContext";
import { Label } from "@/components/ui/label";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

type FoodOrderItemType = {
  food: {
    id: string;
    foodName: string;
    image: string;
    ingredients: string;
    price: number;
  };
  quantity: number;
};

export type OrderHistoryType = {
  orderItems: FoodOrderItemType[];
  status: FoodOrderStatusEnum;
  totalPrice: number;
  address: string;
  createdAt: Date;
};

export const OrderHistory = () => {
  const [orders, setOrders] = useState<OrderHistoryType[]>([]);
  const [loading, setLoading] = useState(false);

  const getOrderHistory = async () => {
    setLoading(true);
    const token = window.localStorage.getItem("token");
    const response = await axios.get(
      "https://fooddeliverybe.onrender.com/orders",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setOrders(response?.data?.orders);
    setLoading(false);
  };

  useEffect(() => {
    getOrderHistory();
  }, []);

  console.log(orders);
  if (loading) return "unshij baina";
  return (
    <div className="bg-white flex flex-col w-full h-full rounded-3xl p-4">
      <Label className="text-[#09090B] text-xl font-semibold mb-4">
        Order history
      </Label>
      {orders?.map((order, index) => {
        return (
          <div key={index}>
            <OrderHistoryCard order={order} />
          </div>
        );
      })}
    </div>
  );
};
