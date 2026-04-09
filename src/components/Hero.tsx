import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useApp } from '../App';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, theme, setTheme } = useApp();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'en' ? 'About' : 'ስለ እኛ', href: '#about' },
    { name: language === 'en' ? 'Culture' : 'ባህል', href: '#culture' },
    { name: language === 'en' ? 'Gallery' : 'ጋለሪ', href: '#gallery' },
    { name: language === 'en' ? 'Tourism' : 'ቱሪዝም', href: '#tourism' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-sidama-cream/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-display font-bold tracking-tighter text-sidama-earth"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          SIDAMA <span className="text-sidama-gold">HERITAGE</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-sidama-earth/80 hover:text-sidama-gold transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center space-x-4 border-l border-sidama-earth/10 pl-8">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              className="p-2 hover:bg-sidama-earth/5 rounded-full transition-colors flex items-center gap-2 group"
              title={language === 'en' ? 'Switch to Amharic' : 'ወደ እንግሊዝኛ ቀይር'}
            >
              <Globe size={18} className="text-sidama-earth group-hover:text-sidama-gold transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{language === 'en' ? 'AM' : 'EN'}</span>
            </button>
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 hover:bg-sidama-earth/5 rounded-full transition-colors group"
              title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              {theme === 'light' ? (
                <Moon size={18} className="text-sidama-earth group-hover:text-sidama-gold transition-colors" />
              ) : (
                <Sun size={18} className="text-sidama-earth group-hover:text-sidama-gold transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4 md:hidden">
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 hover:bg-sidama-earth/5 rounded-full transition-colors active:scale-90"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            className="p-2 text-sidama-earth active:scale-90" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-sidama-earth/60 backdrop-blur-md z-[40] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-sidama-cream z-[50] p-8 md:hidden shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-display font-bold tracking-tighter text-sidama-earth">
                  SIDAMA <span className="text-sidama-gold">HERITAGE</span>
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col space-y-6 flex-grow">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    className="text-3xl font-serif text-sidama-earth hover:text-sidama-gold transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="pt-8 border-t border-sidama-earth/10">
                <button 
                  onClick={() => {
                    setLanguage(language === 'en' ? 'am' : 'en');
                    setIsMobileMenuOpen(false);
                  }} 
                  className="flex items-center gap-3 text-sidama-earth font-medium text-lg"
                >
                  <Globe size={24} className="text-sidama-gold" />
                  <span>{language === 'en' ? 'Switch to Amharic' : 'ወደ እንግሊዝኛ ቀይር'}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const { language } = useApp();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://image2url.com/r2/default/images/1775673281759-490d6dc2-bc67-45c1-bc09-cc9af89bce2c.webp" 
          alt="Sidama Landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.span 
          className="inline-block text-sidama-gold font-medium uppercase tracking-[0.3em] mb-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {language === 'en' ? 'Welcome to the Land of Coffee' : 'ወደ ቡና ምድር እንኳን ደህና መጡ'}
        </motion.span>
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl font-display text-white mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {language === 'en' ? (
            <>Discover the Rich <br /><span className="italic font-serif font-light">Heritage of Sidama</span></>
          ) : (
            <>የሲዳማን የበለጸገ <br /><span className="italic font-serif font-light">ቅርስ ያግኙ</span></>
          )}
        </motion.h1>
        <motion.p 
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {language === 'en' 
            ? 'Journey through the ancient traditions, vibrant festivals, and lush landscapes of Ethiopia\'s most storied cultural region.'
            : 'በኢትዮጵያ እጅግ ታሪካዊ በሆነው የባህል ክልል ጥንታዊ ወጎች፣ ደማቅ በዓላት እና ለምለም መልክዓ ምድሮች ውስጥ ይጓዙ።'}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#culture" className="px-10 py-4 bg-sidama-gold text-white rounded-full font-medium hover:bg-sidama-gold/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-sidama-gold/20">
            {language === 'en' ? 'Explore Culture' : 'ባህልን ያስሱ'}
          </a>
          <a href="#gallery" className="px-10 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
            {language === 'en' ? 'View Gallery' : 'ጋለሪ ይመልከቱ'}
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
