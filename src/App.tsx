import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { NotificationSystem } from './components/NotificationSystem';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DeskSetupPage } from './pages/DeskSetupPage';
import { HealthPage } from './pages/HealthPage';
import { NewsPage } from './pages/NewsPage';
import { EngineeringPage } from './pages/EngineeringPage';
import { useTheme } from './hooks/useTheme';
import { useHealthReminders } from './hooks/useHealthReminders';
import type { PageId } from './types/index';

function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const { theme, toggleTheme } = useTheme();
  const { notifications, dismissNotification } = useHealthReminders();

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage theme={theme} />;
      case 'desk':
        return <DeskSetupPage theme={theme} />;
      case 'health':
        return <HealthPage theme={theme} />;
      case 'news':
        return <NewsPage theme={theme} />;
      case 'engineering':
        return <EngineeringPage theme={theme} />;
      default:
        return <HomePage theme={theme} />;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <NotificationSystem notifications={notifications} onDismiss={dismissNotification} />
      
      <Navigation
        activePage={activePage}
        onPageChange={setActivePage}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
