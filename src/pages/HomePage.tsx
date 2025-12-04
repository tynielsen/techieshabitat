import { Monitor, Heart, Code, TrendingUp } from 'lucide-react';
import { Card } from '../components/Card';
import { healthTips } from '../data/healthTips';
import type { Theme } from '../types';

interface HomePageProps {
  theme: Theme;
}

export function HomePage({ theme }: HomePageProps) {
  return (
    <div className="space-y-8">
      <header className={`${theme === 'dark' ? 'bg-linear-to-r from-blue-600 to-purple-700' : 'bg-linear-to-r from-blue-500 to-purple-600'} rounded-lg p-6 md:p-8 text-white`}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Office Worker Wellness Hub
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Your complete resource for staying healthy, productive, and informed with the latest news in the tech industry.
        </p>
        <p className="text-xs mt-5">
          (This site is built using modern AI-assisted development tools.)
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Desk Setup Section */}
        <Card theme={theme} className={`${theme === 'dark' ? '' : 'bg-linear-to-r to-lime-600 from-orange-700'}`}>
          <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-white'}`}>
            <Monitor className="w-12 h-12 text-blue-500 mr-4 inline-block" />
            Desk Setup
          </h3>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-white'}>
            Ergonomic equipment and tools to create the perfect workspace
          </p>
        </Card>
        
        {/* Health & Wellness Section */}
        <Card theme={theme} className={`${theme === 'dark' ? 'bg-gray' : 'bg-lime-700'}`}>
          <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-white'}`}>
            <Heart className="w-12 h-12 text-red-500 mr-4 inline-block" />
            Health & Wellness
          </h3>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-white'}>
            Tips and reminders to maintain physical and mental health
          </p>
        </Card>

        {/* Engineering Resources Section */}
        <Card theme={theme}  className={`sm:col-span-2 lg:col-span-1 ${theme === 'dark' ? '' : 'bg-linear-to-r to-orange-700 from-lime-600'}`}>
          <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-white'}`}>
            <Code className="w-12 h-12 text-green-500 mr-4 inline-block" />
            Engineering Resources
          </h3>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-white'}>
            Standards, tools, and platforms for professional development
          </p>
        </Card>
      </div>

      <div className={`${theme === 'dark' ? 'bg-blue-900 border-blue-800' : 'bg-blue-50 border-blue-200'} rounded-lg p-6 border`}>
        <h2 className={`text-xl font-semibold mb-4 flex items-center ${theme === 'dark' ? 'text-blue-300' : 'text-gray-800'}`}>
          <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
          Quick Health Reminders
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {healthTips.map((tip, idx) => (
            <div key={idx} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
              <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>
                {tip.title}
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {tip.description}
              </p>
              <span className="text-xs text-blue-500 mt-2 inline-block">
                {tip.frequency}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
