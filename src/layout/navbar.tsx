import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, PanelsTopLeft, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Menu } from "./menu";
import { useDispatch } from "react-redux";
import { setThemeColor } from "@/redux/features/theme/theme.slice";
import { ModeToggle } from "./mode-toggle";
import { UserNav } from "./user-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  title: string;
}

const languageOptions = [
  {
    code: "en",
    flag: "🇬🇧",
    label: "EN",
  },
  {
    code: "nl",
    flag: "🇳🇱",
    label: "NL",
  },
];

export const Navbar = ({ title }: NavbarProps) => {
  const dispatch = useDispatch();
  const handleColorChange = (color: string) => {
    dispatch(setThemeColor(color));
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <Sheet>
            <SheetTrigger className="lg:hidden" asChild>
              <Button className="h-8" variant="outline" size="icon">
                <MenuIcon size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="sm:w-72 px-3 h-full flex flex-col"
              side="left"
            >
              <SheetHeader>
                <Button
                  className="flex justify-center items-center pb-2 pt-1"
                  variant="link"
                  asChild
                >
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <PanelsTopLeft className="w-6 h-6 mr-1" />
                    <SheetTitle className="font-bold text-lg">VK</SheetTitle>
                  </Link>
                </Button>
              </SheetHeader>
              <Menu isOpen />
            </SheetContent>
          </Sheet>
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-auto">
              <DropdownMenuLabel>Theme Colors</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid grid-cols-3 gap-2 p-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  onClick={() => handleColorChange("zinc")}
                >
                  <div className="h-4 w-4 rounded-full bg-zinc-950 mr-2" />
                  Zinc
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-red-100 dark:hover:bg-red-800/20"
                  onClick={() => handleColorChange("red")}
                >
                  <div className="h-4 w-4 rounded-full bg-red-600 mr-2" />
                  Red
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-rose-100 dark:hover:bg-rose-800/20"
                  onClick={() => handleColorChange("rose")}
                >
                  <div className="h-4 w-4 rounded-full bg-rose-600 mr-2" />
                  Rose
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-orange-100 dark:hover:bg-orange-800/20"
                  onClick={() => handleColorChange("orange")}
                >
                  <div className="h-4 w-4 rounded-full bg-orange-600 mr-2" />
                  Orange
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-orange-100 dark:hover:bg-orange-800/20"
                  onClick={() => handleColorChange("green")}
                >
                  <div className="h-4 w-4 rounded-full bg-green-600 mr-2" />
                  Green
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-orange-100 dark:hover:bg-orange-800/20"
                  onClick={() => handleColorChange("blue")}
                >
                  <div className="h-4 w-4 rounded-full bg-blue-600 mr-2" />
                  Blue
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-orange-100 dark:hover:bg-orange-800/20"
                  onClick={() => handleColorChange("yellow")}
                >
                  <div className="h-4 w-4 rounded-full bg-yellow-600 mr-2" />
                  Yellow
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full justify-start font-normal hover:bg-orange-100 dark:hover:bg-orange-800/20"
                  onClick={() => handleColorChange("violet")}
                >
                  <div className="h-4 w-4 rounded-full bg-violet-600 mr-2" />
                  Violet
                </Button>
              </div>

              <DropdownMenuSeparator />
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <div className="grid grid-cols-2 gap-2 p-2">
                {languageOptions.map((lang) => (
                  <Button
                    key={lang.code}
                    size="sm"
                    variant="outline"
                    className="w-full justify-start font-normal"
                    onClick={() => {
                      document.dir = lang.code === "ar" ? "rtl" : "ltr";
                      // Add your language change logic here
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                  </Button>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
};
