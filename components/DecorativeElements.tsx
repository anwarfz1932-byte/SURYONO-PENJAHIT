import React from 'react';

export const TopographyLines = () => (
  <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden" viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <path d="M0,0 Q200,100 400,50 T800,100 T1000,50 V0 H0 Z" fill="none" stroke="black" strokeWidth="2" />
    <path d="M0,100 Q250,200 500,150 T1000,200" fill="none" stroke="black" strokeWidth="2" />
    <path d="M-50,300 Q200,450 450,350 T950,400" fill="none" stroke="black" strokeWidth="1" />
    <path d="M0,500 Q300,600 600,500 T1200,600" fill="none" stroke="black" strokeWidth="1.5" />
    <path d="M800,0 Q700,300 900,600" fill="none" stroke="black" strokeWidth="1" />
    <path d="M100,800 Q400,700 700,900" fill="none" stroke="black" strokeWidth="2" />
    <circle cx="850" cy="250" r="40" fill="none" stroke="black" strokeWidth="1" />
    <circle cx="150" cy="250" r="60" fill="none" stroke="black" strokeWidth="1" />
  </svg>
);

export const NeedleThreadLeft = () => (
  <svg className="absolute top-[40%] -left-10 w-48 h-48 opacity-80 text-ink pointer-events-none transform -rotate-12" viewBox="0 0 200 200">
    {/* Abstract needle */}
    <line x1="20" y1="20" x2="100" y2="100" stroke="currentColor" strokeWidth="2" />
    {/* Abstract thread loop */}
    <path d="M100,100 C150,150 50,180 20,150 C-10,120 40,80 80,120" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const NeedleThreadRight = () => (
  <svg className="absolute top-[15%] -right-10 w-64 h-64 opacity-80 text-ink pointer-events-none" viewBox="0 0 200 200">
     {/* Abstract needle */}
    <line x1="180" y1="20" x2="120" y2="100" stroke="currentColor" strokeWidth="2" />
     {/* Abstract thread */}
    <path d="M120,100 C80,140 160,180 180,140 C200,100 140,80 120,120" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);