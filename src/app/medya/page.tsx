'use client';

import { 
  Video,
  Image as ImageIcon,
  FileText,
  BarChart3,
  Play,
  Eye,
  Clock,
  Calendar,
  Users,
  ExternalLink,
  Youtube,
  Instagram,
  Gift
} from 'lucide-react';
import { SiX, SiDiscord } from 'react-icons/si';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { featuredContent, mediaStats, socialMediaPlatforms } from '@/data/media';
import { useDiscordStats } from '@/hooks/useDiscordStats';

const typeIcons = {
  'video': Video,
  'image': ImageIcon,
  'article': FileText,
  'infographic': BarChart3,
};

const categoryColors = {
  'Mix': 'from-purple-500 to-purple-600',
};

// mediaTeam kaldırıldığı için roleIcons gereksiz

const platformIcons: Record<string, any> = {
  YouTube: Youtube,
  Instagram: Instagram,
  X: SiX,
  Discord: SiDiscord,
};

export default function MediaPage() {
  const { stats: discordStats, loading, error } = useDiscordStats();

  // Ana sayfadaki gibi Discord üye sayısını formatla
  const formatMemberCount = (): string => {
    if (loading && !discordStats) {
      return '...';
    }
    
    if (error || !discordStats?.totalMembers) {
      return '850+';
    }
    
    const count = discordStats.totalMembers;
    const numCount = typeof count === 'string' ? parseInt(count.replace(/\D/g, '')) : count;
    
    if (isNaN(numCount)) return '850+';
    
    const rounded = Math.floor(numCount / 100) * 100;
    return `${rounded}+`;
  };

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
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">İçerik Merkezi</span>
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
                  Sosyal Medya
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
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium">
                Ürettiğimiz içeriklerle topluluğumuzun değerlerini daha geniş kitlelere ulaştırıyor, etkileşimi artırıyor ve
                <span className="text-primary-300 font-semibold"> dış dünyada </span>
                <span className="text-white font-semibold"> güçlü bir etki yaratıyoruz.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Media Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Video, value: mediaStats.totalVideos, label: 'Video İçerik', color: 'text-primary-500' },
              { icon: Eye, value: `${mediaStats.totalViews}`, label: 'Toplam İzlenme', color: 'text-green-500' },
              { icon: Users, value: `${mediaStats.subscribers}`, label: 'Takipçi', color: 'text-blue-500' },
              { icon: Gift, value: `${mediaStats.campaign}`, label: 'Kampanya Çalışması', color: 'text-purple-500' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="professional-card text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-dark-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Featured Content */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Öne Çıkan İçerikler</h2>
            <p className="section-subtitle">
              En çok izlenen ve beğenilen içeriklerimizi keşfedin.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {featuredContent.map((content, index) => {
              const IconComponent = typeIcons[content.type];
              return (
                <motion.div 
                  key={content.id} 
                  className="professional-card group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <a
                      href={content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                      className="aspect-video relative bg-dark-700 block focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                      aria-label={`${content.title} bağlantısını yeni sekmede aç`}
                    >
                      {content.thumbnail ? (
                        <Image
                          src={content.thumbnail}
                          alt={content.title}
                          fill
                          sizes="(min-width: 1024px) 600px, 100vw"
                          quality={90}
                          className="object-cover"
                          priority={index < 2}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <IconComponent className="w-16 h-16 text-primary-500" />
                        </div>
                      )}
                      {content.type === 'video' && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                    </a>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[content.category]}`}>
                          {content.category}
                        </div>
                      </div>
                    </div>
                    <p className="text-dark-300 leading-relaxed mb-4">{content.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-dark-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(content.publishDate).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{content.views} görüntüleme</span>
                      </div>
                      {content.duration && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{content.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-dark-800 text-dark-300 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={content.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors duration-300 focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                  >
                    İçeriği Görüntüle
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          
        </div>
      </section>

      

      {/* Social Media Platforms */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Sosyal Medya</h2>
            <p className="section-subtitle">
              Bizi tüm sosyal medya platformlarından takip edin!
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {socialMediaPlatforms.map((platform, index) => {
              const Icon = platformIcons[platform.name] || ExternalLink;
              // Discord için dinamik sayı, diğerleri için statik
              const followerCount = platform.name === 'Discord' ? formatMemberCount() : platform.followers;
              
              return (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="professional-card group hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                      <Icon className={`w-8 h-8 ${platform.color}`} />
                    </div>
                    <div className={`text-4xl font-bold mb-2 ${platform.color}`}>
                      {followerCount}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                    <p className="text-dark-300 text-sm mb-3">{platform.handle}</p>
                    <div className={`text-4xl font-bold mb-2 ${platform.color}`}>
                      {platform.followersText}
                    </div>
                  </div>
                </motion.a>
              );
            })}
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
            className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 px-4">
            Gelişmelerden haberdar olun!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Güncel gelişmeleri kaçırmamak ve topluluğumuzla bağlantıda kalmak için bizleri sosyal medyadan takip edin!
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a 
                href="https://youtube.com/@hydrabon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-purple-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-purple-50 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] group transform-gpu hover:scale-105 active:scale-95"
              >
                <span className="flex items-center whitespace-nowrap">
                  Abone Ol
                  <Youtube className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
              <a 
                href="https://instagram.com/hydrabon.official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-purple-800 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] group transform-gpu hover:scale-105 active:scale-95"
              >
                <span className="flex items-center whitespace-nowrap">
                  Takip Et
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}