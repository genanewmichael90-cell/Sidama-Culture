import { useState, useEffect, createContext, useContext } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar, Hero } from './components/Hero';
import { About, Culture, Food } from './components/About';
import { Gallery, MusicDance, Tourism } from './components/Gallery';
import { Timeline, Footer, LoadingScreen } from './components/Timeline';

type Language = 'en' | 'am';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      <div className="min-h-screen selection:bg-sidama-gold selection:text-white transition-colors duration-500">
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>

        {!loading && (
          <div className="relative">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Culture />
              <Food />
              <Gallery />
              <MusicDance />
              <Timeline />
              <Tourism />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}
