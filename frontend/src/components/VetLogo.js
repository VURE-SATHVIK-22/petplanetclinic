import React from 'react';

const VetLogo = ({ className = "w-8 h-8", color = "#f97316" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pet Planet Veterinary Logo"
    >
      {/* Paw print */}
      <g>
        {/* Main pad */}
        <ellipse cx="50" cy="60" rx="18" ry="22" fill={color} />
        
        {/* Top left toe */}
        <ellipse cx="30" cy="35" rx="8" ry="12" fill={color} transform="rotate(-15 30 35)" />
        
        {/* Top center toe */}
        <ellipse cx="50" cy="28" rx="8" ry="12" fill={color} />
        
        {/* Top right toe */}
        <ellipse cx="70" cy="35" rx="8" ry="12" fill={color} transform="rotate(15 70 35)" />
        
        {/* Bottom right toe */}
        <ellipse cx="72" cy="55" rx="7" ry="11" fill={color} transform="rotate(25 72 55)" />
      </g>
      
      {/* Medical cross overlay */}
      <g>
        {/* Vertical bar of cross */}
        <rect x="46" y="45" width="8" height="28" fill="white" rx="2" />
        
        {/* Horizontal bar of cross */}
        <rect x="38" y="55" width="24" height="8" fill="white" rx="2" />
      </g>
    </svg>
  );
};

export default VetLogo;
