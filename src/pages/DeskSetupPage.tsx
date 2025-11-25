import { Card } from '../components/Card';
import { deskItems } from '../data/deskItems';
import type { Theme } from '../types';

interface DeskSetupPageProps {
  theme: Theme;
}

export function DeskSetupPage({ theme }: DeskSetupPageProps) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
          Desk Setup Essentials
        </h1>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
          Invest in your workspace to protect your health and boost productivity
        </p>
      </header>

      {deskItems.map((category, idx) => (
        <Card key={idx} theme={theme}>
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            {category.category}
          </h2>
          <div className="space-y-4">
            {category.items.map((item, itemIdx) => (
              <div key={itemIdx} className="border-l-4 border-blue-400 pl-4 py-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
                      {item.name}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.benefit}</p>
                  </div>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
