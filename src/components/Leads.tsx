import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, Filter, Eye, Mail, Phone, Sparkles } from "lucide-react";

// Mock leads data
const leads = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 123-4567',
    source: 'Organic',
    campaign: 'Google Search',
    page: '/services/laser',
    status: 'New',
    value: '$450',
    created: '2024-02-15 14:23',
    intent: 'high'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'm.chen@company.com',
    phone: '+1 (555) 987-6543',
    source: 'Paid',
    campaign: 'Facebook - Beauty Services',
    page: '/pricing',
    status: 'Qualified',
    value: '$320',
    created: '2024-02-15 11:45',
    intent: 'medium'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.r@email.com',
    phone: '+1 (555) 456-7890',
    source: 'Direct',
    campaign: 'Direct Traffic',
    page: '/book',
    status: 'Booked',
    value: '$280',
    created: '2024-02-14 16:30',
    intent: 'high'
  },
  {
    id: 4,
    name: 'David Park',
    email: 'dpark@email.com',
    phone: '+1 (555) 321-9876',
    source: 'Social',
    campaign: 'Instagram Post',
    page: '/',
    status: 'Lost',
    value: '$0',
    created: '2024-02-14 09:15',
    intent: 'low'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    email: 'lisa.t@email.com',
    phone: '+1 (555) 654-3210',
    source: 'Referral',
    campaign: 'Partner Site',
    page: '/services/laser',
    status: 'Qualified',
    value: '$380',
    created: '2024-02-13 13:22',
    intent: 'high'
  },
  {
    id: 6,
    name: 'James Wilson',
    email: 'j.wilson@email.com',
    phone: '+1 (555) 789-0123',
    source: 'Paid',
    campaign: 'Google Ads - Skincare',
    page: '/blog/how-to-prepare',
    status: 'New',
    value: '$210',
    created: '2024-02-13 10:45',
    intent: 'medium'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'New': return 'bg-blue-100 text-blue-700';
    case 'Qualified': return 'bg-green-100 text-green-700';
    case 'Booked': return 'bg-purple-100 text-purple-700';
    case 'Lost': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getIntentColor = (intent: string) => {
  switch (intent) {
    case 'high': return 'bg-green-100 text-green-700';
    case 'medium': return 'bg-yellow-100 text-yellow-700';
    case 'low': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export function Leads() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 min-h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">Leads</h1>
          <p className="text-gray-700">Track and manage your lead pipeline and conversion funnel.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-gray-700 hover:bg-white/20">
            Export Leads
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] hover:from-[#4C3692]/90 hover:to-[#4EA5EF]/90 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Ask AI
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search leads..." 
                className="pl-10 bg-white/50 border border-white/20 rounded-lg"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Status Filter */}
              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="booked">Booked</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>

              {/* Source Filter */}
              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="All Sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="organic">Organic</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="direct">Direct</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                </SelectContent>
              </Select>

              {/* Intent Filter */}
              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="All Intent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Intent</SelectItem>
                  <SelectItem value="high">High Intent</SelectItem>
                  <SelectItem value="medium">Medium Intent</SelectItem>
                  <SelectItem value="low">Low Intent</SelectItem>
                </SelectContent>
              </Select>

              {/* Date Range */}
              <Select>
                <SelectTrigger className="rounded-lg bg-white/50 border-white/20">
                  <SelectValue placeholder="Last 30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quick Filter Chips */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 text-xs">
                High-intent (3)
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 text-xs">
                From Paid (2)
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 text-xs">
                From Organic (1)
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100 text-xs">
                From /pricing (1)
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Recent Leads ({leads.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs sm:text-sm min-w-48 text-gray-600">Contact</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden sm:table-cell text-gray-600">Source</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden md:table-cell text-gray-600">Campaign/Page</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Status</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden lg:table-cell text-gray-600">Intent</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Value</TableHead>
                  <TableHead className="text-xs sm:text-sm hidden xl:table-cell text-gray-600">Created</TableHead>
                  <TableHead className="text-xs sm:text-sm text-gray-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="min-w-48">
                      <div className="space-y-1">
                        <div className="font-medium text-xs sm:text-sm text-gray-900">{lead.name}</div>
                        <div className="text-xs text-gray-600 flex items-center gap-1">
                          <Mail className="w-3 h-3 shrink-0" />
                          <span className="truncate max-w-32">{lead.email}</span>
                        </div>
                        <div className="text-xs text-gray-600 flex items-center gap-1 sm:hidden">
                          <span className="shrink-0">📱</span>
                          <span className="truncate">{lead.phone}</span>
                        </div>
                        <div className="hidden sm:flex text-xs text-gray-600 items-center gap-1">
                          <Phone className="w-3 h-3 shrink-0" />
                          <span className="truncate">{lead.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge variant="outline" className="text-xs">{lead.source}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="space-y-1">
                        <div className="text-xs font-medium truncate max-w-32 text-gray-900">{lead.campaign}</div>
                        <div className="text-xs text-gray-600 truncate max-w-32">{lead.page}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(lead.status)} text-xs`}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <Badge className={`${getIntentColor(lead.intent)} text-xs`}>
                        {lead.intent}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-xs sm:text-sm text-gray-900">{lead.value}</TableCell>
                    <TableCell className="text-xs text-gray-600 hidden xl:table-cell">
                      {new Date(lead.created).toLocaleDateString()}
                      <br />
                      <span className="text-xs">
                        {new Date(lead.created).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" className="rounded-lg p-2 bg-white/50 border-white/20 hover:bg-white/70">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Lead Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Total Leads</div>
              <div className="text-2xl font-semibold text-gray-900">589</div>
              <div className="text-xs text-green-600">+18 from last period</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Conversion Rate</div>
              <div className="text-2xl font-semibold text-gray-900">3.2%</div>
              <div className="text-xs text-green-600">+0.3% from last period</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Avg Lead Value</div>
              <div className="text-2xl font-semibold text-gray-900">$310</div>
              <div className="text-xs text-green-600">+$25 from last period</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-lg hover:shadow-xl">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-xs text-gray-600 font-medium">Close Rate</div>
              <div className="text-2xl font-semibold text-gray-900">24%</div>
              <div className="text-xs text-red-600">-2% from last period</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}