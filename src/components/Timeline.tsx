import { motion } from 'motion/react';
import { SIDAMA_CULTURE_DATA } from '../constants';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '../App';

export const Timeline = () => {
  const { language } = useApp();

  return (
    <section className="section-padding bg-sidama-earth text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sidama-gold font-semibold uppercase tracking-widest text-sm mb-4 block">
            {language === 'en' ? 'Our Journey' : 'ጉዟችን'}
          </span>
          <h2 className="text-4xl md:text-6xl font-display mb-8">
            {language === 'en' ? 'Historical Milestones' : 'ታሪካዊ ክንውኖች'}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

          <div className="space-y-20">
            {SIDAMA_CULTURE_DATA.timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex-1 text-center md:text-left px-10">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-4xl sm:text-5xl md:text-7xl font-display text-sidama-gold mb-4 opacity-50">{item.year}</span>
                    <p className={`text-lg text-white/70 max-w-md ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {item[language]}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-12 h-12 rounded-full bg-sidama-gold border-4 border-sidama-earth flex items-center justify-center shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { language } = useApp();

  return (
    <footer className="bg-sidama-cream pt-24 pb-12 border-t border-sidama-earth/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-display font-bold tracking-tighter text-sidama-earth mb-8 block">
              SIDAMA <span className="text-sidama-gold">HERITAGE</span>
            </a>
            <p className="text-sidama-earth/60 max-w-md text-lg font-light leading-relaxed">
              {language === 'en' 
                ? 'Preserving and celebrating the rich cultural tapestry of the Sidama people. A bridge between ancient wisdom and modern exploration.'
                : 'የሲዳማ ህዝብን የበለጸገ የባህል ታሪክ መጠበቅ እና ማክበር። በጥንታዊ ጥበብ እና በዘመናዊ ፍለጋ መካከል ያለ ድልድይ።'}
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-8">{language === 'en' ? 'Quick Links' : 'ፈጣን አገናኞች'}</h4>
            <ul className="space-y-4 text-sidama-earth/60">
              <li><a href="#about" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'About Sidama' : 'ስለ ሲዳማ'}</a></li>
              <li><a href="#culture" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Cultural Heritage' : 'የባህል ቅርስ'}</a></li>
              <li><a href="#gallery" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Visual Gallery' : 'የምስል ጋለሪ'}</a></li>
              <li><a href="#tourism" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Travel Guide' : 'የጉዞ መመሪያ'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-8">{language === 'en' ? 'Resources' : 'ሀብቶች'}</h4>
            <ul className="space-y-4 text-sidama-earth/60">
              <li><a href="https://www.visitethiopia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Educational Portal' : 'የትምህርት ፖርታል'}</a></li>
              <li><a href="https://www.coffeereview.com/coffee-reference/coffee-categories/africa-and-arabia/ethiopia-sidamo/" target="_blank" rel="noopener noreferrer" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Coffee Origins' : 'የቡና አመጣጥ'}</a></li>
              <li><a href="https://ich.unesco.org/en/RL/fichee-chambalaalla-new-year-festival-of-the-sidama-people-01054" target="_blank" rel="noopener noreferrer" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'UNESCO Heritage' : 'የዩኔስኮ ቅርስ'}</a></li>
              <li><a href="https://www.ena.et/web/ena/sidama" target="_blank" rel="noopener noreferrer" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Regional News' : 'የክልል ዜና'}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-sidama-earth/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sidama-earth/40 text-sm">
            © 2026 Sidama Heritage Ethiopia. {language === 'en' ? 'All rights reserved.' : 'መብቱ በህግ የተጠበቀ ነው።'}
          </p>
          <div className="flex gap-8 text-sidama-earth/40 text-sm">
            <a href="#" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Privacy Policy' : 'የግላዊነት ፖሊሲ'}</a>
            <a href="#" className="hover:text-sidama-gold transition-colors">{language === 'en' ? 'Terms of Service' : 'የአገልግሎት ውል'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[200] bg-sidama-cream flex flex-col items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-4xl font-display font-bold tracking-tighter text-sidama-earth mb-8"
      >
        SIDAMA <span className="text-sidama-gold">HERITAGE</span>
      </motion.div>
      <div className="w-48 h-[1px] bg-sidama-earth/10 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-sidama-gold"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};
