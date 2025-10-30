'use client';

import {
  Send,
  ExternalLink,
  Instagram,
  Youtube,
  Copy
} from 'lucide-react';
import { SiX, SiDiscord } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const DISCORD_INVITE_URL = "https://discord.gg/hydrabon";

const socialPlatforms = [
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@hydrabon.official',
    url: 'https://instagram.com/hydrabon.official',
    color: 'text-pink-500',
  },
  {
    icon: SiX,
    name: 'X',
    handle: '@hydrabonx',
    url: 'https://x.com/hydrabonx',
    color: 'text-sky-400',
  },
  {
    icon: Youtube,
    name: 'YouTube',
    handle: '@hydrabon',
    url: 'https://youtube.com/@hydrabon',
    color: 'text-red-500',
  },
  {
    icon: SiDiscord,
    name: 'Discord',
    handle: 'HydRaboN',
    url: 'https://discord.gg/hydrabon',
    color: 'text-indigo-400',
  },
];

export default function ContactPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'tr';
  const t = useTranslations('contact');
  
  const AREAS = [
    t('form.fields.area.options.general'),
    t('form.fields.area.options.discord'),
    t('form.fields.area.options.cs2'),
    t('form.fields.area.options.rnd'),
    t('form.fields.area.options.media'),
    t('form.fields.area.options.partnership'),
  ];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.copy-email-btn') as HTMLElement | null;
      if (btn) {
        const text = btn.getAttribute('data-copy-toast') || t('channels.email.copied');
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-dark-800 border border-dark-700 text-white px-4 py-3 rounded-lg shadow-lg z-50 opacity-0 transition-opacity duration-300 flex items-center gap-2';
        const check = document.createElement('span');
        check.innerHTML = '✓';
        check.className = 'text-green-500';
        const label = document.createElement('span');
        label.textContent = text || t('channels.email.copied');
        toast.appendChild(check);
        toast.appendChild(label);
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
          toast.classList.remove('opacity-0');
          toast.classList.add('opacity-100');
        });
        setTimeout(() => {
          toast.classList.remove('opacity-100');
          toast.classList.add('opacity-0');
          setTimeout(() => toast.remove(), 300);
        }, 2500);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [t]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    subject: '',
    message: '',
    discord: '',
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
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Submit failed');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', area: '', subject: '', message: '', discord: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <span className="text-primary-200 text-sm font-semibold tracking-wider uppercase">{t('badge')}</span>
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
                  {t('title')}
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
                {t('description.part1')}{' '}
                <span className="text-primary-300 font-semibold">{t('description.part2')}</span>
                {t('description.part3') && <>{' '}{t('description.part3')}</>}{' '}
                <span className="text-white font-semibold">{t('description.part4')}</span>.
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
              <h2 className="text-3xl font-display font-bold text-white mb-2 text-center">{t('form.title')}</h2>
              <p className="text-dark-400 mb-6">{t('form.responseTime')}</p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400">{t('form.successMessage')}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400">{t('form.errorMessage')}</p>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      {t('form.fields.name.label')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder={t('form.fields.name.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      {t('form.fields.email.label')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder={t('form.fields.email.placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="area" className="block text-white font-medium mb-2">
                    {t('form.fields.area.label')} *
                  </label>
                  <select
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">{t('form.fields.area.placeholder')}</option>
                    {AREAS.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    {t('form.fields.subject.label')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    placeholder={t('form.fields.subject.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    {t('form.fields.message.label')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder={t('form.fields.message.placeholder')}
                  />
                </div>

                <div>
                  <label htmlFor="discord" className="block text-white font-medium mb-2">
                    {t('form.fields.discord.label')}
                  </label>
                  <input
                    type="text"
                    id="discord"
                    name="discord"
                    value={formData.discord}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                    placeholder={t('form.fields.discord.placeholder')}
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
                      <span>{t('form.submit.submitting')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('form.submit.idle')}</span>
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
              <div className="professional-card hover:!scale-100 focus:!scale-100 active:!scale-100 transform-none transition-none">
                <h3 className="text-3xl font-display font-bold text-white mb-6 text-center">{t('channels.title')}</h3>
                <div className="space-y-6">
                  <div className="border border-dark-700 rounded-xl p-5 transition">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-semibold">{t('channels.discord.title')} <span className="ml-2 px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs">{t('channels.discord.badge')}</span></div>
                      <a 
                        href={DISCORD_INVITE_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onMouseDown={(e) => e.preventDefault()} 
                        onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                        className="text-primary-500 hover:text-primary-400 font-medium inline-flex items-center focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                      >
                        {t('channels.discord.link')} <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                    <div className="text-primary-500">{t('channels.discord.handle')}</div>
                    <p className="text-dark-300 text-sm">{t('channels.discord.description')}</p>
                  </div>

                  <div className="border border-dark-700 rounded-xl p-5 transition">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-semibold">{t('channels.email.title')}</div>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={(e) => {
                          navigator.clipboard.writeText('contact@hydrabon.com');
                          const btn = e.currentTarget as HTMLButtonElement;
                          btn.innerHTML = `<svg class="w-4 h-4 mr-1 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>${t('channels.email.copied')}`;
                          setTimeout(() => {
                            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>${t('channels.email.copy')}`;
                          }, 2000);
                          btn.blur();
                        }}
                        className="text-dark-300 hover:text-white inline-flex items-center text-sm focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0"
                        title={t('channels.email.copy')}
                      >
                        <Copy className="w-4 h-4 mr-1" /> {t('channels.email.copy')}
                      </button>
                    </div>
                    <div className="text-primary-500">{t('channels.email.address')}</div>
                    <p className="text-dark-300 text-sm mt-1">{t('channels.email.description')}</p>
                    <p className="text-dark-400 text-xs">{t('channels.email.responseTime')}</p>
                  </div>

                  <div className="border border-dark-700 rounded-xl p-5 transition">
                    <div className="text-white font-semibold mb-1">{t('channels.privacy.title')}</div>
                    <p className="text-dark-300 text-sm">{t('channels.privacy.description')}</p>
                  </div>
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
            <h2 className="section-title">{t('social.title')}</h2>
            <p className="section-subtitle">
              {t('social.subtitle')}
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
                      <span className="text-sm">{t('social.follow')}</span>
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
      <section className="py-12 md:py-20 bg-dark-950 snap-start snap-always min-h-screen flex items-center">
        <div className="container-custom px-4 md:px-6">
          <motion.div 
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 px-4">
              {t('discordCta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              {t('discordCta.description')}
            </p>
            <motion.div 
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >   <a href="https://discord.gg/hydrabon" target="_blank" rel="noopener noreferrer"
                 onMouseDown={(e) => e.preventDefault()} onClick={(e) => (e.currentTarget as HTMLAnchorElement).blur()}
                 className="bg-white text-indigo-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto sm:min-w-[160px] group transform focus:outline-none focus:ring-0 ring-0 outline-none focus-visible:outline-none focus-visible:ring-0">
                <span className="flex items-center whitespace-nowrap">
                  {t('discordCta.button')}
                  <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}