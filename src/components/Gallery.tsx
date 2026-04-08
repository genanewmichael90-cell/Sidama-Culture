import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { SIDAMA_CULTURE_DATA } from '../constants';
import { Maximize2, X, PlayCircle } from 'lucide-react';
import { useApp } from '../App';

export const Gallery = () => {
  const { language } = useApp();
  const [selectedImage, setSelectedImage] = useState<null | typeof SIDAMA_CULTURE_DATA.gallery[0]>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(SIDAMA_CULTURE_DATA.gallery.map(img => img.category))];
  const filteredImages = filter === 'All' 
    ? SIDAMA_CULTURE_DATA.gallery 
    : SIDAMA_CULTURE_DATA.gallery.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display text-sidama-earth mb-8">
            {language === 'en' ? 'Visual Journey' : 'የምስል ጉዞ'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-sidama-gold text-white shadow-lg' : 'bg-sidama-cream text-sidama-earth hover:bg-sidama-earth/5'}`}
              >
                {cat === 'All' ? (language === 'en' ? 'All' : 'ሁሉም') : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.url}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sidama-gold text-xs uppercase tracking-widest mb-1">{img.category}</span>
                <h4 className="text-white font-serif text-xl">{img.title}</h4>
                <Maximize2 className="absolute top-6 right-6 text-white/70" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 sm:top-10 sm:right-10 text-white hover:text-sidama-gold transition-colors z-10">
              <X size={32} className="sm:w-10 sm:h-10" />
            </button>
            <motion.div 
              className="max-w-5xl w-full max-h-[90vh] overflow-y-auto sm:overflow-visible"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[70vh] sm:max-h-none"
                referrerPolicy="no-referrer"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-display text-white mb-2">{selectedImage.title}</h3>
                <p className="text-sidama-gold uppercase tracking-[0.2em] text-xs sm:text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const MusicDance = () => {
  const { language } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useState(() => {
    const audio = new Audio('https://image2url.com/r2/default/audio/1775676091069-e1c5b4ef-69f2-408a-94ad-a4c619bc48dd.mp3');
    audio.loop = true;
    return audio;
  })[0];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.pause();
      setIsPlaying(false);
    } else {
      setAudioError(false);
      audioRef.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback failed:", err);
        setAudioError(true);
        setIsPlaying(false);
      });
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      audioRef.pause();
      audioRef.currentTime = 0;
    };
  }, [audioRef]);

  return (
    <section className="section-padding bg-sidama-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sidama-gold font-semibold uppercase tracking-widest text-sm mb-4 block">
              {language === 'en' ? 'Rhythm & Soul' : 'ዜማ እና ነፍስ'}
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-sidama-earth mb-8">
              {language === 'en' ? <>The Dance of <br />Reconciliation</> : <>የእርቅ <br />ዳንስ</>}
            </h2>
            <p className="text-lg text-sidama-earth/70 leading-relaxed mb-8">
              {language === 'en' 
                ? 'Sidama music is deeply rhythmic, often accompanied by traditional instruments like the \'Dibe\' (drum) and \'Krar\'. The dances are energetic and communal, particularly during Fichee-Chambalaalla, where the \'Halle\' dance symbolizes unity and the joy of a new beginning.'
                : 'የሲዳማ ሙዚቃ ጥልቅ ምት ያለው ሲሆን ብዙውን ጊዜ እንደ \'ዲቤ\' (ከበሮ) እና \'ክራር\' ባሉ ባህላዊ መሳሪያዎች የታጀበ ነው። ዳንሶቹ ጉልበት ያላቸው እና የጋራ ናቸው፣ በተለይም በፊቼ ጫምባላላ ወቅት የ\'ሃሌ\' ዳንስ አንድነትን እና የአዲስ ጅምር ደስታን ያሳያል።'}
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-sidama-earth/5">
                <div className="w-12 h-12 rounded-full bg-sidama-gold/10 flex items-center justify-center flex-shrink-0">
                  <PlayCircle className={`text-sidama-gold ${isPlaying ? 'animate-pulse' : ''}`} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">
                    {language === 'en' ? 'Traditional Halle Dance' : 'ባህላዊ የሃሌ ዳንስ'}
                  </h4>
                  <p className="text-sm text-sidama-earth/60">
                    {language === 'en' ? 'A vibrant communal dance performed during the New Year.' : 'በአዲስ አመት የሚካሄድ ደማቅ የጋራ ዳንስ።'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square sm:aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://image2url.com/r2/default/images/1775674903324-ad569fb8-cc59-42fb-b803-ec77717cdfb0.jpg" 
                alt="Sidama Dance" 
                className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : ''}`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 relative overflow-hidden"
                >
                  {isPlaying ? (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 bg-sidama-gold/20"
                    />
                  ) : null}
                  {isPlaying ? <X size={40} /> : <PlayCircle size={40} fill="white" />}
                </motion.button>
              </div>
              {audioError && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-500/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                  {language === 'en' ? 'Audio failed to load' : 'ድምጹን መጫን አልተቻለም'}
                </div>
              )}
            </div>
            <div className={`absolute -top-6 -right-6 w-32 h-32 bg-sidama-gold rounded-full -z-10 blur-2xl transition-opacity duration-500 ${isPlaying ? 'opacity-60 animate-pulse' : 'opacity-30 group-hover:opacity-50'}`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Tourism = () => {
  const { language } = useApp();

  return (
    <section id="tourism" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-sidama-earth mb-6">
            {language === 'en' ? 'Explore the Region' : 'ክልሉን ያስሱ'}
          </h2>
          <p className="text-sidama-earth/60 max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'From the serene shores of Lake Hawassa to the emerald coffee forests of Yirgalem, Sidama offers an unparalleled natural and cultural experience.'
              : 'ከረጋው የሀዋሳ ሀይቅ ዳርቻ እስከ ይርጋለም የቡና ደኖች ድረስ ሲዳማ ወደር የለሽ የተፈጥሮ እና የባህል ልምድ ያቀርባል።'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {SIDAMA_CULTURE_DATA.tourism.map((item, i) => (
            <motion.div
              key={item[language].place}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <img 
                src={item.image} 
                alt={item[language].place} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sidama-earth via-sidama-earth/20 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-display text-white mb-4">{item[language].place}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item[language].description}
                </p>
                <button className="w-fit px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all">
                  {language === 'en' ? 'Learn More' : 'ተጨማሪ ያንብቡ'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
