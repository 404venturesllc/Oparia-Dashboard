import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  MessageSquare, 
  Clock, 
  Users, 
  TrendingUp, 
  Star,
  Sparkles,
  Search,
  Filter,
  Eye,
  Download
} from "lucide-react";
import { Input } from "./ui/input";

// Mock data for chat history
const chatMetrics = [
  { label: "Total Conversations", value: "2,847", change: "+12%", changeType: "positive", icon: MessageSquare },
  { label: "Avg Response Time", value: "2m 34s", change: "-18s", changeType: "positive", icon: Clock },
  { label: "Active Users", value: "348", change: "+24", changeType: "positive", icon: Users },
  { label: "Satisfaction Rate", value: "4.7", change: "+0.2", changeType: "positive", icon: Star },
];

const chatConversations = [
  {
    id: "CH-001",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    startTime: "2024-01-15 14:32",
    duration: "12m 45s",
    messages: 28,
    status: "resolved",
    rating: 5,
    topic: "Appointment Booking",
    agent: "AI Assistant"
  },
  {
    id: "CH-002", 
    customer: "Mike Chen",
    email: "m.chen@company.com",
    startTime: "2024-01-15 13:18",
    duration: "8m 12s",
    messages: 15,
    status: "resolved",
    rating: 4,
    topic: "Service Inquiry",
    agent: "Emma Wilson"
  },
  {
    id: "CH-003",
    customer: "Jessica Martinez",
    email: "jessica.m@outlook.com", 
    startTime: "2024-01-15 12:45",
    duration: "22m 18s",
    messages: 42,
    status: "escalated",
    rating: null,
    topic: "Technical Support",
    agent: "AI Assistant"
  },
  {
    id: "CH-004",
    customer: "David Thompson",
    email: "d.thompson@gmail.com",
    startTime: "2024-01-15 11:30",
    duration: "6m 33s", 
    messages: 12,
    status: "resolved",
    rating: 5,
    topic: "Pricing Question",
    agent: "AI Assistant"
  },
  {
    id: "CH-005",
    customer: "Anna Rodriguez",
    email: "anna.r@email.com",
    startTime: "2024-01-15 10:22",
    duration: "15m 07s",
    messages: 31,
    status: "resolved",
    rating: 4,
    topic: "Account Setup",
    agent: "Mark Stevens"
  }
];

const topTopics = [
  { topic: "Appointment Booking", count: 847, percentage: 35, trend: "+5%" },
  { topic: "Service Inquiries", count: 623, percentage: 26, trend: "+12%" },
  { topic: "Technical Support", count: 441, percentage: 18, trend: "-3%" },
  { topic: "Pricing Questions", count: 312, percentage: 13, trend: "+8%" },
  { topic: "Account Issues", count: 194, percentage: 8, trend: "-1%" },
];

export function ChatHistory() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <Badge variant="default" className="bg-green-100 text-green-700">Resolved</Badge>;
      case 'escalated':
        return <Badge variant="destructive">Escalated</Badge>;
      case 'active':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Active</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getRatingStars = (rating: number | null) => {
    if (!rating) return <span className="text-gray-400 text-sm">No rating</span>;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-xs text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Chat History</h1>
          <p className="text-gray-700">Track customer conversations, response times, and satisfaction ratings across all chat channels.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] hover:from-[#4C3692]/90 hover:to-[#4EA5EF]/90 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Ask AI
          </Button>
        </div>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {chatMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-600 text-xs font-medium">{metric.label}</p>
                    <p className="text-xl font-semibold text-gray-900">{metric.value}</p>
                    <p className={`text-xs ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change} vs last month
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4C3692]/20 to-[#4EA5EF]/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#4C3692]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Conversation List */}
        <div className="xl:col-span-2">
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692]/20 to-[#4EA5EF]/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-[#4C3692]" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">Recent Conversations</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      placeholder="Search conversations..." 
                      className="pl-9 pr-4 py-2 w-64 bg-white/50 border-white/30"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Customer</TableHead>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Topic</TableHead>
                      <TableHead className="text-xs sm:text-sm hidden md:table-cell text-gray-600">Duration</TableHead>
                      <TableHead className="text-xs sm:text-sm hidden lg:table-cell text-gray-600">Messages</TableHead>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Status</TableHead>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Rating</TableHead>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chatConversations.map((conversation) => (
                      <TableRow key={conversation.id}>
                        <TableCell className="text-xs sm:text-sm">
                          <div>
                            <div className="font-medium text-gray-900">{conversation.customer}</div>
                            <div className="text-xs text-gray-500">{conversation.email}</div>
                            <div className="text-xs text-gray-400">{conversation.startTime}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          <div>
                            <div className="font-medium text-gray-900">{conversation.topic}</div>
                            <div className="text-xs text-gray-500">Agent: {conversation.agent}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm hidden md:table-cell text-gray-700">
                          {conversation.duration}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm hidden lg:table-cell text-gray-700">
                          {conversation.messages}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {getStatusBadge(conversation.status)}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {getRatingStars(conversation.rating)}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Topics */}
        <div>
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692]/20 to-[#4EA5EF]/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#4C3692]" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">Top Discussion Topics</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {topTopics.map((topic, index) => (
                <div key={topic.topic} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{topic.topic}</span>
                      <span className={`text-xs ${topic.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {topic.trend}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{topic.count}</div>
                      <div className="text-xs text-gray-500">{topic.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${topic.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Chat Performance Insights */}
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl mt-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Performance Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-green-50/50 to-blue-50/50 rounded-xl p-4 border border-green-100/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692]/20 to-[#4EA5EF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#4C3692]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-gray-900 mb-1">Key Highlights</h5>
                    <div className="space-y-1 text-xs text-gray-600">
                      <p>• <span className="font-medium">AI Assistant</span> handles 68% of conversations with 4.6 avg rating</p>
                      <p>• <span className="font-medium">Response time</span> improved by 18 seconds this month</p>
                      <p>• <span className="font-medium">Appointment bookings</span> are the most common topic (35%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}