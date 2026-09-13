import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'stone' | 'text' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-wider uppercase transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#18181B] disabled:opacity-50 disabled:cursor-not-allowed select-none text-xs font-medium";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] gap-1.5",
    md: "px-6 py-3 text-xs gap-2",
    lg: "px-8 py-4 text-xs tracking-widest gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#18181B] text-[#FBF9F5] hover:bg-[#2D2B29] active:bg-[#000000] border border-[#18181B]",
    outline: "bg-transparent text-[#18181B] border border-[#18181B] hover:bg-[#18181B] hover:text-[#FBF9F5] active:bg-[#2D2B29]",
    stone: "bg-[#EFEAE2] text-[#18181B] border border-[#E2DDD4] hover:bg-[#E5DFD5] active:bg-[#DCD5C9]",
    white: "bg-[#FFFFFF] text-[#18181B] border border-stone-200 hover:bg-[#FBF9F5] shadow-sm",
    text: "bg-transparent text-[#18181B] hover:text-[#8C827A] px-0 py-0 border-b border-[#18181B] hover:border-[#8C827A] rounded-none pb-0.5"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
