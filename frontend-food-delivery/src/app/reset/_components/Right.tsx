import next from "next";
import Image from "next/image";

export const Right = () => {
  return (
    <div className="relative flex-2/5 h-full ">
      <Image
        src={"/deliman.png"}
        alt="image"
        fill
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  );
};
