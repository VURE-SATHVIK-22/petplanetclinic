import React from 'react';

const VetLogo = ({ className = "w-8 h-8", color = "#2C7BE5" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pet Planet Veterinary Logo"
    >
      {/* Outer planet ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke={color} 
        strokeWidth="2" 
        fill="none"
        opacity="0.3"
      />
      
      {/* Inner circle background */}
      <circle 
        cx="50" 
        cy="50" 
        r="38" 
        fill={color}
        opacity="0.1"
      />
      
      {/* Dog silhouette */}
      <g transform="translate(30, 35)">
        {/* Dog head */}
        <ellipse cx="20" cy="10" rx="8" ry="9" fill={color} />
        {/* Dog ear left */}
        <ellipse cx="15" cy="6" rx="3" ry="5" fill={color} transform="rotate(-20 15 6)" />
        {/* Dog ear right */}
        <ellipse cx="25" cy="6" rx="3" ry="5" fill={color} transform="rotate(20 25 6)" />
        {/* Dog body */}
        <ellipse cx="20" cy="22" rx="10" ry="8" fill={color} />
        {/* Dog tail */}
        <path d="M 28 20 Q 35 18 36 25" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      
      {/* Paw print accent */}
      <g transform="translate(55, 55)" opacity="0.8">
        {/* Main pad */}
        <ellipse cx="8" cy="10" rx="5" ry="6" fill={color} />
        {/* Toe 1 */}
        <circle cx="4" cy="4" r="2" fill={color} />
        {/* Toe 2 */}
        <circle cx="8" cy="2" r="2" fill={color} />
        {/* Toe 3 */}
        <circle cx="12" cy="4" r="2" fill={color} />
      </g>
      
      {/* Medical cross */}
      <g transform="translate(35, 45)">
        {/* Vertical bar */}
        <rect x="8" y="0" width="4" height="16" fill="#00BFA6" rx="1" />
        {/* Horizontal bar */}
        <rect x="2" y="6" width="16" height="4" fill="#00BFA6" rx="1" />
      </g>
    </svg>
  );
};

export default VetLogo;
