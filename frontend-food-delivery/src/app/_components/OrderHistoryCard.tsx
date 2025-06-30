import { Map, Soup, Timer } from "lucide-react";
import { OrderHistoryType } from "./OrderHistory";

export const OrderHistoryCard = ({ order }: { order: OrderHistoryType }) => {
  console.log(order, "from card");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <p className="text-[#09090B] text-[16px] font-bold">
          {order.totalPrice}
        </p>
        <div className="border border-red-700 rounded-full text-[12px] font-bold p-1">
          {order.status}
        </div>
      </div>
      <div>
        {order.orderItems.map((item, index) => {
          console.log(item, "items:");
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2 ">
                <Soup />
                <p>{item.food.foodName}</p>
              </div>
              <div>x {item.quantity}</div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 ">
        <Timer />
        <p>{order.createdAt.toString()}</p>
      </div>
      <div className="flex items-center gap-2">
        <Map />
        <p>{order.address}</p>
      </div>
      <div className="w-full border border-dashed border-b-[#09090B] mb-4"></div>
    </div>
  );
};
