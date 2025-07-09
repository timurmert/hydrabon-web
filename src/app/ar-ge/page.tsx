import { 
  Code, 
  Rocket, 
  Brain, 
  Zap,
  Github,
  ExternalLink,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  Target,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import { projects, technologies, teamMembers } from '@/data/rnd';

const statusColors = {
  'planning': 'bg-blue-500/20 text-blue-500',
  'development': 'bg-yellow-500/20 text-yellow-500',
  'testing': 'bg-purple-500/20 text-purple-500',
  'completed': 'bg-green-500/20 text-green-500',
  'maintenance': 'bg-gray-500/20 text-gray-500',
};

const statusLabels = {
  'planning': 'Planlama',
  'development': 'Geliştirme',
  'testing': 'Test',
  'completed': 'Tamamlandı',
  'maintenance': 'Bakım',
};

const categoryColors = {
  'Discord Bot': 'from-indigo-500 to-indigo-600',
  'Tournament System': 'from-green-500 to-green-600',
  'AI Analysis': 'from-purple-500 to-purple-600',
  'Web Application': 'from-blue-500 to-blue-600',
  'Mobile App': 'from-pink-500 to-pink-600',
};

export default function RndPage() {
  const completedProjects = projects.filter(p => p.status === 'completed');
  const activeProjects = projects.filter(p => p.status !== 'completed');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 tiger-pattern opacity-10"></div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="section-title">Ar-Ge & Yazılım</h1>
            <p className="section-subtitle">
              Discord botları, turnuva yönetim sistemleri, AI tabanlı analiz sistemleri ve 
              yazılıma dayalı organizasyon çözümleri geliştiren teknoloji merkezimiz.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="professional-card text-center">
              <Target className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{projects.length}</div>
              <div className="text-dark-300">Toplam Proje</div>
            </div>
            <div className="professional-card text-center">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{completedProjects.length}</div>
              <div className="text-dark-300">Tamamlanan</div>
            </div>
            <div className="professional-card text-center">
              <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{activeProjects.length}</div>
              <div className="text-dark-300">Aktif Proje</div>
            </div>
            <div className="professional-card text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{teamMembers.length}</div>
              <div className="text-dark-300">Geliştirici</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Öne Çıkan Projeler</h2>
            <p className="section-subtitle">
              Teknoloji ve inovasyon odaklı çözümlerimizle esports dünyasına değer katıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="professional-card group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${categoryColors[project.category]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {project.category === 'Discord Bot' && <Zap className="w-8 h-8 text-white" />}
                      {project.category === 'Tournament System' && <Target className="w-8 h-8 text-white" />}
                      {project.category === 'AI Analysis' && <Brain className="w-8 h-8 text-white" />}
                      {project.category === 'Web Application' && <Code className="w-8 h-8 text-white" />}
                      {project.category === 'Mobile App' && <Rocket className="w-8 h-8 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {project.name}
                      </h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                        {statusLabels[project.status]}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-dark-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Teknolojiler</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-dark-800 text-dark-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Özellikler</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-dark-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-dark-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/ar-ge/projeler" className="btn-primary">
              Tüm Projeleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Teknoloji Yığınımız</h2>
            <p className="section-subtitle">
              Modern ve güvenilir teknolojilerle projelerimizi hayata geçiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="professional-card text-center group">
                <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Code className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <div className="text-sm text-primary-500 mb-2">{tech.category}</div>
                <div className="text-xs text-dark-400">{tech.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Geliştirici Ekibi</h2>
            <p className="section-subtitle">
              Teknoloji alanında uzman, deneyimli ve yaratıcı ekibimizle tanışın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.slice(0, 6).map((member) => (
              <div key={member.id} className="professional-card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-500 font-medium text-sm mb-4">
                  {member.role}
                </div>
                <p className="text-dark-300 mb-4 text-sm leading-relaxed">{member.experience}</p>
                
                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-dark-800 text-dark-300 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.socialMedia.github && (
                    <a
                      href={`https://github.com/${member.socialMedia.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.socialMedia.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.socialMedia.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-800 rounded-lg text-dark-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/ar-ge/ekip" className="btn-secondary">
              Ekibin Tamamını Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 tiger-pattern opacity-5"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h2 className="section-title">İnovasyon ve Gelişim</h2>
            <p className="text-xl md:text-2xl text-dark-200 leading-relaxed mb-8">
              Sürekli öğrenen, gelişen ve 
              <span className="text-gradient font-semibold"> yenilikçi çözümler </span>
              üreten bir ekip olarak teknolojinin sınırlarını zorluyoruz.
            </p>
            <p className="text-lg text-dark-300 leading-relaxed mb-12">
              Açık kaynak projelerimizle topluma katkıda bulunurken, 
              esports dünyasında teknolojik dönüşümün öncüsü olmaya devam ediyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/ar-ge/projeler" className="btn-primary text-lg px-8 py-4">
                Projelerimizi İncele
              </Link>
              <a href="https://github.com/hydrabon" target="_blank" rel="noopener noreferrer"
                 className="btn-secondary text-lg px-8 py-4">
                GitHub'da Takip Et
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ekibimize Katılın!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Yenilikçi projeler geliştirmek, teknoloji dünyasında iz bırakmak ve 
              kariyerinizi ilerletmek için bizimle çalışın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/topluluk/basvur" className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Geliştirici Başvurusu
              </Link>
              <Link href="/ar-ge/ekip" className="bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                Ekibi Tanı
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 