'use client';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Github
} from 'lucide-react';
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 tiger-pattern opacity-10"></div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="section-title">İletişim</h1>
            <p className="section-subtitle">
              Bizimle iletişime geçin. Sorularınız, önerileriniz ve iş birliği 
              teklifleriniz için her zaman buradayız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="professional-card">
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
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="professional-card">
                <h3 className="text-2xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
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
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="professional-card">
                <h3 className="text-2xl font-bold text-white mb-6">Departman E-postaları</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="text-white font-semibold">{dept.name}</h4>
                      <a href={`mailto:${dept.email}`} className="text-primary-500 hover:text-primary-400 transition-colors duration-300">
                        {dept.email}
                      </a>
                      <p className="text-dark-400 text-sm">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Discord CTA */}
      <section className="py-20 bg-dark-950">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Discord Topluluğumuza Katılın!
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              En hızlı iletişim için Discord sunucumuza katılın. 2500+ aktif üye ile 
              canlı sohbetler, etkinlikler ve anlık duyurular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer"
                 className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                Discord&apos;a Katıl
              </a>
              <a href="mailto:info@hydrabon.com"
                 className="bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-indigo-800 transition-colors duration-300">
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 