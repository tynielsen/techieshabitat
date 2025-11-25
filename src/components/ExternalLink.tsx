import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ExternalLinkProps {
  href: string;
  title: string;
  description?: string;
  compact?: boolean;
  theme?: 'light' | 'dark';
}

export function ExternalLink({ href, title, description, compact = false, theme = 'light' }: ExternalLinkProps) {
  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-between p-3 rounded-lg border transition-all group ${
          theme === 'dark'
            ? 'bg-gray-900 border-gray-700 hover:bg-gray-700 hover:border-green-600'
            : 'bg-gray-50 border-gray-200 hover:bg-green-50 hover:border-green-300'
        }`}
      >
        <span
          className={`font-medium ${
            theme === 'dark' ? 'text-gray-200 group-hover:text-green-400' : 'text-gray-800 group-hover:text-green-700'
          }`}
        >
          {title}
        </span>
        <ExternalLinkIcon
          className={`w-4 h-4 ${
            theme === 'dark' ? 'text-gray-500 group-hover:text-green-400' : 'text-gray-400 group-hover:text-green-600'
          }`}
        />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg p-6 shadow-md border transition-all group ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
          : 'bg-white border-gray-200 hover:border-blue-400'
      } hover:shadow-lg`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3
            className={`text-xl font-semibold mb-2 ${
              theme === 'dark' ? 'text-gray-100 group-hover:text-blue-400' : 'text-gray-800 group-hover:text-blue-600'
            }`}
          >
            {title}
          </h3>
          {description && (
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
          )}
        </div>
        <ExternalLinkIcon
          className={`w-5 h-5 shrink-0 ml-2 ${
            theme === 'dark' ? 'text-gray-500 group-hover:text-blue-400' : 'text-gray-400 group-hover:text-blue-600'
          }`}
        />
      </div>
    </a>
  );
}
