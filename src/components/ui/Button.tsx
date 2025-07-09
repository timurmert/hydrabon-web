import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const buttonVariants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'bg-transparent border-2 border-primary-500 text-primary-500 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-tiger',
  ghost: 'bg-transparent text-primary-500 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-primary-500/10 hover:text-primary-400',
};

const sizeVariants = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg',
};

export default function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled,
  children,
  onClick,
  type = 'button',
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        sizeVariants[size],
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  );
} 