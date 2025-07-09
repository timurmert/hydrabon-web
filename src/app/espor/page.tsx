import { 
  Trophy, 
  Target, 
  Calendar, 
  Clock,
  Users,
  Zap,
  Medal,
  Gamepad2,
  ExternalLink,
  Play
} from 'lucide-react';
import Link from 'next/link';
import { players, staff, upcomingMatches, recentMatches, teamStats } from '@/data/esports';

const roleColors = {
  'Duelist': 'from-red-500 to-red-600',
  'Initiator': 'from-yellow-500 to-yellow-600', 
  'Controller': 'from-blue-500 to-blue-600',
  'Sentinel': 'from-green-500 to-green-600',
  'IGL': 'from-purple-500 to-purple-600',
};

export default function EsportsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 tiger-pattern opacity-10"></div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="section-title">HydRaboN Espor</h1>
            <p className="section-subtitle">
              Özellikle Valorant odaklı profesyonel takım yapılanması. Premier League dahil 
              olmak üzere birçok resmi turnuva ve ligde mücadele eden güçlü kadromuz.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="professional-card text-center">
              <Trophy className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{teamStats.winRate}%</div>
              <div className="text-dark-300">Galibiyet Oranı</div>
            </div>
            <div className="professional-card text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{teamStats.matchesPlayed}</div>
              <div className="text-dark-300">Toplam Maç</div>
            </div>
            <div className="professional-card text-center">
              <Medal className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{teamStats.championships}</div>
              <div className="text-dark-300">Şampiyonluk</div>
            </div>
            <div className="professional-card text-center">
              <Zap className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{teamStats.tournaments}</div>
              <div className="text-dark-300">Turnuva</div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Oyuncu Kadrosu</h2>
            <p className="section-subtitle">
              Her biri kendi alanında uzman, takım içi koordinasyonu mükemmel oyuncular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {players.map((player) => (
              <div key={player.id} className="professional-card group">
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
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/espor/takim" className="btn-primary">
              Takım Detayları
            </Link>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Teknik Kadro</h2>
            <p className="section-subtitle">
              Takımımızın başarısının arkasındaki deneyimli profesyoneller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member) => (
              <div key={member.id} className="professional-card text-center">
                <div className="w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-500 font-medium text-sm mb-4">
                  {member.role}
                </div>
                <p className="text-dark-300 mb-4">{member.bio}</p>
                <p className="text-sm text-dark-400">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Yaklaşan Maçlar</h2>
            <p className="section-subtitle">
              Takımımızın gelecek maç programını takip edin ve canlı yayınları kaçırmayın.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {upcomingMatches.slice(0, 3).map((match) => (
              <div key={match.id} className="professional-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-tiger rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">H</span>
                      </div>
                      <div className="text-2xl font-bold text-white">VS</div>
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
                    <div className="flex items-center space-x-2 text-dark-300 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{match.time}</span>
                    </div>
                    {match.stream && (
                      <a href={match.stream} target="_blank" rel="noopener noreferrer" 
                         className="btn-primary btn-sm">
                        Canlı İzle
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/espor/maclar" className="btn-secondary">
              Tüm Maçları Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Son Sonuçlar</h2>
            <p className="section-subtitle">
              Takımımızın son maç performansları ve sonuçları.
            </p>
          </div>

          <div className="grid gap-6">
            {recentMatches.slice(0, 3).map((match) => (
              <div key={match.id} className="professional-card">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Takımımızı Destekle!
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Maçlarımızı takip et, canlı yayınlarımızı izle ve HydRaboN ailesinin bir parçası ol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/espor/maclar" className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                Maç Takvimi
              </Link>
              <a href="https://twitch.tv/hydrabon_official" target="_blank" rel="noopener noreferrer"
                 className="bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-800 transition-colors duration-300">
                Canlı Yayın
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 