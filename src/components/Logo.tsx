import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Dial Background */}
          <circle cx="50" cy="50" r="48" fill="white" stroke="#0084C7" strokeWidth="1" />
          
          {/* Tick Marks */}
          {[...Array(60)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="6"
              x2="50"
              y2={i % 5 === 0 ? "12" : "9"}
              stroke="#0084C7"
              strokeWidth={i % 5 === 0 ? "1.5" : "0.5"}
              transform={`rotate(${i * 6} 50 50)`}
              opacity={0.3}
            />
          ))}

          {/* Compass/W Shape Background */}
          <path
            d="M20 40 L35 75 L50 55 L65 75 L80 40"
            fill="none"
            stroke="#0084C7"
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={0.15}
          />
          
          {/* Styled W */}
          <path
            d="M20 40 C20 40 25 75 35 75 C45 75 50 55 50 55 C50 55 55 75 65 75 C75 75 80 40 80 40"
            fill="none"
            stroke="url(#blueOrangeGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Clock Hands */}
          <line x1="50" y1="50" x2="50" y2="25" stroke="#0084C7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="50" y1="50" x2="75" y2="50" stroke="#F27D26" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Center Point */}
          <circle cx="50" cy="50" r="3" fill="#0084C7" />
          
          <defs>
            <linearGradient id="blueOrangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0084C7" />
              <stop offset="100%" stopColor="#F27D26" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="flex text-2xl font-black tracking-tighter leading-none">
          <span className="text-[#0084C7]">Workin</span>
          <span className="text-[#F27D26]">Hrs</span>
        </div>
        <span className="text-[10px] text-text-dim uppercase tracking-[2px] font-bold">
          Get paid for your time
        </span>
      </div>
    </div>
  );
};
