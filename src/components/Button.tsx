import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
  const variants = {
    primary: 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200',
    secondary: 'border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};