import React from 'react';
import { cn } from '@/lib/utils';
import { logoSvgString } from './LogoSvgString';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'dark' }) => {
  return (
    <div className={cn("flex items-center group cursor-pointer", className)}>
      <div 
        className={cn(
          "relative h-10 w-36 md:h-12 md:w-44 transition-all duration-300 group-hover:scale-105",
          "flex items-center justify-center",
          "svg-wrapper [&>svg]:w-full [&>svg]:h-full",
          variant === 'light' ? "text-white" : "text-[#0D82AE]"
        )}
        dangerouslySetInnerHTML={{ __html: logoSvgString }}
      />
    </div>
  );
};

export default BrandLogo;
