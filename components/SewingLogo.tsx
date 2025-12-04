import React from 'react';

export const SewingLogo = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 160" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Logo Mesin Jahit"
  >
    <g transform="translate(10, 10)">
      {/* Base Platform */}
      <path 
        d="M10 130h160a5 5 0 0 1 0 10H10a5 5 0 0 1 0-10z" 
        fill="currentColor" 
        opacity="0.8"
      />
      
      {/* Machine Body - Vintage Curve */}
      <path 
        d="M140 130V70c0-25-15-35-45-35H65c-20 0-25 10-25 30v35" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinecap="round"
      />

      {/* Needle Housing */}
      <rect x="30" y="80" width="20" height="25" rx="2" fill="currentColor" />
      
      {/* Needle Bar & Needle */}
      <path d="M40 105v20" stroke="currentColor" strokeWidth="3" />
      <path d="M40 125l0 5" stroke="currentColor" strokeWidth="1" />

      {/* Hand Wheel */}
      <circle cx="140" cy="65" r="22" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="140" cy="65" r="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M140 43v44" stroke="currentColor" strokeWidth="2" />
      <path d="M118 65h44" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="65" r="4" fill="currentColor" />

      {/* Spool Pin & Thread */}
      <rect x="95" y="15" width="6" height="20" fill="currentColor" />
      <path 
        d="M98 15 C 98 5, 50 15, 40 125" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeDasharray="3 2"
        opacity="0.6"
      />
      
      {/* Decorative Swirl */}
      <path 
        d="M70 60c10 0 15 5 15 10" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        opacity="0.4"
      />
    </g>
  </svg>
);
