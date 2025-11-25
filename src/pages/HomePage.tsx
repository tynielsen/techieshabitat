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
      <header
        className={`${
          theme === 'dark' ? 'bg-linear-to-r from-blue-600 to-purple-700' : 'bg-linear-to-r from-blue-500 to-purple-600'
        } rounded-lg p-6 md:p-8 text-white`}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tech Worker Wellness Hub</h1>
        <p className="text-lg md:text-xl opacity-90">
          Your complete resource for staying healthy, productive, and informed in tech
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card theme={theme}>
          <Monitor className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
            Desk Setup
          </h3>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            Ergonomic equipment and tools to create the perfect workspace
          </p>
        </Card>

        <Card theme={theme}>
          <Heart className="w-12 h-12 text-red-500 mb-4" />
          <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
            Health & Wellness
          </h3>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            Tips and reminders to maintain physical and mental health
          </p>
        </Card>

        <Card theme={theme} className="sm:col-span-2 lg:col-span-1">
          <Code className="w-12 h-12 text-green-500 mb-4" />
          <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
            Engineering Resources
          </h3>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            Standards, tools, and platforms for professional development
          </p>
        </Card>
      </div>

      <div
        className={`${
          theme === 'dark' ? 'bg-blue-900 border-blue-800' : 'bg-blue-50 border-blue-200'
        } rounded-lg p-6 border`}
      >
        <h2
          className={`text-xl font-semibold mb-4 flex items-center ${
            theme === 'dark' ? 'text-blue-300' : 'text-gray-800'
          }`}
        >
          <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
          Quick Health Reminders
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {healthTips.map((tip, idx) => (
            <div key={idx} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg`}>
              <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>
                {tip.title}
              </h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{tip.description}</p>
              <span className="text-xs text-blue-500 mt-2 inline-block">{tip.frequency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
