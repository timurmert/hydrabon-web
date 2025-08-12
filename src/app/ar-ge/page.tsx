'use client';

import { 
  Code, 
  Rocket, 
  Brain, 
  ExternalLink,
  Users,
  CheckCircle,
  Clock,
  Target,
  Bot
} from 'lucide-react';
import { motion } from 'framer-motion';
import { projects, technologies } from '@/data/rnd';
import { communityStats } from '@/data/community';
import Image from 'next/image';

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
  'AI Systems': 'from-purple-500 to-purple-600',
  'Web Application': 'from-blue-500 to-blue-600',
  'Mobile App': 'from-pink-500 to-pink-600',
  'Automation Systems': 'from-red-500 to-red-600',
};

export default function RndPage() {
  const completedProjects = projects.filter(p => p.status === 'completed');
  const activeProjects = projects.filter(p => p.status !== 'completed');
  const argeTeam = communityStats.roles.find((role: any) => role.name === 'Ar-Ge Ekibi');
  const developerCount = argeTeam?.memberCount || 3;

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
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">Teknoloji Merkezi</span>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                  Ar-Ge & Yazılım
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
              Web tabanlı uygulamalar, otomasyon sistemleri ve yapay zekâ destekli özel yazılım çözümleri geliştiren;
              organizasyonumuzun
                <span className="text-primary-300 font-semibold"> hem iç yapısına hem de dış projelere </span>
                teknik üretim sağlayan merkezidir.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Target, value: projects.length, label: 'Toplam Proje', color: 'text-primary-500' },
              { icon: CheckCircle, value: completedProjects.length, label: 'Tamamlanan', color: 'text-green-500' },
              { icon: Clock, value: activeProjects.length, label: 'Aktif Proje', color: 'text-yellow-500' },
              { icon: Users, value: developerCount, label: 'Geliştirici', color: 'text-blue-500' }
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

      {/* Featured Projects */}
      <section data-section="projects" className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Öne Çıkan Projeler</h2>
            <p className="section-subtitle">
            Teknoloji ve inovasyon odaklı çalışmalarımızla geleceğe yön veren çözümler üretiyoruz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="professional-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${categoryColors[project.category]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {project.category === 'Discord Bot' && <Bot className="w-8 h-8 text-white" />}
                      {project.category === 'Tournament System' && <Target className="w-8 h-8 text-white" />}
                      {project.category === 'AI Systems' && <Brain className="w-8 h-8 text-white" />}
                      {project.category === 'Web Application' && <Code className="w-8 h-8 text-white" />}
                      {project.category === 'Mobile App' && <Rocket className="w-8 h-8 text-white" />}
                      {project.category === 'Automation Systems' && <Rocket className="w-8 h-8 text-white" />}
                    </motion.div>
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


              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Teknoloji Yığınımız</h2>
            <p className="section-subtitle">
              Modern ve güvenilir teknolojilerle projelerimizi hayata geçiriyoruz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index} 
                className="professional-card text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                  {tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      width={32}
                      height={32}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <Code className="w-8 h-8 text-primary-500" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <div className="text-sm text-primary-500 mb-2">{tech.category}</div>
                <div className="text-xs text-dark-400">{tech.experience}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>



      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ar-Ge Ekibimize Katılın!
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Yenilikçi projeler üretmek, teknoloji dünyasında iz bırakmak ve kariyerinde ilerlemek istiyorsan bize katıl.
            Sürekli öğrenen, birlikte gelişen ekibimizin bir parçası ol!
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button 
                onClick={() => {
                  const projectsSection = document.querySelector('[data-section="projects"]');
                  if (projectsSection) {
                    const projectsSectionTop = projectsSection.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                      top: projectsSectionTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-primary-50 hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[180px] group transform"
              >
                <span className="flex items-center">
                  Projelerimizi Görüntüle
                  <Target className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              <a 
                href="https://discord.gg/hydrabon" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                className="bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-800 hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[180px] group transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
              >
                <span className="flex items-center">
                  Discord'a Katıl
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>


    </div>
  );
}