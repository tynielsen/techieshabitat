import { ExternalLink } from '../components/ExternalLink';
import { newsOutlets } from '../data/newsOutlets';
import type { Theme } from '../types';

interface NewsPageProps {
  theme: Theme;
}

export function NewsPage({ theme }: NewsPageProps) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
          Tech News Sources
        </h1>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
          Stay informed with these curated tech news outlets
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {newsOutlets.map((outlet, idx) => (
          <ExternalLink
            key={idx}
            href={outlet.url}
            title={outlet.name}
            description={outlet.description}
            theme={theme}
          />
        ))}
      </div>

      <div
        className={`${
          theme === 'dark' ? 'bg-yellow-900 border-yellow-800' : 'bg-yellow-50 border-yellow-200'
        } rounded-lg p-6 border`}
      >
        <h2 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-800'}`}>
          News Consumption Tips
        </h2>
        <ul className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>• Set specific times for news reading to avoid constant distraction</li>
          <li>• Use RSS readers or newsletters to curate content</li>
          <li>• Balance breaking news with in-depth analysis</li>
          <li>• Verify information across multiple sources</li>
          <li>• Take breaks from news to prevent information overload</li>
        </ul>
      </div>
    </div>
  );
}
