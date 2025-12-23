'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Users, Send, X, CheckCircle2, AlertCircle, Sparkles, Code2, Video, Gamepad2 } from 'lucide-react';

interface FormData {
  firstName: string;
  age: string;
  discordUsername: string;
  discordUserId?: string;
  team: string;
  note: string;
}

const teams = [
  {
    id: 'discord',
    name: 'Discord',
    icon: Users,
    description: 'Topluluk Yönetimi',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'rnd',
    name: 'Ar-Ge',
    icon: Code2,
    description: 'Yazılım & Teknoloji',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'esports',
    name: 'Espor',
    icon: Gamepad2,
    description: 'Espor Takımları',
    color: 'from-winter-400 to-winter-500'
  },
  {
    id: 'media',
    name: 'Medya',
    icon: Video,
    description: 'İçerik & Tasarım',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function TeamApplicationPage() {
  const t = useTranslations('teamApplication');
  const [showDiscordModal, setShowDiscordModal] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    age: '',
    discordUsername: '',
    team: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Sayfa yüklendiğinde modal'ı göster
    const timer = setTimeout(() => {
      setShowDiscordModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => {
    setShowDiscordModal(false);
    setHasSeenModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hasSeenModal) {
      setShowDiscordModal(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Önce Discord'da kullanıcının olup olmadığını kontrol et
      const checkResponse = await fetch('/api/check-discord-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ discordUsername: formData.discordUsername }),
      });

      const checkData = await checkResponse.json();

      if (!checkData.isMember) {
        setSubmitStatus('error');
        setErrorMessage(
          t('form.notMemberError') || 
          'Discord kullanıcı adınızı doğru girdiğinizden ve sunucumuzda olduğunuzdan emin olun. Lütfen önce Discord sunucumuza katılın.'
        );
        setIsSubmitting(false);
        return;
      }

      // Kullanıcı sunucuda varsa başvuruyu gönder (Discord User ID ile birlikte)
      const response = await fetch('/api/team-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          discordUserId: checkData.userId
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Bir hata oluştu');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        age: '',
        discordUsername: '',
        team: '',
        note: ''
      });

      // 5 saniye sonra success mesajını temizle
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Başvuru gönderilirken bir hata oluştu');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" style={{ zIndex: 0 }}></div>
      <div className="absolute inset-0 geometric-pattern opacity-20" style={{ zIndex: 1 }}></div>
      <div className="absolute inset-0 tiger-pattern opacity-10 animate-pulse-slow" style={{ zIndex: 2 }}></div>

      {/* Discord Zorunluluk Modal */}
      <AnimatePresence>
        {showDiscordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-lg w-full bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-winter-400/30 rounded-3xl p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 w-10 h-10 bg-dark-700 hover:bg-dark-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-5 h-5 text-dark-300" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-winter-400 to-winter-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-white mb-4">
                {t('modal.title')}
              </h3>

              {/* Discord URL */}
              <div className="bg-dark-700/50 border border-winter-400/30 rounded-xl p-4 mb-6">
                <a
                  href="https://discord.gg/hydrabon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-winter-300 hover:text-winter-200 font-bold text-lg text-center block transition-colors duration-300"
                >
                  discord.gg/hydrabon
                </a>
              </div>

              {/* Description */}
              <p className="text-dark-200 text-center leading-relaxed mb-8">
                {t('modal.description')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://discord.gg/hydrabon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary text-center"
                  onClick={handleModalClose}
                >
                  {t('modal.joinDiscord')}
                </a>
                <button
                  onClick={handleModalClose}
                  className="flex-1 btn-secondary text-center"
                >
                  {t('modal.continue')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-winter-900/30 to-dark-800/30 border border-winter-400/40 rounded-full backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-winter-300 mr-2" />
              <span className="text-winter-200 text-xs font-bold tracking-widest uppercase">
                {t('badge')}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-winter-400 to-transparent shadow-frost mx-auto mb-6 rounded-full"></div>

            <p className="text-dark-200 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative backdrop-blur-xl bg-gradient-to-br from-dark-800/80 via-dark-900/80 to-dark-800/80 border-2 border-winter-400/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-winter-500/10"
          >
            {/* Success Message */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <p className="text-green-300 font-medium">{t('form.successMessage')}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <p className="text-red-300 font-medium">{errorMessage || t('form.errorMessage')}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Age Fields - Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                    {t('form.firstName.label')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder={t('form.firstName.placeholder')}
                    className="w-full bg-dark-700/50 border-2 border-dark-600 focus:!border-dark-600 hover:shadow-[0_0_15px_rgba(255,180,50,0.4)] focus:shadow-[0_0_20px_rgba(136,206,235,0.6)] rounded-xl px-4 py-3 text-white placeholder-dark-400 transition-all duration-300 outline-none focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Age Field */}
                <div>
                  <label htmlFor="age" className="block text-white font-semibold mb-2">
                    {t('form.age.label')} <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-dark-700/50 border-2 border-dark-600 focus:!border-dark-600 hover:shadow-[0_0_15px_rgba(255,180,50,0.4)] focus:shadow-[0_0_20px_rgba(136,206,235,0.6)] rounded-xl px-4 py-3 text-white transition-all duration-300 outline-none focus:outline-none focus:ring-0 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="" disabled className="bg-dark-800">
                      {t('form.age.placeholder')}
                    </option>
                    {Array.from({ length: 48 }, (_, i) => i + 13).map((age) => (
                      <option key={age} value={age} className="bg-dark-800">
                        {age}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Discord Username Field */}
              <div>
                <label htmlFor="discordUsername" className="block text-white font-semibold mb-2">
                  {t('form.discord.label')} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="discordUsername"
                  name="discordUsername"
                  value={formData.discordUsername}
                  onChange={handleInputChange}
                  required
                  placeholder={t('form.discord.placeholder')}
                  className="w-full bg-dark-700/50 border-2 border-dark-600 focus:!border-dark-600 hover:shadow-[0_0_15px_rgba(255,180,50,0.4)] focus:shadow-[0_0_20px_rgba(136,206,235,0.6)] rounded-xl px-4 py-3 text-white placeholder-dark-400 transition-all duration-300 outline-none focus:outline-none focus:ring-0"
                />
              </div>

              {/* Team Selection */}
              <div>
                <label htmlFor="team" className="block text-white font-semibold mb-3">
                  {t('form.team.label')} <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {teams.map((team) => {
                    const TeamIcon = team.icon;
                    return (
                      <motion.label
                        key={team.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative cursor-pointer group ${
                          formData.team === team.id
                            ? 'bg-gradient-to-r ' + team.color
                            : 'bg-dark-700/30'
                        } border-2 ${
                          formData.team === team.id
                            ? 'border-white'
                            : 'border-dark-600 hover:border-winter-400/50'
                        } rounded-xl p-4 transition-all duration-300`}
                      >
                        <input
                          type="radio"
                          name="team"
                          value={team.id}
                          checked={formData.team === team.id}
                          onChange={handleInputChange}
                          required
                          className="sr-only"
                        />
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center">
                            <TeamIcon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white">{team.name}</h3>
                            <p className="text-sm text-dark-300">{team.description}</p>
                          </div>
                        </div>
                      </motion.label>
                    );
                  })}
                </div>
              </div>

              {/* Note Field */}
              <div>
                <label htmlFor="note" className="block text-white font-semibold mb-2">
                  {t('form.note.label')} <span className="text-dark-400 text-sm font-normal">({t('form.note.optional')})</span>
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder={t('form.note.placeholder')}
                  className="w-full bg-dark-700/50 border-2 border-dark-600 focus:!border-dark-600 hover:shadow-[0_0_15px_rgba(255,180,50,0.4)] focus:shadow-[0_0_20px_rgba(136,206,235,0.6)] rounded-xl px-4 py-3 text-white placeholder-dark-400 transition-all duration-300 outline-none focus:outline-none focus:ring-0 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t('form.submitting')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('form.submit')}
                  </>
                )}
              </motion.button>

              {/* Info Text */}
              <p className="text-dark-400 text-sm text-center">
                {t('form.infoText')}
              </p>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-dark-300 text-sm">
              {t('footer.text')}{' '}
              <a
                href="https://discord.gg/hydrabon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-winter-300 hover:text-winter-200 font-semibold transition-colors duration-300"
              >
                Discord
              </a>
              {' '}{t('footer.contact')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

