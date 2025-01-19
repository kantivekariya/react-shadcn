import {
  Folder,
  FileText,
  FileSpreadsheet,
  Image,
  Figma,
  FileType,
  Presentation,
} from "lucide-react";

export type FileType =
  | "folder"
  | "pdf"
  | "excel"
  | "image"
  | "figma"
  | "word"
  | "powerpoint";

interface FileIconProps {
  type: FileType;
}

const iconConfig = {
  folder: {
    Icon: Folder,
    bgColor: "bg-blue-50 dark:bg-blue-500/20",
    textColor: "text-blue-500",
  },
  pdf: {
    Icon: FileText,
    bgColor: "bg-red-50 dark:bg-red-500/20",
    textColor: "text-red-500",
  },
  excel: {
    Icon: FileSpreadsheet,
    bgColor: "bg-green-50 dark:bg-green-500/20",
    textColor: "text-green-500",
  },
  image: {
    Icon: Image,
    bgColor: "bg-purple-50 dark:bg-purple-500/20",
    textColor: "text-purple-500",
  },
  figma: {
    Icon: Figma,
    bgColor: "bg-pink-50 dark:bg-pink-500/20",
    textColor: "text-pink-500",
  },
  word: {
    Icon: FileType,
    bgColor: "bg-blue-50 dark:bg-blue-500/20",
    textColor: "text-blue-500",
  },
  powerpoint: {
    Icon: Presentation,
    bgColor: "bg-orange-50 dark:bg-orange-500/20",
    textColor: "text-orange-500",
  },
};

export const FileIcon = ({ type }: FileIconProps) => {
  const config = iconConfig[type];
  if (!config) return null;

  const { Icon, bgColor, textColor } = config;
  return (
    <div
      className={`h-10 w-10 flex items-center justify-center ${bgColor} ${textColor} rounded-lg`}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
};
