// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
// import Image from "next/image";
// import { FoodDetail } from "./FoodDetail";

// export type FoodType = {
//   _id: string;
//   foodName: string;
//   price: number;
//   image: string;
//   ingredients: string;
//   // category: string;
// };

// // ✨ Props төрөл
// type CardProps = {
//   food: FoodType;
// };
// export const Card = ({ food }: CardProps) => {
//   return (
//     <div className="flex flex-col w-[400px] h-[340] p-4 rounded-lg gap-5 bg-[white] background/bg-primary-20">
//       <div className="relative">
//         <div
//           className="w-[365px]
//           h-[210px] relative"
//         >
//           <Image
//             src={food.image}
//             alt={food.foodName}
//             fill
//             className="rounded-md object-cover"
//           />
//         </div>

//         <FoodDetail
//           id={food._id}
//           foodName={food.foodName}
//           image={food.image}
//           price={food.price}
//           ingredients={food.ingredients}
//         />
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex justify-between">
//           <p className="text-[#EF4444] text-2xl font-semibold">
//             {food.foodName}
//           </p>
//           <span className="text-lg font-semibold">{food.price}</span>
//         </div>
//         <p>{food.ingredients}</p>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { FoodDetail } from "./FoodDetail";

export type FoodType = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};

type CardProps = {
  food: FoodType;
};

export const Card = ({ food }: CardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-[400px] h-[340px] p-4 rounded-lg gap-5 bg-white">
      <div className="relative">
        <div className="w-[365px] h-[210px] relative">
          <Image
            src={food.image}
            alt={food.foodName}
            fill
            className="rounded-md object-cover"
          />
        </div>

        {/* + товч */}
        {/* <Button
          className="absolute bottom-2 right-3 w-[50px] h-[50px] rounded-full"
          onClick={() => setOpen(true)}
        >
          <Plus />
        </Button> */}

        {/* Food Detail Dialog */}
        <FoodDetail
          id={food._id}
          foodName={food.foodName}
          image={food.image}
          price={food.price}
          ingredients={food.ingredients}
          open={open}
          setOpen={setOpen}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-[#EF4444] text-2xl font-semibold">
            {food.foodName}
          </p>
          <span className="text-lg font-semibold">${food.price}</span>
        </div>
        <p>{food.ingredients}</p>
      </div>
    </div>
  );
};
