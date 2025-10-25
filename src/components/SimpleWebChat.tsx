'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import Image from 'next/image'

interface SimpleWebChatProps {
  locale: string
}

const SimpleWebChat: React.FC<SimpleWebChatProps> = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{id: string, text: string, isUser: boolean}>>([])
  const [showNotification, setShowNotification] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])

  // Initialize welcome message when chat opens
  useEffect(() => {
    if (isOpen && chatMessages.length === 0) {
      const welcomeMessage = {
        id: 'welcome',
        text: locale === 'es' 
          ? 'Hola! Te puedo ayudar con preguntas sobre nuestras soluciones, preguntas sobre nuestro servicio, como escanear tu restaurante y agendando una demo con nuestro equipo para saber más'
          : 'Hi! I\'m RAY agent 🚀 How can I help you today? Ask me about our products, pricing, demos, or anything about RAY.',
        isUser: false
      }
      setChatMessages([welcomeMessage])
    }
  }, [isOpen, locale])

  // Show notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isOpen])

  // Hide notification when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowNotification(false)
    }
  }, [isOpen])

  useEffect(() => {
    const updateVisibility = () => {
      // Always visible on tablets/desktops
      if (window.innerWidth > 640) {
        setVisible(true)
        return
      }

      const heroSection = document.querySelector('.hero-container') as HTMLElement | null
      if (!heroSection) {
        setVisible(true)
        return
      }

      const heroRect = heroSection.getBoundingClientRect()
      const heroBottom = heroRect.bottom
      const viewportHeight = window.innerHeight

      // Now require the hero to be almost entirely scrolled off-screen (bottom < 10% of viewport)
      if (heroBottom <= viewportHeight * 0.1) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility)
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return

    const userMessage = { id: Date.now().toString(), text: message, isUser: true }
    setChatMessages(prev => [...prev, userMessage])
    
    const currentMessage = message
    setMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: currentMessage,
          locale: locale,
          sessionId: 'webchat-session-' + Date.now()
        })
      })

      const data = await response.json()
      const botMessage = { 
        id: (Date.now() + 1).toString(), 
        text: data.response || data.message || (locale === 'es' ? 'Lo siento, hubo un error. Por favor intenta de nuevo.' : 'Sorry, there was an error. Please try again.'), 
        isUser: false 
      }
      
      setChatMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chat error:', error)
      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: locale === 'es' ? 'Lo siento, hubo un error de conexión. Por favor intenta de nuevo en un momento.' : 'Sorry, there was a connection error. Please try again in a moment.',
        isUser: false
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage()
  }

  if (!visible && !isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <div className="relative flex items-center">
          {/* Notification bubble - appears after 5 seconds */}
          {showNotification && (
            <div className="mr-3 animate-bounce-slow">
              <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-2xl shadow-xl" style={{ minWidth: '250px' }}>
                <button
                  onClick={() => setShowNotification(false)}
                  className="absolute -top-2 -right-2 bg-white text-gray-600 hover:text-gray-800 w-6 h-6 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all z-10"
                  aria-label="Close notification"
                >
                  <X size={14} />
                </button>
                <p className="text-sm font-medium pr-2 leading-relaxed">
                  {locale === 'es' 
                    ? '👋 ¿Tienes alguna pregunta?'
                    : '👋 Do you have questions?'}
                </p>
                {/* Arrow pointing right towards the chat button */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-transparent border-l-teal-600"></div>
              </div>
            </div>
          )}
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group flex-shrink-0"
            aria-label={locale === 'es' ? 'Abrir chat con RAY agent' : 'Open chat with RAY agent'}
          >
            <MessageCircle size={24} />
          </button>

          {/* Chat tooltip - on hover */}
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
{locale === 'es' ? 'Chatea con RAY agent' : 'Chat with RAY agent'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-500"></div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[405px] max-w-[calc(100vw-2rem)] h-[750px] flex flex-col overflow-hidden border border-gray-200">
          {/* Header - Blue theme */}
          <div className="bg-blue-500 text-white py-3 px-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/RAY-small-logo-white.png"
                alt="RAY Logo"
                width={120}
                height={38}
                className="h-10 w-auto"
              />
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              aria-label={locale === 'es' ? 'Cerrar chat' : 'Close chat'}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-3">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-start space-x-2 max-w-[85%]">
                  {!msg.isUser && (
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 p-1">
                      <Image
                        src="/images/RAY-small-logo-white.png"
                        alt="RAY"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain filter invert"
                      />
                    </div>
                  )}
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.isUser 
                      ? 'bg-teal-500 text-white rounded-br-md' 
                      : 'bg-blue-500 text-white rounded-bl-md'
                  }`}>
                    <span 
                      className="whitespace-pre-line" 
                      dangerouslySetInnerHTML={{
                        __html: msg.text
                          .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') // **texto** -> <strong>texto</strong>
                          .replace(/\*\*/g, '<br>') // ** solos -> <br>
                          .replace(/(https?:\/\/[^\s<>"{}|\\^`[\]]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-200 transition-colors">$1</a>') // URLs -> links
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 p-1">
                    <Image
                      src="/images/RAY-small-logo-white.png"
                      alt="RAY"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain filter invert"
                    />
                  </div>
                  <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>


          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={locale === 'es' ? 'Pregúntame algo sobre RAY...' : 'Ask me something about RAY...'}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!message.trim() || isLoading}
                className="bg-teal-500 hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-xl transition-colors flex items-center justify-center min-w-[50px]"
                aria-label={locale === 'es' ? 'Enviar mensaje' : 'Send message'}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SimpleWebChat
