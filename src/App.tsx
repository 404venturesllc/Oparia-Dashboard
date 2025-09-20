import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { WebsiteAnalytics } from './components/WebsiteAnalytics';
import { AutomationAnalytics } from './components/AutomationAnalytics';
import { ChatHistory } from './components/ChatHistory';
import { CallLogs } from './components/CallLogs';
import { Chat } from './components/Chat';
import { Leads } from './components/Leads';
import { AutomationManagement } from './components/AutomationManagement';

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 sm:p-8 min-h-full flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-white/20">
          <span className="text-3xl">🚧</span>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-700 max-w-lg text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <Chat />;
      case 'analytics':
        return <Analytics />;
      case 'analytics-website':
        return <WebsiteAnalytics />;
      case 'analytics-automations':
        return <AutomationAnalytics />;
      case 'analytics-reviews':
        return (
          <EmptyState 
            title="Review Analytics" 
            description="Track review sentiment, response rates, and customer feedback insights. Coming soon!"
          />
        );
      case 'conversations-chat':
        return <ChatHistory />;
      case 'conversations-calls':
        return <CallLogs />;
      case 'leads':
        return <Leads />;
      case 'automations':
        return <AutomationManagement />;
      case 'revenue':
        return (
          <EmptyState 
            title="Revenue Analytics" 
            description="Track attribution, saved vs lost revenue, and ROI by source. Coming soon!"
          />
        );
      case 'alerts':
        return (
          <EmptyState 
            title="Alerts & Notifications" 
            description="Monitor system alerts, errors, warnings, and recovery notifications. Coming soon!"
          />
        );
      case 'settings':
        return (
          <EmptyState 
            title="Settings" 
            description="Configure connectors, notification preferences, team settings, and more. Coming soon!"
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen flex bg-gray-50/50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <TopBar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        
        {/* Page Content */}
        <div className="flex-1 overflow-auto bg-white relative">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20px 20px, rgba(76, 54, 146, 0.15) 1px, transparent 1px),
                radial-gradient(circle at 80px 80px, rgba(78, 165, 239, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 160px 160px',
              backgroundPosition: '0 0, 40px 40px'
            }}
          ></div>
          
          {/* Content */}
          <div className="relative z-10">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;