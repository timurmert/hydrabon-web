'use client';

import {
  Target,
  Heart,
  Users,
  Trophy,
  Shield,
  Star,
  Award,
  Crown,
  Crosshair,
  Rocket,
  Gamepad2,
  TrendingUp,
  FlaskConical,
  ExternalLink,
  HelpCircle,
  Timer,
  Code2,
  Video
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2018',
    title: 'Kuruluş',
    description: 'HydRaboN’u kurarak topluluk temellerini ve marka kimliğimizi oluşturduk.',
    icon: Star, // alternatif: Sparkles
  },
  {
    year: '2021',
    title: 'Yapılanma ve İlk Adımlar',
    description: 'Discord topluluğunu yapılandırıp büyütürken süreç, kural ve görev tanımlarını netleştirdik.',
    icon: Rocket, // MapPin yerine Rocket daha isabetli
  },
  {
    year: '2023',
    title: 'Platformlaşma: CS2 & Espor',
    description: 'İlk espor takımımızı duyurup CS2 altyapımızı devreye alarak topluluktan platforma geçişi başlattık.',
    icon: Gamepad2, // alternatif: Users veya Trophy
  },
  {
    year: '2024',
    title: 'Operasyonel Büyüme (CS2 & Espor)',
    description: 'İkinci espor takımımızı duyurup CS2 sunucularımızı ölçeklendirdik.',
    icon: TrendingUp, // Zap yerine büyümeyi vurgular
  },
  {
    year: '2025',
    title: 'Odak: Ar-Ge & Medya',
    description: 'Esporu geçici olarak pasife alıp kaynaklarımızı Ar-Ge ve Medya’ya taşıyarak ürünleşme ve düzenli içerik üretimine odaklandık.',
    icon: FlaskConical, // alternatif: Microscope veya PlayCircle (medya vurgusu)
  },
  {
    year: 'Gelecek',
    title: 'Vizyon',
    description: 'Ar-Ge çıktılarının ürünleştiği, medyada bölgesel erişimi büyüten, CS2’de örnek standartlar geliştiren ve sürdürülebilir bir modelle espora yeniden dönen uluslararası bir platform olmayı hedefliyoruz.',
    icon: HelpCircle, // soru işareti ile devam hissi
  },
]

const values = [
  {
    icon: Heart,
    title: 'Tutku',
    description: 'Oyun, topluluk ve üretime duyduğumuz tutku yaptığımız her işe yön verir.',
  },
  {
    icon: Users,
    title: 'Takım Ruhu',
    description: 'Birlikte kazanır, farklı disiplinleri tek bir amaç etrafında senkronize ederiz.',
  },
  {
    icon: Target,
    title: 'Hedef Odaklılık',
    description: 'Ölçülebilir hedefler koyar, veriye dayalı kararlarla istikrarlı ilerleriz.',
  },
  {
    icon: Trophy,
    title: 'Kalite ve Disiplin',
    description: 'Standartlarımızı sürekli yükseltir, her sürümde daha iyisini sunarız.',
  },
  {
    icon: Shield,
    title: 'Güven ve Şeffaflık',
    description: 'Sözümüzde durur, şeffaf süreçlerle topluluğa ve iş ortaklarımıza güven veririz.',
  },
  {
    icon: Timer,
    title: 'Yenilikçilik',
    description: 'Ar-Ge odağıyla yeni fikirleri hızlı deneyip etkisi kanıtlananları ölçekleriz.',
  },
];

const achievements = [
  {
    title: 'Web Platformu',
    description: 'Tüm süreçlerimizi ve alanlarımızı sizlerle paylaşmak için internet sitemizi kullanıma açtık.',
    year: '2025',
  },
  {
    title: 'Topluluk Etkinlikleri',
    description: '100+ katılımcıyla beraber, 20+ çekiliş ve etkinlik düzenledik.',
    year: '2025',
  },
  {
    title: 'Medya İçerikleri',
    description: 'YouTube’da 1.5M+ görüntülenmeye ulaşarak marka görünürlüğümüzü güçlendirdik.',
    year: '2025',
  },
  {
    title: 'Discord Topluluğu',
    description: '850+ üyeli, aktif moderasyon ve düzenli etkinliklerle büyüyen bir topluluk inşa ettik.',
    year: '2025',
  },
  {
    title: 'Operasyonel Otomasyonlar',
    description: 'Discord ve web süreçlerinde otomasyonlarla görev akışlarını hızlandırdık.',
    year: '2025',
  },
  {
    title: 'Ar-Ge Dersleri',
    description: 'Topluluğumuz için 10+ saatlik ücretsiz dersler düzenledik.',
    year: '2024',
  },
  {
    title: 'CS2 Rekabetçi Altyapı',
    description: '128 tick, düşük gecikme ve istikrar odaklı profesyonel sunucu altyapısını devreye aldık.',
    year: '2024',
  },
  {
    title: 'Valorant Premier League Şampiyonlukları',
    description: 'Tüm takımlarımızca 10\'dan fazla Playoff\'a katıldık, 2 şampiyonluk elde ettik.',
    year: '2024',
  },
];

export default function AboutPage() {
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
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">Organizasyon</span>
                <div className="w-2 h-2 bg-primary-400 rounded-full ml-3 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Enhanced Title */}
            <motion.div 
              className="relative -mt-6 md:-mt-10 pt-6 md:pt-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
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
              className="max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-dark-100 leading-relaxed">
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
      <section className="py-20 bg-dark-950 snap-start snap-always flex items-center">
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
              className="professional-card scroll-mt-20 md:scroll-mt-24"
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
              Discord topluluğu, Ar-Ge, Medya ve CS2 ekseninde adil, güvenli ve üretken bir ekosistem kurarak; veriyle desteklenen yazılım/otomasyon çözümleri ve tutarlı bir marka diliyle kalıcı değer üretmek, geçmişteki espor disiplinimizi tüm süreçlere yansıtmaktır.
              </p>
            </motion.div>

            <motion.div 
              id="vizyon"
              className="professional-card scroll-mt-20 md:scroll-mt-24"
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
              Türkiye’den doğup bölgede referans gösterilen bir platform olarak; Ar-Ge çıktılarımızı ürünleştirip ölçeklenebilir iş modelleriyle medya etkisini ve CS2 operasyon standartlarını yükseltmeyi, koşullar olgunlaştığında esporu sürdürülebilir bir programla yeniden etkinleştirerek ekosistemimizi tamamlamayı hedefliyoruz.
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
      <section id="tarihce" className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always flex items-center scroll-mt-15 md:scroll-mt-20">
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
              {/* Continuous timeline line ending near last node */}
              <div className="absolute left-8 top-0 bottom-10 w-0.5 bg-gradient-to-b from-primary-500 to-orange-500"></div>
              
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
                      <div className="relative flex-shrink-0">
                        <motion.div 
                          className="w-16 h-16 bg-dark-800 border-4 border-primary-500 rounded-full flex items-center justify-center relative z-10"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                        >
                          <IconComponent className="w-8 h-8 text-primary-500" />
                        </motion.div>
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
      <section id="degerler" className="py-20 bg-dark-950 snap-start snap-always flex items-center scroll-mt-15 md:scroll-mt-20">
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
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always flex items-center">
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
      <section className="py-20 bg-dark-950 snap-start snap-always flex items-center">
        <div className="container-custom">
            <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-8">Felsefemiz</h2>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-dark-200 leading-relaxed">
                &ldquo;Kaplan gibi güçlü, disiplinli ve kararlı bir organizasyonuz; 
                <span className="text-gradient font-semibold"> her kalıcı başarının ardında takım ruhu </span>
                ve tutarlı iş birliği olduğuna inanırız.&rdquo;
              </p>
              <p className="text-lg text-dark-300 leading-relaxed">
                Bireysel yetenekleri ölçülebilir hedeflerle takım başarısına dönüştürür; sürekli öğrenme ve gelişimi kültürümüzün temeline koyarız. 
                Profesyonellik, saygı, etik ve şeffaflık ilkelerimizden asla ödün vermeyiz.
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
            <h2 className="section-title">Alanlarımız</h2>
            <p className="section-subtitle">
              Beş ana alanımızın her biri kendi içerisinde profesyonelce faaliyet gösterir.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/topluluk" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Discord Topluluğu</h3>
              <p className="text-dark-300 mb-4">
                İletişim ağımızın kalbi, 850+ aktif üyeye sahip alanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/ar-ge" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Ar-Ge & Yazılım</h3>
              <p className="text-dark-300 mb-4">
                Discord botları, AI sistemleri ve web tabanlı otomasyonlar geliştiren alanımız.
              </p>
              <div className="text-primary-500 font-medium">Detayları görüntüle →</div>
            </Link>

            <Link href="/medya" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Medya</h3>
              <p className="text-dark-300 mb-4">
                Video prodüksiyonu, grafik tasarım ve sosyal medya yönetimi yapan kreatif alanımız.
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

            <Link href="/espor" className="professional-card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-normal">Espor Mirası</h3>
              <p className="text-dark-300 mb-4">
                Valorant sahasında elde ettiğimiz tarihi başarılar, şampiyonluklar ve unutulmaz espor mirasımız.
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
      <section className="py-12 md:py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom px-4 md:px-6">
          <motion.div 
            className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-normal px-4">
              Bize Katıl!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Topluluğumuzla bağ kur, gelişmelerden haberdar ol ve yeni fırsatları kaçırma.
            </p>
            <motion.div 
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer" onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()} className="bg-white text-orange-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] group transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0">
                <span className="flex items-center whitespace-nowrap">
                  Aramıza Katıl!
                  <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}