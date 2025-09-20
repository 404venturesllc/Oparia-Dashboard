import {
  Search,
  Calendar,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Sidebar } from "./Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface TopBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function TopBar({
  activeTab,
  onTabChange,
  sidebarOpen,
  setSidebarOpen,
}: TopBarProps) {
  return (
    <div className="h-16 sm:h-18 bg-white/95 backdrop-blur-md border-b border-gray-200/60 flex items-center justify-between px-6 sm:px-8 sticky top-0 z-40">
      {/* Left side - Mobile menu + Search */}
      <div className="flex items-center gap-3 sm:gap-6 flex-1">
        {/* Mobile Menu Button */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-xl border-gray-200/60 hover:border-gray-300 shadow-sm"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SheetTitle className="sr-only">
              Navigation Menu
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigate between different sections of the
              dashboard
            </SheetDescription>
            <Sidebar
              activeTab={activeTab}
              onTabChange={(tab) => {
                onTabChange(tab);
                setSidebarOpen(false);
              }}
            />
          </SheetContent>
        </Sheet>

        {/* Search */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search anything..."
            className="pl-11 bg-gray-50/80 border-0 rounded-xl text-sm h-10 placeholder:text-gray-500 focus:bg-white focus:shadow-sm transition-all"
          />
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Date Range Picker - Hidden on smallest screens */}
        <Button
          variant="outline"
          className="gap-2 rounded-xl hidden sm:flex border-gray-200/60 hover:border-gray-300 shadow-sm h-10 px-4"
        >
          <Calendar className="w-4 h-4" />
          <span className="hidden md:inline font-medium">Last 30 days</span>
          <span className="md:hidden font-medium">30d</span>
          <ChevronDown className="w-4 h-4" />
        </Button>

        {/* Profile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-gray-200/60 hover:border-gray-300 shadow-sm h-10 w-10"
            >
              <User className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52 rounded-xl shadow-lg border-gray-200/60">
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692] to-[#4EA5EF] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-medium">BL</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Brendan Lee</div>
                  <div className="text-xs text-gray-500">brendan@company.com</div>
                </div>
              </div>
            </div>
            <DropdownMenuItem className="rounded-lg mx-1 my-1">Profile Settings</DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg mx-1 my-1">Team Settings</DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg mx-1 my-1">Billing</DropdownMenuItem>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem className="rounded-lg mx-1 my-1 text-red-600">Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}