
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, textColor = "text-slate-900", iconOnly = false }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* SVG Icon recreated from the provided logo image */}
      <svg 
        viewBox="0 0 100 120" 
        className="h-full w-auto fill-current text-amber-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main V Shield */}
        <path d="M50 75 L25 45 L25 25 L35 25 V35 L50 50 L65 35 V25 L75 25 L75 45 Z" />
        
        {/* House Silhouette Inside */}
        <path d="M50 42 L44 48 V58 H56 V48 Z" fill="currentColor" className="opacity-40" />
        <path d="M50 42 L44 48 H56 Z" fill="currentColor" />
        
        {/* Horizontal Tech Bars on the "Ears" */}
        <g opacity="0.8">
          <rect x="27" y="28" width="8" height="1.5" />
          <rect x="27" y="31" width="8" height="1.5" />
          <rect x="27" y="34" width="8" height="1.5" />
          <rect x="27" y="37" width="8" height="1.5" />
          <rect x="27" y="40" width="8" height="1.5" />
          
          <rect x="65" y="28" width="8" height="1.5" />
          <rect x="65" y="31" width="8" height="1.5" />
          <rect x="65" y="34" width="8" height="1.5" />
          <rect x="65" y="37" width="8" height="1.5" />
          <rect x="65" y="40" width="8" height="1.5" />
        </g>
        
        {/* Circuit Nodes/Lines */}
        <circle cx="18" cy="35" r="1.5" />
        <path d="M12 35 H16" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="42" r="1" />
        <path d="M15 42 H19" stroke="currentColor" strokeWidth="1" />
        
        <circle cx="82" cy="38" r="1.5" />
        <path d="M77 38 H80" stroke="currentColor" strokeWidth="1" />
        
        <circle cx="78" cy="15" r="1" />
        <path d="M78 18 V22" stroke="currentColor" strokeWidth="1" />
        
        {/* Bottom Accent Point */}
        <circle cx="50" cy="82" r="1.5" />

        {/* The Signature Underline with Triangle from the logo */}
        {showText && (
          <g transform="translate(0, 95)">
            <rect x="10" y="5" width="80" height="1" fill="currentColor" opacity="0.5" />
            <path d="M42 5 L50 15 L58 5 Z" fill="currentColor" />
          </g>
        )}
      </svg>

      {!iconOnly && showText && (
        <div className="flex flex-col leading-none -mt-4">
          <span className={`text-xl font-black tracking-[0.1em] uppercase ${textColor}`}>
            FEATURE <span className="text-amber-500">V</span>
          </span>
          {/* Decorative bar removed as it's now part of the SVG for precision */}
        </div>
      )}
    </div>
  );
};

export default Logo;
