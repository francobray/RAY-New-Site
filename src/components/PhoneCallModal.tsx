import React, { useState, useEffect } from 'react';
import { X, Phone, PhoneOff, Mic, MicOff, Volume2 } from 'lucide-react';
import { type Locale } from '@/lib/i18n';

interface PhoneCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
}

interface CallStep {
  speaker: 'user' | 'ai';
  text: string;
  duration: number;
}

const callScript: CallStep[] = [
  { speaker: 'ai', text: 'Hello! Thank you for calling Sakura Sushi. This is Yuki, your AI assistant. How can I help you today?', duration: 4000 },
  { speaker: 'user', text: 'Hi, I\'d like to place an order for pickup please.', duration: 3000 },
  { speaker: 'ai', text: 'I\'d be happy to help you with your pickup order! What would you like to order tonight?', duration: 4000 },
  { speaker: 'user', text: 'Can I get a California roll and some miso soup?', duration: 3000 },
  { speaker: 'ai', text: 'Perfect! One California roll and one miso soup. That comes to $16.50 total. Can I get your name for the order?', duration: 5000 },
  { speaker: 'user', text: 'Sure, it\'s Mike Johnson.', duration: 2000 },
  { speaker: 'ai', text: 'Great, Mike! Your order will be ready for pickup in about 15 minutes. We\'ll send you a text when it\'s ready. Is there anything else I can help you with?', duration: 6000 },
  { speaker: 'user', text: 'No, that\'s perfect. Thank you!', duration: 2000 },
  { speaker: 'ai', text: 'You\'re welcome! Thank you for choosing Sakura Sushi. Have a great evening!', duration: 3000 }
];

export default function PhoneCallModal({ isOpen, onClose }: PhoneCallModalProps) {
  const [callState, setCallState] = useState<'incoming' | 'connected' | 'ended'>('incoming');
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isAISpeaking, setIsAISpeaking] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callState === 'connected') {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callState]);

  useEffect(() => {
    if (callState === 'connected' && currentStep < callScript.length) {
      const step = callScript[currentStep];
      
      if (step.speaker === 'ai') {
        setIsAISpeaking(true);
        setCurrentMessage(step.text);
      } else {
        setIsAISpeaking(false);
        setCurrentMessage(step.text);
      }

      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, step.duration);
      
      return () => clearTimeout(timer);
    } else if (callState === 'connected' && currentStep >= callScript.length) {
      setTimeout(() => {
        setCallState('ended');
        setTimeout(() => {
          onClose();
          resetCall();
        }, 2000);
      }, 1000);
    }
  }, [callState, currentStep, onClose]);

  const resetCall = () => {
    setCallState('incoming');
    setCurrentStep(0);
    setCallDuration(0);
    setIsMuted(false);
    setCurrentMessage('');
    setIsAISpeaking(false);
  };

  const answerCall = () => {
    setCallState('connected');
  };

  const endCall = () => {
    setCallState('ended');
    setTimeout(() => {
      onClose();
      resetCall();
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-3xl w-full max-w-sm h-[700px] flex flex-col shadow-2xl text-white relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={() => {
            onClose();
            resetCall();
          }}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Status bar */}
        <div className="flex justify-between items-center p-4 text-sm">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-white rounded-sm"></div>
            <div className="w-4 h-2 bg-white rounded-sm"></div>
            <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
          </div>
        </div>

        {callState === 'incoming' && (
          <>
            {/* Incoming call screen */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-8">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-2">Incoming call</p>
                <h2 className="text-2xl font-semibold mb-1">Sakura Sushi</h2>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Phone className="w-12 h-12 text-white" />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-400">AI Agent Available 24/7</p>
              </div>
            </div>

            {/* Call actions */}
            <div className="p-8">
              <div className="flex justify-center space-x-16">
                <button 
                  onClick={endCall}
                  className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <PhoneOff className="w-8 h-8 text-white" />
                </button>
                <button 
                  onClick={answerCall}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          </>
        )}

        {callState === 'connected' && (
          <>
            {/* Connected call screen */}
            <div className="flex-1 flex flex-col items-center justify-center px-8">
              {/* Call info */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-1">Sakura Sushi</h2>
                <p className="text-green-400 text-sm mb-2">Connected</p>
                <p className="text-gray-400 text-sm">{formatTime(callDuration)}</p>
              </div>

              {/* Avatar with speaking animation */}
              <div className="flex justify-center mb-12">
                <div className={`w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isAISpeaking ? 'scale-110 shadow-lg shadow-blue-500/50' : ''
                }`}>
                  <Phone className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Current message display */}
              <div className="flex-1 flex items-center justify-center px-4 mb-8">
                <div className="bg-gray-800 rounded-2xl p-6 max-w-xs text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className={`w-3 h-3 rounded-full ${isAISpeaking ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
                    <span className="text-sm text-gray-400">
                      {isAISpeaking ? '🤖 AI Agent' : '🎙️ You'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-100 leading-relaxed">
                    {currentMessage || 'Call starting...'}
                  </p>
                  {isAISpeaking && (
                    <div className="flex justify-center space-x-1 mt-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Call controls */}
              <div className="px-8 pb-8">
                <div className="flex justify-center space-x-8">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                      isMuted ? 'bg-red-500' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </button>
                  <button className="w-14 h-14 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={endCall}
                    className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <PhoneOff className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {callState === 'ended' && (
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Call Ended</h2>
              <p className="text-gray-400">Duration: {formatTime(callDuration)}</p>
            </div>
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <PhoneOff className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
