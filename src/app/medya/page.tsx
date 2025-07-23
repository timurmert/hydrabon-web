import { 
  Video,
  Image as ImageIcon,
  FileText,
  BarChart3,
  Play,
  Eye,
  Clock,
  Calendar,
  Users,
  TrendingUp,
  Camera,
  Edit,
  Megaphone,
  ExternalLink,
  Youtube,
  Instagram,
  Twitter
} from 'lucide-react';
import Link from 'next/link';
import { featuredContent, mediaTeam, mediaStats, contentCategories, socialMediaPlatforms } from '@/data/media';

const typeIcons = {
  'video': Video,
  'image': ImageIcon,
  'article': FileText,
  'infographic': BarChart3,
};

const categoryColors = {
  'Team Highlights': 'from-primary-500 to-primary-600',
  'Tournament Coverage': 'from-green-500 to-green-600',
  'Behind Scenes': 'from-purple-500 to-purple-600',
  'Announcements': 'from-blue-500 to-blue-600',
  'Training': 'from-orange-500 to-orange-600',
};

const roleIcons = {
  'Video Editor': Edit,
  'Graphic Designer': ImageIcon,
  'Photographer': Camera,
  'Content Creator': FileText,
  'Social Media Manager': Megaphone,
};

export default function MediaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="text-center mb-16">
            {/* Brand Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-500/40 rounded-full backdrop-blur-md">
                <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">Medya Departmanı</span>
                <div className="w-2 h-2 bg-primary-400 rounded-full ml-3 animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                  HydRaboN Medya
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium">
                Teaser videolar, takım tanıtımları, taraftar içerikleri ve 
                <span className="text-primary-300 font-semibold"> sosyal medya kampanyaları </span>
                hazırlayan 
                <span className="text-white font-semibold"> aktif medya departmanımız</span>.
              </p>
            </div>
          </div>

          {/* Media Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="professional-card text-center">
              <Video className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{mediaStats.totalVideos}</div>
              <div className="text-dark-300">Video İçerik</div>
            </div>
            <div className="professional-card text-center">
              <Eye className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{(mediaStats.totalViews / 1000).toFixed(0)}K</div>
              <div className="text-dark-300">Toplam İzlenme</div>
            </div>
            <div className="professional-card text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{(mediaStats.subscribers / 1000).toFixed(1)}K</div>
              <div className="text-dark-300">Abone</div>
            </div>
            <div className="professional-card text-center">
              <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{mediaStats.monthlyGrowth}%</div>
              <div className="text-dark-300">Aylık Büyüme</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Featured Content */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Öne Çıkan İçerikler</h2>
            <p className="section-subtitle">
              En çok izlenen ve beğenilen içeriklerimizi keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredContent.map((content) => {
              const IconComponent = typeIcons[content.type];
              return (
                <div key={content.id} className="professional-card group">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <div className="aspect-video bg-dark-700 flex items-center justify-center">
                      <div className="text-center">
                        <IconComponent className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                        <div className="text-white font-medium">{content.title}</div>
                      </div>
                    </div>
                    {content.type === 'video' && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[content.category]}`}>
                          {content.category}
                        </div>
                      </div>
                    </div>
                    <p className="text-dark-300 leading-relaxed mb-4">{content.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-dark-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(content.publishDate).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{content.views?.toLocaleString()} izlenme</span>
                      </div>
                      {content.duration && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{content.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-dark-800 text-dark-300 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={content.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors duration-300"
                  >
                    İçeriği Görüntüle
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/medya/videolar" className="btn-primary text-base px-8 py-4 flex items-center justify-center min-w-[200px] group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Tüm İçerikleri Görüntüle
                <Video className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Content Categories */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">İçerik Kategorileri</h2>
            <p className="section-subtitle">
              Çeşitli kategorilerde ürettiğimiz kaliteli içerikler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories.map((category, index) => (
              <div key={index} className="professional-card text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-dark-300 mb-4">{category.description}</p>
                <div className="text-3xl font-bold text-primary-500 mb-2">{category.count}</div>
                <div className="text-dark-400 text-sm">İçerik</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Media Team */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Medya Ekibi</h2>
            <p className="section-subtitle">
              Yaratıcı ve profesyonel medya ekibimizle tanışın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mediaTeam.map((member) => {
              const IconComponent = roleIcons[member.role];
              return (
                <div key={member.id} className="professional-card text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-500 font-medium text-sm mb-4">
                    {member.role}
                  </div>
                  <p className="text-dark-300 mb-6 text-sm leading-relaxed">{member.experience}</p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Uzmanlık Alanları</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-dark-800 text-dark-300 text-xs rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.socialMedia.youtube && (
                      <a
                        href={`https://youtube.com/${member.socialMedia.youtube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-red-500 transition-colors duration-300"
                      >
                        <Youtube className="w-4 h-4" />
                      </a>
                    )}
                    {member.socialMedia.instagram && (
                      <a
                        href={`https://instagram.com/${member.socialMedia.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-pink-500 transition-colors duration-300"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {member.socialMedia.twitter && (
                      <a
                        href={`https://twitter.com/${member.socialMedia.twitter.slice(1)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-blue-400 transition-colors duration-300"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/medya/ekip" className="btn-secondary text-base px-8 py-4 flex items-center justify-center min-w-[200px] group relative">
              <span className="relative z-10 flex items-center">
                Ekibin Tamamını Gör
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Social Media Platforms */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Sosyal Medya</h2>
            <p className="section-subtitle">
              Bizi tüm sosyal medya platformlarında takip edin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="professional-card group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${platform.color}`}>
                    {platform.followers}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-dark-300 text-sm mb-3">{platform.handle}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 text-sm font-medium">{platform.growth}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              İçeriklerimizi Takip Edin!
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              En yeni videolarımızdan haberdar olmak ve kulislerden görüntüleri kaçırmamak için 
              sosyal medya hesaplarımızı takip edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://youtube.com/@hydrabon" target="_blank" rel="noopener noreferrer"
                 className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-lg hover:bg-purple-50 transition-all duration-300 flex items-center justify-center min-w-[180px] group">
                <span className="flex items-center">
                  YouTube&apos;da Abone Ol
                  <Youtube className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
              <a href="https://instagram.com/hydrabon_esports" target="_blank" rel="noopener noreferrer"
                 className="bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-800 transition-all duration-300 flex items-center justify-center min-w-[180px] group">
                <span className="flex items-center">
                  Instagram&apos;da Takip Et
                  <Instagram className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}