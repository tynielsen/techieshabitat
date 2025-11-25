import { Clock } from 'lucide-react';
import { healthTips, psychTips, exercises } from '../data/healthTips';
import type { Theme } from '../types';

interface HealthPageProps {
  theme: Theme;
}

export function HealthPage({ theme }: HealthPageProps) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
          Health & Wellness
        </h1>
      </header>

      <div
        className={`${
          theme === 'dark' ? 'bg-red-900 border-red-800' : 'bg-red-50 border-red-200'
        } rounded-lg p-6 border`}
      >
        <h2
          className={`text-xl font-semibold mb-4 flex items-center ${
            theme === 'dark' ? 'text-red-300' : 'text-red-700'
          }`}
        >
          <Clock className="w-6 h-6 mr-2" />
          Regular Reminders
        </h2>
        <div className="space-y-4">
          {healthTips.map((tip, idx) => (
            <div
              key={idx}
              className={`${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-red-100'
              } rounded-lg p-4 border`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
                  {tip.title}
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    theme === 'dark' ? 'bg-red-800 text-red-200' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {tip.frequency}
                </span>
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${
          theme === 'dark' ? 'bg-purple-900 border-purple-800' : 'bg-purple-50 border-purple-200'
        } rounded-lg p-6 border`}
      >
        <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
          Psychological Tips for Tech Workers
        </h2>
        <div className="space-y-3">
          {psychTips.map((item, idx) => (
            <div
              key={idx}
              className={`${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-purple-100'
              } rounded-lg p-4 border`}
            >
              <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                {item.title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${
          theme === 'dark' ? 'bg-green-900 border-green-800' : 'bg-green-50 border-green-200'
        } rounded-lg p-6 border`}
      >
        <h2 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
          Quick Desk Exercises
        </h2>
        <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          {exercises.map((exercise, idx) => (
            <li key={idx} className="flex items-start">
              {exercise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
