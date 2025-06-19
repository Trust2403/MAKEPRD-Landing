import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Zap, Send, Bot, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI assistant for PRD generation and prompt optimization. Try asking me to generate a sample prompt for your product idea!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sampleResponses = [
    "Here's a sample PRD prompt: 'Create a comprehensive Product Requirements Document for a mobile fitness tracking app that helps users set workout goals, track progress, and connect with friends. Include user stories, technical specifications, and success metrics.'",
    "Sample prompt optimization: 'Transform this basic prompt into a detailed one: Create a social media app → Create a comprehensive social media application with real-time messaging, story sharing, content discovery algorithms, user verification systems, and privacy controls targeting Gen Z users.'",
    "Here's a PRD template prompt: 'Generate a PRD for an e-commerce platform including: 1) Executive Summary 2) Market Analysis 3) User Personas 4) Feature Requirements 5) Technical Architecture 6) Success Metrics 7) Timeline & Milestones'",
    "Prompt optimization example: 'Enhance this prompt for better AI results: Make it more specific by adding context, desired output format, target audience, constraints, and success criteria. Original: Write about AI. Enhanced: Write a 500-word technical blog post about AI applications in healthcare for medical professionals, focusing on diagnostic tools and patient outcomes.'"
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Trusted companies data
  const trustedCompanies = [
    "Accurate", "Dynamic", "Save Time", "Niche Specific", "Satsify", "Loved by AI"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.02,
            top: mousePosition.y * 0.02,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
        {/* Left side - Content */}
        <div className="flex-1 text-center lg:text-left animate-fade-in">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <Sparkles className="text-blue-400 w-8 h-8 mr-2 animate-spin" />
            <span className="text-blue-400 font-semibold tracking-wide">MAKEPRD.AI</span>
            <Zap className="text-blue-400 w-8 h-8 ml-2 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Ideas into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white animate-pulse">
              {" "}Perfect PRDs
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
            Generate comprehensive Product Requirements Documents and optimize prompts with AI-powered precision. 
            Build better products faster with our robust, scalable platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
            <Link to="/get-started">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                Start Building PRDs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Demo
            </Button>
          </div>
          
          {/* Trusted by section */}
          <div className="text-blue-200">
            <p className="text-sm font-medium mb-6 text-center lg:text-left">Our value speaks about us</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-70">
              {trustedCompanies.map((company, index) => (
                <div 
                  key={company}
                  className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Chat Interface */}
        <div className="flex-1 max-w-md w-full lg:max-w-lg">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl animate-fade-in">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">PRD & PROMPT Assistant</h3>
                  <p className="text-blue-200 text-sm">Try generating a sample PRD & PROMPT</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-blue-500' : 'bg-white/20'}`}>
                      {message.isUser ? 
                        <User className="w-4 h-4 text-white" /> : 
                        <Bot className="w-4 h-4 text-white" />
                      }
                    </div>
                    <div className={`p-3 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-white/20 text-white'}`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me to generate a sample prompt..."
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-blue-400"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
