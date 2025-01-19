import { FolderOpen, LayoutGrid, LucideIcon, Mail, MessageCircle } from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
};

export const MenuList: Menu[] = [
  {
    href: "/",
    label: "Dashboard",
    icon: LayoutGrid,
  },
  {
    href: "/file-manager",
    label: "File Manager",
    icon: FolderOpen,
  },
  {
    href: "/chat",
    label: "Chat",
    icon: MessageCircle,
  },
  {
    href: "/mail",
    label: "Mail",
    icon: Mail,
  },
];
