
import React from 'react';
import { cn } from '@/lib/utils';
import navbarLogoLight from '@/assets/fyxor-logo-navbar.png';
import navbarLogoDark from '@/assets/fyxor-logo-navbar-dark.png';

interface LogoProps {
  variant?: 'navbar' | 'hero';
  className?: string;
}

const Logo = ({ variant = 'navbar', className }: LogoProps) => {
  const sizeClasses = {
    navbar: 'h-[30px]',
    hero: 'h-[60px]'
  };

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
