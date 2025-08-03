'use client';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Github
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'E-posta',
    details: ['info@hydrabon.com', 'management@hydrabon.com'],
    description: 'Genel sorular ve iş birliği teklifleri',
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: ['+90 (212) 555 0123'],
    description: 'Acil durumlar ve resmi konular',
  },
  {
    icon: MapPin,
    title: 'Adres',
    details: ['İstanbul, Türkiye'],
    description: 'Merkez ofisimiz',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 10:00 - 16:00'],
    description: 'Destek saatleri',
  },
];

const socialPlatforms = [
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@hydrabon_esports',
    url: 'https://instagram.com/hydrabon_esports',
    color: 'text-pink-500',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    handle: '@HydRaboN_',
    url: 'https://twitter.com/hydrabon_',
    color: 'text-blue-500',
  },
  {
    icon: Youtube,
    name: 'YouTube',
    handle: '@HydRaboNOfficial',
    url: 'https://youtube.com/@hydrabon',
    color: 'text-red-500',
  },
  {
    icon: Github,
    name: 'GitHub',
    handle: '@hydrabon',
    url: 'https://github.com/hydrabon',
    color: 'text-gray-400',
  },
];

const departments = [
  {
    name: 'Espor Takımı',
    email: 'esports@hydrabon.com',
    description: 'Takım başvuruları ve sponsorluk',
  },
  {
    name: 'Ar-Ge & Yazılım',
    email: 'dev@hydrabon.com',
    description: 'Teknik projeler ve geliştirici başvuruları',
  },
  {
    name: 'Medya',
    email: 'media@hydrabon.com',
    description: 'İçerik üretimi ve medya iş birliği',
  },
  {
    name: 'Discord Yönetimi',
    email: 'community@hydrabon.com',
    description: 'Topluluk yönetimi ve moderatör başvuruları',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', department: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
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
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">İletişim</span>
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
                  İletişim
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
                Bizimle iletişime geçin. Sorularınız, önerileriniz ve 
                <span className="text-primary-300 font-semibold"> iş birliği teklifleriniz </span>
                için 
                <span className="text-white font-semibold"> her zaman buradayız</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Form */}
            <motion.div 
              className="professional-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-8">Bize Mesaj Gönderin</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400">Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="department" className="block text-white font-medium mb-2">
                    Departman
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Departman seçin</option>
                    <option value="genel">Genel Sorular</option>
                    <option value="esports">Espor Takımı</option>
                    <option value="development">Ar-Ge & Yazılım</option>
                    <option value="media">Medya</option>
                    <option value="community">Discord Topluluğu</option>
                    <option value="sponsorship">Sponsorluk</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Konu *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-dark-700 text-dark-400 cursor-not-allowed'
                      : 'bg-primary-500 hover:bg-primary-600 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-dark-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Mesaj Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="professional-card">
                <h3 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-dark-200 mb-1">{detail}</p>
                          ))}
                          <p className="text-dark-400 text-sm">{info.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="professional-card">
                <h3 className="text-2xl font-bold text-white mb-6">Departman E-postaları</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <motion.div 
                      key={index} 
                      className="border-l-4 border-primary-500 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h4 className="text-white font-semibold">{dept.name}</h4>
                      <a href={`mailto:${dept.email}`} className="text-primary-500 hover:text-primary-400 transition-colors duration-300">
                        {dept.email}
                      </a>
                      <p className="text-dark-400 text-sm">{dept.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Sosyal Medya</h2>
            <p className="section-subtitle">
              Bizi sosyal medya platformlarında takip edin ve güncel kalın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="professional-card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-dark-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-dark-600 transition-colors duration-300`}>
                      <IconComponent className={`w-8 h-8 ${platform.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                    <p className={`text-sm ${platform.color} mb-3`}>{platform.handle}</p>
                    <div className="flex items-center justify-center space-x-2 text-dark-400 group-hover:text-white transition-colors duration-300">
                      <span className="text-sm">Takip Et</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="container-custom">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>
      </div>

      {/* Discord CTA */}
      <section className="py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Discord Topluluğumuza Katılın!
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              En hızlı iletişim için Discord sunucumuza katılın. 2500+ aktif üye ile 
              canlı sohbetler, etkinlikler ve anlık duyurular.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer"
                 className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[160px] group transform">
                <span className="flex items-center">
                  Discord&apos;a Katıl
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a href="mailto:info@hydrabon.com"
                 className="bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-indigo-800 transition-all duration-300 flex items-center justify-center min-w-[160px] group">
                <span className="flex items-center">
                  E-posta Gönder
                  <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}