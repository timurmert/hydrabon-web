'use client';

import { 
  Trophy, 
  Target, 
  Calendar, 
  Clock,
  Users,
  Zap,
  Medal,
  ExternalLink,
  Play,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { players, staff, historicalMatches, recentMatches, teamStats, historicalAchievements, careerHighlights } from '@/data/esports';

const roleColors = {
  'Duelist': 'from-red-500 to-red-600',
  'Initiator': 'from-yellow-500 to-yellow-600', 
  'Controller': 'from-blue-500 to-blue-600',
  'Sentinel': 'from-green-500 to-green-600',
  'IGL': 'from-purple-500 to-purple-600',
};

export default function EsportsPage() {
  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
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
                <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">Espor Mirasımız</span>
                <div className="w-2 h-2 bg-primary-400 rounded-full ml-3"></div>
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
                  HydRaboN Espor
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
                Valorant sahasında 
                <span className="text-primary-300 font-semibold"> tarihi başarılara imza atmış </span> 
                takımımızın gurur verici geçmişi. 
                <br />
                Şampiyonluklar, rekorlar ve 
                <span className="text-white font-semibold"> unutulmaz anılarla dolu</span> espor yolculuğumuz.
              </p>
            </motion.div>
          </motion.div>

          {/* Team Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Trophy, value: `${teamStats.winRate}%`, label: 'Galibiyet Oranı', color: 'text-primary-500' },
              { icon: Target, value: teamStats.matchesPlayed, label: 'Toplam Maç', color: 'text-primary-500' },
              { icon: Medal, value: teamStats.championships, label: 'Şampiyonluk', color: 'text-primary-500' },
              { icon: Zap, value: teamStats.tournaments, label: 'Turnuva', color: 'text-primary-500' }
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

      {/* Players Section */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Efsane Oyuncular</h2>
            <p className="section-subtitle">
              Şampiyonluk yolculuğumuzda yer almış, tarihi başarılara imza atmış oyuncu kadromuz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {players.map((player, index) => (
              <motion.div 
                key={player.id} 
                className="professional-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{player.nickname}</h3>
                    <p className="text-dark-300 text-sm mb-2">{player.name}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${roleColors[player.role]}`}>
                      {player.role}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary-500">{player.stats.winRate}%</div>
                    <div className="text-xs text-dark-400">Win Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-500">{player.stats.averageKDA}</div>
                    <div className="text-xs text-dark-400">Avg KDA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-500">{player.stats.averageACS}</div>
                    <div className="text-xs text-dark-400">Avg ACS</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{player.stats.rank}</div>
                    <div className="text-xs text-dark-400">Rank</div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  {player.socialMedia.twitter && (
                    <a href={`https://twitter.com/${player.socialMedia.twitter.slice(1)}`} 
                       className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-blue-400 transition-colors duration-300"
                       target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {player.socialMedia.twitch && (
                    <a href={`https://twitch.tv/${player.socialMedia.twitch}`}
                       className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-purple-400 transition-colors duration-300"
                       target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/espor/takim" className="btn-primary text-base px-8 py-4 flex items-center justify-center min-w-[200px] group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Takım Detayları
                <Target className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Staff Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Başarının Mimarları</h2>
            <p className="section-subtitle">
              Şampiyonluk yolculuğumuzda takımı zirveye taşıyan deneyimli teknik kadromuz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {staff.map((member, index) => (
              <motion.div 
                key={member.id} 
                className="professional-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-500 font-medium text-sm mb-4">
                  {member.role}
                </div>
                <p className="text-dark-300 mb-4">{member.bio}</p>
                <p className="text-sm text-dark-400">{member.experience}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Historical Achievements */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Tarihi Başarılarımız</h2>
            <p className="section-subtitle">
              Espor yolculuğumuzda elde ettiğimiz önemli kilometre taşları ve şampiyonluklar.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {historicalAchievements.slice(0, 3).map((achievement, index) => (
              <motion.div 
                key={achievement.id} 
                className="professional-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-6 flex-1">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full">
                      {achievement.importance === 'high' ? (
                        <Trophy className="w-8 h-8 text-white" />
                      ) : (
                        <Medal className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-dark-300 mb-3">{achievement.description}</p>
                      <p className="text-sm text-dark-400">{achievement.details}</p>
                    </div>
                  </div>

                  <div className="text-right ml-4">
                    <div className="flex items-center space-x-2 text-dark-300 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(achievement.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      achievement.importance === 'high' 
                        ? 'bg-primary-500/20 text-primary-500' 
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {achievement.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/espor/tarihce" className="btn-secondary text-base px-8 py-4 flex items-center justify-center min-w-[200px] group relative">
              <span className="relative z-10 flex items-center">
                Tüm Başarıları Görüntüle
                <Trophy className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Historical Results */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Tarihi Maç Sonuçları</h2>
            <p className="section-subtitle">
              Şampiyonluk yolunda oynadığımız önemli maçların sonuçları ve performanslarımız.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {historicalMatches.slice(0, 3).map((match) => (
              <motion.div 
                key={match.id} 
                className="professional-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-tiger rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">H</span>
                      </div>
                      <div className={`text-3xl font-bold ${match.score && match.score.us > match.score.them ? 'text-green-500' : 'text-red-500'}`}>
                        {match.score?.us} - {match.score?.them}
                      </div>
                      <div className="w-16 h-16 bg-dark-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{match.opponent.slice(0, 2)}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{match.opponent}</h3>
                      <p className="text-dark-300">{match.tournament}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-dark-300 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(match.date).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      match.score && match.score.us > match.score.them 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-red-500/20 text-red-500'
                    }`}>
                      {match.score && match.score.us > match.score.them ? 'Galibiyet' : 'Mağlubiyet'}
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Career Highlights */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Kariyer Rekorları</h2>
            <p className="section-subtitle">
              Espor yolculuğumuzda elde ettiğimiz en önemli rekorlar ve istatistikler.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {careerHighlights.map((highlight, index) => (
              <motion.div 
                key={index} 
                className="professional-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {highlight.icon === 'Trophy' && <Trophy className="w-8 h-8 text-white" />}
                  {highlight.icon === 'Medal' && <Medal className="w-8 h-8 text-white" />}
                  {highlight.icon === 'Award' && <Award className="w-8 h-8 text-white" />}
                  {highlight.icon === 'Target' && <Target className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-3xl font-bold text-primary-500 mb-2">{highlight.value}</h3>
                <h4 className="text-lg font-semibold text-white mb-3">{highlight.title}</h4>
                <p className="text-dark-300 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Heritage Section */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Espor Mirasımızı Keşfet!
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Şampiyonluklar, rekorlar ve unutulmaz anılarla dolu espor tarihimizi keşfet. 
              HydRaboN ailesinin gurur verici başarı hikayesi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/espor/tarihce" className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center min-w-[160px] group">
                <span className="flex items-center">
                  Başarı Tarihçesi
                  <Trophy className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Link>
              <Link href="/espor/istatistikler" 
                    className="bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-800 transition-all duration-300 flex items-center justify-center min-w-[160px] group">
                <span className="flex items-center">
                  İstatistikler
                  <Target className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}