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
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      } rounded-lg p-6 shadow-md border ${className}`}
    >
      {children}
    </div>
  );
}
