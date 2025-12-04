import React, { useState } from 'react';
import { Phone, Instagram, MessageCircle } from 'lucide-react';
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
          <div className="w-48 h-48 sm:w-64 sm:h-64 text-ink hover:text-earth transition-colors duration-500 transform hover:scale-105">
            <SewingLogo />
          </div>
        </div>

        {/* Typography Heading */}
        <div className="text-center space-y-2">
          <h1 className="font-serif text-5xl sm:text-7xl tracking-tight leading-none text-ink uppercase">
            Suryono <br/> <span className="font-light">Penjahit</span>
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black max-w-xl mx-auto opacity-80" />

        {/* Services Section */}
        <section className="w-full max-w-xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-12">
            
            <div className="flex-shrink-0">
               <h2 className="font-bold text-xl italic font-serif">menerima •</h2>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-2 text-lg font-light">
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Seragam Sekolah
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Kebaya
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Gamis
                </li>
              </ul>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Baju
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Celana
                </li>
              </ul>
            </div>

          </div>
        </section>

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
            <a href="tel:0895393952644" className="flex items-center gap-2 hover:text-earth transition-colors">
              <div className="bg-black text-white p-1 rounded-full">
                <Phone size={14} />
              </div>
              <span>0895393952644</span>
            </a>
            <a href="https://www.instagram.com/suryono568?igsh=MWo4em51YTluZzVwZw==" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-earth transition-colors">
              <div className="bg-black text-white p-1 rounded-full">
                <Instagram size={14} />
              </div>
              <span>@suryono568</span>
            </a>
          </div>

        </footer>

      </main>

      {/* Floating Action Button for AI Consultation */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-ink text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all hover:scale-110 group"
        aria-label="Konsultasi AI"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-ink px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm pointer-events-none">
          Tanya Penjahit
        </span>
      </button>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

export default App;