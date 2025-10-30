'use client';

import React from 'react';
import { Gamepad2, Crosshair, Code2, Video, Users, ArrowRight, Trophy, Target, Zap, Info, HelpCircle, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useDiscordStats } from '@/hooks/useDiscordStats';

const divisions = [
  {
    title: 'Discord Topluluğu',
    description: 'Kalabalık ve organize Discord sunucumuz. Etkinliklerle dolu bir takvim, düzenli sistemler ve her daim canlı bir Discord ortamı.',
    icon: Users,
    href: '/topluluk',
    features: ['Aktif Topluluk', 'Etkinlikler', 'Sık Çekilişler', '7/24 Destek'],
    color: 'from-indigo-500 to-indigo-700',
    status: 'active',
  },
  {
    title: 'Ar-Ge & Yazılım',
    description: 'Fikirlerin sadece konuşulmadığı, satır satır gerçeğe dönüştüğü; yazılımın, zekânın ve hayalin aynı masada buluştuğu teknoloji merkezi.',
    icon: Code2,
    href: '/ar-ge',
    features: ['Discord Botları', 'Kurumsal Sistemler', 'Ödül & Çekiliş Sistemleri', 'Özel Çözümler'],
    color: 'from-blue-500 to-blue-700',
    status: 'active',
  },
  {
    title: 'Medya',
    description: 'Görsel dünyanın gücünü kullanan kreatif birimimiz. Tanıtım videolarından sosyal medya içeriklerine, markamızı yansıtan her detayı titizlikle üretiyoruz.',
    icon: Video,
    href: '/medya',
    features: ['Sosyal Medya İçerik Tasarımı', 'Reels & Kısa Form İçerikler', 'Müzik & Mix İçerikleri', 'İçerik Prodüksiyonları'],
    color: 'from-purple-500 to-purple-700',
    status: 'active',
  },
  {
    title: 'Counter-Strike 2',
    description: 'CS2 sahnesinde eğlence ve rekabeti bir araya getirmiştik. Jailbreak\'ten Aim Redline\'a, özgün modlarımız ve topluluğumuzla fark yaratmıştık.',
    icon: Crosshair,
    href: '/cs2',
    features: ['Topluluk Etkinlikleri', 'Anti-Cheat Koruması', 'Jailbreak & Özel Modlar', 'Kesintisiz Oyun Deneyimi'],
    color: 'from-orange-500 to-orange-700',
    status: 'passive',
  },
  {
    title: 'Espor',
    description: 'Disiplinini sahada, duruşunu toplulukta gösteren birimimiz.',
    icon: Gamepad2,
    href: '/espor',
    features: ['Disiplinli Takım Kültürü', 'Turnuva Başarıları', 'Analiz Sistemi', 'Koçluk Desteği'],
    color: 'from-primary-500 to-primary-700',
    status: 'passive',
  },
  {
    title: '???',
    description: 'Sessizce şekillenen yeni birim ve projeler. Gelişmeleri takip etmek için bizi takipte kalın.',
    icon: HelpCircle,
    href: '#',
    features: ['Yakında', 'Yakında', 'Yakında', 'Yakında'],
    color: 'from-gray-500 to-gray-700',
    status: 'passive',
  },
];

export default function HomePage() {
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
      label: 'Aktif Üye', 
      value: formatMemberCount(), 
      icon: Users 
    },
    { label: 'Proje Tamamlandı', value: '10+', icon: Target },
    { label: 'Oynanan Maç', value: '200+', icon: Trophy },
    { label: 'Görüntülenme', value: '1.5M+', icon: PlayCircle },
  ];
  return (
    <div className="min-h-screen md:snap-y md:snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
      {/* Hero Section - Extended */}
      <section className="relative flex flex-col overflow-hidden snap-start snap-always" style={{ minHeight: '100vh' }}>
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
        
        {/* Hero Content Section */}
        <div className="relative z-20 min-h-screen flex items-center justify-center pt-20 md:pt-24 lg:pt-28">
          <div className="container-custom text-center">
            <div className="max-w-5xl mx-auto">
              {/* Premium Badge with Pulse */}
              <motion.div 
                className="flex justify-center mb-8 md:mb-12 px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/30 blur-xl rounded-full animate-pulse"></div>
                  <div className="relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-primary-900/40 to-primary-800/40 border-2 border-primary-500/50 rounded-full backdrop-blur-md shadow-2xl shadow-primary-500/20">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                    <span className="text-primary-200 text-xs md:text-sm font-bold tracking-wider md:tracking-widest uppercase bg-gradient-to-r from-primary-200 to-white bg-clip-text text-transparent">
                      Türkiye&apos;nin Dijital Ekosistemi
                    </span>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-400 rounded-full ml-2 md:ml-3 animate-pulse"></div>
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
                  <div className="w-[300px] md:w-[600px] h-[100px] md:h-[200px] bg-primary-500/20 blur-[60px] md:blur-[100px] rounded-full"></div>
                </div>
                
                <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tight leading-tight md:leading-normal mb-4 md:mb-6">
                  <span className="inline-block bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                    {displayedText}
                    <motion.span
                      className="inline-block w-0.5 md:w-1 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 bg-primary-400 ml-1 md:ml-2 align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    />
                  </span>
                </h1>
                
                {/* Animated subtitle */}
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-primary-200/80 tracking-wide px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  Geleceği Birlikte İnşa Ediyoruz
                </motion.p>
                
                {/* Multiple decorative lines */}
                <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-10">
                  <motion.div 
                    className="w-12 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary-500 to-primary-400 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  ></motion.div>
                  <motion.div 
                    className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  ></motion.div>
                  <motion.div 
                    className="w-12 md:w-20 h-0.5 md:h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-transparent rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Enhanced Description with Stagger Animation */}
              <motion.div 
                className="max-w-4xl mx-auto mb-12 md:mb-16 group/card px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="relative">
                  {/* Multi-layered glow effects */}
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary-500/10 via-primary-400/20 to-primary-500/10 blur-2xl md:blur-3xl opacity-60 group-hover/card:opacity-100 transition-opacity duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-primary-600/5 blur-2xl rounded-3xl"></div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-l-2 border-t-2 border-primary-400/40 rounded-tl-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-r-2 border-t-2 border-primary-400/40 rounded-tr-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100"></div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-l-2 border-b-2 border-primary-400/40 rounded-bl-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-200"></div>
                  <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-r-2 border-b-2 border-primary-400/40 rounded-br-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-300"></div>
                  
                  {/* Main card */}
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-dark-900/70 via-dark-800/60 to-dark-900/70 border-2 border-primary-500/20 group-hover/card:border-primary-400/40 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl group-hover/card:shadow-primary-500/10 transition-all duration-500 overflow-hidden">
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent animate-shimmer"></div>
                    </div>
                    
                    {/* Top decorative line - Enhanced */}
                    <div className="absolute -top-px left-0 right-0 h-px overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent"></div>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent w-1/3"
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
                      {/* Icon accent */}
                      <div className="flex justify-center mb-4 md:mb-6">
                        <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></div>
                      </div>
                      
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dark-50 leading-relaxed font-medium tracking-wide text-center">
                        <motion.span 
                          className="inline"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.4 }}
                        >
                          Espor sahnesinden teknoloji dünyasına,{' '}
                        </motion.span>
                        <motion.span 
                          className="text-primary-300 font-bold inline relative"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 1.6 }}
                        >
                          <span className="relative z-10">sınırları zorlayan</span>
                          <span className="absolute inset-0 bg-primary-500/20 blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></span>
                        </motion.span>
                        {' '}
                        <motion.span 
                          className="inline"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.8 }}
                        >
                          bir dijital topluluk. Video içeriklerinden yazılım projelerine,{' '}
                        </motion.span>
                        <motion.span 
                          className="text-white font-bold inline relative"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 2.0 }}
                        >
                          <span className="relative z-10">tutkuyla</span>
                          <span className="absolute inset-0 bg-white/10 blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></span>
                        </motion.span>
                        {' '}
                        <motion.span 
                          className="inline"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 2.2 }}
                        >
                          her alanda iz bırakan kişilerin{'\u00A0'}adresi.
                        </motion.span>
                      </p>
                      
                      {/* Bottom decorative line */}
                      <div className="flex justify-center mt-4 md:mt-6">
                        <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Bottom decorative line - Enhanced */}
                    <div className="absolute -bottom-px left-0 right-0 h-px overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent"></div>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-300 to-transparent w-1/3"
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
              
              {/* Enhanced CTA Buttons with Premium Effects */}
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
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 rounded-2xl"></div>
                  <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="relative btn-primary text-sm md:text-base px-6 py-4 md:px-8 md:py-5 w-full sm:w-[240px] md:w-[280px] h-[56px] md:h-[64px] flex items-center justify-center group overflow-hidden focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0 shadow-2xl shadow-primary-500/30">
                    <span className="relative z-10 flex items-center justify-center font-bold text-base md:text-lg">
                      Topluluğa Katıl
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
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
                  <Link href="/hakkimizda" className="btn-secondary text-sm md:text-base px-6 py-4 md:px-8 md:py-5 w-full sm:w-[240px] md:w-[280px] h-[56px] md:h-[64px] flex items-center justify-center group relative overflow-hidden shadow-xl">
                    <span className="relative z-10 flex items-center justify-center font-bold text-base md:text-lg">
                      Hakkımızda
                      <Info className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary-400/10 to-transparent"></div>
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
                  {/* Stats Header */}
                  <motion.div 
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 }}
                  >
                    <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-500/40 rounded-full backdrop-blur-md mb-4">
                      <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary-400 mr-1.5 md:mr-2" />
                      <span className="text-primary-200 text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase">Rakamlarla HydRaboN</span>
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
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl md:blur-2xl scale-95 group-hover:scale-105"></div>
                        
                        {/* Card content */}
                        <div className="relative backdrop-blur-sm bg-gradient-to-br from-dark-800/80 to-dark-900/80 border-2 border-primary-500/20 group-hover:border-primary-400/50 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 text-center transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                          {/* Icon with animated ring */}
                          <div className="flex justify-center mb-3 md:mb-4 lg:mb-6">
                            <div className="relative">
                              {/* Pulsing glow rings */}
                              <motion.div 
                                className="absolute -inset-1 md:-inset-2 rounded-full bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
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
                                className="absolute inset-0 rounded-full border-2 border-primary-500/30 border-t-primary-400 border-r-primary-400"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              ></motion.div>
                              
                              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-500/40 to-primary-600/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-primary-500/40 shadow-lg shadow-primary-500/30">
                                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary-300 group-hover:text-primary-100 transition-colors duration-500 drop-shadow-lg" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Value with enhanced animation */}
                          <div className="relative mb-2 md:mb-3 lg:mb-4">
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                              <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                                  {stat.value}
                                </span>
                                {/* Pulsing glow effect on hover */}
                                <motion.span 
                                  className="absolute inset-0 bg-gradient-to-r from-primary-300 via-primary-100 to-primary-300 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700 ease-out"
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
                          <div className="text-[10px] sm:text-xs lg:text-sm text-dark-200 font-bold group-hover:text-primary-200 transition-colors duration-500 tracking-wide uppercase whitespace-nowrap px-1">
                            {stat.label}
                          </div>
                          
                          {/* Decorative elements */}
                          <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-3 md:mt-4 lg:mt-6">
                            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:animate-pulse"></div>
                            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
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

        {/* Divisions Section - Now part of Hero */}
        <div className="relative z-20 py-32">
          {/* Enhanced Section Separator */}
          <div className="container-custom mb-20">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
          </div>
          
          <div className="container-custom">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-primary-900/20 to-primary-800/20 border border-primary-500/30 rounded-full backdrop-blur-sm">
                  <Target className="w-4 h-4 text-primary-400 mr-2" />
                  <span className="text-primary-200 text-xs font-semibold tracking-widest uppercase">Ekosistem</span>
                </div>
              </div>

              {/* Enhanced Section Title */}
              <div className="relative mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-normal">
                  <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                    Birimlerimiz
                  </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6 rounded-full"></div>
              </div>

              {/* Enhanced Description */}
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium">
                  HydRaboN&apos;un 
                  <span className="text-primary-300 font-semibold"> ana yapı taşlarını </span>
                  keşfedin. Her birim, kendi alanında 
                  <span className="text-white font-semibold"> mükemmellik standartlarını </span>
                  koruyarak topluluğumuzun gücüne katkıda bulunur ve farklı ilgi alanlarına 
                  hitap eden kapsamlı bir 
                  <span className="text-primary-300 font-semibold"> ekosistem </span>
                  oluşturur.
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
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 tracking-tight leading-normal group-hover:text-primary-200 transition-colors duration-300">
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
                      <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-3"></div>
                      <h4 className="text-lg font-bold text-white">Temel Özellikler</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {division.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 p-2 rounded-lg bg-dark-800/30 group-hover:bg-dark-700/40 transition-colors duration-300">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-sm"></div>
                          <span className="text-dark-200 text-sm font-medium group-hover:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="flex justify-between items-center mt-auto pt-4">
                    <Link 
                      href={division.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-500/40 rounded-xl text-primary-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-primary-400 group/link"
                    >
                      Detayları Keşfet
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    {/* Status indicator */}
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${division.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                      <span className="text-xs text-dark-400 font-medium">
                        {division.status === 'active' ? 'Aktif' : 'Pasif'}
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
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
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
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-900/20 to-primary-800/20 border border-primary-500/30 rounded-full backdrop-blur-sm">
                      <Trophy className="w-4 h-4 text-primary-400 mr-2" />
                      <span className="text-primary-200 text-xs font-semibold tracking-widest uppercase">Yüksek Standartlı Yapı Güvencesi</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 leading-normal">
                    <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                      Güvenilirlik, Kalite ve Vizyon
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
                    <p className="text-yellow-400 font-bold text-xl mb-2">Turnuva Geçmişi</p>
                    <p className="text-dark-300 text-base">Organize Takım Yapısı</p>
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
                    <p className="text-blue-400 font-bold text-xl mb-2">Gelişmiş Altyapı</p>
                    <p className="text-dark-300 text-base">Yazılım Tabanlı Çözümler</p>
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
                    <p className="text-green-400 font-bold text-xl mb-2">Kurumsal Yönetim</p>
                    <p className="text-dark-300 text-base">Disiplinli Organizasyon</p>
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
                    <p className="text-purple-400 font-bold text-xl mb-2">Aktif Topluluk</p>
                    <p className="text-dark-300 text-base">7/24 Destek</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-dark-950 relative overflow-hidden snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom px-4 md:px-6">
          <motion.div 
            className="bg-gradient-to-r from-dark-800 to-dark-700 border border-primary-500/30 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center relative overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-primary-800/20 rounded-2xl md:rounded-3xl"></div>
            <div className="relative z-10">
              {/* CTA Badge */}
              <div className="flex justify-center mb-6 md:mb-8 px-4">
                <div className="inline-flex items-center px-4 md:px-5 py-2 bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-500/40 rounded-full backdrop-blur-md">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                  <span className="text-primary-200 text-xs font-semibold tracking-wider md:tracking-widest uppercase">Son Adım</span>
                  <div className="w-2 h-2 bg-primary-400 rounded-full ml-2 md:ml-3 animate-pulse"></div>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight leading-normal px-4">
                <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                  Yeteneğini Değere Dönüştür!
                </span>
              </h2>
              <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-6 md:mb-8 rounded-full"></div>
              
              <p className="text-sm sm:text-base md:text-lg text-dark-200 mb-8 md:mb-10 max-w-2xl lg:max-w-3xl mx-auto font-medium leading-relaxed px-4">
                Topluluk yönetimi, yazılım, medya ve espor gibi alanlarda kendini geliştir; disiplinli bir yapının parçası olarak
                <span className="text-primary-300 font-semibold"> profesyonel kariyerine </span>
                ilk adımı at.
              </p>
              
              <motion.div 
                className="flex justify-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] group relative hover:scale-105 transition-transform duration-300 transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0">
                  <span className="relative z-10 flex items-center whitespace-nowrap">
                    Aramıza Katıl!
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
