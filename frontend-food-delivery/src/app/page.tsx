import Image from "next/image";
import axios from "axios";
import { HomePage } from "./_components/HomePage";

export default async function Home() {
  const { data } = await axios.get("http://localhost:8000/foods");
  console.log("hello");
  return (
    <div className="w-full flex flex-col gap">
      <div className="w-full h-[570px]">
        <Image
          src="/heroBG.png"
          alt="lunchOffer"
          width={1440}
          height={570}
          className="w-full"
        />
      </div>
      <div className="p-22 bg-[#404040]">
        <HomePage foods={data.foods} />
      </div>
    </div>
  );
}
