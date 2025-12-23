'use client';

import {
  Users,
  HelpCircle,
  ExternalLink,
  Zap,
  Gift,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { communityStats } from '@/data/community';
import { useDiscordStats } from '@/hooks/useDiscordStats';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function CommunityPage() {
  useParams();
  const t = useTranslations('community');
  const { stats: discordStats, loading: discordLoading, error: discordError } = useDiscordStats();
  
  // Dynamic roles data
  const roles = [
    { key: 'founder', color: '#ff0000', memberCount: 1 },
    { key: 'chairman', color: '#e03063', memberCount: 1 },
    { key: 'board', color: '#fff300', memberCount: 4 },
    { key: 'rnd', color: '#ff8400', memberCount: 4 },
    { key: 'media', color: '#ff8400', memberCount: 3 },
  ];
  
  // Dynamic rules data (1-14)
  const ruleIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
  
  // Dynamic FAQ data (1-9)
  const faqIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

        <div className="container-custom relative z-20 pt-20 md:pt-24 lg:pt-28">
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
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-winter-900/30 to-dark-800/30 border border-winter-400/40 rounded-full backdrop-blur-md">
                <span className="text-base mr-2">❄</span>
                <span className="text-winter-200 text-sm font-semibold tracking-wider uppercase">{t('badge')}</span>
                <span className="text-base ml-2">❄</span>
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
            </motion.div>

            {/* Enhanced Description */}
            <motion.div 
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium">
                {t('description')}.
              </p>
            </motion.div>
          </motion.div>

          {/* Community Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { 
                icon: Users, 
                value: discordLoading ? '...' : (discordStats?.totalMembers?.toString() || communityStats.totalMembers.toString()),
                labelKey: 'stats.totalMembers', 
                color: 'text-winter-400' 
              },
              { 
                icon: Zap, 
                value: discordLoading ? '...' : (discordStats?.onlineMembers || communityStats.onlineMembers), 
                labelKey: 'stats.online', 
                color: 'text-green-500' 
              },
              { 
                icon: Gift, 
                value: discordLoading ? '...' : `${t('stats.level')} ${discordStats?.boostLevel || communityStats.boostLevel}`, 
                labelKey: 'stats.boostLevel', 
                color: 'text-purple-500' 
              },
              { 
                icon: MessageCircle, 
                value: discordLoading ? '...' : (discordError ? "10.000+" : (discordStats?.monthlyMessages ?? "10.000+")), 
                labelKey: 'stats.monthlyMessages', 
                color: 'text-blue-500' 
              }
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
                <div className="text-dark-300">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Discord Join CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a 
              href="https://discord.gg/hydrabon" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseDown={(e) => e.preventDefault()}
              onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 hover:scale-105 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
            >
              <Users className="w-6 h-6 mr-3" />
              {t('joinButton')}
              <ExternalLink className="w-5 h-5 ml-3" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
      </div>

      {/* Server Roles */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('roles.title')}</h2>
            <p className="section-subtitle">
              {t('roles.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {roles.map((role, index) => (
              <motion.div 
                key={role.key} 
                className="professional-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: role.color }}
                  ></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{t(`roles.items.${role.key}.name`)}</h3>
                    <p className="text-dark-300 text-sm mb-3">{t(`roles.items.${role.key}.requirements`)}</p>
                    <div className="flex items-center space-x-4 text-sm text-dark-400">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{role.memberCount} {t('roles.members')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
      </div>

      {/* Rules Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('rules.title')}</h2>
            <p className="section-subtitle">
              {t('rules.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {ruleIds.map((ruleId, index) => (
              <motion.div 
                key={ruleId} 
                className="professional-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-winter-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-winter-400 font-bold text-sm">{ruleId}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{t(`rules.items.${ruleId}.title`)}</h3>
                    <p className="text-dark-300 text-sm">{t(`rules.items.${ruleId}.description`)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">{t('faq.title')}</h2>
            <p className="section-subtitle">
              {t('faq.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-6">
              {faqIds.map((faqId, index) => (
                <motion.div 
                  key={faqId} 
                  className="professional-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-winter-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-winter-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-3">{t(`faq.items.${faqId}.question`)}</h3>
                      <p className="text-dark-300">{t(`faq.items.${faqId}.answer`)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom px-4 md:px-6">
          <motion.div 
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 px-4">
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              {discordLoading ? '...' : (discordStats?.totalMembers?.toString() || communityStats.totalMembers.toString())} {t('cta.description')}
            </p>
            <motion.div 
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer"
                 className="bg-white text-indigo-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[160px] group transform">
                <span className="flex items-center whitespace-nowrap">
                  {t('cta.button')}
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}