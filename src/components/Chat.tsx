import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Bot,
  Users, 
  Calendar, 
  Phone, 
  Star,
  Plus,
  Paperclip,
  Mic,
  Send,
  FileText
} from "lucide-react";

// Suggestion cards data
const suggestionCards = [
  {
    id: 'new-leads',
    title: 'New Leads Today',
    description: 'See what\'s been happening in the lead generation world over the last 24 hours',
    icon: Users,
    iconColor: 'text-white'
  },
  {
    id: 'appointments-booked', 
    title: 'Appointments Booked',
    description: 'Get quick AI insight on how many appointments are booked today',
    icon: Calendar,
    iconColor: 'text-white'
  },
  {
    id: 'calls-answered',
    title: 'Calls Answered by AI',
    description: 'See recent call reports that your AI have responded',
    icon: Phone,
    iconColor: 'text-white'
  }
];

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! I'm here to help you with business analytics, automation insights, and data analysis. How can I assist you today?",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: typeof suggestionCards[0]) => {
    setInputValue(`Help me with ${suggestion.title.toLowerCase()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-50/50 min-h-[calc(100vh-4rem)]">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        {messages.length === 0 ? (
          // Welcome State
          <div className="max-w-4xl mx-auto">
            {/* Welcome Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] bg-clip-text text-transparent mb-4">
                Hello Brendan
              </h1>
              <p className="text-xl text-gray-500">
                How can I help you today?
              </p>
            </div>

            {/* Suggestion Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {suggestionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card 
                    key={card.id}
                    className="rounded-2xl bg-white hover:bg-gray-50/50 transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200/50 cursor-pointer group p-6"
                    onClick={() => handleSuggestionClick(card)}
                  >
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] rounded-lg flex items-center justify-center">
                          <Icon className={`w-5 h-5 ${card.iconColor}`} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium text-gray-900">{card.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          // Chat Messages
          <div className="max-w-4xl mx-auto space-y-6 w-full flex flex-col justify-end min-h-full">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.sender === 'user' ? 'ml-4' : 'mr-4'}`}>
                  {message.sender === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692] to-[#4EA5EF] rounded-lg flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">Oparia AI</span>
                    </div>
                  )}
                  <Card className={`rounded-2xl ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] text-white' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}>
                    <CardContent className="p-4">
                      <p className={`text-sm leading-relaxed ${
                        message.sender === 'user' ? 'text-white' : 'text-gray-800'
                      }`}>
                        {message.content}
                      </p>
                    </CardContent>
                  </Card>
                  <div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] mr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#4C3692] to-[#4EA5EF] rounded-lg flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">LeadWatch AI</span>
                  </div>
                  <Card className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-[#4C3692] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-[#4C3692] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-[#4C3692] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <span className="text-sm text-gray-600">AI is thinking...</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chat Input - Fixed at Bottom */}
      <div className="border-t border-gray-200/60 bg-white/50 backdrop-blur-sm p-4 sm:p-6 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-end gap-3">
                {/* Input Field */}
                <div className="flex-1 space-y-3">
                  <div className="relative">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about your business analytics..."
                      className="pr-12 bg-white/50 border-white/30 rounded-xl text-gray-800 placeholder:text-gray-500 focus:bg-white/70 transition-all"
                      disabled={isLoading}
                    />
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-600 hover:text-gray-800 hover:bg-white/20"
                      >
                        <Paperclip className="w-4 h-4 mr-1" />
                        Attach
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-600 hover:text-gray-800 hover:bg-white/20"
                      >
                        <Mic className="w-4 h-4 mr-1" />
                        Voice Message
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-600 hover:text-gray-800 hover:bg-white/20"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        Browse Prompts
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">
                        {inputValue.length} / 3,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Send Button */}
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="sm"
                  className="bg-gradient-to-r from-[#4C3692] to-[#4EA5EF] hover:from-[#4C3692]/90 hover:to-[#4EA5EF]/90 text-white px-4 py-2 rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center mt-3">
            LeadWatch AI may generate inaccurate information about people, places, or facts. Model: LeadWatch AI v2.1
          </p>
        </div>
      </div>
    </div>
  );
}