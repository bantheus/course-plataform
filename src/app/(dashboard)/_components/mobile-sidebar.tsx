import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogDescription } from "@radix-ui/react-dialog";
import { MenuIcon } from "lucide-react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white p-0">
        <SheetTitle className="hidden">Menu</SheetTitle>
        <DialogDescription className="hidden">
          Use the sidebar to navigate to different pages
        </DialogDescription>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
