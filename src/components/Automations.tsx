import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  Play, 
  Pause, 
  Settings, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Sparkles
} from "lucide-react";

// Mock automation data
const automations = [
  {
    id: 1,
    name: 'New Lead → CRM → Welcome SMS',
    description: 'Automatically add new leads to CRM and send welcome message',
    runs: 342,
    failures: 3,
    successRate: 99.1,
    avgLatency: '1.2s',
    hoursSaved: 28.5,
    dollarsSaved: 1425,
    status: 'active',
    lastRun: '2 minutes ago'
  },
  {
    id: 2,
    name: 'Booking Confirmation → Payment → Email Receipt',
    description: 'Process booking payments and send confirmation emails',
    runs: 156,
    failures: 0,
    successRate: 100,
    avgLatency: '0.8s',
    hoursSaved: 19.5,
    dollarsSaved: 975,
    status: 'active',
    lastRun: '5 minutes ago'
  },
  {
    id: 3,
    name: 'Abandoned Form → SMS Nudge',
    description: 'Send SMS reminders to users who abandon forms',
    runs: 89,
    failures: 15,
    successRate: 83.1,
    avgLatency: '2.1s',
    hoursSaved: 6.2,
    dollarsSaved: 310,
    status: 'degraded',
    lastRun: '1 hour ago'
  },
  {
    id: 4,
    name: 'Weekly Report Generation',
    description: 'Generate and email weekly performance reports',
    runs: 4,
    failures: 0,
    successRate: 100,
    avgLatency: '12.3s',
    hoursSaved: 2.0,
    dollarsSaved: 100,
    status: 'active',
    lastRun: '2 days ago'
  },
  {
    id: 5,
    name: 'Failed Payment → Retry → Notification',
    description: 'Retry failed payments and notify customers',
    runs: 23,
    failures: 2,
    successRate: 91.3,
    avgLatency: '3.4s',
    hoursSaved: 1.5,
    dollarsSaved: 75,
    status: 'active',
    lastRun: '3 hours ago'
  }
];

const recentRuns = [
  {
    id: 1,
    automation: 'New Lead → CRM → Welcome SMS',
    trigger: 'Form submission',
    status: 'success',
    duration: '1.1s',
    timestamp: '2024-02-15 14:23:45',
    details: 'Lead added to CRM, SMS sent successfully'
  },
  {
    id: 2,
    automation: 'Booking Confirmation → Payment → Email Receipt',
    trigger: 'Payment completed',
    status: 'success',
    duration: '0.7s',
    timestamp: '2024-02-15 14:18:32',
    details: 'Payment processed, confirmation email sent'
  },
  {
    id: 3,
    automation: 'Abandoned Form → SMS Nudge',
    trigger: 'Form timeout',
    status: 'warning',
    duration: '2.8s',
    timestamp: '2024-02-15 13:45:12',
    details: 'SMS sent with delay, carrier rate limiting'
  },
  {
    id: 4,
    automation: 'New Lead → CRM → Welcome SMS',
    trigger: 'Form submission',
    status: 'failed',
    duration: '5.2s',
    timestamp: '2024-02-15 13:12:18',
    details: 'CRM API timeout, lead queued for retry'
  },
  {
    id: 5,
    automation: 'Booking Confirmation → Payment → Email Receipt',
    trigger: 'Payment completed',
    status: 'success',
    duration: '0.9s',
    timestamp: '2024-02-15 12:56:41',
    details: 'Payment processed, confirmation email sent'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-700';
    case 'degraded': return 'bg-yellow-100 text-yellow-700';
    case 'broken': return 'bg-red-100 text-red-700';
    case 'paused': return 'bg-gray-100 text-gray-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getRunStatusIcon = (status: string) => {
  switch (status) {
    case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
    case 'failed': return <XCircle className="w-4 h-4 text-red-500" />;
    default: return <Clock className="w-4 h-4 text-gray-500" />;
  }
};

export function Automations() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Automations</h1>
          <p className="text-gray-700">Monitor workflow performance, efficiency metrics, and automation health.</p>
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Total Automations</div>
              <div className="text-2xl font-semibold text-gray-900">15</div>
              <div className="text-xs text-green-600">12 active, 2 degraded, 1 paused</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Total Runs (30d)</div>
              <div className="text-2xl font-semibold text-gray-900">2,847</div>
              <div className="text-xs text-green-600">+234 from last period</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Success Rate</div>
              <div className="text-2xl font-semibold text-gray-900">96.2%</div>
              <div className="text-xs text-green-600">+1.1% from last period</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Hours Saved</div>
              <div className="text-2xl font-semibold text-gray-900">58.2h</div>
              <div className="text-xs text-green-600">$2,910 in payroll saved</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automations List */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Workflow Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm min-w-64 text-gray-600">Workflow</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Runs (30d)</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden sm:table-cell text-gray-600">Success Rate</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden md:table-cell text-gray-600">Avg Latency</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden lg:table-cell text-gray-600">Impact</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Status</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {automations.map((automation) => (
                  <TableRow key={automation.id}>
                    <TableCell className="min-w-64">
                      <div className="space-y-1">
                        <div className="font-medium text-xs sm:text-sm break-words text-gray-900">{automation.name}</div>
                        <div className="text-xs text-gray-600 break-words">
                          {automation.description}
                        </div>
                        <div className="text-xs text-gray-500">
                          Last run: {automation.lastRun}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-xs sm:text-sm text-gray-900">{automation.runs.toLocaleString()}</div>
                        {automation.failures > 0 && (
                          <div className="text-xs text-red-600">
                            {automation.failures} failures
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="space-y-2">
                        <div className="font-medium text-xs sm:text-sm text-gray-900">{automation.successRate}%</div>
                        <Progress 
                          value={automation.successRate} 
                          className="w-12 sm:w-16 h-1"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-xs sm:text-sm hidden md:table-cell text-gray-700">{automation.avgLatency}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-gray-900">
                          {automation.hoursSaved.toFixed(1)}h saved
                        </div>
                        <div className="text-xs text-green-600">
                          ${automation.dollarsSaved.toLocaleString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(automation.status)} text-xs`}>
                        {automation.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button size="sm" variant="outline" className="rounded-lg p-1.5 sm:p-2 bg-white/50 border-white/20 hover:bg-white/70">
                          <Settings className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-lg p-1.5 sm:p-2 bg-white/50 border-white/20 hover:bg-white/70">
                          {automation.status === 'active' ? 
                            <Pause className="w-3 h-3" /> : 
                            <Play className="w-3 h-3" />
                          }
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRuns.map((run) => (
              <div key={run.id} className="flex items-start gap-3 p-4 bg-white/10 rounded-lg border border-white/20">
                <div className="mt-1">
                  {getRunStatusIcon(run.status)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                    <div className="font-medium text-xs sm:text-sm break-words text-gray-900">{run.automation}</div>
                    <div className="text-xs text-gray-500">{run.duration}</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">
                    Triggered by: {run.trigger}
                  </div>
                  <div className="text-xs text-gray-600 mb-2 break-words">
                    {run.details}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(run.timestamp).toLocaleString()}
                  </div>
                </div>
                {run.status === 'failed' && (
                  <div className="flex flex-col sm:flex-row gap-1 shrink-0">
                    <Button size="sm" variant="outline" className="text-xs rounded-lg px-2 py-1 bg-white/50 border-white/20 hover:bg-white/70">
                      Retry
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs rounded-lg px-2 py-1 bg-white/50 border-white/20 hover:bg-white/70">
                      View Log
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}