import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Smile, Paperclip } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface TryItNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const aiResponses = {
  greeting: "👋 Hi! I'm Donna, your AI assistant for Mario's Pizza. I can help you place orders, answer menu questions, and book tables. What would you like to know?",
  menu: "🍕 Our menu includes:\n\n• Margherita Pizza - $18\n• Pepperoni Pizza - $20\n• Supreme Pizza - $24\n• Caesar Salad - $12\n• Garlic Bread - $8\n\nWhat catches your eye?",
  order: "Great choice! 🍕 I'd be happy to help you order. What size would you like?\n\n• Small (10\") - $18\n• Medium (12\") - $22\n• Large (14\") - $26",
  delivery: "Perfect! For delivery, I'll need your address. We deliver within 5 miles of our location and it typically takes 25-30 minutes. What's your delivery address?",
  hours: "⏰ We're open:\n\nMon-Thu: 11am - 10pm\nFri-Sat: 11am - 11pm\nSun: 12pm - 9pm\n\nWe're currently open! Would you like to place an order?",
  reservation: "🍽️ I'd love to help you book a table! What date and time works for you, and how many people will be joining?",
  default: "I can help you with orders, menu questions, reservations, or store hours. What would you like to know? 😊"
};

const getAIResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('menu') || message.includes('food') || message.includes('pizza')) {
    return aiResponses.menu;
  } else if (message.includes('order') || message.includes('buy') || message.includes('get')) {
    return aiResponses.order;
  } else if (message.includes('delivery') || message.includes('deliver')) {
    return aiResponses.delivery;
  } else if (message.includes('hours') || message.includes('open') || message.includes('time')) {
    return aiResponses.hours;
  } else if (message.includes('table') || message.includes('reservation') || message.includes('book')) {
    return aiResponses.reservation;
  } else if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
    return aiResponses.greeting;
  } else {
    return aiResponses.default;
  }
};

export default function TryItNowModal({ isOpen, onClose }: TryItNowModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial greeting when modal opens
      setTimeout(() => {
        const initialMessage: Message = {
          id: 1,
          text: aiResponses.greeting,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([initialMessage]);
      }, 500);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    "Show me your menu",
    "I want to order a pizza",
    "What are your hours?",
    "Book a table for 4"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md h-[720px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-emerald-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" 
              alt="WhatsApp" 
              className="w-8 h-8 bg-white rounded-full p-1"
            />
            <div>
              <h3 className="font-semibold">Donna</h3>
              <p className="text-sm opacity-90">Your AI Assistant</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-emerald-700 rounded-full p-1 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">ℹ</span>
            </div>
            <span>This business uses a secure service from Meta to manage this chat. Tap to learn more.</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs rounded-2xl p-3 ${
                message.sender === 'user' 
                  ? 'bg-emerald-500 text-white rounded-br-md' 
                  : 'bg-gray-200 text-gray-800 rounded-bl-md'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-2xl rounded-bl-md p-3 max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputText(reply);
                    setTimeout(() => sendMessage(), 100);
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
            <Smile className="w-5 h-5 text-gray-500" />
            <Paperclip className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button 
              onClick={sendMessage}
              disabled={!inputText.trim()}
              className="text-emerald-600 hover:text-emerald-700 disabled:text-gray-400 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
