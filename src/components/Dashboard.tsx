import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { 
  MoreHorizontal,
  UserPlus,
  Calendar,
  Phone,
  Star,
  TrendingUp,
  TrendingDown,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  AreaChart,
  Area,
  ReferenceDot
} from "recharts";
import { useState } from "react";

// Enhanced conversions data with more realistic values
const conversionsData = [
  { period: 'Week 1', chatbotLeads: 18, phoneAgentLeads: 12, manualFormLeads: 8 },
  { period: 'Week 2', chatbotLeads: 24, phoneAgentLeads: 15, manualFormLeads: 6 },
  { period: 'Week 3', chatbotLeads: 19, phoneAgentLeads: 18, manualFormLeads: 9 },
  { period: 'Week 4', chatbotLeads: 32, phoneAgentLeads: 14, manualFormLeads: 11 },
  { period: 'Week 5', chatbotLeads: 28, phoneAgentLeads: 22, manualFormLeads: 7 },
  { period: 'Week 6', chatbotLeads: 26, phoneAgentLeads: 19, manualFormLeads: 12 }
];

// Bookings data for toggle view
const bookingsData = [
  { period: 'Week 1', chatbotLeads: 12, phoneAgentLeads: 8, manualFormLeads: 5 },
  { period: 'Week 2', chatbotLeads: 16, phoneAgentLeads: 11, manualFormLeads: 4 },
  { period: 'Week 3', chatbotLeads: 14, phoneAgentLeads: 13, manualFormLeads: 6 },
  { period: 'Week 4', chatbotLeads: 22, phoneAgentLeads: 9, manualFormLeads: 8 },
  { period: 'Week 5', chatbotLeads: 18, phoneAgentLeads: 15, manualFormLeads: 5 },
  { period: 'Week 6', chatbotLeads: 17, phoneAgentLeads: 12, manualFormLeads: 9 }
];

// Enhanced automation hours data for stacked bar chart
const automationHoursData = [
  { week: 'Week 1', chatbot: 3, aiCalls: 2, reviews: 1 },
  { week: 'Week 2', chatbot: 4, aiCalls: 3, reviews: 2 },
  { week: 'Week 3', chatbot: 5, aiCalls: 4, reviews: 2 },
  { week: 'Week 4', chatbot: 6, aiCalls: 5, reviews: 3 },
  { week: 'Week 5', chatbot: 4, aiCalls: 4, reviews: 2 },
  { week: 'Week 6', chatbot: 5, aiCalls: 4, reviews: 2 },
  { week: 'Week 7', chatbot: 6, aiCalls: 5, reviews: 3 },
  { week: 'Week 8', chatbot: 7, aiCalls: 6, reviews: 3 },
  { week: 'Week 9', chatbot: 5, aiCalls: 5, reviews: 2 },
  { week: 'Week 10', chatbot: 6, aiCalls: 5, reviews: 3 },
  { week: 'Week 11', chatbot: 4, aiCalls: 4, reviews: 2 },
  { week: 'Week 12', chatbot: 7, aiCalls: 6, reviews: 3 }
];

const kpiData = [
  {
    title: "Leads Captured",
    value: "152",
    subtitle: "this month",
    change: "+18%",
    changeType: "positive" as const,
    period: "vs last month",
    icon: UserPlus
  },
  {
    title: "Appointments Booked",
    value: "67",
    subtitle: "this month", 
    change: "+12%",
    changeType: "positive" as const,
    period: "vs last month",
    icon: Calendar
  },
  {
    title: "Calls Answered by AI",
    value: "204",
    subtitle: "calls handled",
    change: "+30%",
    changeType: "positive" as const,
    period: "vs last month",
    icon: Phone
  },
  {
    title: "Review Requests Sent",
    value: "89",
    subtitle: "requests → 32 new Google reviews",
    change: "+5%",
    changeType: "positive" as const,
    period: "vs last month",
    icon: Star
  }
];

const automationData = [
  { title: "Email Campaigns", value: "+30%", description: "Increased open rates" },
  { title: "Lead Generation", value: "2.4x", description: "Conversion improvement" },
  { title: "Sales Pipeline", value: "$125K", description: "Revenue attributed" }
];

const recentConversations = [
  { 
    id: 1, 
    channel: "chatbot", 
    name: "Sarah Johnson", 
    summary: "Requested weight-loss info", 
    status: "Lead Captured", 
    timestamp: "2h ago" 
  },
  { 
    id: 2, 
    channel: "phone", 
    name: "Michael Chen", 
    summary: "Asked about pricing", 
    status: "Booked Consult", 
    timestamp: "4h ago" 
  },
  { 
    id: 3, 
    channel: "review", 
    name: "Emily Davis", 
    summary: "Left a 5-star Google Review", 
    status: "Review Left", 
    timestamp: "1d ago" 
  }
];

const salesOverviewData = [
  { month: 'Jan', visitors: 18420 },
  { month: 'Feb', visitors: 22890 },
  { month: 'Mar', visitors: 19750 },
  { month: 'Apr', visitors: 26340 },
  { month: 'May', visitors: 24180 },
  { month: 'Jun', visitors: 28650 }
];

export function Dashboard() {
  const [isBookingsView, setIsBookingsView] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Welcome back, Brendan</h1>
          <p className="text-gray-700">Monitor your smartest ROI and recent website traffic.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20">
            Export data
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] hover:from-[#4C3692]/90 hover:to-[#4EA5EF]/90 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Ask AI
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm font-medium">{kpi.title}</p>
                  <p className="text-2xl lg:text-3xl font-semibold text-gray-900">{kpi.value}</p>
                  <p className="text-gray-500 text-sm">{kpi.subtitle}</p>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <kpi.icon className="w-5 h-5 text-blue-500" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`font-medium ${kpi.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                  {kpi.change}
                </span>
                <span className="text-gray-500">{kpi.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Conversions Over Time - Large Chart */}
        <div className="xl:col-span-3">
          <Card className="rounded-2xl border-0 bg-white backdrop-blur-sm hover:bg-white/95 transition-all duration-200 border border-gray-100 shadow-lg hover:shadow-xl h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-1">Conversions Over Time</CardTitle>
                  <p className="text-gray-600 text-sm">Last 6 weeks</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Leads</span>
                    <Switch 
                      checked={isBookingsView}
                      onCheckedChange={setIsBookingsView}
                      className="data-[state=checked]:bg-purple-600"
                    />
                    <span className="text-sm text-gray-600">Bookings</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 bg-[rgba(255,255,255,0)] flex-1 flex flex-col">
              <div className="flex-1 min-h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={isBookingsView ? bookingsData : conversionsData} margin={{ top: 20, right: 80, left: 20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="chatbotGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.3}/>
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.05}/>
                      </linearGradient>
                      <linearGradient id="phoneAgentGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.25}/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.05}/>
                      </linearGradient>
                      <linearGradient id="manualFormGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.2}/>
                        <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="2 4" stroke="rgba(0,0,0,0.06)" vertical={false} />
                    <XAxis 
                      dataKey="period" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }} 
                      tickFormatter={(value) => value.replace('Week ', 'Week ')}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#374151', fontSize: 12, fontWeight: 600 }} 
                      label={{ value: 'Leads', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#374151', fontSize: '13px', fontWeight: 600 } }}
                      tickCount={4}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        color: '#374151',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                      }}
                      labelStyle={{ color: '#6B7280', fontSize: '12px', fontWeight: 500 }}
                    />
                    
                    {/* Manual Form Leads - Thinnest line, lowest priority */}
                    <Area
                      type="monotone"
                      dataKey="manualFormLeads"
                      stroke="#4F46E5"
                      strokeWidth={2}
                      fill="url(#manualFormGradient)"
                      dot={{ fill: '#4F46E5', strokeWidth: 2, r: 3 }}
                      activeDot={{ r: 5, stroke: '#4F46E5', strokeWidth: 2, fill: 'white' }}
                    />
                    
                    {/* Phone Agent Leads - Medium line */}
                    <Area
                      type="monotone"
                      dataKey="phoneAgentLeads"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      fill="url(#phoneAgentGradient)"
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 3 }}
                      activeDot={{ r: 5, stroke: '#3B82F6', strokeWidth: 2, fill: 'white' }}
                    />
                    
                    {/* Chatbot Leads - Bold line, primary focus */}
                    <Area
                      type="monotone"
                      dataKey="chatbotLeads"
                      stroke="#38BDF8"
                      strokeWidth={4}
                      fill="url(#chatbotGradient)"
                      dot={{ fill: '#38BDF8', strokeWidth: 3, r: 4 }}
                      activeDot={{ r: 6, stroke: '#38BDF8', strokeWidth: 3, fill: 'white' }}
                    />
                    
                    {/* End point labels */}
                    {(isBookingsView ? bookingsData : conversionsData).length > 0 && (
                      <>
                        <ReferenceDot
                          x="Week 6"
                          y={(isBookingsView ? bookingsData : conversionsData)[5]?.chatbotLeads}
                          r={0}
                          label={<text x={0} y={0} dx={10} dy={-5} fontSize="12" fontWeight="600" fill="#38BDF8">{(isBookingsView ? bookingsData : conversionsData)[5]?.chatbotLeads} leads</text>}
                        />
                        <ReferenceDot
                          x="Week 6"
                          y={(isBookingsView ? bookingsData : conversionsData)[5]?.phoneAgentLeads}
                          r={0}
                          label={<text x={0} y={0} dx={10} dy={-5} fontSize="12" fontWeight="600" fill="#3B82F6">{(isBookingsView ? bookingsData : conversionsData)[5]?.phoneAgentLeads} leads</text>}
                        />
                        <ReferenceDot
                          x="Week 6"
                          y={(isBookingsView ? bookingsData : conversionsData)[5]?.manualFormLeads}
                          r={0}
                          label={<text x={0} y={0} dx={10} dy={-5} fontSize="12" fontWeight="600" fill="#4F46E5">{(isBookingsView ? bookingsData : conversionsData)[5]?.manualFormLeads} leads</text>}
                        />
                      </>
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-center gap-8 mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-700 text-sm font-medium">Chatbot Leads</span>
                  <span className="text-gray-500 text-xs">(Primary)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm font-medium">Phone Agent Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700 text-sm font-medium">Manual Form Leads</span>
                  <span className="text-gray-500 text-xs">(Secondary)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="xl:col-span-2 space-y-6">
          {/* Hours Saved by Automation Card */}
          <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">Hours Saved by Automation</CardTitle>
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-gray-900">126 hours saved</p>
                <p className="text-green-500 text-sm font-medium">+15% vs last month</p>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={automationHoursData}>
                    <defs>
                      <linearGradient id="chatbotBarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.9}/>
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.6}/>
                      </linearGradient>
                      <linearGradient id="aiCallsBarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9}/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.6}/>
                      </linearGradient>
                      <linearGradient id="reviewsBarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.9}/>
                        <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.6}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis 
                      dataKey="week" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6B7280', fontSize: 11 }} 
                      tickFormatter={(value) => value.replace('Week ', 'W')}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#6B7280', fontSize: 11 }} 
                      label={{ value: 'Hours', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280', fontSize: '11px' } }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '12px'
                      }}
                      formatter={(value, name) => [
                        `${value} hrs`, 
                        name === 'chatbot' ? 'Chatbot' : name === 'aiCalls' ? 'AI Calls' : 'Reviews'
                      ]}
                      labelFormatter={(label) => label}
                    />
                    <Bar
                      dataKey="reviews"
                      stackId="1"
                      fill="url(#reviewsBarGradient)"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="aiCalls"
                      stackId="1"
                      fill="url(#aiCallsBarGradient)"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="chatbot"
                      stackId="1"
                      fill="url(#chatbotBarGradient)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">52 hrs</p>
                        <p className="text-gray-600 text-xs">Chatbot</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-green-500 text-xs font-medium">+12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">48 hrs</p>
                        <p className="text-gray-600 text-xs">AI Calls</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-green-500 text-xs font-medium">+8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      <div>
                        <p className="text-gray-900 text-sm font-semibold">26 hrs</p>
                        <p className="text-gray-600 text-xs">Reviews</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingDown className="w-3 h-3 text-red-500" />
                      <span className="text-red-500 text-xs font-medium">–2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Automation Overview */}
          <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">Automation overview</CardTitle>
                  <p className="text-green-500 text-sm">+30% this month</p>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              {automationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-gray-900 text-sm font-medium">{item.title}</p>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-900 font-semibold">{item.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Website Visitors Chart */}
        <div className="xl:col-span-3">
          <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">Website Visitors</CardTitle>
                  <p className="text-gray-600 text-sm">+2,847 this week</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-semibold text-gray-900">28,650</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                    <span className="text-gray-600">Direct</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Organic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-600">Social</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Referral</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesOverviewData}>
                    <defs>
                      <linearGradient id="visitorsBarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9}/>
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.6}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none',
                        borderRadius: '12px',
                        color: 'white'
                      }}
                      formatter={(value) => [`${value.toLocaleString()} visitors`, 'Visitors']}
                    />
                    <Bar dataKey="visitors" fill="url(#visitorsBarGradient)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-gray-900 text-lg font-semibold">156k</p>
                  <p className="text-gray-600 text-sm">Page Views</p>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-semibold">2.8m</p>
                  <p className="text-gray-600 text-sm">Sessions</p>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-semibold">3:42</p>
                  <p className="text-gray-600 text-sm">Avg Duration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Conversations */}
        <div className="xl:col-span-2">
          <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">Recent conversations</CardTitle>
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20 text-xs">
                  <Sparkles className="w-3 h-3 mr-1.5" />
                  Ask AI
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              {recentConversations.map((conversation, index) => {
                const getChannelIcon = (channel: string) => {
                  switch (channel) {
                    case 'chatbot':
                      return <MessageCircle className="w-4 h-4 text-blue-500" />;
                    case 'phone':
                      return <Phone className="w-4 h-4 text-blue-500" />;
                    case 'review':
                      return <Star className="w-4 h-4 text-blue-500" />;
                    default:
                      return <MessageCircle className="w-4 h-4 text-blue-500" />;
                  }
                };

                const getStatusColor = (status: string) => {
                  switch (status) {
                    case 'Lead Captured':
                      return 'bg-green-500/20 text-green-600';
                    case 'Booked Consult':
                      return 'bg-blue-500/20 text-blue-600';
                    case 'Review Left':
                      return 'bg-purple-500/20 text-purple-600';
                    default:
                      return 'bg-gray-500/20 text-gray-600';
                  }
                };

                return (
                  <div key={conversation.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        {getChannelIcon(conversation.channel)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 text-sm font-medium">{conversation.name}</p>
                        <p className="text-gray-600 text-xs truncate">{conversation.summary}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={`text-xs ${getStatusColor(conversation.status)}`}>
                        {conversation.status}
                      </Badge>
                      <p className="text-gray-500 text-xs font-medium">{conversation.timestamp}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}