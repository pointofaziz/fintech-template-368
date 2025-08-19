
import React from 'react';

interface LogoProps {
  isDarkMode?: boolean;
}

const Logo = ({ isDarkMode = false }: LogoProps) => {
  const logoSrc = isDarkMode ? '/3.png' : '/2.png';
  
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logoSrc} 
        alt="Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
