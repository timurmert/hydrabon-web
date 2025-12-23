'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function LegalPage() {
  useParams();
  const t = useTranslations('legal');
  return (
    <div className="min-h-screen scroll-smooth">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        <div className="absolute inset-0 bg-gradient-hero" style={{ zIndex: 0 }}></div>
        <div className="absolute inset-0 geometric-pattern" style={{ zIndex: 1 }}></div>
        <div className="absolute inset-0 tiger-pattern opacity-15 animate-pulse-slow" style={{ zIndex: 2 }}></div>
        <div className="absolute inset-0 animated-grid opacity-20" style={{ zIndex: 3 }}></div>

        <div className="container-custom relative z-20 pt-20 md:pt-24 lg:pt-28">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              <span className="bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium mt-6">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Legal Articles (inline in the same section for correct anchor scrolling) */}
          <div className="grid grid-cols-1 gap-8">
            <motion.article id="gizlilik" className="professional-card scroll-mt-28 md:scroll-mt-36" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-4">{t('privacy.title')}</h2>
              <p className="text-dark-300 leading-relaxed">
                {t('privacy.content')}
              </p>
            </motion.article>

            <motion.article id="kullanim-sartlari" className="professional-card scroll-mt-28 md:scroll-mt-36" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-4">{t('terms.title')}</h2>
              <p className="text-dark-300 leading-relaxed">
                {t('terms.content')}
              </p>
            </motion.article>

            <motion.article id="cerez-politikasi" className="professional-card scroll-mt-28 md:scroll-mt-36" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-4">{t('cookies.title')}</h2>
              <p className="text-dark-300 leading-relaxed">
                {t('cookies.content')}
              </p>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
}


