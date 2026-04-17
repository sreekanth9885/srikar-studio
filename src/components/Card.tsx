import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${hover ? 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' : ''} ${className}`}>
      {children}
    </div>
  );
};