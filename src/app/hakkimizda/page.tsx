'use client';

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
  Crown,
  MapPin,
  Crosshair
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    title: 'CS2 Sunucu Altyapısı',
    description: '128 tick profesyonel server',
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
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden snap-start snap-always">
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
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">Organizasyon</span>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-normal">
                <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                  Hakkımızda
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
                Profesyonel yaklaşım, disiplinli yapı ve 
                <span className="text-primary-300 font-semibold"> kaplan sembolizmini </span>
                benimseyen HydRaboN organizasyonunun 
                <span className="text-white font-semibold"> hikayesi ve değerleri</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              id="misyon"
              className="professional-card scroll-mt-110"
              style={{ scrollMarginTop: '27rem' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6 leading-normal">Misyonumuz</h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                Türkiye esports ekosisteminde profesyonel standartları yükselterek, 
                yetenekli oyuncuları desteklemek ve esports kültürünü geliştirmek.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Teknoloji ve yaratıcılığı harmanlayarak, hem oyuncularımıza hem de 
                topluluğumuza değer katan projeler geliştiririz. Disiplinli çalışma, 
                sürekli öğrenme ve takım ruhu ile esports dünyasında iz bırakırız.
              </p>
            </motion.div>

            <motion.div 
              id="vizyon"
              className="professional-card scroll-mt-110"
              style={{ scrollMarginTop: '27rem' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6 leading-normal">Vizyonumuz</h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                Türkiye&apos;nin en saygın esports organizasyonlarından biri olarak, 
                uluslararası arenada ülkemizi başarıyla temsil etmek.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Oyuncu gelişiminden teknoloji inovasyonuna, topluluk yönetiminden 
                medya prodüksiyonuna kadar her alanda mükemmelliği hedefleyerek, 
                esports&apos;ın geleceğini şekillendiren öncü organizasyon olmak.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Timeline */}
      <section id="tarihce" className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Yolculuğumuz</h2>
            <p className="section-subtitle">
              HydRaboN&apos;un kuruluşundan bugüne kadar geçirdiği önemli aşamalar.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-orange-500"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="relative flex items-start space-x-6"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-dark-800 border-4 border-primary-500 rounded-full flex items-center justify-center relative z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      >
                        <IconComponent className="w-8 h-8 text-primary-500" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="professional-card">
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl font-bold text-primary-500">{item.year}</span>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-dark-300">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Values */}
      <section id="degerler" className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Değerlerimiz</h2>
            <p className="section-subtitle">
              Organizasyonumuzun temelini oluşturan değerler ve ilkeler.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="professional-card text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-dark-300 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Başarılarımız</h2>
            <p className="section-subtitle">
              Bugüne kadar elde ettiğimiz önemli başarılar ve kilometre taşları.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="professional-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-primary-500 font-medium mb-2">{achievement.description}</p>
                <span className="text-dark-400 text-sm">{achievement.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Team Philosophy */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-8">Takım Felsefemiz</h2>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Divisions Overview */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Departmanlarımız</h2>
            <p className="section-subtitle">
              Beş ana departmanımızın her biri kendine özgü uzmanlık alanlarında faaliyet gösterir.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/espor" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Espor Mirası</h3>
              <p className="text-dark-300 mb-4">
                Valorant sahasında elde ettiğimiz tarihi başarılar, şampiyonluklar ve unutulmaz esports mirasımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/cs2" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <Crosshair className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">CS2 Sunucusu</h3>
              <p className="text-dark-300 mb-4">
                16 slot, 128 tick, anti-cheat korumalı profesyonel Counter-Strike 2 sunucumuz ve hizmetlerimiz.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/ar-ge" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Ar-Ge & Yazılım</h3>
              <p className="text-dark-300 mb-4">
                Discord botları, AI sistemleri ve web uygulamaları geliştiren teknoloji departmanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/medya" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Medya</h3>
              <p className="text-dark-300 mb-4">
                Video prodüksiyonu, grafik tasarım ve sosyal medya yönetimi yapan kreatif departmanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/topluluk" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Discord Topluluğu</h3>
              <p className="text-dark-300 mb-4">
                2500+ üyeli aktif Discord sunucumuzun yönetimini sağlayan topluluk departmanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-normal">
              Bize Katılın!
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              HydRaboN ailesinin bir parçası olmak ve esports dünyasında iz bırakmak için 
              bugün bizimle iletişime geçin.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/topluluk/basvur" className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center min-w-[160px] group">
                <span className="flex items-center">
                  Takıma Başvur
                  <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
              <Link href="/iletisim" className="bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-orange-800 transition-all duration-300 flex items-center justify-center min-w-[160px] group">
                <span className="flex items-center">
                  İletişime Geç
                  <MapPin className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}