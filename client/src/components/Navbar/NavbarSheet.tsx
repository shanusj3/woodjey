import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuMenu } from "react-icons/lu";

function NavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="text-lg cursor-pointer">
          <LuMenu className="text-lg" />
        </span>
      </SheetTrigger>
      <SheetContent side={"left"} className="z-[9999]">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarSheet;
