import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { 
  Plus,
  Search,
  Filter,
  Settings,
  Play,
  Pause,
  Copy,
  Edit,
  Trash2,
  Sparkles,
  Zap,
  Clock,
  CheckCircle,
  AlertTriangle,
  MoreHorizontal
} from "lucide-react";

// Mock automation data for management
const automations = [
  {
    id: 1,
    name: 'New Lead → CRM → Welcome Email',
    description: 'Automatically processes new leads and sends personalized welcome emails',
    category: 'Lead Management',
    status: 'active',
    trigger: 'Form Submission',
    lastModified: '2024-02-15',
    author: 'Sarah Johnson',
    executions: 1240,
    successRate: 98.5,
    enabled: true
  },
  {
    id: 2,
    name: 'Payment Failed → Retry → Notify',
    description: 'Handles failed payments with automatic retry and customer notification',
    category: 'Payment Processing',
    status: 'active',
    trigger: 'Payment Failed',
    lastModified: '2024-02-14',
    author: 'Mike Chen',
    executions: 156,
    successRate: 94.2,
    enabled: true
  },
  {
    id: 3,
    name: 'Weekly Performance Report',
    description: 'Generates and distributes weekly performance reports to stakeholders',
    category: 'Reporting',
    status: 'active',
    trigger: 'Schedule',
    lastModified: '2024-02-10',
    author: 'Emily Davis',
    executions: 4,
    successRate: 100,
    enabled: true
  },
  {
    id: 4,
    name: 'Abandoned Cart Recovery',
    description: 'Sends recovery emails for abandoned shopping carts',
    category: 'Marketing',
    status: 'draft',
    trigger: 'Cart Timeout',
    lastModified: '2024-02-08',
    author: 'David Park',
    executions: 0,
    successRate: 0,
    enabled: false
  },
  {
    id: 5,
    name: 'Customer Support Escalation',
    description: 'Escalates support tickets based on priority and response time',
    category: 'Support',
    status: 'paused',
    trigger: 'Ticket Created',
    lastModified: '2024-02-05',
    author: 'Lisa Thompson',
    executions: 89,
    successRate: 91.3,
    enabled: false
  }
];

const templates = [
  {
    id: 1,
    name: 'Lead Nurturing Sequence',
    description: 'Multi-step email sequence for lead nurturing',
    category: 'Marketing',
    uses: 342
  },
  {
    id: 2,
    name: 'Order Fulfillment Process',
    description: 'Complete order processing and fulfillment workflow',
    category: 'E-commerce',
    uses: 156
  },
  {
    id: 3,
    name: 'Customer Onboarding',
    description: 'Automated customer onboarding experience',
    category: 'Customer Success',
    uses: 89
  },
  {
    id: 4,
    name: 'Data Backup & Sync',
    description: 'Automated data backup and synchronization',
    category: 'Operations',
    uses: 67
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-700';
    case 'paused': return 'bg-yellow-100 text-yellow-700';
    case 'draft': return 'bg-gray-100 text-gray-700';
    case 'error': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export function AutomationManagement() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Automation Management</h1>
          <p className="text-gray-700">Create, configure, and manage your automation workflows and business processes.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20">
            Import Template
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] hover:from-[#4C3692]/90 hover:to-[#4EA5EF]/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Automation
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Plus className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Create New</h3>
            <p className="text-gray-600 text-sm">Build a custom automation workflow</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Copy className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Use Template</h3>
            <p className="text-gray-600 text-sm">Start with a pre-built template</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">AI Assistant</h3>
            <p className="text-gray-600 text-sm">Get AI help building workflows</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Settings className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Manage Settings</h3>
            <p className="text-gray-600 text-sm">Configure global automation settings</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search automations..." 
                className="pl-10 bg-white/50 border border-white/20 rounded-lg"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="lead-management">Lead Management</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="payment">Payment Processing</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="reporting">Reporting</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="All Triggers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Triggers</SelectItem>
                  <SelectItem value="form">Form Submission</SelectItem>
                  <SelectItem value="schedule">Schedule</SelectItem>
                  <SelectItem value="payment">Payment Events</SelectItem>
                  <SelectItem value="support">Support Events</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modified">Last Modified</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="executions">Executions</SelectItem>
                  <SelectItem value="success">Success Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automations List */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Your Automations ({automations.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automations.map((automation) => (
              <div key={automation.id} className="p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 truncate">{automation.name}</h3>
                      <Badge className={`${getStatusColor(automation.status)} text-xs`}>
                        {automation.status}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-600">Enable</span>
                        <Switch checked={automation.enabled} size="sm" />
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{automation.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Category:</span>
                        <div className="font-medium text-gray-900">{automation.category}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Trigger:</span>
                        <div className="font-medium text-gray-900">{automation.trigger}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Executions:</span>
                        <div className="font-medium text-gray-900">{automation.executions.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Success Rate:</span>
                        <div className="font-medium text-gray-900">{automation.successRate}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      <span>Modified {automation.lastModified}</span>
                      <span>by {automation.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button size="sm" variant="outline" className="rounded-lg p-2 bg-white/50 border-white/20 hover:bg-white/70">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-lg p-2 bg-white/50 border-white/20 hover:bg-white/70">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-lg p-2 bg-white/50 border-white/20 hover:bg-white/70">
                      {automation.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-lg p-2 bg-white/50 border-white/20 hover:bg-white/70">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Templates Section */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Popular Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <div key={template.id} className="p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-200 cursor-pointer">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{template.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{template.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{template.category}</Badge>
                      <span className="text-xs text-gray-500">{template.uses} uses</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}