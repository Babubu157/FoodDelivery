import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, MapPin } from "lucide-react";
import { useAuth } from "./UserProvider";

export const DeliveryAddress = () => {
  const { deliveryAddress, setDeliveryAddress } = useAuth();
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryAddress(event.target.value);
  };
  console.log(deliveryAddress, "from address modal");

  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">
              <div className="flex bg-[#FFFFFF] w-[250px] h-[36px] rounded-2xl items-center px-3 gap-2">
                <MapPin color="red" size={36} />
                <p className="text-[#EF4444] whitespace-nowrap text-xs w-[200px]">
                  Delivery address:
                </p>
                <p className="text-[#71717A] text-xs">Add location</p>
                <ChevronRight size={46} />
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] !w-fit !max-w-fit">
            <DialogHeader>
              <DialogTitle>Please write your delivery address!</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="w-[454px] h-[80px] border border-[#E4E4E7] rounded-lg">
                <Input
                  placeholder=" Please share your complete address"
                  className="focus-visible:ring-0 bg-tranparent border-none"
                  onChange={inputHandler}
                  value={deliveryAddress}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Deliver here</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
