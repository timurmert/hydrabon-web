import {
  Users,
  Crown,
  Shield,
  Calendar,
  MessageSquare,
  Mic,
  Settings,
  Trophy,
  Star,
  Clock,
  MapPin,
  UserPlus,
  HelpCircle,
  ExternalLink,
  Zap,
  Gift
} from 'lucide-react';
import Link from 'next/link';
import { 
  communityStats, 
  upcomingEvents, 
  completedEvents, 
  discordRules, 
  faqItems, 
  applicationTypes,
  serverStats 
} from '@/data/community';

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 tiger-pattern opacity-10"></div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="section-title">Discord Topluluğu</h1>
            <p className="section-subtitle">
              Kalabalık ve organize Discord sunucumuz. Etkinlik takibi, yetkili yönetimi, 
              başvuru sistemleri ve kullanıcı etkileşimi ile aktif bir topluluk.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="professional-card text-center">
              <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{communityStats.totalMembers.toLocaleString()}</div>
              <div className="text-dark-300">Toplam Üye</div>
            </div>
            <div className="professional-card text-center">
              <Zap className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{communityStats.onlineMembers}</div>
              <div className="text-dark-300">Çevrimiçi</div>
            </div>
            <div className="professional-card text-center">
              <Gift className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">Seviye {communityStats.boostLevel}</div>
              <div className="text-dark-300">Server Boost</div>
            </div>
            <div className="professional-card text-center">
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{upcomingEvents.length}</div>
              <div className="text-dark-300">Yaklaşan Etkinlik</div>
            </div>
          </div>

          {/* Discord Join CTA */}
          <div className="text-center">
            <a 
              href="https://discord.gg/hydrabon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              <Users className="w-6 h-6 mr-3" />
              Discord'a Katıl
              <ExternalLink className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Server Roles */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Sunucu Rolleri</h2>
            <p className="section-subtitle">
              Topluluk içindeki rollerden bazıları ve sorumluluklarını keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {communityStats.roles.slice(0, 6).map((role) => (
              <div key={role.id} className="professional-card">
                <div className="flex items-start space-x-4 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: role.color }}
                  ></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{role.name}</h3>
                    <p className="text-dark-300 text-sm mb-3">{role.requirements}</p>
                    <div className="flex items-center space-x-4 text-sm text-dark-400">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{role.memberCount} üye</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-dark-300 mb-4">Toplam {communityStats.roles.length} farklı rol bulunmaktadır.</p>
            <Link href="/topluluk/roller" className="btn-secondary">
              Tüm Rolleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Yaklaşan Etkinlikler</h2>
            <p className="section-subtitle">
              Topluluk etkinliklerimize katılın ve eğlenceli vakit geçirin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="professional-card">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {event.type === 'Tournament' && <Trophy className="w-8 h-8 text-primary-500" />}
                    {event.type === 'Meeting' && <Users className="w-8 h-8 text-primary-500" />}
                    {event.type === 'Community Event' && <Star className="w-8 h-8 text-primary-500" />}
                    {event.type === 'Stream' && <Mic className="w-8 h-8 text-primary-500" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="inline-block px-3 py-1 bg-primary-500/20 rounded-full text-primary-500 text-sm font-medium mb-3">
                      {event.type}
                    </div>
                  </div>
                </div>

                <p className="text-dark-300 mb-6">{event.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-dark-300">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dark-300">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dark-300">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">{event.discordChannel}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-dark-300">
                    <Users className="w-4 h-4 text-primary-500" />
                    <span className="text-sm">{event.participants}/{event.maxParticipants}</span>
                  </div>
                </div>

                {event.prizes && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Ödüller:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.prizes.slice(0, 3).map((prize, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded">
                          {prize}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className={`text-sm font-medium ${
                    (event.participants ?? 0) >= (event.maxParticipants ?? 0)
                      ? 'text-red-500' 
                      : 'text-green-500'
                  }`}>
                    {(event.participants ?? 0) >= (event.maxParticipants ?? 0) ? 'Dolu' : 'Yer Var'}
                  </div>
                  <Link href="/topluluk/etkinlikler" className="text-primary-500 hover:text-primary-400 text-sm font-medium">
                    Detayları Gör →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/topluluk/etkinlikler" className="btn-primary">
              Tüm Etkinlikleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Application Types */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Başvuru Türleri</h2>
            <p className="section-subtitle">
              HydRaboN ailesine katılmak için farklı alanlarda başvuru yapabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {applicationTypes.map((app) => (
              <div key={app.id} className="professional-card">
                <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                <p className="text-dark-300 mb-6">{app.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Gereksinimler:</h4>
                  <ul className="space-y-2">
                    {app.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-dark-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Süreç:</h4>
                  <p className="text-dark-300 text-sm">{app.process}</p>
                </div>

                <Link href="/topluluk/basvur" className="btn-primary w-full">
                  Başvuru Yap
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Sunucu Kuralları</h2>
            <p className="section-subtitle">
              Topluluk düzenini korumak için belirlenen temel kurallar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discordRules.map((rule) => (
              <div key={rule.id} className="professional-card">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-500 font-bold text-sm">{rule.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
                    <p className="text-dark-300 text-sm">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/topluluk/kurallar" className="btn-secondary">
              Detaylı Kuralları Oku
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
            <p className="section-subtitle">
              Topluluk hakkında merak edilen sorular ve cevapları.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqItems.slice(0, 6).map((faq) => (
                <div key={faq.id} className="professional-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                      <p className="text-dark-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/topluluk/sss" className="btn-secondary">
                Tüm Soruları Görüntüle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Topluluğumuza Katılın!
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              {communityStats.totalMembers.toLocaleString()}+ kişilik aktif topluluğumuzun bir parçası olun. 
              Etkinliklere katılın, yeni arkadaşlıklar kurun ve eğlenceli vakit geçirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer"
                 className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                Discord'a Katıl
              </a>
              <Link href="/topluluk/basvur" className="bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-indigo-800 transition-colors duration-300">
                Ekibe Başvur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 