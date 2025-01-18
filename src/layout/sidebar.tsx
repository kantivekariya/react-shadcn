import { Menu } from "@/layout/menu";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { PanelsTopLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  selectSidebarState,
  toggleOpen,
  selectGetOpenState,
} from "@/redux/features/sidebar/sidebar.slice";
import { SidebarToggle } from "./sidebar-toggle";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector(selectSidebarState);
  const getOpenState = useSelector(selectGetOpenState);
  if (!sidebar) return null;

  const { isOpen } = sidebar;

  const handleToggle = () => {
    dispatch(toggleOpen());
  };

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        !getOpenState ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={handleToggle} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            !getOpenState ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link to="/dashboard" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                !getOpenState
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              VK
            </h1>
          </Link>
        </Button>
        <Menu isOpen={getOpenState} />
      </div>
    </aside>
  );
};
