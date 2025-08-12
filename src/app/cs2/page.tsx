'use client';

import { 
  Server,
  Users,
  Trophy,
  Target,
  Calendar,
  Gamepad2,
  Shield,
  Zap,
  RefreshCw,
  Play,
  Wifi,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import { serverInfo, gameModes } from '@/data/cs2';

export default function CS2Page() {
  return (
    <div className="min-h-screen md:snap-y md:snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        {/* Multi-layered Dynamic Background (standardized) */}
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
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-900/30 to-orange-800/30 border border-orange-500/40 rounded-full backdrop-blur-md">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-orange-200 text-sm font-semibold tracking-wider uppercase">Eğlence Merkezi</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full ml-3 animate-pulse"></div>
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
                <span className="bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-transparent">
                Counter-Strike 2
                </span>
              </h1>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-6 rounded-full"
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
                128 tick, anti-cheat korumalı profesyonel 
                <span className="text-orange-300 font-semibold"> Counter-Strike 2 sunucumuz</span>. 
                <br />
                Competitive'den casual'a kadar geniş oyun modu yelpazesi ile 
                <span className="text-white font-semibold"> kaliteli oyun deneyimi</span> sunuyoruz.
              </p>
            </motion.div>
          </motion.div>

          {/* Server Features */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Users, value: '16 Slot', label: 'Maksimum Oyuncu', color: 'text-orange-500' },
              { icon: Wifi, value: '128 Tick', label: 'Yüksek Performans', color: 'text-orange-500' },
              { icon: Shield, value: 'Anti-Cheat', label: 'Güvenli Oyun', color: 'text-green-500' },
              { icon: Server, value: '7/24', label: 'Kesintisiz Hizmet', color: 'text-blue-500' }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="professional-card text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white mb-1">{feature.value}</div>
                <div className="text-dark-300">{feature.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Server Connection Info */}
          <motion.div 
            className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/40 rounded-2xl p-8 backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center space-x-4">
                <Server className="w-12 h-12 text-orange-500" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{serverInfo.name}</h3>
                  <p className="text-dark-300">Sunucu bağlantı bilgileri</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-mono font-bold text-orange-500 mb-2">
                  {serverInfo.ip}
                </div>
                <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 border border-orange-500/40 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-orange-400 group focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Aramıza Katıl!
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator (kept, maps removed) */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Game Modes Section */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Oyun Modları</h2>
            <p className="section-subtitle">
              Farklı oyun tarzları için çeşitli modlar sunuyoruz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {gameModes.map((mode, index) => (
              <motion.div 
                key={mode.id} 
                className={`professional-card ${mode.available ? '' : 'opacity-60'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    {mode.icon === 'Trophy' && <Trophy className="w-8 h-8 text-white" />}
                    {mode.icon === 'Users' && <Users className="w-8 h-8 text-white" />}
                    {mode.icon === 'Target' && <Target className="w-8 h-8 text-white" />}
                    {mode.icon === 'Zap' && <Zap className="w-8 h-8 text-white" />}
                    {mode.icon === 'RefreshCw' && <RefreshCw className="w-8 h-8 text-white" />}
                    {mode.icon === 'Calendar' && <Calendar className="w-8 h-8 text-white" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{mode.name}</h3>
                      {mode.available ? (
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      ) : (
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-dark-300 text-sm mb-4">{mode.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-orange-500 font-semibold">{mode.playerCount}</div>
                    <div className="text-xs text-dark-400">Min. Oyuncu Sayısı</div>
                  </div>
                  <div>
                    <div className="text-orange-500 font-semibold">{mode.duration}</div>
                    <div className="text-xs text-dark-400">Süre</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {mode.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-dark-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
      </div>

      {/* Community Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Sunucu Avantajları</h2>
            <p className="section-subtitle">
              HydRaboN CS2 sunucusunda oyuncularımıza sunduğumuz özel hizmetler ve avantajlar.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {[
              {
                title: 'Yüksek Performans Server',
                description: '128 tick rate ile profesyonel seviyede oyun deneyimi.',
                features: ['Düşük Ping', 'Stabil Bağlantı', 'Anti-Lag Sistemi'],
                icon: Wifi,
                color: 'text-green-500'
              },
              {
                title: 'Güvenli Oyun Ortamı',
                description: 'VAC + özel anti-cheat sistemleri ile hileye karşı korunma.',
                features: ['VAC Koruması', 'Özel Anti-Cheat', 'Admin Denetimi'],
                icon: Shield,
                color: 'text-blue-500'
              },
              {
                title: 'Aktif Yönetim',
                description: '7/24 aktif admin desteği ve hızlı problem çözümü.',
                features: ['Hızlı Destek', 'Adil Yönetim', 'Problem Çözümü'],
                icon: Users,
                color: 'text-purple-500'
              },
              {
                title: 'Çeşitli Oyun Modları',
                description: 'Competitive\'den casual\'a farklı oyun tarzları.',
                features: ['Aim & Awp', 'Minigames', 'Competitive 5v5'],
                icon: Gamepad2,
                color: 'text-orange-500'
              },
              {
                title: 'Topluluk Etkinlikleri',
                description: 'Düzenli turnuvalar ve özel etkinlikler.',
                features: ['Haftalık Turnuvalar', 'Ödüllü Yarışmalar', 'Eğlenceli Etkinlikler'],
                icon: Trophy,
                color: 'text-yellow-500'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="professional-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-dark-300 mb-4">{benefit.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator (above CTA) */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Sunucumuza Katıl!
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Kaliteli CS2 deneyimi için sunucumuza bağlan ve HydRaboN topluluğunun bir parçası ol.
            </p>
            <div className="flex justify-center">
              <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center min-w-[180px] group transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0">
                <span className="flex items-center">
                  Aramıza Katıl!
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-md">
              <div className="text-lg font-mono font-bold text-white mb-2">
                connect {serverInfo.ip}
              </div>
              <p className="text-orange-100 text-sm">
                Bu komutu CS2 konsolunda kullanarak direkt bağlanabilirsiniz!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator (below CTA) */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
      </div>
    </div>
  );
}