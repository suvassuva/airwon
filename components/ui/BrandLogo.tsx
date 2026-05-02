import { cn } from '@/lib/utils';
import { Plane } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'dark' }) => {
  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      {/* Stylized Icon */}
      <div className={cn(
        "p-2 rounded-xl transition-all duration-300 group-hover:rotate-12",
        variant === 'light' ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
      )}>
        <Plane size={24} className="transform -rotate-12" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className={cn(
          "text-2xl font-black tracking-tighter transition-colors duration-300",
          variant === 'light' ? "text-white" : "text-primary"
        )}>
          AIRWON
        </span>
        <span className={cn(
          "text-[10px] font-bold tracking-[0.3em] transition-colors duration-300",
          variant === 'light' ? "text-white/70" : "text-accent"
        )}>
          INDIA
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;

