import { Card } from '../components/Card';
import { ExternalLink } from '../components/ExternalLink';
import { engineeringResources } from '../data/engineeringResources';
import type { Theme } from '../types';

interface EngineeringPageProps {
  theme: Theme;
}

export function EngineeringPage({ theme }: EngineeringPageProps) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
          Engineering Resources
        </h1>
      </header>

      {engineeringResources.map((section, idx) => (
        <Card key={idx} className={`${theme === 'dark' ? 'bg-pink-700' : 'bg-pink-200'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-green-500' : 'text-black'}`}>
            {section.category}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {section.links.map((link, linkIdx) => (
              <ExternalLink key={linkIdx} href={link.url} title={link.name} compact theme={theme} />
            ))}
          </div>
        </Card>
      ))}

      <div
        className={`${
          theme === 'dark' ? 'bg-blue-900 border-blue-800' : 'bg-blue-50 border-blue-200'
        } rounded-lg p-6 border`}
      >
        <h2 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>
          Career Development Tips
        </h2>
        <ul className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>• Contribute to open source projects to build your portfolio</li>
          <li>• Attend tech meetups and conferences to network</li>
          <li>• Keep a learning journal to track your progress</li>
          <li>• Build side projects that solve real problems</li>
          <li>• Stay current with industry trends and emerging technologies</li>
          <li>• Find a mentor and consider mentoring others</li>
        </ul>
      </div>
    </div>
  );
}
