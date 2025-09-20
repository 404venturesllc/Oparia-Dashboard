import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { 
  Sparkles, 
  Users, 
  MousePointer, 
  Clock, 
  TrendingDown, 
  Target, 
  Eye,
  Globe,
  Smartphone,
  Search,
  DollarSign,
  FileText,
  Zap
} from "lucide-react";

// Mock data
const trafficSources = [
  { 
    name: 'Organic', 
    value: 42, 
    visitors: 7728, 
    sessions: 9420, 
    revenue: '$12,340', 
    cr: '4.2%',
    trend: '+18%',
    trendUp: true,
    avgSessionDuration: '3:45',
    bounceRate: '38%',
    color: '#38BDF8',
    icon: '🔍'
  },
  { 
    name: 'Direct', 
    value: 26, 
    visitors: 4784, 
    sessions: 5890, 
    revenue: '$8,920', 
    cr: '5.1%',
    trend: '+12%',
    trendUp: true,
    avgSessionDuration: '4:12',
    bounceRate: '32%',
    color: '#3B82F6',
    icon: '🏠'
  },
  { 
    name: 'Paid', 
    value: 18, 
    visitors: 3312, 
    sessions: 4120, 
    revenue: '$6,780', 
    cr: '3.8%',
    trend: '-2%',
    trendUp: false,
    avgSessionDuration: '2:58',
    bounceRate: '45%',
    color: '#4F46E5',
    icon: '💰'
  },
  { 
    name: 'Social', 
    value: 9, 
    visitors: 1656, 
    sessions: 1940, 
    revenue: '$1,240', 
    cr: '2.1%',
    trend: '+28%',
    trendUp: true,
    avgSessionDuration: '2:15',
    bounceRate: '58%',
    color: '#8B5CF6',
    icon: '📱'
  },
  { 
    name: 'Referral', 
    value: 5, 
    visitors: 920, 
    sessions: 1180, 
    revenue: '$890', 
    cr: '3.2%',
    trend: '+8%',
    trendUp: true,
    avgSessionDuration: '3:22',
    bounceRate: '42%',
    color: '#06B6D4',
    icon: '🔗'
  },
];

const topPages = [
  { page: '/', views: 8420, unique: 6230, avgTime: '2:34', exitRate: '45%', cr: '3.2%' },
  { page: '/pricing', views: 3240, unique: 2890, avgTime: '4:12', exitRate: '32%', cr: '8.1%' },
  { page: '/book', views: 2140, unique: 1920, avgTime: '1:45', exitRate: '28%', cr: '12.3%' },
  { page: '/services/laser', views: 1890, unique: 1650, avgTime: '3:22', exitRate: '38%', cr: '4.7%' },
  { page: '/blog/how-to-prepare', views: 1240, unique: 1100, avgTime: '5:18', exitRate: '55%', cr: '1.2%' },
];

const campaigns = [
  { 
    campaign: 'Google Ads - Laser Hair Removal', 
    spend: '$2,340', 
    clicks: 1240, 
    cpc: '$1.89', 
    sessions: 892, 
    leads: 45, 
    cr: '5.0%', 
    revenue: '$4,500', 
    roas: '1.92x' 
  },
  { 
    campaign: 'Facebook - Beauty Services', 
    spend: '$1,890', 
    clicks: 2340, 
    cpc: '$0.81', 
    sessions: 1890, 
    leads: 38, 
    cr: '2.0%', 
    revenue: '$3,800', 
    roas: '2.01x' 
  },
  { 
    campaign: 'Google Ads - Skincare', 
    spend: '$890', 
    clicks: 450, 
    cpc: '$1.98', 
    sessions: 380, 
    leads: 12, 
    cr: '3.2%', 
    revenue: '$1,200', 
    roas: '1.35x' 
  },
];

const deviceData = [
  { device: 'Desktop', percentage: 52, visitors: 9568, sessions: 11617, avgTime: '4:12', cr: '3.8%' },
  { device: 'Mobile', percentage: 41, visitors: 7544, sessions: 9180, avgTime: '2:48', cr: '2.9%' },
  { device: 'Tablet', percentage: 7, visitors: 1288, sessions: 1543, avgTime: '3:35', cr: '3.1%' },
];

const countryData = [
  { country: 'United States', flag: '🇺🇸', percentage: 67, visitors: 12328, revenue: '$8,240' },
  { country: 'Canada', flag: '🇨🇦', percentage: 18, visitors: 3312, revenue: '$2,180' },
  { country: 'United Kingdom', flag: '🇬🇧', percentage: 8, visitors: 1472, revenue: '$1,120' },
  { country: 'Australia', flag: '🇦🇺', percentage: 4, visitors: 736, revenue: '$580' },
  { country: 'Germany', flag: '🇩🇪', percentage: 2, visitors: 368, revenue: '$280' },
  { country: 'Others', flag: '🌍', percentage: 1, visitors: 184, revenue: '$140' },
];

const browserData = [
  { name: 'Chrome', value: 68, color: '#4285f4' },
  { name: 'Safari', value: 19, color: '#34aadc' },
  { name: 'Firefox', value: 8, color: '#ff9500' },
  { name: 'Edge', value: 4, color: '#0078d4' },
  { name: 'Other', value: 1, color: '#9ca3af' },
];

export function WebsiteAnalytics() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Website Analytics</h1>
          <p className="text-gray-700">Deep dive into traffic, behavior, conversions, and campaign performance across all channels.</p>
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

      {/* KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Visitors</p>
                <p className="text-xl font-semibold text-gray-900">18,400</p>
                <p className="text-xs text-green-600">+24% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Sessions</p>
                <p className="text-xl font-semibold text-gray-900">22,340</p>
                <p className="text-xs text-green-600">+18% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <MousePointer className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Avg Time</p>
                <p className="text-xl font-semibold text-gray-900">3:24</p>
                <p className="text-xs text-green-600">+0:12 improvement</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Bounce Rate</p>
                <p className="text-xl font-semibold text-gray-900">42.3%</p>
                <p className="text-xs text-red-600">+2.1% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Conversion Rate</p>
                <p className="text-xl font-semibold text-gray-900">3.2%</p>
                <p className="text-xs text-green-600">+0.4% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Top CTA CTR</p>
                <p className="text-xl font-semibold text-gray-900">8.7%</p>
                <p className="text-xs text-green-600">+1.2% vs last month</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">Traffic Sources</CardTitle>
                  <p className="text-xs text-gray-500 mt-0.5">18,400 total visitors this month</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Avg CR</div>
                <div className="text-lg font-semibold text-gray-900">3.7%</div>
                <div className="text-xs text-green-600">+0.3% vs last month</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pie Chart */}
              <div className="flex items-center justify-center">
                <div className="h-48 w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={85}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255,255,255,0.95)', 
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '12px',
                          color: '#1F2937',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value, name) => [
                          `${value}% (${trafficSources.find(s => s.name === name)?.visitors.toLocaleString()} visitors)`, 
                          name
                        ]} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center Label */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Total</div>
                      <div className="text-lg font-semibold text-gray-900">18.4K</div>
                      <div className="text-xs text-green-600">+16%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-gray-700 mb-3">Performance Overview</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/30 rounded-xl p-3 border border-white/30">
                    <div className="text-xs text-gray-500">Best CR</div>
                    <div className="text-sm font-semibold text-gray-900">Direct</div>
                    <div className="text-xs text-green-600">5.1%</div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-3 border border-white/30">
                    <div className="text-xs text-gray-500">Highest Growth</div>
                    <div className="text-sm font-semibold text-gray-900">Social</div>
                    <div className="text-xs text-green-600">+28%</div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-3 border border-white/30">
                    <div className="text-xs text-gray-500">Top Revenue</div>
                    <div className="text-sm font-semibold text-gray-900">Organic</div>
                    <div className="text-xs text-green-600">$12.3K</div>
                  </div>
                  <div className="bg-white/30 rounded-xl p-3 border border-white/30">
                    <div className="text-xs text-gray-500">Longest Session</div>
                    <div className="text-sm font-semibold text-gray-900">Direct</div>
                    <div className="text-xs text-gray-600">4:12 avg</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm text-gray-700">Source Breakdown</h4>
                <div className="text-xs text-gray-500">vs last month</div>
              </div>
              
              <div className="space-y-3">
                {trafficSources.map((source) => (
                  <div key={source.name} className="bg-white/20 rounded-xl p-4 border border-white/20 hover:bg-white/30 transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{source.icon}</span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm text-gray-900">{source.name}</span>
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: source.color }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-500">{source.visitors.toLocaleString()} visitors • {source.value}% of total</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-900">{source.revenue}</div>
                          <div className={`text-xs ${source.trendUp ? 'text-green-600' : 'text-red-500'} flex items-center gap-1`}>
                            {source.trendUp ? '↗' : '↘'} {source.trend}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className="h-2 rounded-full transition-all duration-300" 
                        style={{ 
                          width: `${source.value}%`,
                          background: `linear-gradient(90deg, ${source.color}dd, ${source.color})`
                        }}
                      ></div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <div className="text-gray-500">Sessions</div>
                        <div className="font-medium text-gray-900">{source.sessions.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Conversion</div>
                        <div className="font-medium text-gray-900">{source.cr}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Avg Time</div>
                        <div className="font-medium text-gray-900">{source.avgSessionDuration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Bounce Rate</div>
                        <div className="font-medium text-gray-900">{source.bounceRate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insights */}
            <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-4 border border-blue-100/50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-medium text-sm text-gray-900 mb-1">Key Insights</h5>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>• <span className="font-medium">Organic traffic</span> is your top performer with 42% share and highest revenue</p>
                    <p>• <span className="font-medium">Social media</span> shows 28% growth - consider increasing investment</p>
                    <p>• <span className="font-medium">Direct traffic</span> has the best conversion rate at 5.1%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Device & Geography */}
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">Device & Geography</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Device Breakdown with Details */}
            <div>
              <h4 className="font-medium mb-4 text-sm text-gray-700 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Device Performance
              </h4>
              <div className="space-y-3">
                {deviceData.map((device) => (
                  <div key={device.device} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-medium text-sm text-gray-700">{device.device}</span>
                        <span className="text-xs text-gray-500">({device.visitors.toLocaleString()} visitors)</span>
                      </div>
                      <span className="font-semibold text-sm text-gray-900">{device.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 pl-4">
                      <div>
                        <span className="text-gray-500">Sessions:</span>
                        <span className="font-medium text-gray-700 ml-1">{device.sessions.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Avg Time:</span>
                        <span className="font-medium text-gray-700 ml-1">{device.avgTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">CR:</span>
                        <span className="font-medium text-gray-700 ml-1">{device.cr}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Browser Distribution */}
            <div>
              <h4 className="font-medium mb-3 text-sm text-gray-700 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Browser Distribution
              </h4>
              <div className="flex items-center justify-center mb-4">
                <div className="h-32 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={browserData}
                        cx="50%"
                        cy="50%"
                        innerRadius={20}
                        outerRadius={50}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {browserData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255,255,255,0.95)', 
                          border: '1px solid rgba(0,0,0,0.1)',
                          borderRadius: '8px',
                          color: '#1F2937',
                          fontSize: '12px'
                        }}
                        formatter={(value) => [`${value}%`, 'Share']} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {browserData.map((browser) => (
                  <div key={browser.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: browser.color }}
                      ></div>
                      <span className="text-gray-600">{browser.name}</span>
                    </div>
                    <span className="font-medium text-gray-900">{browser.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Countries with Revenue */}
            <div>
              <h4 className="font-medium mb-3 text-sm text-gray-700 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Geographic Performance
              </h4>
              <div className="space-y-2">
                {countryData.map((country) => (
                  <div key={country.country} className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm">{country.flag}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{country.country}</span>
                          <span className="text-xs text-gray-500">{country.visitors.toLocaleString()} visitors</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="w-20 bg-gray-200 rounded-full h-1">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-green-600 h-1 rounded-full" 
                              style={{ width: `${country.percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex items-center gap-3 text-xs">
                            <span className="font-medium text-gray-900">{country.percentage}%</span>
                            <span className="text-green-600 font-medium">{country.revenue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-green-600" />
            </div>
            <CardTitle className="text-lg font-semibold text-gray-900">Top Performing Pages</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Page</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Views</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden sm:table-cell text-gray-600">Unique</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden md:table-cell text-gray-600">Avg Time</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden lg:table-cell text-gray-600">Exit Rate</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">CR</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPages.map((page) => (
                  <TableRow key={page.page}>
                    <TableCell className="font-medium text-xs sm:text-sm max-w-32 truncate text-gray-900">{page.page}</TableCell>
                    <TableCell className="text-xs sm:text-sm text-gray-700">{page.views.toLocaleString()}</TableCell>
                    <TableCell className="text-xs sm:text-sm hidden sm:table-cell text-gray-700">{page.unique.toLocaleString()}</TableCell>
                    <TableCell className="text-xs sm:text-sm hidden md:table-cell text-gray-700">{page.avgTime}</TableCell>
                    <TableCell className="text-xs sm:text-sm hidden lg:table-cell text-gray-700">{page.exitRate}</TableCell>
                    <TableCell>
                      <Badge variant={parseFloat(page.cr) > 5 ? 'default' : 'secondary'} className="text-xs">
                        {page.cr}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns */}
      <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-yellow-600" />
            </div>
            <CardTitle className="text-lg font-semibold text-gray-900">Campaign Performance</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm min-w-48 text-gray-600">Campaign</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Spend</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden sm:table-cell text-gray-600">Clicks</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden md:table-cell text-gray-600">CPC</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden lg:table-cell text-gray-600">Sessions</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Leads</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">CR</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden sm:table-cell text-gray-600">Revenue</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">ROAS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-xs sm:text-sm max-w-48 text-gray-900">
                      <div className="truncate">{campaign.campaign}</div>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm text-gray-700">{campaign.spend}</TableCell>
                    <TableCell className="text-xs sm:text-sm hidden sm:table-cell text-gray-700">{campaign.clicks.toLocaleString()}</TableCell>
                    <TableCell className="text-xs sm:text-sm hidden md:table-cell text-gray-700">{campaign.cpc}</TableCell>
                    <TableCell className="text-xs sm:text-sm hidden lg:table-cell text-gray-700">{campaign.sessions.toLocaleString()}</TableCell>
                    <TableCell className="text-xs sm:text-sm text-gray-700">{campaign.leads}</TableCell>
                    <TableCell>
                      <Badge variant={parseFloat(campaign.cr) > 3 ? 'default' : 'secondary'} className="text-xs">
                        {campaign.cr}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm hidden sm:table-cell text-gray-700">{campaign.revenue}</TableCell>
                    <TableCell>
                      <Badge variant={parseFloat(campaign.roas) > 1.5 ? 'default' : 'destructive'} className="text-xs">
                        {campaign.roas}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* SEO & Performance Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Core Web Vitals</div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-700">FCP</span>
                  <Badge variant="default" className="bg-green-100 text-green-700 text-xs">1.2s</Badge>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-700">LCP</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 text-xs">2.8s</Badge>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-700">CLS</span>
                  <Badge variant="default" className="bg-green-100 text-green-700 text-xs">0.05</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Indexed Pages</p>
                <p className="text-2xl font-semibold text-gray-900">47</p>
                <p className="text-gray-500 text-xs">of 52 total pages</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Missing Meta Titles</p>
                <p className="text-2xl font-semibold text-gray-900">3</p>
                <p className="text-gray-500 text-xs">pages need attention</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Missing Descriptions</p>
                <p className="text-2xl font-semibold text-gray-900">7</p>
                <p className="text-gray-500 text-xs">pages need attention</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}