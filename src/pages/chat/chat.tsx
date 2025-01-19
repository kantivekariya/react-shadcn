import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Image, MoreVertical, Paperclip, Search, Send, Smile, Users, ChevronLeft, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const messages = [
    {
      id: 1,
      sender: "Terrance Moreno",
      content: "Hey, how's it going?",
      time: "10:30 AM",
      isSender: false,
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      sender: "You",
      content: "I'm good! Working on the new project. How about you?",
      time: "10:32 AM",
      isSender: true,
    },
    // Add more messages as needed
  ];

  const groupChats = [
    {
      id: 1,
      name: "Design Team",
      lastMessage: "New design updates",
      time: "11:30 AM",
      members: 5,
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Sprint planning discussion",
      time: "09:15 AM",
      members: 8,
    },
  ];

  const chatList = [
    {
      id: 1,
      name: "Terrance Moreno",
      lastMessage: "Hey, how's it going?",
      time: "10:30 AM",
      avatar: "https://i.pravatar.cc/150?img=1",
      online: true
    },
    {
      id: 2,
      name: "Ron Vargas",
      lastMessage: "Let's meet tomorrow",
      time: "09:30 AM",
      avatar: "https://i.pravatar.cc/150?img=2",
      online: false
    },
    // Add more chat items as needed
  ];

  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId);
    setIsMobileView(true);
  };

  const handleBackToList = () => {
    setIsMobileView(false);
    setSelectedChat(null);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setSearchQuery("");
    }
  };

  const selectedChatData = chatList.find(chat => chat.id === selectedChat);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background">
      {/* Left Sidebar */}
      <div className={cn(
        "lg:w-80 border-r lg:flex flex-col bg-card",
        isMobileView ? "hidden lg:flex" : "w-full"
      )}>
        <div className="p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <h2 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Chats
          </h2>
          
          {/* Search with Tailwind */}
          <div className="relative mb-4">
            {isSearchActive ? (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-muted rounded-lg overflow-hidden transition-all duration-200 ease-in-out"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 hover:bg-muted/80 transition-colors"
                  onClick={toggleSearch}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Search chats..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70"
                  autoFocus
                />
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-between p-2 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer transition-colors"
                onClick={toggleSearch}
              >
                <span className="text-sm text-muted-foreground">Search chats</span>
                <Search className="h-4 w-4 text-muted-foreground" />
              </motion.div>
            )}
          </div>
          
          {/* Tabs with Tailwind */}
          <Tabs defaultValue="direct" className="w-full">
            <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/60 rounded-xl gap-1">
              <TabsTrigger 
                value="direct"
                className="group relative px-3 py-1.5 rounded-lg transition-all duration-200 
                  data-[state=active]:bg-background 
                  data-[state=active]:text-foreground 
                  data-[state=active]:shadow-sm 
                  hover:bg-background/60
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Direct</span>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-200 
                  group-data-[state=active]:scale-x-100" />
              </TabsTrigger>
              <TabsTrigger 
                value="groups"
                className="group relative px-3 py-1.5 rounded-lg transition-all duration-200 
                  data-[state=active]:bg-background 
                  data-[state=active]:text-foreground 
                  data-[state=active]:shadow-sm 
                  hover:bg-background/60
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Groups</span>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-200 
                  group-data-[state=active]:scale-x-100" />
              </TabsTrigger>
            </TabsList>
            
            <TabsContent 
              value="direct" 
              className="mt-2 focus-visible:outline-none"
            >
              <ScrollArea className="h-[calc(100vh-200px)] lg:h-[calc(100vh-220px)]">
                <div className="space-y-1">
                  {chatList.map((chat) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={chat.id}
                      className="flex items-center gap-3 p-3 hover:bg-muted/80 rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleChatSelect(chat.id)}
                    >
                      <div className="relative">
                        <Avatar className="h-12 w-12 ring-2 ring-background">
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {chat.name.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-background" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{chat.name}</h3>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {chat.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate mt-0.5">
                          {chat.lastMessage}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent 
              value="groups" 
              className="mt-2 focus-visible:outline-none"
            >
              <ScrollArea className="h-[calc(100vh-200px)] lg:h-[calc(100vh-220px)]">
                <div className="space-y-1">
                  {groupChats.map((group) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={group.id}
                      className="flex items-center gap-3 p-3 hover:bg-muted/80 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="relative">
                        <Avatar className="h-12 w-12 ring-2 ring-background">
                          <AvatarImage src={`https://i.pravatar.cc/150?img=${group.id}`} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            GP
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs">
                          {group.members}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{group.name}</h3>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {group.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground truncate mt-0.5">
                            {group.lastMessage}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={cn(
        "flex-1 flex flex-col min-w-0 bg-dot-pattern",
        !isMobileView && !selectedChat ? "hidden lg:flex" : "flex"
      )}>
        {selectedChatData ? (
          <>
            {/* Chat Header */}
            <div className="border-b p-4 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden mr-2"
                  onClick={handleBackToList}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="relative">
                  <Avatar className="h-12 w-12 ring-2 ring-background">
                    <AvatarImage src={selectedChatData.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {selectedChatData.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  {selectedChatData.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-background" />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="font-medium truncate">{selectedChatData.name}</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <span className={cn(
                      "h-2 w-2 rounded-full",
                      selectedChatData.online ? "bg-green-500" : "bg-muted-foreground"
                    )} />
                    {selectedChatData.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4 max-w-3xl mx-auto">
                {messages.map((message) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={message.id}
                    className={cn(
                      "flex gap-3",
                      message.isSender ? "justify-end" : "justify-start"
                    )}
                  >
                    {!message.isSender && (
                      <Avatar className="h-8 w-8 lg:h-10 lg:w-10">
                        <AvatarImage src={message.avatar} />
                        <AvatarFallback>{message.sender.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className={cn(
                      "max-w-[85%] lg:max-w-[70%]",
                      message.isSender ? "items-end" : "items-start"
                    )}>
                      <div className={cn(
                        "rounded-2xl p-3 shadow-sm",
                        message.isSender 
                          ? "bg-primary text-primary-foreground rounded-br-none" 
                          : "bg-card rounded-bl-none"
                      )}>
                        <p className="break-words">{message.content}</p>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 px-1">
                        {message.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="border-t p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex items-center gap-2 max-w-3xl mx-auto bg-muted/50 p-2 rounded-full">
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground hidden sm:inline-flex">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground hidden sm:inline-flex">
                    <Image className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
                    <Smile className="h-5 w-5" />
                  </Button>
                </div>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button size="sm" className="rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <p>Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
