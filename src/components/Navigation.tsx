import { useState } from 'react';
import { Menu, X, Sun, Moon, Home, Monitor, Heart, Newspaper, Code } from 'lucide-react';
import type { PageId, Theme } from '../types';

interface NavigationProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
  theme: Theme;
  onThemeToggle: () => void;
}

const navigationItems = [
  { id: 'home' as PageId, label: 'Home', icon: Home },
  { id: 'desk' as PageId, label: 'Desk Setup', icon: Monitor },
  { id: 'health' as PageId, label: 'Health & Wellness', icon: Heart },
  { id: 'news' as PageId, label: 'Tech News', icon: Newspaper },
  { id: 'engineering' as PageId, label: 'Engineering', icon: Code },
];

export function Navigation({ activePage, onPageChange, theme, onThemeToggle }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageChange = (page: PageId) => {
    onPageChange(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md sticky top-0 z-40`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Monitor className="w-8 h-8 text-blue-600" />
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
              Tech Wellness Hub
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map(item => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-blue-900 text-blue-300 font-semibold'
                        : 'bg-blue-100 text-blue-700 font-semibold'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg ml-2 ${
                theme === 'dark' ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navigationItems.map(item => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`w-full flex items-center space-x-2 px-4 py-3 rounded-lg ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-blue-900 text-blue-300 font-semibold'
                        : 'bg-blue-100 text-blue-700 font-semibold'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
