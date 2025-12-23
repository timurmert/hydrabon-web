'use client';

import { 
  Code2, 
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
import { projects, technologies, rndStats } from '@/data/rnd';
import { communityStats } from '@/data/community';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const statusColors = {
  'planning': 'bg-blue-500/20 text-blue-500',
  'development': 'bg-yellow-500/20 text-yellow-500',
  'testing': 'bg-purple-500/20 text-purple-500',
  'completed': 'bg-green-500/20 text-green-500',
  'maintenance': 'bg-gray-500/20 text-gray-500',
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
  useParams();
  const t = useTranslations('rnd');
  
  const argeTeam = communityStats.roles.find((role) => role.name === 'Ar-Ge Ekibi');
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

        <div className="container-custom relative z-20 pt-20 md:pt-24 lg:pt-28">
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
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-winter-900/30 to-dark-800/30 border border-winter-400/40 rounded-full backdrop-blur-md">
                <span className="text-base mr-2">❄</span>
                <span className="text-winter-200 text-sm font-semibold tracking-wider uppercase">{t('badge')}</span>
                <span className="text-base ml-2">❄</span>
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
                <span className="bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent">
                  {t('title')}
                </span>
              </h1>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost mx-auto mt-6 rounded-full"
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
                {t('description')}.
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
              { icon: Target, value: rndStats.totalProjects, labelKey: 'stats.totalProjects', color: 'text-winter-400' },
              { icon: CheckCircle, value: rndStats.completedProjects, labelKey: 'stats.completed', color: 'text-green-500' },
              { icon: Clock, value: rndStats.activeProjects, labelKey: 'stats.active', color: 'text-yellow-500' },
              { icon: Users, value: developerCount, labelKey: 'stats.developers', color: 'text-blue-500' }
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
                <div className="text-dark-300">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
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
            <h2 className="section-title">{t('projects.title')}</h2>
            <p className="section-subtitle">
              {t('projects.subtitle')}
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
                      {project.category === 'Web Application' && <Code2 className="w-8 h-8 text-white" />}
                      {project.category === 'Mobile App' && <Rocket className="w-8 h-8 text-white" />}
                      {project.category === 'Automation Systems' && <Rocket className="w-8 h-8 text-white" />}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {project.name}
                      </h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                        {t(`status.${project.status}`)}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-dark-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">{t('projects.technologiesLabel')}</h4>
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
                  <h4 className="text-sm font-semibold text-white mb-3">{t('projects.featuresLabel')}</h4>
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
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
            <h2 className="section-title">{t('technologies.title')}</h2>
            <p className="section-subtitle">
              {t('technologies.subtitle')}
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
                <div className="w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-winter-500/20 transition-colors duration-300">
                  {tech.icon ? (
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      width={32}
                      height={32}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <Code2 className="w-8 h-8 text-winter-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <div className="text-sm text-winter-400 mb-2">{tech.category}</div>
                <div className="text-xs text-dark-400">{tech.experience}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
      </div>



      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom px-4 md:px-6">
          <motion.div 
            className="bg-gradient-to-r from-winter-500 to-winter-600 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 px-4">
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-winter-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              {t('cta.description')}
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
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
                className="bg-white text-winter-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-winter-50 hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] group transform"
              >
                <span className="flex items-center whitespace-nowrap">
                  {t('cta.viewProjects')}
                  <Target className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              <a 
                href="https://discord.gg/hydrabon" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                className="bg-winter-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-winter-800 hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[180px] group transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
              >
                <span className="flex items-center whitespace-nowrap">
                  {t('cta.joinDiscord')}
                  <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost opacity-60"></div>
      </div>


    </div>
  );
}