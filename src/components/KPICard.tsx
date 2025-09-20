import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  sparkline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  subtitle?: string;
}

export function KPICard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  sparkline = false, 
  size = 'md',
  subtitle 
}: KPICardProps) {
  const sizeClasses = {
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8'
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      default: return 'text-muted-foreground';
    }
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') return <TrendingUp className="h-3 w-3" />;
    if (changeType === 'negative') return <TrendingDown className="h-3 w-3" />;
    return null;
  };

  return (
    <Card className="rounded-2xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-lg transition-all duration-200 border border-white/20 shadow-lg">
      <CardHeader className={`pb-2 ${sizeClasses[size]}`}>
        <CardTitle className="text-xs sm:text-sm text-gray-500 font-medium break-words tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent className={`pt-0 ${sizeClasses[size]} pb-4 sm:pb-6`}>
        <div className="flex items-center justify-between">
          <div className="space-y-2 min-w-0 flex-1">
            <div className="text-2xl sm:text-3xl font-semibold tabular-nums break-words text-gray-900">{value}</div>
            {subtitle && (
              <div className="text-xs sm:text-sm text-gray-500 break-words">{subtitle}</div>
            )}
            {change && (
              <div className={`flex items-center gap-1.5 text-xs ${getChangeColor()}`}>
                {getChangeIcon()}
                <span className="break-words font-medium">{change}</span>
              </div>
            )}
          </div>
          {sparkline && (
            <div className="h-8 w-16 sm:h-10 sm:w-20 bg-gradient-to-r from-green-50 to-green-100 rounded-lg flex items-end justify-center shrink-0 ml-3 p-1.5">
              <div className="w-1 bg-green-500 rounded-t" style={{ height: '20%' }}></div>
              <div className="w-1 bg-green-500 rounded-t ml-1" style={{ height: '40%' }}></div>
              <div className="w-1 bg-green-500 rounded-t ml-1" style={{ height: '60%' }}></div>
              <div className="w-1 bg-green-500 rounded-t ml-1" style={{ height: '80%' }}></div>
              <div className="w-1 bg-green-500 rounded-t ml-1" style={{ height: '100%' }}></div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}