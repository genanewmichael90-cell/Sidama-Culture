import { motion } from 'motion/react';
import { SIDAMA_CULTURE_DATA } from '../constants';
import { useApp } from '../App';

export const About = () => {
  const { language } = useApp();
  const data = SIDAMA_CULTURE_DATA.about[language];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sidama-gold font-semibold uppercase tracking-widest text-sm mb-4 block">
            {language === 'en' ? 'Our Identity' : 'ማንነታችን'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight text-sidama-earth">
            {data.title}
          </h2>
          <p className="text-lg text-sidama-earth/70 leading-relaxed mb-10">
            {data.description}
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            {data.values.map((value, i) => (
              <div key={value} className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-sidama-gold" />
                <span className="font-serif text-lg italic">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://image2url.com/r2/default/images/1775673514540-bc38cc2e-0f2f-4d58-9eaf-b19765935558.jpg" 
              alt="Sidama Traditional Life" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-sidama-gold p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-white font-serif text-2xl italic">
              {language === 'en' ? '"Where tradition meets the horizon."' : '"ወግ ከአድማስ ጋር የሚገናኝበት።"'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Culture = () => {
  const { language } = useApp();

  return (
    <section id="culture" className="section-padding bg-sidama-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            className="text-sidama-gold font-semibold uppercase tracking-widest text-sm mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Living Traditions' : 'ሕያው ወጎች'}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-display text-sidama-earth"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {language === 'en' ? 'The Essence of Sidama' : 'የሲዳማ ምንነት'}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {SIDAMA_CULTURE_DATA.cultureItems.map((item, i) => (
            <motion.div
              key={item[language].title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item[language].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sidama-earth/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-sm italic">{item[language].description}</p>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-3 text-sidama-earth group-hover:text-sidama-gold transition-colors">{item[language].title}</h3>
              <p className="text-sidama-earth/60 line-clamp-3">{item[language].description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Food = () => {
  const { language } = useApp();

  return (
    <section className="section-padding bg-sidama-earth text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-sidama-gold font-semibold uppercase tracking-widest text-sm mb-4 block">
              {language === 'en' ? 'Culinary Heritage' : 'የምግብ ቅርስ'}
            </span>
            <h2 className="text-4xl md:text-6xl font-display leading-tight">
              {language === 'en' ? (
                <>Flavors of <br /><span className="italic font-light">the Highlands</span></>
              ) : (
                <>የደጋማ ቦታዎች <br /><span className="italic font-light">ጣዕሞች</span></>
              )}
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-lg font-light">
            {language === 'en' 
              ? 'Sidama cuisine is a testament to the versatility of the Enset plant and the world-renowned coffee that defines the region.'
              : 'የሲዳማ ምግብ ለእንሰት ተክል ሁለገብነት እና ክልሉን ለሚገልጸው አለም አቀፍ ዝነኛ ቡና ምስክር ነው።'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SIDAMA_CULTURE_DATA.foods.map((food, i) => (
            <motion.div
              key={food[language].name}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={food.image} alt={food[language].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-sidama-gold">{food[language].name}</h3>
              <p className="text-white/70 font-light leading-relaxed">{food[language].description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
