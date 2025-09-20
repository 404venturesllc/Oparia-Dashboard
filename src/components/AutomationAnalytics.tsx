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
  AreaChart,
  Area
} from 'recharts';
import { Sparkles, Zap, Clock, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

// Mock data for automation analytics
const performanceData = [
  { date: 'Mon', executions: 340, success: 336, failed: 4, avgTime: 1.2 },
  { date: 'Tue', executions: 420, success: 412, failed: 8, avgTime: 1.1 },
  { date: 'Wed', executions: 380, success: 375, failed: 5, avgTime: 1.3 },
  { date: 'Thu', executions: 450, success: 441, failed: 9, avgTime: 1.0 },
  { date: 'Fri', executions: 520, success: 508, failed: 12, avgTime: 1.4 },
  { date: 'Sat', executions: 290, success: 287, failed: 3, avgTime: 0.9 },
  { date: 'Sun', executions: 310, success: 306, failed: 4, avgTime: 1.1 },
];

const efficiencyData = [
  { week: 'Week 1', hoursSaved: 45.2, costSaved: 2260, efficiency: 94.5 },
  { week: 'Week 2', hoursSaved: 52.8, costSaved: 2640, efficiency: 96.1 },
  { week: 'Week 3', hoursSaved: 48.6, costSaved: 2430, efficiency: 95.2 },
  { week: 'Week 4', hoursSaved: 58.4, costSaved: 2920, efficiency: 97.3 },
];

const workflowData = [
  { name: 'Lead Processing', executions: 1240, success: 98.5, avgTime: 0.8 },
  { name: 'Email Campaigns', executions: 890, success: 99.2, avgTime: 1.2 },
  { name: 'Data Sync', executions: 560, success: 96.8, avgTime: 2.1 },
  { name: 'Report Generation', executions: 340, success: 100, avgTime: 8.5 },
  { name: 'Payment Processing', executions: 280, success: 97.9, avgTime: 1.5 },
];

export function AutomationAnalytics() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Automation Analytics</h1>
          <p className="text-gray-700">Detailed insights into workflow performance, efficiency gains, and optimization opportunities.</p>
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
                <p className="text-gray-600 text-xs font-medium">Total Executions</p>
                <p className="text-2xl font-semibold text-gray-900">2,847</p>
                <p className="text-xs text-green-600">+18% this week</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Success Rate</p>
                <p className="text-2xl font-semibold text-gray-900">97.8%</p>
                <p className="text-xs text-green-600">+1.2% vs last week</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Avg Response Time</p>
                <p className="text-2xl font-semibold text-gray-900">1.18s</p>
                <p className="text-xs text-green-600">-0.2s improvement</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-gray-600 text-xs font-medium">Hours Saved</p>
                <p className="text-2xl font-semibold text-gray-900">205h</p>
                <p className="text-xs text-green-600">$10,250 value</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Execution Trends */}
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Daily Execution Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="executions" 
                    stroke="#3B82F6" 
                    fill="#3B82F6" 
                    fillOpacity={0.2}
                    strokeWidth={3}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="success" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={{ fill: '#10B981', strokeWidth: 0, r: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Efficiency Over Time */}
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Efficiency Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white'
                    }}
                  />
                  <Bar dataKey="hoursSaved" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="efficiency" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workflow Performance Table */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Workflow Performance Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="grid gap-4">
              {workflowData.map((workflow, index) => (
                <div key={workflow.name} className="p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{workflow.name}</h4>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600">{workflow.executions} runs</span>
                      <span className="text-gray-600">{workflow.avgTime}s avg</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">Success Rate</span>
                        <span className="font-medium text-gray-900">{workflow.success}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-[#4C3692] to-[#4EA5EF]" 
                          style={{ width: `${workflow.success}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        workflow.success >= 99 ? 'bg-green-100 text-green-700' :
                        workflow.success >= 95 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {workflow.success >= 99 ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertTriangle className="w-3 h-3 mr-1" />
                        )}
                        {workflow.success >= 99 ? 'Excellent' :
                         workflow.success >= 95 ? 'Good' : 'Needs Attention'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Most Common Errors</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">API Timeout</span>
                  <span className="font-medium text-gray-900">45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Rate Limiting</span>
                  <span className="font-medium text-gray-900">28%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Invalid Data</span>
                  <span className="font-medium text-gray-900">18%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Network Error</span>
                  <span className="font-medium text-gray-900">9%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Peak Usage Times</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">9:00 - 11:00 AM</span>
                  <span className="font-medium text-gray-900">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">2:00 - 4:00 PM</span>
                  <span className="font-medium text-gray-900">High</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">11:00 PM - 1:00 AM</span>
                  <span className="font-medium text-gray-900">Medium</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">6:00 - 8:00 AM</span>
                  <span className="font-medium text-gray-900">Low</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Optimization Opportunities</span>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="text-gray-700 mb-1">Parallel Processing</div>
                  <div className="text-xs text-gray-600">Potential 25% speed improvement</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-700 mb-1">Caching Layer</div>
                  <div className="text-xs text-gray-600">Reduce API calls by 40%</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-700 mb-1">Error Retry Logic</div>
                  <div className="text-xs text-gray-600">Improve success rate by 2%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}