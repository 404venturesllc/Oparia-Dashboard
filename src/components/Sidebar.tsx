import {
  BarChart3,
  Users,
  Settings,
  TrendingUp,
  AlertTriangle,
  Zap,
  DollarSign,
  Home,
  ChevronDown,
  ChevronRight,
  Globe,
  Star,
  MessageCircle,
  MessageSquare,
  Phone,
  Bot,
} from "lucide-react";
import { cn } from "./ui/utils";
import { useState } from "react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    description: "Overview",
  },
  {
    id: "chat",
    label: "Chat",
    icon: Bot,
    description: "AI Assistant",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    description: "Website traffic",
    hasDropdown: true,
    subItems: [
      {
        id: "analytics-website",
        label: "Website",
        icon: Globe,
        description: "Traffic & engagement",
      },
      {
        id: "analytics-automations",
        label: "Automations",
        icon: Zap,
        description: "Workflow performance",
      },
      {
        id: "analytics-reviews",
        label: "Reviews",
        icon: Star,
        description: "Review insights",
      },
    ],
  },
  {
    id: "conversations",
    label: "Conversations",
    icon: MessageCircle,
    description: "Communication logs",
    hasDropdown: true,
    subItems: [
      {
        id: "conversations-chat",
        label: "Chat History",
        icon: MessageSquare,
        description: "Customer chat logs",
      },
      {
        id: "conversations-calls",
        label: "Call Logs",
        icon: Phone,
        description: "Phone call records",
      },
    ],
  },
  {
    id: "leads",
    label: "Leads",
    icon: Users,
    description: "Contact management",
  },
  {
    id: "automations",
    label: "Automations",
    icon: Zap,
    description: "Workflow health",
  },
  {
    id: "revenue",
    label: "Revenue",
    icon: DollarSign,
    description: "Financial tracking",
  },
  {
    id: "alerts",
    label: "Alerts",
    icon: AlertTriangle,
    description: "Notifications",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    description: "Configuration",
  },
];

export function Sidebar({
  activeTab,
  onTabChange,
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<
    Record<string, boolean>
  >({
    analytics: true, // Start with analytics expanded
    conversations: false, // Start with conversations collapsed
  });

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const isAnalyticsSubItemActive = (subItemId: string) => {
    return activeTab === subItemId;
  };

  const isAnalyticsActive = () => {
    return (
      activeTab === "analytics" ||
      activeTab.startsWith("analytics-")
    );
  };

  const isConversationsSubItemActive = (subItemId: string) => {
    return activeTab === subItemId;
  };

  const isConversationsActive = () => {
    return (
      activeTab === "conversations" ||
      activeTab.startsWith("conversations-")
    );
  };

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200/60 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#4C3692] to-[#4EA5EF] rounded-xl flex items-center justify-center shadow-sm">
            <img 
              src="/images/oparialogo.png" 
              alt="Oparia Logo" 
              className="w-7 h-7 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }} 
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              OPARIA
            </h1>
            <p className="text-xs text-gray-500">
              Business Analytics
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.hasDropdown) {
            const isDropdownActive =
              item.id === "analytics"
                ? isAnalyticsActive()
                : isConversationsActive();
            const subItemActiveChecker =
              item.id === "analytics"
                ? isAnalyticsSubItemActive
                : isConversationsSubItemActive;

            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group",
                    isDropdownActive
                      ? "bg-gradient-to-r from-[#4C3692]/10 to-[#4EA5EF]/10 text-[#4C3692] shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-colors",
                      isDropdownActive
                        ? "text-[#4C3692]"
                        : "text-gray-400 group-hover:text-gray-600",
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <div
                      className={cn(
                        "font-medium text-sm",
                        isDropdownActive
                          ? "text-[#4C3692]"
                          : "text-gray-700 group-hover:text-gray-900",
                      )}
                    >
                      {item.label}
                    </div>
                  </div>
                  {expandedItems[item.id] ? (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isDropdownActive
                          ? "text-[#4C3692]"
                          : "text-gray-400",
                      )}
                    />
                  ) : (
                    <ChevronRight
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isDropdownActive
                          ? "text-[#4C3692]"
                          : "text-gray-400",
                      )}
                    />
                  )}
                </button>
                {expandedItems[item.id] && (
                  <div className="ml-4 space-y-2 mt-2">
                    {item.subItems.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = subItemActiveChecker(
                        subItem.id,
                      );

                      return (
                        <button
                          key={subItem.id}
                          onClick={() =>
                            onTabChange(subItem.id)
                          }
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group",
                            isSubActive
                              ? "bg-gradient-to-r from-[#4C3692]/10 to-[#4EA5EF]/10 text-[#4C3692] shadow-sm"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          )}
                        >
                          <SubIcon
                            className={cn(
                              "w-5 h-5 transition-colors",
                              isSubActive
                                ? "text-[#4C3692]"
                                : "text-gray-400 group-hover:text-gray-600",
                            )}
                          />
                          <div className="flex-1 min-w-0">
                            <div
                              className={cn(
                                "font-medium text-sm",
                                isSubActive
                                  ? "text-[#4C3692]"
                                  : "text-gray-700 group-hover:text-gray-900",
                              )}
                            >
                              {subItem.label}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group",
                  isActive
                    ? "bg-gradient-to-r from-[#4C3692]/10 to-[#4EA5EF]/10 text-[#4C3692] shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive
                      ? "text-[#4C3692]"
                      : "text-gray-400 group-hover:text-gray-600",
                  )}
                />
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "font-medium text-sm",
                      isActive
                        ? "text-[#4C3692]"
                        : "text-gray-700 group-hover:text-gray-900",
                    )}
                  >
                    {item.label}
                  </div>
                </div>
              </button>
            );
          }
        })}
      </nav>

      {/* Mobile App CTA Card */}
      <div className="p-4">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4C3692] to-[#4EA5EF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 font-semibold text-sm mb-1">
                Download our Mobile App
              </h3>
              <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                Get real-time analytics & insights on the go
              </p>
              <button className="w-full bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] hover:from-[#4C3692]/90 hover:to-[#4EA5EF]/90 text-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200 shadow-sm flex items-center justify-center">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692] to-[#4EA5EF] rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              BL
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">
              Brendan Lee
            </div>
            <div className="text-xs text-gray-500">
              Premium Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}