'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, X } from 'lucide-react';
import { AiMessage, SAMPLE_QUERIES, generateAiResponse } from '@/data/aiResponses';

interface AiChatSidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function AiChatSidebar({ mobileOpen = false, onMobileClose }: AiChatSidebarProps) {
  const [messages, setMessages] = useState<AiMessage[]>([
    {
      id: 'msg-welcome',
      role: 'assistant',
      content: `👋 Hi! I'm **PuneRealty AI** — your smart property advisor for Pune.\n\nI can help you find the right project based on your budget, location preference, risk appetite, and investment goals.\n\nTry one of the sample queries below, or ask me anything!`,
      timestamp: '3:14 PM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [msgCounter, setMsgCounter] = useState(1);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function handleSend(query?: string) {
    const text = (query ?? inputValue).trim();
    if (!text) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

    const userMsg: AiMessage = {
      id: `msg-user-${msgCounter}`,
      role: 'user',
      content: text,
      timestamp: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setMsgCounter((c) => c + 1);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse = generateAiResponse(text);
      const aiMsg: AiMessage = {
        id: `msg-ai-${msgCounter + 1}`,
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      setMsgCounter((c) => c + 2);
    }, 1200 + Math.floor(text.length * 8));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function renderMessageContent(content: string) {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={`line-${i}`} className={`${i > 0 ? 'mt-1' : ''} text-sm leading-relaxed`}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={`part-${j}`} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
            }
            return <span key={`part-${j}`}>{part}</span>;
          })}
        </p>
      );
    });
  }

  const chatContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-[#2D3F55] flex-shrink-0">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-amber-glow">
          <Sparkles size={18} className="text-slate-900" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-white">PuneRealty AI</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-xs text-emerald-400">Online — Pune Property Expert</span>
          </div>
        </div>
        {onMobileClose && (
          <button
            onClick={onMobileClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-[#2D3F55] transition-colors lg:hidden"
            aria-label="Close AI chat"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 animate-slide-up ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Avatar */}
            <div className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center ${
              msg.role === 'user' ?'bg-amber-500/20 border border-amber-500/30' :'bg-[#2D3F55] border border-[#334560]'
            }`}>
              {msg.role === 'user' ? (
                <User size={13} className="text-amber-400" />
              ) : (
                <Bot size={13} className="text-slate-300" />
              )}
            </div>

            {/* Bubble */}
            <div className={`max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
              <div className={`rounded-xl px-3 py-2.5 ${
                msg.role === 'user' ?'bg-amber-500/20 border border-amber-500/30 text-amber-50' :'bg-[#1E293B] border border-[#2D3F55] text-slate-200'
              }`}>
                <div className="text-xs text-slate-500 mb-1">{msg.timestamp}</div>
                {renderMessageContent(msg.content)}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-2.5 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center bg-[#2D3F55] border border-[#334560]">
              <Bot size={13} className="text-slate-300" />
            </div>
            <div className="bg-[#1E293B] border border-[#2D3F55] rounded-xl px-4 py-3">
              <div className="flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Sample Queries */}
      <div className="px-3 pb-2 flex-shrink-0">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-2">Try asking</p>
        <div className="flex flex-col gap-1.5">
          {SAMPLE_QUERIES.slice(0, 3).map((q) => (
            <button
              key={`query-${q.slice(0, 20)}`}
              onClick={() => handleSend(q)}
              disabled={isTyping}
              className="text-left text-xs text-slate-400 hover:text-amber-400 bg-[#1E293B] hover:bg-amber-500/10 border border-[#2D3F55] hover:border-amber-500/30 rounded-lg px-3 py-2 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-[#2D3F55] flex-shrink-0">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Pune projects..."
            disabled={isTyping}
            className="flex-1 input-base text-xs py-2.5 disabled:opacity-50"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            className="w-9 h-9 flex-shrink-0 rounded-lg bg-amber-500 hover:bg-amber-400 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-150"
            aria-label="Send message"
          >
            <Send size={14} className="text-slate-900" />
          </button>
        </div>
        <p className="text-[10px] text-slate-600 mt-2 text-center">AI responses are for guidance only. Verify before investing.</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] sticky top-16 w-full bg-[#0F1A2E] border-l border-[#2D3F55] overflow-hidden">
        {chatContent}
      </aside>

      {/* Mobile bottom drawer */}
      <>
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden animate-fade-in"
            onClick={onMobileClose}
          />
        )}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0F1A2E] border-t border-[#2D3F55] rounded-t-2xl transform transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ height: '75vh' }}
        >
          <div className="w-10 h-1 bg-[#2D3F55] rounded-full mx-auto mt-3 mb-1" />
          {chatContent}
        </div>
      </>
    </>
  );
}
