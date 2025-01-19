import { FileIcon, FileType } from "@/pages/file-manager/file-icon/file-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Calendar, Clock, HardDrive, Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface FileDetailsProps {
  file: {
    name: string;
    size: string;
    type: FileType;
    modified: string;
    created: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FileDetailsDrawer({ file, isOpen, onClose }: FileDetailsProps) {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [inviteEmail, setInviteEmail] = useState("")

  if (!file) return null;

  const sharedUsers = [
    { name: "John Doe", email: "john@example.com", avatar: "/avatars/1.png" },
    { name: "Jane Smith", email: "jane@example.com", avatar: "/avatars/2.png" },
  ];

  const handleInvite = () => {
    // Handle invite logic here
    console.log("Inviting:", inviteEmail)
    setInviteEmail("")
    setIsInviteModalOpen(false)
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent 
          className="w-full h-full block sm:w-[540px] p-0 border-0 sm:border" 
          side="right"
          showCloseIcon={false}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">File Details</h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* File Info Section */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <FileIcon type={file.type} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">
                      {file.name}
                    </h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <HardDrive className="h-4 w-4" />
                        <span>{file.size}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Created {file.created}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Modified {file.modified}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sharing Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Shared with</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1"
                    onClick={() => setIsInviteModalOpen(true)}
                  >
                    <Plus className="h-4 w-4" />
                    Invite
                  </Button>
                </div>

                <div className="space-y-4">
                  {sharedUsers.map((user) => (
                    <div key={user.email} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          {user.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={isInviteModalOpen} onOpenChange={setIsInviteModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share this file</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Input
                placeholder="Enter email address"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleInvite}>
                Invite
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
