import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  LayoutGrid,
  List,
  Upload,
  FolderOpen,
  Download,
  Share2,
  Pencil,
  Trash2,
  Copy,
  Star,
} from "lucide-react";
import { FileIcon } from "@/pages/file-manager/file-icon/file-icon";
import { useState } from "react";
import { FileDetailsDrawer } from "@/pages/file-manager/file-details/file-details-drawer";

interface FileItem {
  name: string;
  size: string;
  type: "folder" | "pdf" | "excel" | "image" | "figma" | "word" | "powerpoint";
}

interface FileDetails extends FileItem {
  created: string;
  modified: string;
}

const FileExplorer = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedFile, setSelectedFile] = useState<FileDetails | null>(null);

  const folders: FileItem[] = [
    { name: "Project_Files", size: "21.8 MB", type: "folder" },
    { name: "Documents", size: "10.5 MB", type: "folder" },
    { name: "Team_Resources", size: "783.1 kB", type: "folder" },
    { name: "Client_Data", size: "5.4 MB", type: "folder" },
    { name: "Backup_Files", size: "2.5 MB", type: "folder" },
  ];

  const files: FileItem[] = [
    { name: "Tech design.pdf", size: "2.2 MB", type: "pdf" },
    { name: "Financial_Report.xlsx", size: "1.5 MB", type: "excel" },
    { name: "Modern_Laputa.jpg", size: "139.2 kB", type: "image" },
    { name: "Network_Diagram.fig", size: "123.5 kB", type: "figma" },
    // ... add other files
  ];

  const FileCard = ({ item }: { item: FileItem }) => {
    const handleFileClick = () => {
      setSelectedFile({
        ...item,
        created: "Sep 23, 2023",
        modified: "Jan 15, 2024",
      });
    };

    if (viewMode === "list") {
      return (
        <div
          onClick={handleFileClick}
          className="bg-background border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4 transition-all hover:shadow-sm hover:border-primary/20 cursor-pointer"
        >
          <div className="flex items-center gap-3 flex-1">
            <FileIcon type={item.type} />
            <span className="font-medium text-foreground">{item.name}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground w-24">{item.size}</span>
            <span className="text-sm text-muted-foreground capitalize w-24">{item.type}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <FolderOpen className="h-4 w-4" />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <Star className="h-4 w-4" />
                  <span>Add to Favorites</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <Pencil className="h-4 w-4" />
                  <span>Rename</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive">
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      );
    }

    return (
      <div
        onClick={handleFileClick}
        className="bg-background rounded-xl border border-border p-4 flex items-center justify-between gap-4 transition-all hover:shadow-lg hover:border-primary/20 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FileIcon type={item.type} />
          <div>
            <div className="font-semibold text-foreground">{item.name}</div>
            <span className="text-xs text-muted-foreground">{item.size}</span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <FolderOpen className="h-4 w-4" />
              <span>Open</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Star className="h-4 w-4" />
              <span>Add to Favorites</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <Pencil className="h-4 w-4" />
              <span>Rename</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive">
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

  const ListViewHeader = () => (
    <div className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground">
      <div className="flex-1">Name</div>
      <div className="flex items-center gap-6">
        <span className="w-24">Size</span>
        <span className="w-24">Type</span>
        <span className="w-8"></span>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="flex-none border-b border-border bg-background">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">
              File Manager
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-1.5 ${
                    viewMode === "grid" ? "bg-background shadow-sm" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-1.5 ${
                    viewMode === "list" ? "bg-background shadow-sm" : ""
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            <div className="max-w-[2000px] mx-auto space-y-8">
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">Folders</h4>
                <div>
                  {viewMode === "list" && <ListViewHeader />}
                  <div className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
                      : "flex flex-col gap-2"
                  }>
                    {folders.map((folder) => (
                      <FileCard key={folder.name} item={folder} />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">Files</h4>
                <div>
                  {viewMode === "list" && <ListViewHeader />}
                  <div className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
                      : "flex flex-col gap-2"
                  }>
                    {files.map((file) => (
                      <FileCard key={file.name} item={file} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FileDetailsDrawer
        file={selectedFile}
        isOpen={!!selectedFile}
        onClose={() => setSelectedFile(null)}
      />
    </div>
  );
};

export default FileExplorer;
