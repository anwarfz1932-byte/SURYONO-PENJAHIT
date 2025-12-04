import React, { useState, useRef, useEffect } from 'react';
import { getTailoringAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { X, Send, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo! Ada yang bisa saya bantu mengenai rencana jahitan Anda? Tanya saya tentang jenis kain atau estimasi kebutuhan bahan.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getTailoringAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="bg-paper w-full max-w-md rounded-lg shadow-2xl flex flex-col h-[600px] border border-stone-300 relative">
        
        {/* Header */}
        <div className="p-4 border-b border-stone-300 flex justify-between items-center bg-paper-dark rounded-t-lg">
          <h3 className="font-serif text-xl font-bold text-ink">Konsultasi Virtual</h3>
          <button onClick={onClose} className="p-1 hover:bg-stone-300 rounded-full transition-colors">
            <X size={24} className="text-ink" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-paper">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-earth text-white rounded-br-none' 
                  : 'bg-white text-ink border border-stone-200 rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-stone-200 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-earth" />
                <span className="text-xs text-stone-500">Sedang mengetik...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-200 rounded-b-lg">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya tentang kain..."
              className="flex-1 px-4 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-earth/50 bg-stone-50 text-ink"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-earth text-white rounded-full hover:bg-earth-hover disabled:opacity-50 transition-colors flex items-center justify-center aspect-square"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConsultationModal;