'use client';

import { 
  Trophy, 
  Target, 
  Calendar, 
  Clock,
  Zap,
  Medal,
  ExternalLink,
  Twitter,
  Crown,
  Gamepad2,
  BarChart3
} from 'lucide-react';
// Link kullanılmıyor
// import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staff, historicalMatches, teamStats, historicalAchievements, pioneer } from '@/data/esports';

const roleColors = {
  'Duelist': 'from-red-500 to-red-600',
  'Initiator': 'from-yellow-500 to-yellow-600', 
  'Controller': 'from-blue-500 to-blue-600',
  'Sentinel': 'from-green-500 to-green-600',
  'IGL': 'from-purple-500 to-purple-600',
  'Oyuncu, Koç, Yönetici': 'from-orange-500 to-orange-600',
};

export default function EsportsPage() {
  const ourTeamLogo = '/images/teams/hydrabon.png';
  const rankImages: Record<string, string> = {
    Immortal: '/images/ranks/immortal.jpg',
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
                  Espor Takımlarımız
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
                takımlarımızın gurur verici geçmişi.
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
              { icon: Zap, value: teamStats.tournaments, label: 'Turnuva', color: 'text-primary-500' },
              { icon: Medal, value: teamStats.championships, label: 'Şampiyonluk', color: 'text-primary-500' },
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

      {/* Players Section - Pioneer */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Bu Mirasın Öncüsü</h2>
            <p className="section-subtitle">Bizi bu yola sokan, sahada ve sahne arkasında iz bırakan isim.</p>
          </motion.div>

          <motion.div 
            className="professional-card relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary-500/40 shadow-xl">
                <Image src={pioneer.avatar} alt={pioneer.nickname} width={160} height={160} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold mb-3">
                  Mirasın Öncüsü
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{pioneer.nickname}</h3>
                <p className="text-dark-300 mb-4">{pioneer.name}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${roleColors[pioneer.role]} mb-6`}>
                  {pioneer.role}
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-2 bg-dark-800 rounded-lg">
                    <div className="text-sm text-dark-400">Win Rate</div>
                    <div className="text-xl font-bold text-primary-500">{pioneer.stats.winRate}%</div>
                  </div>
                  <div className="px-3 py-2 bg-dark-800 rounded-lg">
                    <div className="text-sm text-dark-400">Avg KDA</div>
                    <div className="text-xl font-bold text-primary-500">{pioneer.stats.averageKDA}</div>
                  </div>
                  <div className="px-3 py-2 bg-dark-800 rounded-lg">
                    <div className="text-sm text-dark-400">Avg ACS</div>
                    <div className="text-xl font-bold text-primary-500">{pioneer.stats.averageACS}</div>
                  </div>
                  <div className="px-3 py-2 bg-dark-800 rounded-lg">
                    <div className="text-sm text-dark-400 mb-1">Rank</div>
                    {rankImages[pioneer.stats.rank] ? (
                      <Image src={rankImages[pioneer.stats.rank]} alt={pioneer.stats.rank} width={36} height={36} className="object-contain" />
                    ) : (
                      <div className="text-sm font-semibold text-white">{pioneer.stats.rank}</div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-6 justify-center md:justify-start">
                  {pioneer.socialMedia.twitter && (
                    <a
                      href={`https://x.com/${pioneer.socialMedia.twitter.slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                      className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-blue-400 transition-colors flex items-center gap-2 focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Staff Section */}
      <section className="py-14 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Başarının Mimarları</h2>
            <p className="section-subtitle">
              Şampiyonluk yolculuğumuzda takımlarımızı zirveye taşıyan deneyimli kadromuz.
            </p>
          </motion.div>

          {(() => {
            const manager = staff.find((m) => m.role === 'Manager');
            const coach = staff.find((m) => m.role === 'Coach');
            const analyst = staff.find((m) => m.role === 'Analyst');
            // Oyuncu kartı için personel listesinden seçim yap (isim eşleşmesi veya özel rol adı kullanılarak)
            const playerStaff = staff.find((m) => m.role === 'Player');
            const leaders = [
              { label: 'Takım Sorumlusu', name: manager?.name ?? '—', note: manager?.experience || manager?.bio || '', Icon: Crown },
              { label: 'Koç', name: coach?.name ?? '—', note: coach?.experience || coach?.bio || '', Icon: Trophy },
              { label: 'Analist', name: analyst?.name ?? '—', note: analyst?.experience || analyst?.bio || '', Icon: BarChart3 },
              { label: 'Oyuncu', name: playerStaff?.name ?? '—', note: playerStaff?.experience || playerStaff?.bio || '', Icon: Gamepad2 },
            ];
            return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {leaders.map((l, index) => (
                <motion.div
                  key={`${l.label}-${index}`}
                  className="professional-card text-center group px-6 py-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:opacity-90 transition-opacity duration-300 bg-gradient-to-br from-dark-700 to-dark-600 border border-dark-600">
                  <l.Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{l.name}</h3>
                <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-500 font-medium text-sm mb-4">
                  {l.label}
                </div>
                {l.note && (
                  <p className="text-dark-300 text-sm leading-relaxed">{l.note}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
            );
          })()}
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
                className="professional-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-dark-700 rounded-lg flex items-center justify-center overflow-hidden">
                      <Image src={ourTeamLogo} alt="HydRaboN Esports" width={64} height={64} className="object-contain" />
                    </div>
                    <div className={`text-3xl font-bold ${match.score && match.score.us > match.score.them ? 'text-green-500' : 'text-red-500'}`}>
                      {match.score?.us} - {match.score?.them}
                    </div>
                    <div className="w-16 h-16 bg-dark-700 rounded-lg flex items-center justify-center overflow-hidden">
                      {match.opponentLogo ? (
                        <Image src={match.opponentLogo} alt={match.opponent} width={64} height={64} className="object-contain" />
                      ) : (
                        <span className="text-white font-bold text-sm">{match.opponent.slice(0, 2)}</span>
                      )}
                    </div>
                  </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{match.opponent}</h3>
                      <p className="text-dark-300">{match.tournament}</p>
                      <div className="flex items-center space-x-3 mt-2 text-sm text-dark-400">
                        {match.duration && (
                          <span className="inline-flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {match.duration}
                          </span>
                        )}
                        {match.maps && (
                          <span className="truncate max-w-[220px]">Oynanan Harita: {match.maps.join(', ')}</span>
                        )}
                      </div>
                      {match.matchUrl && (
                        <div className="mt-2">
                          <a
                            href={match.matchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                            className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                          >
                            Maçı görüntüle
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      )}
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
            <div className="flex justify-center">
              <a
                href="https://discord.gg/hydrabon"
                target="_blank"
                rel="noopener noreferrer"
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center min-w-[220px] group transform hover:scale-105 active:scale-95 will-change-transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
              >
                <span className="flex items-center">
                  Bu Mirasın İzini Keşfet
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}