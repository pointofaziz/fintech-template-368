
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

  return (
    <div className="flex items-center">
      {/* Light mode logo */}
      <img 
        src={navbarLogoLight}
        alt="Fyxor" 
        className={cn(
          sizeClasses[variant],
          'w-auto dark:hidden',
          className
        )}
      />
      {/* Dark mode logo */}
      <img 
        src={navbarLogoDark}
        alt="Fyxor" 
        className={cn(
          sizeClasses[variant],
          'w-auto hidden dark:block',
          className
        )}
      />
    </div>
  );
};

export default Logo;
