import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { IRoute } from "./sidebar-routes";

const SidebarItem = ({ icon: Icon, label, href }: IRoute) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 pl-6 font-medium text-stone-500 transition-all hover:bg-stone-300/20 hover:text-stone-600",
        isActive &&
          "bg-amber-200/20 text-amber-700 hover:bg-amber-200/20 hover:text-amber-700",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          className={cn("size-6 text-stone-500", isActive && "text-amber-700")}
        />
        {label}
      </div>

      <div
        className={cn(
          "ml-auto h-full border-2 border-amber-700 opacity-0 transition-all",
          isActive && "opacity-100",
        )}
      />
    </button>
  );
};

export default SidebarItem;
