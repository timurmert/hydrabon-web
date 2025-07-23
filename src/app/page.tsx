import { Gamepad2, Code, Video, Users, ArrowRight, Trophy, Target, Zap, Info } from 'lucide-react';
import Link from 'next/link';

const divisions = [
  {
    title: 'Espor',
    description: 'Valorant odaklı profesyonel takım yapılanması ve espor organizasyonu. Premier League dahil olmak üzere birçok resmi turnuva ve ligde mücadele eden rekabetçi yapımız.',
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
    description: 'Teaser videolar, takım tanıtımları, topluluk içerikleri ve sosyal medya kampanyaları hazırlayan kreatif medya departmanımız.',
    icon: Video,
    href: '/medya',
    features: ['Video Prodüksiyon', 'Grafik Tasarım', 'Sosyal Medya', 'İçerik Stratejisi'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Discord Topluluğu',
    description: 'Kalabalık ve organize Discord sunucumuz. Etkinlik takibi, yetkili yönetimi, başvuru sistemleri ve aktif topluluk etkileşimi.',
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
      {/* Hero Section - Extended */}
      <section className="relative flex flex-col overflow-hidden" style={{ minHeight: '200vh' }}>
        {/* Multi-layered Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-hero" style={{ zIndex: 0 }}></div>
        
        {/* Geometric Pattern Layer */}
        <div className="absolute inset-0 geometric-pattern" style={{ zIndex: 1 }}></div>
        
        {/* Tiger Pattern Layer */}
        <div className="absolute inset-0 tiger-pattern opacity-15 animate-pulse-slow" style={{ zIndex: 2 }}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 animated-grid opacity-20" style={{ zIndex: 3 }}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0" style={{ zIndex: 4 }}>
          <div className="particle"></div>
          <div className="particle"></div>
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
        
        {/* Orbital Elements */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 6 }}>
          <div className="orbital-element" style={{ top: '30%', left: '20%', animationDuration: '12s' }}></div>
          <div className="orbital-element" style={{ top: '70%', right: '25%', animationDirection: 'reverse', animationDuration: '18s' }}></div>
          <div className="orbital-element" style={{ bottom: '30%', left: '30%', animationDuration: '15s' }}></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0" style={{ zIndex: 7 }}>
          <div className="floating-element" style={{ top: '15%', left: '10%', width: '22px', height: '22px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4), transparent)' }}></div>
          <div className="floating-element" style={{ top: '25%', right: '15%', width: '18px', height: '18px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3), transparent)' }}></div>
          <div className="floating-element" style={{ bottom: '20%', left: '20%', width: '26px', height: '26px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.35), transparent)' }}></div>
          <div className="floating-element" style={{ bottom: '35%', right: '25%', width: '20px', height: '20px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.38), transparent)' }}></div>
        </div>
        
        {/* Drift Elements */}
        <div className="absolute inset-0" style={{ zIndex: 8 }}>
          <div className="drift-element" style={{ top: '10%', left: '5%', width: '40px', height: '40px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1), transparent)', borderRadius: '50%' }}></div>
          <div className="drift-element" style={{ top: '60%', right: '10%', width: '30px', height: '30px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08), transparent)', borderRadius: '50%' }}></div>
          <div className="drift-element" style={{ bottom: '15%', left: '8%', width: '35px', height: '35px', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.09), transparent)', borderRadius: '50%' }}></div>
        </div>
        
        {/* Hero Content Section */}
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="container-custom text-center">
            <div className="max-w-5xl mx-auto">
              {/* Brand Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-500/40 rounded-full backdrop-blur-md">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">HydRaboN Community</span>
                  <div className="w-2 h-2 bg-primary-400 rounded-full ml-3 animate-pulse"></div>
                </div>
              </div>

              {/* Enhanced Title */}
              <div className="relative mb-12">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                    HydRaboN
                  </span>
                </h1>
                <div className="w-40 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-8 rounded-full"></div>
              </div>



              {/* Enhanced Description */}
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium tracking-wide">
                  Espor, teknoloji, medya ve topluluk yönetiminde 
                  <span className="text-primary-300 font-semibold"> yenilikçi çözümler </span>
                  üreten, güçlü bir simgeye ve organizasyonel yapıya sahip, 
                  <span className="text-white font-semibold"> genç ve disiplinli </span>
                  bir topluluk yapılanması.
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                <Link href="/topluluk/basvur" className="btn-primary text-base px-6 py-4 w-full sm:w-[240px] h-[56px] flex items-center justify-center group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Topluluğa Katıl
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                </Link>
                
                <Link href="/hakkimizda" className="btn-secondary text-base px-6 py-4 w-full sm:w-[240px] h-[56px] flex items-center justify-center group relative">
                  <span className="relative z-10 flex items-center justify-center">
                    Hakkımızda
                    <Info className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex justify-center mt-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full">
                  {stats.map((stat, index) => (
                    <div key={index} className="stats-card text-center group relative">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-primary-500/40 to-primary-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-primary-500/30 shadow-lg shadow-primary-500/20">
                            <stat.icon className="w-12 h-12 text-primary-300 group-hover:text-primary-200 transition-colors duration-500" />
                          </div>
                        </div>
                        
                        <div className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                          <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                            {stat.value}
                          </span>
                        </div>
                        
                        <div className="text-base md:text-lg text-dark-200 font-semibold group-hover:text-white transition-colors duration-500 tracking-wide">
                          {stat.label}
                        </div>
                        
                        {/* Enhanced decorative elements */}
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-2 h-2 bg-primary-500 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divisions Section - Now part of Hero */}
        <div className="relative z-20 py-32">
                    {/* Enhanced Section Separator */}
          <div className="container-custom mb-20">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
          </div>
          
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-20">
              {/* Section Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-primary-900/20 to-primary-800/20 border border-primary-500/30 rounded-full backdrop-blur-sm">
                  <Target className="w-4 h-4 text-primary-400 mr-2" />
                  <span className="text-primary-200 text-xs font-semibold tracking-widest uppercase">Ekosistem</span>
                </div>
              </div>

                             {/* Enhanced Section Title */}
               <div className="relative mb-8">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                   <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                     Birimlerimiz
                   </span>
                 </h2>
                 <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6 rounded-full"></div>
               </div>

               {/* Enhanced Description */}
               <div className="max-w-4xl mx-auto">
                 <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium">
                   HydRaboN&apos;un 
                   <span className="text-primary-300 font-semibold"> dört ana yapı taşını </span>
                   keşfedin. Her birim, kendi alanında 
                   <span className="text-white font-semibold"> mükemmellik standartlarını </span>
                   koruyarak topluluğumuzun gücüne katkıda bulunur ve farklı ilgi alanlarına 
                   hitap eden kapsamlı bir 
                   <span className="text-primary-300 font-semibold"> ekosistem </span>
                   oluşturur.
                 </p>
               </div>
            </div>

            {/* Enhanced Division Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {divisions.map((division, index) => (
                <div key={index} className="professional-card group relative overflow-hidden">
                  {/* Enhanced header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${division.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <division.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-primary-200 transition-colors duration-300">
                        {division.title}
                      </h3>
                      <p className="text-dark-200 leading-relaxed text-sm md:text-base font-medium">
                        {division.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced features section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-3"></div>
                      <h4 className="text-lg font-bold text-white">Temel Özellikler</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {division.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 p-2 rounded-lg bg-dark-800/30 group-hover:bg-dark-700/40 transition-colors duration-300">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-sm"></div>
                          <span className="text-dark-200 text-sm font-medium group-hover:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="flex justify-between items-center">
                    <Link 
                      href={division.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-500/40 rounded-xl text-primary-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 hover:border-primary-400 group/link"
                    >
                      Detayları Keşfet
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    {/* Status indicator */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-dark-400 font-medium">Aktif</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recognition & Achievements Section */}
            <div className="mt-32">
              {/* Section Separator */}
              <div className="container-custom mb-20">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
              </div>
              
              <div className="py-20">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-900/20 to-primary-800/20 border border-primary-500/30 rounded-full backdrop-blur-sm">
                    <Trophy className="w-4 h-4 text-primary-400 mr-2" />
                    <span className="text-primary-200 text-xs font-semibold tracking-widest uppercase">Prestij</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                    Güven ve Kalite Garantisi
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-yellow-500/20">
                    <Trophy className="w-12 h-12 text-yellow-400" />
                  </div>
                  <p className="text-yellow-400 font-bold text-xl mb-2">Premier League</p>
                  <p className="text-dark-300 text-base">Resmi Katılım</p>
                </div>

                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-blue-500/20">
                    <Zap className="w-12 h-12 text-blue-400" />
                  </div>
                  <p className="text-blue-400 font-bold text-xl mb-2">AI Destekli</p>
                  <p className="text-dark-300 text-base">Analiz Sistemi</p>
                </div>

                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-green-500/20">
                    <Target className="w-12 h-12 text-green-400" />
                  </div>
                  <p className="text-green-400 font-bold text-xl mb-2">Profesyonel</p>
                  <p className="text-dark-300 text-base">Yönetim</p>
                </div>

                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border-2 border-purple-500/20">
                    <Users className="w-12 h-12 text-purple-400" />
                  </div>
                  <p className="text-purple-400 font-bold text-xl mb-2">Aktif Topluluk</p>
                  <p className="text-dark-300 text-base">7/24 Destek</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-dark-950 relative overflow-hidden">
        {/* Background Effects for CTA Section */}
        <div className="absolute inset-0">
          <div className="floating-element" style={{ top: '15%', left: '5%', width: '20px', height: '20px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '50%' }}></div>
          <div className="floating-element" style={{ top: '25%', right: '10%', width: '15px', height: '15px', background: 'rgba(249, 115, 22, 0.12)', borderRadius: '50%' }}></div>
          <div className="floating-element" style={{ bottom: '20%', left: '8%', width: '18px', height: '18px', background: 'rgba(249, 115, 22, 0.08)', borderRadius: '50%' }}></div>
        </div>
        
        <div className="container-custom">
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 border border-primary-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Enhanced Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-primary-800/20 rounded-3xl"></div>
            <div className="absolute inset-0 geometric-pattern opacity-20 rounded-3xl"></div>
            
            {/* Internal Floating Elements */}
            <div className="absolute inset-0">
              <div className="floating-element" style={{ top: '20%', left: '10%', width: '12px', height: '12px', background: 'rgba(249, 115, 22, 0.3)', borderRadius: '50%' }}></div>
              <div className="floating-element" style={{ top: '30%', right: '15%', width: '10px', height: '10px', background: 'rgba(249, 115, 22, 0.25)', borderRadius: '50%' }}></div>
              <div className="floating-element" style={{ bottom: '25%', left: '20%', width: '14px', height: '14px', background: 'rgba(249, 115, 22, 0.28)', borderRadius: '50%' }}></div>
            </div>
            
            {/* Glowing Accent Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-md"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-600/15 to-transparent rounded-full blur-md"></div>
            <div className="relative z-10">
              {/* CTA Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-500/40 rounded-full backdrop-blur-md">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-primary-200 text-xs font-semibold tracking-widest uppercase">Son Adım</span>
                  <div className="w-2 h-2 bg-primary-400 rounded-full ml-3 animate-pulse"></div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                  Aramıza Katılmaya Hazır mısın?
                </span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-8 rounded-full"></div>
              
              <p className="text-base md:text-lg text-dark-200 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                HydRaboN ailesinin bir parçası ol. Espor, teknoloji, medya ve topluluk yönetimi 
                alanlarında yeteneklerini geliştir ve 
                <span className="text-primary-300 font-semibold"> profesyonel kariyerine </span>
                yön ver.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/topluluk/basvur" className="btn-primary text-base px-8 py-4 flex items-center justify-center min-w-[200px] group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Başvuru Yap
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                </Link>
                <Link href="/topluluk/discord" className="btn-secondary text-base px-8 py-4 flex items-center justify-center min-w-[200px] group relative">
                  <span className="relative z-10 flex items-center">
                    Discord&apos;a Katıl
                    <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
