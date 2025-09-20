import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Sparkles, TrendingUp, Users, Zap, DollarSign, Eye } from "lucide-react";

// Mock data for high-level analytics overview
const monthlyData = [
  { month: 'Jan', visitors: 12400, leads: 340, revenue: 15600, automations: 890 },
  { month: 'Feb', visitors: 13200, leads: 390, revenue: 18200, automations: 920 },
  { month: 'Mar', visitors: 14800, leads: 420, revenue: 21400, automations: 980 },
  { month: 'Apr', visitors: 16200, leads: 480, revenue: 24800, automations: 1050 },
  { month: 'May', visitors: 18400, leads: 520, revenue: 28200, automations: 1120 },
  { month: 'Jun', visitors: 19800, leads: 580, revenue: 32400, automations: 1200 },
];

const channelData = [
  { name: 'Organic Search', value: 42, visitors: 7728, color: '#3B82F6' },
  { name: 'Direct', value: 26, visitors: 4784, color: '#8B5CF6' },
  { name: 'Paid Search', value: 18, visitors: 3312, color: '#06B6D4' },
  { name: 'Social Media', value: 9, visitors: 1656, color: '#10B981' },
  { name: 'Email', value: 5, visitors: 920, color: '#F59E0B' },
];

const conversionFunnel = [
  { stage: 'Visitors', count: 18400, percentage: 100 },
  { stage: 'Engaged', count: 7360, percentage: 40 },
  { stage: 'Leads', count: 1472, percentage: 8 },
  { stage: 'Qualified', count: 588, percentage: 3.2 },
  { stage: 'Customers', count: 147, percentage: 0.8 },
];

export function Analytics() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Analytics Overview</h1>
          <p className="text-gray-700">Complete view of your business performance across all channels and touchpoints.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20">
            Export Report
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] hover:from-[#4C3692]/90 hover:to-[#4EA5EF]/90 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Ask AI
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Total Visitors</p>
                <p className="text-2xl font-semibold text-gray-900">18,400</p>
                <p className="text-xs text-green-600">+24% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Monthly Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">$32,400</p>
                <p className="text-xs text-green-600">+15% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">New Leads</p>
                <p className="text-2xl font-semibold text-gray-900">580</p>
                <p className="text-xs text-green-600">+11% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Automation Runs</p>
                <p className="text-2xl font-semibold text-gray-900">1,200</p>
                <p className="text-xs text-green-600">+7% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Growth Trends */}
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Growth Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white'
                    }}
                  />
                  <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 0, r: 4 }} />
                  <Line type="monotone" dataKey="leads" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', strokeWidth: 0, r: 4 }} />
                  <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 0, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-6">
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {channelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0,0,0,0.8)', 
                        border: 'none',
                        borderRadius: '12px',
                        color: 'white'
                      }}
                      formatter={(value) => [`${value}%`, 'Percentage']} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {channelData.map((source) => (
                <div key={source.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: source.color }}
                    ></div>
                    <span className="font-medium text-sm text-gray-700">{source.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-sm text-gray-900">{source.value}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Conversion Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionFunnel.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{stage.stage}</span>
                  <div className="text-right">
                    <span className="font-semibold text-gray-900">{stage.count.toLocaleString()}</span>
                    <span className="text-gray-600 text-sm ml-2">({stage.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-[#4C3692] to-[#4EA5EF]" 
                    style={{ width: `${stage.percentage}%` }}
                  ></div>
                </div>
                {index < conversionFunnel.length - 1 && (
                  <div className="text-center text-gray-500 text-xs mt-1">
                    ↓ {((conversionFunnel[index + 1].count / stage.count) * 100).toFixed(1)}% conversion
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Website Analytics</h3>
            <p className="text-gray-600 text-sm">Deep dive into traffic, behavior, and conversions</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Automation Analytics</h3>
            <p className="text-gray-600 text-sm">Monitor workflow performance and efficiency</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Review Analytics</h3>
            <p className="text-gray-600 text-sm">Track sentiment and customer feedback</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}