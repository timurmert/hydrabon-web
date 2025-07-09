import {
  Target,
  Heart,
  Users,
  Trophy,
  Zap,
  Shield,
  Star,
  Calendar,
  Award,
  Crown
} from 'lucide-react';
import Link from 'next/link';

const timeline = [
  {
    year: '2022',
    title: 'Kuruluş',
    description: 'HydRaboN organizasyonu Türkiye esports sahnesinde yer almak üzere kuruldu.',
    icon: Star,
  },
  {
    year: '2023',
    title: 'İlk Takım',
    description: 'Valorant takımımızı kurduk ve ilk resmi turnuvalara katıldık.',
    icon: Users,
  },
  {
    year: '2024',
    title: 'Büyüme',
    description: 'Ar-Ge, Medya ve Discord departmanlarımızı genişlettik.',
    icon: Zap,
  },
  {
    year: 'Gelecek',
    title: 'Vizyon',
    description: 'Türkiye\'nin en büyük esports organizasyonlarından biri olmak.',
    icon: Crown,
  },
];

const values = [
  {
    icon: Heart,
    title: 'Tutku',
    description: 'Esports\'a olan tutkumuz tüm yaptıklarımızın merkezinde yer alır.',
  },
  {
    icon: Users,
    title: 'Takım Ruhu',
    description: 'Birlik, beraberlik ve dayanışma ile güçlü bir ekip oluşturuyoruz.',
  },
  {
    icon: Target,
    title: 'Hedef Odaklılık',
    description: 'Belirlediğimiz hedeflere odaklanarak kararlı adımlarla ilerleriz.',
  },
  {
    icon: Trophy,
    title: 'Mükemmellik',
    description: 'Her alanda mükemmeliyi hedefler, sürekli gelişim için çalışırız.',
  },
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Sözümüzde durur, profesyonel yaklaşımımızla güven veririz.',
  },
  {
    icon: Zap,
    title: 'İnovasyon',
    description: 'Yenilikçi çözümlerle esports dünyasında fark yaratırız.',
  },
];

const achievements = [
  {
    title: 'VCT Turkey Challengers',
    description: 'Top 8 başarısı',
    year: '2024',
  },
  {
    title: 'Community Tournament',
    description: '15+ başarılı etkinlik',
    year: '2024',
  },
  {
    title: 'Discord Topluluğu',
    description: '2500+ aktif üye',
    year: '2024',
  },
  {
    title: 'Open Source Projeler',
    description: '5+ proje yayınlandı',
    year: '2024',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 tiger-pattern opacity-10"></div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="section-title">Hakkımızda</h1>
            <p className="section-subtitle">
              Profesyonel yaklaşım, disiplinli yapı ve kaplan sembolizmini benimseyen 
              HydRaboN organizasyonunun hikayesi ve değerleri.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="professional-card">
              <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Misyonumuz</h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                Türkiye esports ekosisteminde profesyonel standartları yükselterek, 
                yetenekli oyuncuları desteklemek ve esports kültürünü geliştirmek.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Teknoloji ve yaratıcılığı harmanlayarak, hem oyuncularımıza hem de 
                topluluğumuza değer katan projeler geliştiririz. Disiplinli çalışma, 
                sürekli öğrenme ve takım ruhu ile esports dünyasında iz bırakırız.
              </p>
            </div>

            <div className="professional-card">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Vizyonumuz</h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                Türkiye&apos;nin en saygın esports organizasyonlarından biri olarak, 
                uluslararası arenada ülkemizi başarıyla temsil etmek.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Oyuncu gelişiminden teknoloji inovasyonuna, topluluk yönetiminden 
                medya prodüksiyonuna kadar her alanda mükemmelliği hedefleyerek, 
                esports&apos;ın geleceğini şekillendiren öncü organizasyon olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Yolculuğumuz</h2>
            <p className="section-subtitle">
              HydRaboN&apos;un kuruluşundan bugüne kadar geçirdiği önemli aşamalar.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-orange-500"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="relative flex items-start space-x-6">
                      <div className="w-16 h-16 bg-dark-800 border-4 border-primary-500 rounded-full flex items-center justify-center relative z-10">
                        <IconComponent className="w-8 h-8 text-primary-500" />
                      </div>
                      <div className="flex-1">
                        <div className="professional-card">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-primary-500">{item.year}</span>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-dark-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Değerlerimiz</h2>
            <p className="section-subtitle">
              Organizasyonumuzun temelini oluşturan değerler ve ilkeler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="professional-card text-center group">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-dark-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Başarılarımız</h2>
            <p className="section-subtitle">
              Bugüne kadar elde ettiğimiz önemli başarılar ve kilometre taşları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="professional-card text-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-primary-500 font-medium mb-2">{achievement.description}</p>
                <span className="text-dark-400 text-sm">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Takım Felsefemiz</h2>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-dark-200 leading-relaxed">
                &ldquo;Kaplan gibi güçlü, disiplinli ve kararlı bir organizasyon olarak, 
                <span className="text-gradient font-semibold"> her başarının ardında takım ruhu </span>
                olduğuna inanıyoruz.&rdquo;
              </p>
              <p className="text-lg text-dark-300 leading-relaxed">
                Bireysel yetenekleri takım başarısına dönüştürürken, sürekli öğrenme ve 
                gelişim odaklı yaklaşımımızla esports dünyasında fark yaratıyoruz. 
                Profesyonellik, saygı ve fair play ilkelerimiz hiçbir zaman ödün vermediğimiz değerlerdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Departmanlarımız</h2>
            <p className="section-subtitle">
              Dört ana departmanımızın her biri kendine özgü uzmanlık alanlarında faaliyet gösterir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/espor" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Espor</h3>
              <p className="text-dark-300 mb-4">
                Profesyonel Valorant takımımız ile turnuvalarda mücadele eden rekabetçi departmanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/ar-ge" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ar-Ge & Yazılım</h3>
              <p className="text-dark-300 mb-4">
                Discord botları, AI sistemleri ve web uygulamaları geliştiren teknoloji departmanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/medya" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Medya</h3>
              <p className="text-dark-300 mb-4">
                Video prodüksiyonu, grafik tasarım ve sosyal medya yönetimi yapan kreatif departmanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/topluluk" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Discord Topluluğu</h3>
              <p className="text-dark-300 mb-4">
                2500+ üyeli aktif Discord sunucumuzun yönetimini sağlayan topluluk departmanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Bize Katılın!
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              HydRaboN ailesinin bir parçası olmak ve esports dünyasında iz bırakmak için 
              bugün bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/topluluk/basvur" className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                Takıma Başvur
              </Link>
              <Link href="/iletisim" className="bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-orange-800 transition-colors duration-300">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 