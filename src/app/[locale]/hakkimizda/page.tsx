'use client';

import {
  Target,
  Heart,
  Users,
  Trophy,
  Shield,
  Star,
  Award,
  Crown,
  Crosshair,
  Rocket,
  Gamepad2,
  TrendingUp,
  FlaskConical,
  ExternalLink,
  HelpCircle,
  Timer,
  Code2,
  Video
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';
  const t = useTranslations('about');
  const tCommon = useTranslations('common');

  // Timeline data with icons
  const timeline = [
    {
      year: '2018',
      titleKey: 'timeline.items.2018.title',
      descriptionKey: 'timeline.items.2018.description',
      icon: Star,
    },
    {
      year: '2021',
      titleKey: 'timeline.items.2021.title',
      descriptionKey: 'timeline.items.2021.description',
      icon: Rocket,
    },
    {
      year: '2023',
      titleKey: 'timeline.items.2023.title',
      descriptionKey: 'timeline.items.2023.description',
      icon: Gamepad2,
    },
    {
      year: '2024',
      titleKey: 'timeline.items.2024.title',
      descriptionKey: 'timeline.items.2024.description',
      icon: TrendingUp,
    },
    {
      year: '2025',
      titleKey: 'timeline.items.2025.title',
      descriptionKey: 'timeline.items.2025.description',
      icon: FlaskConical,
    },
    {
      year: t('timeline.items.future.year'),
      titleKey: 'timeline.items.future.title',
      descriptionKey: 'timeline.items.future.description',
      icon: HelpCircle,
    },
  ];

  // Values data with icons
  const values = [
    { icon: Heart, key: 'passion' },
    { icon: Users, key: 'teamSpirit' },
    { icon: Target, key: 'goalOriented' },
    { icon: Trophy, key: 'quality' },
    { icon: Shield, key: 'trust' },
    { icon: Timer, key: 'innovation' },
  ];

  // Achievements data with keys and years
  const achievements = [
    { key: 'website', year: '2025' },
    { key: 'events', year: '2025' },
    { key: 'media', year: '2025' },
    { key: 'discord', year: '2025' },
    { key: 'automation', year: '2025' },
    { key: 'lessons', year: '2024' },
    { key: 'cs2infra', year: '2024' },
    { key: 'valorant', year: '2024' },
  ];
  return (
    <div className="min-h-screen md:snap-y md:snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        {/* Multi-layered Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-hero" style={{ zIndex: 0 }}></div>
        <div className="absolute inset-0 geometric-pattern" style={{ zIndex: 1 }}></div>
        <div className="absolute inset-0 tiger-pattern opacity-15 animate-pulse-slow" style={{ zIndex: 2 }}></div>
        <div className="absolute inset-0 animated-grid opacity-20" style={{ zIndex: 3 }}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0" style={{ zIndex: 4 }}>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute inset-0" style={{ zIndex: 5 }}>
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>

        <div className="container-custom relative z-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand Badge */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-500/40 rounded-full backdrop-blur-md">
                <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">{t('badge')}</span>
                <div className="w-2 h-2 bg-primary-400 rounded-full ml-3 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Enhanced Title */}
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                  {t('title')}
                </span>
              </h1>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div 
              className="max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-dark-100 leading-relaxed">
                {t('subtitle')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-950 snap-start snap-always flex items-center">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              id="misyon"
              className="professional-card scroll-mt-20 md:scroll-mt-24"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6 leading-normal">{t('mission.title')}</h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                {t('mission.description')}
              </p>
            </motion.div>

            <motion.div 
              id="vizyon"
              className="professional-card scroll-mt-20 md:scroll-mt-24"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6 leading-normal">{t('vision.title')}</h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                {t('vision.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Timeline */}
      <section id="tarihce" className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always flex items-center scroll-mt-15 md:scroll-mt-20">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('timeline.title')}</h2>
            <p className="section-subtitle">
              {t('timeline.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Continuous timeline line ending near last node */}
              <div className="absolute left-8 top-0 bottom-10 w-0.5 bg-gradient-to-b from-primary-500 to-orange-500"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="relative flex items-start space-x-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="relative flex-shrink-0">
                        <motion.div 
                          className="w-16 h-16 bg-dark-800 border-4 border-primary-500 rounded-full flex items-center justify-center relative z-10"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                        >
                          <IconComponent className="w-8 h-8 text-primary-500" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <div className="professional-card">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-primary-500">{item.year}</span>
                            <h3 className="text-xl font-bold text-white">{t(item.titleKey)}</h3>
                          </div>
                          <p className="text-dark-300">{t(item.descriptionKey)}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Values */}
      <section id="degerler" className="py-20 bg-dark-950 snap-start snap-always flex items-center scroll-mt-15 md:scroll-mt-20">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('values.title')}</h2>
            <p className="section-subtitle">
              {t('values.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="professional-card text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{t(`values.items.${value.key}.title`)}</h3>
                  <p className="text-dark-300 leading-relaxed">{t(`values.items.${value.key}.description`)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('achievements.title')}</h2>
            <p className="section-subtitle">
              {t('achievements.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="professional-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{t(`achievements.items.${achievement.key}.title`)}</h3>
                <p className="text-primary-500 font-medium mb-2">{t(`achievements.items.${achievement.key}.description`)}</p>
                <span className="text-dark-400 text-sm">{achievement.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Team Philosophy */}
      <section className="py-20 bg-dark-950 snap-start snap-always flex items-center">
        <div className="container-custom">
            <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-8">{t('philosophy.title')}</h2>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-dark-200 leading-relaxed">
                &ldquo;{t('philosophy.quote')}&rdquo;
              </p>
              <p className="text-lg text-dark-300 leading-relaxed">
                {t('philosophy.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Divisions Overview */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('divisions.title')}</h2>
            <p className="section-subtitle">
              {t('divisions.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/${locale}/topluluk`} className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">{t('divisions.community.title')}</h3>
              <p className="text-dark-300 mb-4">
                {t('divisions.community.description')}
              </p>
              <div className="text-primary-500 font-medium">{tCommon('viewDetails')} →</div>
            </Link>

            <Link href={`/${locale}/ar-ge`} className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">{t('divisions.rnd.title')}</h3>
              <p className="text-dark-300 mb-4">
                {t('divisions.rnd.description')}
              </p>
              <div className="text-primary-500 font-medium">{tCommon('viewDetails')} →</div>
            </Link>

            <Link href={`/${locale}/medya`} className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">{t('divisions.media.title')}</h3>
              <p className="text-dark-300 mb-4">
                {t('divisions.media.description')}
              </p>
              <div className="text-primary-500 font-medium">{tCommon('viewDetails')} →</div>
            </Link>

            <Link href={`/${locale}/cs2`} className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Crosshair className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">{t('divisions.cs2.title')}</h3>
              <p className="text-dark-300 mb-4">
                {t('divisions.cs2.description')}
              </p>
              <div className="text-primary-500 font-medium">{tCommon('viewDetails')} →</div>
            </Link>

            <Link href={`/${locale}/espor`} className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">{t('divisions.esports.title')}</h3>
              <p className="text-dark-300 mb-4">
                {t('divisions.esports.description')}
              </p>
              <div className="text-primary-500 font-medium">{tCommon('viewDetails')} →</div>
            </Link>

          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom px-4 md:px-6">
          <motion.div 
            className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-normal px-4">
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              {t('cta.description')}
            </p>
            <motion.div 
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="bg-white text-orange-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] group transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0">
                <span className="flex items-center whitespace-nowrap">
                  {t('cta.button')}
                  <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}