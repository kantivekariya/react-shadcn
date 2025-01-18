import { Bookmark, LayoutGrid, LucideIcon, SquarePen, Tag } from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
};

export const MenuList: Menu[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutGrid,
  },
  {
    href: "/posts",
    label: "Posts",
    icon: SquarePen,
  },
  {
    href: "/categories",
    label: "Categories",
    icon: Bookmark,
  },
  {
    href: "/tags",
    label: "Tags",
    icon: Tag,
  },
];
