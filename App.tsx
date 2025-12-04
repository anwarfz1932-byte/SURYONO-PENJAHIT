import React, { useState } from 'react';
import { Instagram, MapPin, MessageCircleQuestion } from 'lucide-react';
import { TopographyLines, NeedleThreadLeft, NeedleThreadRight } from './components/DecorativeElements';
import ConsultationModal from './components/ConsultationModal';
import { SewingLogo } from './components/SewingLogo';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-earth selection:text-white relative overflow-hidden flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6">
      
      {/* Background Decorative Elements */}
      <TopographyLines />
      <NeedleThreadLeft />
      <NeedleThreadRight />

      {/* Main Content Container - Simulating the Poster dimensions */}
      <main className="relative z-10 w-full max-w-2xl flex flex-col items-center space-y-8 sm:space-y-12">
        
        {/* Logo Section */}
        <div className="w-full flex justify-center py-6 sm:py-10">
          <div className="w-48 h-48 sm:w-64 sm:h-64 text-ink hover:text-earth transition-colors duration-500 transform hover:scale-105 animate-bounce-in-smooth">
            <SewingLogo />
          </div>
        </div>

        {/* Typography Heading */}
        <div className="text-center space-y-2">
          <h1 className="font-serif text-5xl sm:text-7xl tracking-tight leading-none text-ink uppercase">
            <span className="inline-block opacity-0 animate-fade-in-up">Suryono</span>
            <br/> 
            <span className="inline-block font-light opacity-0 animate-fade-in-up-delay">Penjahit</span>
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black max-w-xl mx-auto opacity-80" />

        {/* Services Section */}
        <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-start justify-center gap-2 sm:gap-4 px-4">
          <div className="font-serif italic font-bold text-xl sm:text-2xl pt-1">menerima •</div>
          <div className="flex flex-row gap-8 sm:gap-16 w-full sm:w-auto justify-center sm:justify-start text-lg sm:text-xl font-medium">
            <ul className="list-disc pl-4 space-y-2 marker:text-black">
              <li>Seragam Sekolah</li>
              <li>Kebaya</li>
              <li>Gamis</li>
            </ul>
            <ul className="list-disc pl-4 space-y-2 marker:text-black">
              <li>Baju</li>
              <li>Celana</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black max-w-xl mx-auto opacity-80" />

        {/* Contact / Footer Section */}
        <footer className="w-full max-w-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 pb-8">
          
          <button 
            onClick={() => window.open('https://wa.me/62895393952644', '_blank')}
            className="bg-earth hover:bg-earth-hover text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl active:scale-95 flex items-center gap-2"
          >
            HUBUNGI
          </button>

          <div className="flex flex-col gap-2 text-sm sm:text-base font-semibold">
            <a href="https://wa.me/62895393952644" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-earth transition-colors">
              <div className="bg-black text-white p-1 rounded-full flex items-center justify-center w-6 h-6">
                 {/* WhatsApp Logo SVG */}
                 <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                 </svg>
              </div>
              <span>0895393952644</span>
            </a>
            <a href="https://www.instagram.com/suryono568?igsh=MWo4em51YTluZzVwZw==" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-earth transition-colors">
              <div className="bg-black text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">
                <Instagram size={14} />
              </div>
              <span>@suryono568</span>
            </a>
            <a href="https://maps.app.goo.gl/MVLc7sTTYbVVhouAA" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-earth transition-colors">
              <div className="bg-black text-white p-1 rounded-full w-6 h-6 flex items-center justify-center">
                <MapPin size={14} />
              </div>
              <span>Lokasi Maps</span>
            </a>
          </div>

        </footer>

      </main>

      {/* Floating Action Button for AI Consultation */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-ink text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all hover:scale-110 group flex items-center justify-center"
        aria-label="Konsultasi AI"
      >
        <MessageCircleQuestion size={28} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-ink px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
          Tanya Penjahit
        </span>
      </button>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

export default App;