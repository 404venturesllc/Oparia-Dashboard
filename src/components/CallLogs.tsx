import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Phone, 
  Clock, 
  Users, 
  TrendingUp, 
  Star,
  Sparkles,
  Search,
  Filter,
  Play,
  Download,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed
} from "lucide-react";
import { Input } from "./ui/input";

// Mock data for call logs
const callMetrics = [
  { label: "Total Calls", value: "1,234", change: "+8%", changeType: "positive", icon: Phone },
  { label: "Avg Call Duration", value: "4m 23s", change: "+32s", changeType: "positive", icon: Clock },
  { label: "Answer Rate", value: "87.3%", change: "+2.1%", changeType: "positive", icon: PhoneCall },
  { label: "Satisfaction Rate", value: "4.8", change: "+0.3", changeType: "positive", icon: Star },
];

const callLogs = [
  {
    id: "CL-001",
    customer: "Jennifer Wilson",
    phone: "+1 (555) 123-4567",
    startTime: "2024-01-15 15:45",
    duration: "8m 34s",
    type: "inbound",
    status: "completed",
    rating: 5,
    purpose: "Consultation Booking",
    agent: "Sarah Johnson",
    recording: true
  },
  {
    id: "CL-002", 
    customer: "Robert Taylor",
    phone: "+1 (555) 987-6543",
    startTime: "2024-01-15 14:22",
    duration: "12m 15s",
    type: "outbound",
    status: "completed",
    rating: 4,
    purpose: "Follow-up Call",
    agent: "Mike Davis",
    recording: true
  },
  {
    id: "CL-003",
    customer: "Lisa Anderson",
    phone: "+1 (555) 456-7890", 
    startTime: "2024-01-15 13:30",
    duration: "0m 00s",
    type: "inbound",
    status: "missed",
    rating: null,
    purpose: "Unknown",
    agent: null,
    recording: false
  },
  {
    id: "CL-004",
    customer: "James Brown",
    phone: "+1 (555) 321-0987",
    startTime: "2024-01-15 12:18",
    duration: "6m 42s", 
    type: "inbound",
    status: "completed",
    rating: 5,
    purpose: "Service Inquiry",
    agent: "Emma Wilson",
    recording: true
  },
  {
    id: "CL-005",
    customer: "Michelle Garcia",
    phone: "+1 (555) 654-3210",
    startTime: "2024-01-15 11:55",
    duration: "15m 23s",
    type: "outbound",
    status: "completed",
    rating: 4,
    purpose: "Appointment Reminder",
    agent: "Sarah Johnson",
    recording: true
  }
];

const callPurposes = [
  { purpose: "Consultation Booking", count: 423, percentage: 40, trend: "+12%" },
  { purpose: "Service Inquiries", count: 318, percentage: 30, trend: "+5%" },
  { purpose: "Follow-up Calls", count: 212, percentage: 20, trend: "+8%" },
  { purpose: "Appointment Reminders", count: 148, percentage: 14, trend: "+15%" },
  { purpose: "Technical Support", count: 89, percentage: 8, trend: "-2%" },
];

const timeSlots = [
  { time: "9:00 AM", calls: 45, percentage: 12 },
  { time: "10:00 AM", calls: 78, percentage: 21 },
  { time: "11:00 AM", calls: 92, percentage: 25 },
  { time: "12:00 PM", calls: 67, percentage: 18 },
  { time: "1:00 PM", calls: 56, percentage: 15 },
  { time: "2:00 PM", calls: 89, percentage: 24 },
  { time: "3:00 PM", calls: 73, percentage: 20 },
  { time: "4:00 PM", calls: 34, percentage: 9 },
];

export function CallLogs() {
  const getCallTypeIcon = (type: string, status: string) => {
    if (status === 'missed') {
      return <PhoneMissed className="w-4 h-4 text-red-500" />;
    }
    switch (type) {
      case 'inbound':
        return <PhoneIncoming className="w-4 h-4 text-green-500" />;
      case 'outbound':
        return <PhoneOutgoing className="w-4 h-4 text-blue-500" />;
      default:
        return <Phone className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-100 text-green-700">Completed</Badge>;
      case 'missed':
        return <Badge variant="destructive">Missed</Badge>;
      case 'busy':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Busy</Badge>;
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
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Call Logs</h1>
          <p className="text-gray-700">Monitor phone conversations, track call performance, and analyze communication patterns with customers.</p>
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
        {callMetrics.map((metric) => {
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
        {/* Call List */}
        <div className="xl:col-span-2">
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692]/20 to-[#4EA5EF]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#4C3692]" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">Recent Calls</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      placeholder="Search calls..." 
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
                      <TableHead className="text-xs sm:text-sm text-gray-600">Type</TableHead>
                      <TableHead className="text-xs sm:text-sm hidden md:table-cell text-gray-600">Duration</TableHead>
                      <TableHead className="text-xs sm:text-sm hidden lg:table-cell text-gray-600">Purpose</TableHead>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Status</TableHead>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Rating</TableHead>
                      <TableHead className="text-xs sm:text-sm text-gray-600">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {callLogs.map((call) => (
                      <TableRow key={call.id}>
                        <TableCell className="text-xs sm:text-sm">
                          <div>
                            <div className="font-medium text-gray-900">{call.customer}</div>
                            <div className="text-xs text-gray-500">{call.phone}</div>
                            <div className="text-xs text-gray-400">{call.startTime}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          <div className="flex items-center gap-2">
                            {getCallTypeIcon(call.type, call.status)}
                            <span className="capitalize text-gray-700">{call.type}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm hidden md:table-cell text-gray-700">
                          {call.duration}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm hidden lg:table-cell">
                          <div>
                            <div className="font-medium text-gray-900">{call.purpose}</div>
                            {call.agent && <div className="text-xs text-gray-500">Agent: {call.agent}</div>}
                          </div>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {getStatusBadge(call.status)}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          {getRatingStars(call.rating)}
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          <div className="flex items-center gap-1">
                            {call.recording && (
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                <Play className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          {/* Call Purposes */}
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692]/20 to-[#4EA5EF]/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#4C3692]" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">Call Purposes</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {callPurposes.map((purpose, index) => (
                <div key={purpose.purpose} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{purpose.purpose}</span>
                      <span className={`text-xs ${purpose.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {purpose.trend}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{purpose.count}</div>
                      <div className="text-xs text-gray-500">{purpose.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${purpose.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Peak Hours */}
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692]/20 to-[#4EA5EF]/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#4C3692]" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">Peak Call Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {timeSlots.map((slot) => (
                <div key={slot.time} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{slot.time}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] h-2 rounded-full" 
                        style={{ width: `${slot.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">{slot.calls}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Call Performance Insights */}
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
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
                      <p>• <span className="font-medium">Answer rate</span> improved to 87.3% (+2.1% vs last month)</p>
                      <p>• <span className="font-medium">Peak hours</span> are 11 AM - 2 PM with highest conversion</p>
                      <p>• <span className="font-medium">Consultation bookings</span> drive 40% of all calls</p>
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