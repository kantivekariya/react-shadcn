import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { MenuList } from "@/lib/menu-list";

interface MenuProps {
  isOpen: boolean | undefined;
}

export const Menu = ({ isOpen }: MenuProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    // For exact matches (like root path '/')
    if (path === '/') {
      return location.pathname === path;
    }
    // For other paths, check if the current path starts with the menu item path
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="mt-8 h-full w-full">
      <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
        {MenuList.map(({ href, label, icon: Icon, active }, index) => (
          <li className="w-full" key={index}>
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    variant={
                      (active === undefined && isActive(href)) ||
                      active
                        ? "secondary"
                        : "ghost"
                    }
                    className="w-full flex items-center justify-start h-10 mb-1 space-x-4"
                    asChild
                  >
                    <Link to={href} className="flex items-center w-full">
                      <span className={cn(isOpen === false ? "" : "mr-4")}>
                        <Icon size={18} />
                      </span>
                      <p
                        className={cn(
                          "max-w-[200px] truncate",
                          isOpen === false
                            ? "-translate-x-96 opacity-0"
                            : "translate-x-0 opacity-100"
                        )}
                      >
                        {label}
                      </p>
                    </Link>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">{label}</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
        <li className="w-full grow flex items-end">
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {}}
                  variant="outline"
                  className="w-full flex items-center justify-center h-10 mt-5 space-x-4"
                >
                  <span className={cn(isOpen === false ? "" : "mr-4")}>
                    <LogOut size={18} />
                  </span>
                  <p
                    className={cn(
                      "whitespace-nowrap",
                      isOpen === false ? "opacity-0 hidden" : "opacity-100"
                    )}
                  >
                    Sign out
                  </p>
                </Button>
              </TooltipTrigger>
              {isOpen === false && (
                <TooltipContent side="right">Sign out</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </nav>
  );
};
