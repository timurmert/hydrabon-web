'use client';

import React from 'react';
import { Gamepad2, Crosshair, Code2, Video, Users, ArrowRight, Trophy, Target, Zap, Info, HelpCircle, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useDiscordStats } from '@/hooks/useDiscordStats';

const getDivisions = (locale: string) => [
  {
    title: locale === 'tr' ? 'Discord Topluluğu' : 'Discord Community',
    description: locale === 'tr' 
      ? 'Kalabalık ve organize Discord sunucumuz. Etkinliklerle dolu bir takvim, düzenli sistemler ve her daim canlı bir Discord ortamı.'
      : 'Our large and organized Discord server. A calendar full of events, regular systems, and an always lively Discord environment.',
    icon: Users,
    href: `/${locale}/topluluk`,
    features: locale === 'tr' 
      ? ['Aktif Topluluk', 'Etkinlikler', 'Sık Çekilişler', '7/24 Destek']
      : ['Active Community', 'Events', 'Frequent Giveaways', '24/7 Support'],
    color: 'from-indigo-500 to-indigo-700',
    status: 'active',
  },
  {
    title: locale === 'tr' ? 'Ar-Ge & Yazılım' : 'R&D & Software',
    description: locale === 'tr'
      ? 'Fikirlerin sadece konuşulmadığı, satır satır gerçeğe dönüştüğü; yazılımın, zekânın ve hayalin aynı masada buluştuğu teknoloji merkezi.'
      : 'The technology center where ideas are not just discussed but transformed into reality line by line; where software, intelligence, and imagination meet at the same table.',
    icon: Code2,
    href: `/${locale}/ar-ge`,
    features: locale === 'tr'
      ? ['Discord Botları', 'Kurumsal Sistemler', 'Ödül & Çekiliş Sistemleri', 'Özel Çözümler']
      : ['Discord Bots', 'Corporate Systems', 'Reward & Giveaway Systems', 'Custom Solutions'],
    color: 'from-blue-500 to-blue-700',
    status: 'active',
  },
  {
    title: locale === 'tr' ? 'Medya' : 'Media',
    description: locale === 'tr'
      ? 'Görsel dünyanın gücünü kullanan kreatif birimimiz. Tanıtım videolarından sosyal medya içeriklerine, markamızı yansıtan her detayı titizlikle üretiyoruz.'
      : 'Our creative unit harnessing the power of the visual world. From promotional videos to social media content, we meticulously produce every detail reflecting our brand.',
    icon: Video,
    href: `/${locale}/medya`,
    features: locale === 'tr'
      ? ['Sosyal Medya İçerik Tasarımı', 'Reels & Kısa Form İçerikler', 'Müzik & Mix İçerikleri', 'İçerik Prodüksiyonları']
      : ['Social Media Content Design', 'Reels & Short Form Content', 'Music & Mix Content', 'Content Productions'],
    color: 'from-purple-500 to-purple-700',
    status: 'active',
  },
  {
    title: 'Counter-Strike 2',
    description: locale === 'tr'
      ? 'CS2 sahnesinde eğlence ve rekabeti bir araya getirmiştik. Jailbreak\'ten Aim Redline\'a, özgün modlarımız ve topluluğumuzla fark yaratmıştık.'
      : 'We brought together fun and competition in the CS2 scene. From Jailbreak to Aim Redline, we made a difference with our unique mods and community.',
    icon: Crosshair,
    href: `/${locale}/cs2`,
    features: locale === 'tr'
      ? ['Topluluk Etkinlikleri', 'Anti-Cheat Koruması', 'Jailbreak & Özel Modlar', 'Kesintisiz Oyun Deneyimi']
      : ['Community Events', 'Anti-Cheat Protection', 'Jailbreak & Custom Mods', 'Uninterrupted Gaming Experience'],
    color: 'from-winter-400 to-winter-600',
    status: 'passive',
  },
  {
    title: locale === 'tr' ? 'Espor' : 'Esports',
    description: locale === 'tr'
      ? 'Disiplinini sahada, duruşunu toplulukta gösteren birimimiz.'
      : 'Our unit that shows its discipline on the field and its stance in the community.',
    icon: Gamepad2,
    href: `/${locale}/espor`,
    features: locale === 'tr'
      ? ['Disiplinli Takım Kültürü', 'Turnuva Başarıları', 'Analiz Sistemi', 'Koçluk Desteği']
      : ['Disciplined Team Culture', 'Tournament Achievements', 'Analysis System', 'Coaching Support'],
    color: 'from-winter-400 to-winter-600',
    status: 'passive',
  },
  {
    title: '???',
    description: locale === 'tr'
      ? 'Sessizce şekillenen yeni birim ve projeler. Gelişmeleri takip etmek için bizi takipte kalın.'
      : 'New units and projects taking shape silently. Stay tuned to follow the developments.',
    icon: HelpCircle,
    href: '#',
    features: locale === 'tr' ? ['Yakında', 'Yakında', 'Yakında', 'Yakında'] : ['Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'],
    color: 'from-gray-500 to-gray-700',
    status: 'passive',
  },
];

export default function HomePage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';
  const t = useTranslations('home');
  const divisions = getDivisions(locale);
  const { stats: discordStats, loading, error } = useDiscordStats();
  const [displayedText, setDisplayedText] = React.useState('');
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const fullText = 'HydRaboN';

  // Typewriter effect
  React.useEffect(() => {
    if (currentWordIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentWordIndex + 1));
        setCurrentWordIndex(currentWordIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex]);

  // Son 2 haneyi 0 yaparak formatla (örn: 935 -> 900+)
  const formatMemberCount = (): string => {
    // Loading durumunda, API'den veri gelmesini bekle
    if (loading && !discordStats) {
      return '...';
    }
    
    // API başarısız olduysa veya veri yoksa fallback değer
    if (error || !discordStats?.totalMembers) {
      return '900+';
    }
    
    const count = discordStats.totalMembers;
    const numCount = typeof count === 'string' ? parseInt(count.replace(/\D/g, '')) : count;
    
    if (isNaN(numCount)) return '900+';
    
    const rounded = Math.floor(numCount / 100) * 100;
    return `${rounded}+`;
  };

  const stats = [
    { 
      label: t('stats.activeMembers'), 
      value: formatMemberCount(), 
      icon: Users 
    },
    { label: t('stats.projectsCompleted'), value: '10+', icon: Target },
    { label: t('stats.matchesPlayed'), value: '200+', icon: Trophy },
    { label: t('stats.views'), value: '1.5M+', icon: PlayCircle },
  ];
  return (
    <div className="min-h-screen md:snap-y md:snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
      {/* Hero Section - Extended - Winter Theme */}
      <section className="relative flex flex-col overflow-hidden snap-start snap-always" style={{ minHeight: '100vh' }}>
        {/* Multi-layered Dynamic Winter Background */}
        <div className="absolute inset-0 bg-gradient-hero-winter" style={{ zIndex: 0 }}></div>
        <div className="absolute inset-0 geometric-pattern" style={{ zIndex: 1 }}></div>
        <div className="absolute inset-0 tiger-pattern opacity-10 animate-pulse-slow" style={{ zIndex: 2 }}></div>
        <div className="absolute inset-0 animated-grid opacity-15" style={{ zIndex: 3 }}></div>
        <div className="absolute inset-0 winter-bg-pattern" style={{ zIndex: 4 }}></div>
        {/* Floating Particles - Winter */}
        <div className="absolute inset-0" style={{ zIndex: 5 }}>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        {/* Glowing Orbs - Winter */}
        <div className="absolute inset-0" style={{ zIndex: 6 }}>
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
          <div className="glow-orb-winter-1"></div>
          <div className="glow-orb-winter-2"></div>
        </div>
        
        {/* Hero Content Section */}
        <div className="relative z-20 min-h-screen flex items-center justify-center pt-20 md:pt-24 lg:pt-28">
          <div className="container-custom text-center">
            <div className="max-w-5xl mx-auto">
              {/* Premium Badge with Pulse - Winter Theme */}
              <motion.div 
                className="flex justify-center mb-8 md:mb-12 px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-winter-400/30 blur-xl rounded-full animate-pulse"></div>
                  <div className="relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-winter-900/40 to-dark-800/40 border-2 border-winter-400/50 rounded-full backdrop-blur-md shadow-2xl shadow-winter-500/20">
                    <span className="mr-2 md:mr-3 text-base">❄</span>
                    <span className="text-winter-200 text-xs md:text-sm font-bold tracking-wider md:tracking-widest uppercase bg-gradient-to-r from-winter-200 to-white bg-clip-text text-transparent">
                      {t('badge')}
                    </span>
                    <span className="ml-2 md:ml-3 text-base">❄</span>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Title with Typewriter Effect */}
              <motion.div 
                className="relative mb-12 md:mb-16 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[300px] md:w-[600px] h-[100px] md:h-[200px] bg-winter-400/20 blur-[60px] md:blur-[100px] rounded-full"></div>
                </div>
                
                <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tight leading-tight md:leading-normal mb-4 md:mb-6">
                  <span className="inline-block bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(136,206,235,0.4)]">
                    {displayedText}
                    <motion.span
                      className="inline-block w-0.5 md:w-1 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 bg-winter-400 ml-1 md:ml-2 align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    />
                  </span>
                </h1>
                
                {/* Animated subtitle - Winter Theme */}
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-winter-200/80 tracking-wide px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  {t('subtitle')}
                </motion.p>
                
                {/* Multiple decorative lines - Winter Theme */}
                <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-10">
                  <motion.div 
                    className="w-12 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-winter-400 to-ice-blue rounded-full shadow-frost"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  ></motion.div>
                  <motion.div 
                    className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-ice-blue via-white to-ice-blue rounded-full shadow-frost"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  ></motion.div>
                  <motion.div 
                    className="w-12 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-ice-blue via-winter-400 to-transparent rounded-full shadow-frost"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Enhanced Description with Stagger Animation - Winter Theme */}
              <motion.div 
                className="max-w-4xl mx-auto mb-12 md:mb-16 group/card px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="relative">
                  {/* Multi-layered glow effects - Winter */}
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-winter-500/10 via-ice-blue/20 to-winter-500/10 blur-2xl md:blur-3xl opacity-60 group-hover/card:opacity-100 transition-opacity duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-winter-900/10 to-winter-600/5 blur-2xl rounded-3xl"></div>
                  
                  {/* Decorative corner elements - Winter */}
                  <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-l-2 border-t-2 border-winter-400/40 rounded-tl-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-r-2 border-t-2 border-winter-400/40 rounded-tr-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-l-2 border-b-2 border-winter-400/40 rounded-bl-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-200"></div>
                  <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-r-2 border-b-2 border-winter-400/40 rounded-br-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-300"></div>
                  
                  {/* Main card - Winter Theme */}
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-dark-900/70 via-dark-800/60 to-dark-900/70 border-2 border-winter-500/20 group-hover/card:border-winter-400/40 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-winter-card group-hover/card:shadow-frost-lg transition-all duration-500 overflow-hidden frost-glass">
                    {/* Animated border gradient - Winter */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-winter-500/20 to-transparent animate-shimmer"></div>
                    </div>
                    
                    {/* Top decorative line - Winter */}
                    <div className="absolute -top-px left-0 right-0 h-px overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-winter-400/60 to-transparent"></div>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/3"
                        animate={{ 
                          x: ['-100%', '300%']
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "linear",
                          repeatDelay: 1
                        }}
                      ></motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon accent - Winter */}
                      <div className="flex justify-center mb-4 md:mb-6">
                        <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-winter-400 to-transparent rounded-full shadow-frost"></div>
                      </div>
                      
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-50 leading-relaxed font-medium tracking-wide text-center">
                        <motion.span 
                          className="inline"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.4 }}
                        >
                          {t('description.part1')}{' '}
                        </motion.span>
                        <motion.span 
                          className="text-winter-300 font-bold inline relative"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 1.6 }}
                        >
                          <span className="relative z-10">{t('description.highlight1')}</span>
                          <span className="absolute inset-0 bg-winter-500/20 blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></span>
                        </motion.span>
                        {' '}
                        <motion.span 
                          className="inline"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.8 }}
                        >
                          {t('description.part2')}{' '}
                        </motion.span>
                        <motion.span 
                          className="text-white font-bold inline relative"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 2.0 }}
                        >
                          <span className="relative z-10">{t('description.highlight2')}</span>
                          <span className="absolute inset-0 bg-white/10 blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></span>
                        </motion.span>
                        {' '}
                        <motion.span 
                          className="inline"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 2.2 }}
                        >
                          {t('description.part3')}
                        </motion.span>
                      </p>
                      
                      {/* Bottom decorative line - Winter */}
                      <div className="flex justify-center mt-4 md:mt-6">
                        <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-winter-400 to-transparent rounded-full shadow-frost"></div>
                      </div>
                    </div>
                    
                    {/* Bottom decorative line - Winter */}
                    <div className="absolute -bottom-px left-0 right-0 h-px overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-winter-400/60 to-transparent"></div>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/3"
                        animate={{ 
                          x: ['300%', '-100%']
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "linear",
                          repeatDelay: 1
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced CTA Buttons with Premium Effects - Winter Theme */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-20 px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-winter-400 to-winter-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl"></div>
                  <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="relative btn-winter text-sm md:text-base px-6 py-4 md:px-8 md:py-5 w-full sm:w-[240px] md:w-[280px] h-[56px] md:h-[64px] flex items-center justify-center group overflow-hidden focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 shadow-frost-lg">
                    <span className="relative z-10 flex items-center justify-center font-bold text-base md:text-lg">
                      ❄ {t('cta.join')}
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-winter-300 to-winter-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative w-full sm:w-auto"
                >
                  <Link href={`/${locale}/hakkimizda`} className="btn-winter text-sm md:text-base px-6 py-4 md:px-8 md:py-5 w-full sm:w-[240px] md:w-[280px] h-[56px] md:h-[64px] flex items-center justify-center group relative overflow-hidden shadow-frost">
                    <span className="relative z-10 flex items-center justify-center font-bold text-base md:text-lg">
                      {t('cta.about')}
                      <Info className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-winter-400/10 to-transparent"></div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats with Premium Design */}
              <motion.div 
                className="flex justify-center mt-12 md:mt-24 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.6 }}
              >
                <div className="w-full max-w-6xl">
                  {/* Stats Header - Winter Theme */}
                  <motion.div 
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 }}
                  >
                    <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-winter-900/30 to-dark-800/30 border border-winter-400/40 rounded-full backdrop-blur-md mb-4">
                      <span className="mr-1.5 md:mr-2">❄</span>
                      <span className="text-winter-200 text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase">{t('stats.badge')}</span>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={index} 
                        className="relative group hover:-translate-y-3 hover:scale-105 transition-transform duration-200 ease-out"
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0, 
                          scale: 1
                        }}
                        transition={{
                          duration: 0.8, 
                          delay: 2.9 + index * 0.15,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        {/* Glowing background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-winter-400/20 to-winter-500/10 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl md:blur-2xl scale-95 group-hover:scale-105"></div>
                        
                        {/* Card content */}
                        <div className="relative backdrop-blur-sm bg-gradient-to-br from-dark-800/80 to-dark-900/80 border-2 border-winter-400/20 group-hover:border-winter-300/50 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 text-center transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                          {/* Icon with animated ring */}
                          <div className="flex justify-center mb-3 md:mb-4 lg:mb-6">
                            <div className="relative">
                              {/* Pulsing glow rings */}
                              <motion.div 
                                className="absolute -inset-1 md:-inset-2 rounded-full bg-winter-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  ease: "easeInOut" 
                                }}
                              ></motion.div>
                              
                              {/* Rotating ring */}
                              <motion.div 
                                className="absolute inset-0 rounded-full border-2 border-winter-400/30 border-t-winter-300 border-r-winter-300"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              ></motion.div>
                              
                              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-winter-400/40 to-winter-500/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-winter-400/40 shadow-lg shadow-winter-400/30">
                                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-winter-300 group-hover:text-winter-100 transition-colors duration-500 drop-shadow-lg" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Value with enhanced animation */}
                          <div className="relative mb-2 md:mb-3 lg:mb-4">
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                              <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-white via-winter-100 to-white bg-clip-text text-transparent">
                                  {stat.value}
                                </span>
                                {/* Pulsing glow effect on hover */}
                                <motion.span 
                                  className="absolute inset-0 bg-gradient-to-r from-winter-300 via-winter-100 to-winter-300 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700 ease-out"
                                  animate={{ 
                                    scale: [1, 1.05, 1],
                                  }}
                                  transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                  }}
                                >
                                  {stat.value}
                                </motion.span>
                              </span>
                            </div>
                          </div>
                          
                          {/* Label */}
                          <div className="text-[10px] sm:text-xs lg:text-sm text-dark-200 font-bold group-hover:text-winter-200 transition-colors duration-500 tracking-wide uppercase whitespace-nowrap px-1">
                            {stat.label}
                          </div>
                          
                          {/* Decorative elements */}
                          <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-3 md:mt-4 lg:mt-6">
                            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-winter-400 to-winter-300 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-winter-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:animate-pulse"></div>
                            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-winter-300 via-winter-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divisions Section - Winter Theme */}
        <div className="relative z-20 py-32">
          {/* Enhanced Section Separator - Winter */}
          <div className="container-custom mb-20">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent opacity-60 shadow-frost"></div>
          </div>
          
          <div className="container-custom">
            {/* Section Header - Winter Theme */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Badge - Winter */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-winter-900/20 to-dark-800/20 border border-winter-400/30 rounded-full backdrop-blur-sm">
                  <span className="mr-2">❄</span>
                  <span className="text-winter-200 text-xs font-semibold tracking-widest uppercase">{t('divisions.badge')}</span>
                </div>
              </div>

              {/* Enhanced Section Title - Winter */}
              <div className="relative mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-normal">
                  <span className="bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent">
                    {t('divisions.title')}
                  </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-winter-400 to-transparent mx-auto mt-6 rounded-full shadow-frost"></div>
              </div>

              {/* Enhanced Description */}
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium">
                  {t('divisions.description')}
                </p>
              </div>
            </motion.div>

            {/* Enhanced Division Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-fr"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              {divisions.map((division, index) => (
                <motion.div 
                  key={index} 
                  className="professional-card group relative overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Enhanced header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${division.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <division.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 tracking-tight leading-normal group-hover:text-winter-200 transition-colors duration-300">
                        {division.title}
                      </h3>
                      <p className="text-dark-200 leading-relaxed text-sm md:text-base font-medium">
                        {division.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced features section */}
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-winter-400 to-winter-500 rounded-full mr-3"></div>
                      <h4 className="text-lg font-bold text-white">{t('divisions.features')}</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {division.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 p-2 rounded-lg bg-dark-800/30 group-hover:bg-dark-700/40 transition-colors duration-300">
                          <div className="w-3 h-3 bg-gradient-to-r from-winter-400 to-winter-500 rounded-full shadow-sm"></div>
                          <span className="text-dark-200 text-sm font-medium group-hover:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="flex justify-between items-center mt-auto pt-4">
                    <Link 
                      href={division.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-winter-400/20 to-winter-500/20 border border-winter-400/40 rounded-xl text-winter-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-winter-300 group/link"
                    >
                      {t('divisions.explore')}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    {/* Status indicator */}
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${division.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                      <span className="text-xs text-dark-400 font-medium">
                        {division.status === 'active' ? t('divisions.active') : t('divisions.passive')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Recognition & Achievements Section */}
            <div className="mt-32">
              {/* Section Separator */}
              <div className="container-custom mb-20">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent opacity-60"></div>
              </div>
              
              <motion.div 
                className="py-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-winter-900/20 to-dark-800/20 border border-winter-400/30 rounded-full backdrop-blur-sm">
                      <Trophy className="w-4 h-4 text-winter-300 mr-2" />
                      <span className="text-winter-200 text-xs font-semibold tracking-widest uppercase">{t('recognition.badge')}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 leading-normal">
                    <span className="bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent">
                      {t('recognition.title')}
                    </span>
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                  <motion.div 
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-yellow-500/20">
                      <Trophy className="w-12 h-12 text-yellow-400" />
                    </div>
                    <p className="text-yellow-400 font-bold text-xl mb-2">{t('recognition.tournamentHistory')}</p>
                    <p className="text-dark-300 text-base">{t('recognition.organizedTeam')}</p>
                  </motion.div>

                  <motion.div 
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-blue-500/20">
                      <Zap className="w-12 h-12 text-blue-400" />
                    </div>
                    <p className="text-blue-400 font-bold text-xl mb-2">{t('recognition.advancedInfra')}</p>
                    <p className="text-dark-300 text-base">{t('recognition.softwareSolutions')}</p>
                  </motion.div>

                  <motion.div 
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-green-500/20">
                      <Target className="w-12 h-12 text-green-400" />
                    </div>
                    <p className="text-green-400 font-bold text-xl mb-2">{t('recognition.corporateManagement')}</p>
                    <p className="text-dark-300 text-base">{t('recognition.disciplinedOrg')}</p>
                  </motion.div>

                  <motion.div 
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-purple-500/20">
                      <Users className="w-12 h-12 text-purple-400" />
                    </div>
                    <p className="text-purple-400 font-bold text-xl mb-2">{t('recognition.activeCommunity')}</p>
                    <p className="text-dark-300 text-base">{t('recognition.support247')}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator - Winter */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent opacity-60 shadow-frost"></div>
      </div>

      {/* CTA Section - Winter Theme */}
      <section className="py-12 md:py-20 bg-dark-950 relative overflow-hidden snap-start snap-always min-h-screen flex items-center winter-bg-pattern">
        <div className="container-custom px-4 md:px-6">
          <motion.div 
            className="bg-gradient-to-r from-dark-800/90 to-dark-700/90 border border-winter-400/30 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden max-w-5xl mx-auto frost-glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Background Layers - Winter */}
            <div className="absolute inset-0 bg-gradient-to-r from-winter-900/20 to-dark-800/20 rounded-2xl md:rounded-3xl"></div>
            <div className="relative z-10">
              {/* CTA Badge - Winter */}
              <div className="flex justify-center mb-6 md:mb-8 px-4">
                <div className="inline-flex items-center px-4 md:px-5 py-2 bg-gradient-to-r from-winter-900/30 to-dark-800/30 border border-winter-400/40 rounded-full backdrop-blur-md">
                  <span className="mr-2 md:mr-3 text-base">❄</span>
                  <span className="text-winter-200 text-xs font-semibold tracking-wider md:tracking-widest uppercase">{t('cta2.badge')}</span>
                  <span className="ml-2 md:ml-3 text-base">❄</span>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight leading-normal px-4">
                <span className="bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent">
                  {t('cta2.title')}
                </span>
              </h2>
              <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-winter-400 to-transparent mx-auto mb-6 md:mb-8 rounded-full shadow-frost"></div>
              
              <p className="text-sm sm:text-base md:text-lg text-dark-200 mb-8 md:mb-10 max-w-2xl lg:max-w-3xl mx-auto font-medium leading-relaxed px-4">
                {t('cta2.description')}
              </p>
              
              <motion.div 
                className="flex justify-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="btn-winter text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] group relative hover:scale-105 transition-transform duration-300 transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0">
                  <span className="relative z-10 flex items-center whitespace-nowrap">
                    ❄ {t('cta2.join')}
                    <Users className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
