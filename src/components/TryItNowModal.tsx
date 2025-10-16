import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Smile, Paperclip } from 'lucide-react';
import { type Locale } from '@/lib/i18n';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface TryItNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
  restaurantName?: string;
  ownerName?: string;
}

const getAiResponsesConfig = (restaurantName?: string) => ({
  es: {
    greeting: `👋 ¡Hola! Soy Donna${restaurantName ? ` de ${restaurantName}` : ', tu asistente de IA'}. Puedo ayudarte a realizar pedidos, responder preguntas del menú y reservar mesas. ¿Qué te gustaría saber?`,
    menu: "🍕 Nuestro menú incluye:\n\n• Pizza Margherita - $18\n• Pizza Pepperoni - $20\n• Pizza Suprema - $24\n• Ensalada César - $12\n• Pan de Ajo - $8\n\n¿Qué te llama la atención?",
    order: "¡Excelente elección! 🍕 Me encantaría ayudarte con tu pedido. ¿Qué tamaño te gustaría?\n\n• Pequeña (10\") - $18\n• Mediana (12\") - $22\n• Grande (14\") - $26",
    delivery: "¡Perfecto! Para el delivery, necesito tu dirección. Hacemos entregas dentro de 8 km de nuestra ubicación y típicamente toma 25-30 minutos. ¿Cuál es tu dirección de entrega?",
    hours: "⏰ Estamos abiertos:\n\nLun-Jue: 11am - 10pm\nVie-Sáb: 11am - 11pm\nDom: 12pm - 9pm\n\n¡Estamos abiertos ahora! ¿Te gustaría hacer un pedido?",
    reservation: "🍽️ ¡Me encantaría ayudarte a reservar una mesa! ¿Qué fecha y hora te viene bien, y cuántas personas vendrán?",
    default: "Puedo ayudarte con pedidos, preguntas del menú, reservas u horarios. ¿Qué te gustaría saber? 😊",
    assistantSubtitle: restaurantName || "Asistente de IA",
    placeholder: "Escribe un mensaje",
    quickReplies: [
      "Muéstrame tu menú",
      "Quiero ordenar una pizza",
      "¿Cuáles son tus horarios?",
      "Reservar mesa para 4"
    ]
  },
  en: {
    greeting: `👋 Hi! I'm Donna${restaurantName ? ` from ${restaurantName}` : ', your AI assistant'}. I can help you place orders, answer menu questions, and book tables. What would you like to know?`,
    menu: "🍕 Our menu includes:\n\n• Margherita Pizza - $18\n• Pepperoni Pizza - $20\n• Supreme Pizza - $24\n• Caesar Salad - $12\n• Garlic Bread - $8\n\nWhat catches your eye?",
    order: "Great choice! 🍕 I'd be happy to help you order. What size would you like?\n\n• Small (10\") - $18\n• Medium (12\") - $22\n• Large (14\") - $26",
    delivery: "Perfect! For delivery, I'll need your address. We deliver within 5 miles of our location and it typically takes 25-30 minutes. What's your delivery address?",
    hours: "⏰ We're open:\n\nMon-Thu: 11am - 10pm\nFri-Sat: 11am - 11pm\nSun: 12pm - 9pm\n\nWe're currently open! Would you like to place an order?",
    reservation: "🍽️ I'd love to help you book a table! What date and time works for you, and how many people will be joining?",
    default: "I can help you with orders, menu questions, reservations, or store hours. What would you like to know? 😊",
    assistantSubtitle: restaurantName || "Your AI Assistant",
    placeholder: "Type a message",
    quickReplies: [
      "Show me your menu",
      "I want to order a pizza",
      "What are your hours?",
      "Book a table for 4"
    ]
  }
});

const getAIResponse = (userMessage: string, locale: Locale = 'en', restaurantName?: string): string => {
  const message = userMessage.toLowerCase();
  const responses = getAiResponsesConfig(restaurantName)[locale];
  
  // Check for Spanish keywords
  const spanishKeywords = {
    menu: ['menú', 'menu', 'comida', 'pizza'],
    order: ['ordenar', 'order', 'comprar', 'quiero'],
    delivery: ['delivery', 'entrega', 'domicilio'],
    hours: ['horarios', 'hours', 'abierto', 'open', 'hora'],
    reservation: ['mesa', 'table', 'reserva', 'reservation', 'reservar', 'book']
  };
  
  // Check for English keywords
  const englishKeywords = {
    menu: ['menu', 'food', 'pizza'],
    order: ['order', 'buy', 'get', 'want'],
    delivery: ['delivery', 'deliver'],
    hours: ['hours', 'open', 'time'],
    reservation: ['table', 'reservation', 'book']
  };
  
  const keywords = locale === 'es' ? spanishKeywords : englishKeywords;
  
  if (keywords.menu.some(k => message.includes(k))) {
    return responses.menu;
  } else if (keywords.order.some(k => message.includes(k))) {
    return responses.order;
  } else if (keywords.delivery.some(k => message.includes(k))) {
    return responses.delivery;
  } else if (keywords.hours.some(k => message.includes(k))) {
    return responses.hours;
  } else if (keywords.reservation.some(k => message.includes(k))) {
    return responses.reservation;
  } else if (message.includes('hi') || message.includes('hello') || message.includes('hey') || message.includes('hola')) {
    return responses.greeting;
  } else {
    return responses.default;
  }
};

export default function TryItNowModal({ isOpen, onClose, locale = 'en', restaurantName, ownerName: _ }: TryItNowModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const content = getAiResponsesConfig(restaurantName)[locale];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add greeting message when modal opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const initialMessage: Message = {
          id: 1,
          text: content.greeting,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([initialMessage]);
      }, 500);
    } else if (!isOpen) {
      setMessages([]);
    }
  }, [isOpen, content.greeting]);

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
        text: getAIResponse(inputText, locale, restaurantName),
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className="bg-white rounded-2xl w-full max-w-md h-[95vh] sm:h-[720px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-emerald-600 text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center p-1 flex-shrink-0">
              <img 
                src="/images/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                width={20}
                height={20}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base sm:text-lg">Donna</h3>
              <p className="text-xs sm:text-sm opacity-90 truncate">{content.assistantSubtitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-emerald-700 rounded-full p-1 transition-colors flex-shrink-0"
            aria-label="Close chat"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] sm:max-w-xs rounded-2xl p-2.5 sm:p-3 ${
                message.sender === 'user' 
                  ? 'bg-emerald-500 text-white rounded-br-md' 
                  : 'bg-gray-200 text-gray-800 rounded-bl-md'
              }`}>
                <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                <p className={`text-[10px] sm:text-xs mt-1 ${
                  message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-2xl rounded-bl-md p-2.5 sm:p-3 max-w-xs">
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
          <div className="px-3 sm:px-4 pb-2 flex-shrink-0">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {content.quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputText(reply);
                    setTimeout(() => sendMessage(), 100);
                  }}
                  className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-3 sm:p-4 border-t flex-shrink-0">
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-gray-100 rounded-full px-3 sm:px-4 py-2">
            <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={content.placeholder}
              className="flex-1 bg-transparent outline-none text-xs sm:text-sm min-w-0"
            />
            <button 
              onClick={sendMessage}
              disabled={!inputText.trim()}
              className="text-emerald-600 hover:text-emerald-700 disabled:text-gray-400 transition-colors flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
