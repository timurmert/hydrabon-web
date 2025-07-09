import { Gamepad2, Code, Video, Users, ArrowRight, Trophy, Target, Zap } from 'lucide-react';
import Link from 'next/link';

const divisions = [
  {
    title: 'Espor',
    description: 'Özellikle Valorant odaklı profesyonel takım yapılanması. Premier League dahil olmak üzere birçok resmi turnuva ve ligde mücadele eden güçlü kadromuz.',
    icon: Gamepad2,
    href: '/espor',
    features: ['Profesyonel Takım', 'Turnuva Başarıları', 'Analiz Sistemi', 'Koçluk Desteği'],
    color: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Ar-Ge & Yazılım',
    description: 'Discord botları, turnuva yönetim sistemleri, AI tabanlı analiz sistemleri ve yazılıma dayalı organizasyon çözümleri geliştiren teknoloji merkezimiz.',
    icon: Code,
    href: '/ar-ge',
    features: ['Discord Botları', 'AI Analiz', 'Turnuva Sistemleri', 'Özel Çözümler'],
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Medya',
    description: 'Teaser videolar, takım tanıtımları, taraftar içerikleri ve sosyal medya kampanyaları hazırlayan aktif medya departmanımız.',
    icon: Video,
    href: '/medya',
    features: ['Video Prodüksiyon', 'Grafik Tasarım', 'Sosyal Medya', 'İçerik Stratejisi'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Discord Topluluğu',
    description: 'Kalabalık ve organize Discord sunucumuz. Etkinlik takibi, yetkili yönetimi, başvuru sistemleri ve kullanıcı etkileşimi.',
    icon: Users,
    href: '/topluluk',
    features: ['Aktif Topluluk', 'Etkinlikler', 'Rütbe Sistemi', '7/24 Destek'],
    color: 'from-indigo-500 to-indigo-700',
  },
];

const stats = [
  { label: 'Aktif Üye', value: '500+', icon: Users },
  { label: 'Turnuva Galibiyeti', value: '25+', icon: Trophy },
  { label: 'Proje Tamamlandı', value: '15+', icon: Target },
  { label: 'Topluluk Etkinliği', value: '100+', icon: Zap },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 tiger-pattern opacity-10"></div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">
              <span className="text-gradient">HydRaboN</span>
            </h1>
            <p className="text-2xl md:text-3xl text-dark-200 mb-6 font-medium">
              Professional Esports Organization
            </p>
            <p className="text-xl md:text-2xl text-dark-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Güçlü bir simgeye ve organizasyonel yapıya sahip, profesyonellikten taviz vermeyen, 
              genç ve disiplinli bir topluluk yapılanması.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/topluluk/basvur" className="btn-primary text-lg px-8 py-4">
                Ekibe Katıl
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/hakkimizda" className="btn-secondary text-lg px-8 py-4">
                Hakkımızda
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary-500" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-dark-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Birimlerimiz</h2>
            <p className="section-subtitle">
              HydRaboN&apos;un dört ana yapı taşını keşfedin. Her birim, kendi alanında profesyonellik 
              ve mükemmellik standartlarını koruyarak organizasyonumuzun gücüne katkıda bulunur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <div key={index} className="professional-card group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${division.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <division.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {division.title}
                    </h3>
                    <p className="text-dark-300 leading-relaxed">
                      {division.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Özellikler</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {division.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-dark-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={division.href}
                  className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors duration-300"
                >
                  Detayları Görüntüle
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 tiger-pattern opacity-5"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Misyonumuz</h2>
            <p className="text-xl md:text-2xl text-dark-200 leading-relaxed mb-8">
              HydRaboN olarak, esports sahnesinde sadece bir takım değil, 
              <span className="text-gradient font-semibold"> tam bir ekosistem </span>
              oluşturmayı hedefliyoruz.
            </p>
            <p className="text-lg text-dark-300 leading-relaxed mb-12">
              Teknoloji, medya, rekabet ve topluluk yönetimi alanlarında sürekli gelişen, 
              yenilikçi çözümler üreten ve sektörde iz bırakan bir organizasyon olmak için çalışıyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/hakkimizda" className="btn-primary text-lg px-8 py-4">
                Vizyonumuzu Keşfet
              </Link>
              <Link href="/iletisim" className="btn-secondary text-lg px-8 py-4">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Aramıza Katılmaya Hazır mısın?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              HydRaboN ailesinin bir parçası ol. Esports, teknoloji ve medya alanlarında 
              yeteneklerini geliştir ve profesyonel kariyerine yön ver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/topluluk/basvur" className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                Başvuru Yap
              </Link>
              <Link href="/topluluk/discord" className="bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-800 transition-colors duration-300">
                Discord&apos;a Katıl
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
