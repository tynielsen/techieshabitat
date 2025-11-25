import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
}

export function Card({ children, className = '', theme = 'light' }: CardProps) {
  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } rounded-lg p-6 shadow-md border ${className}`}
    >
      {children}
    </div>
  );
}
