'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle, Sparkles, ShieldCheck, ArrowLeft } from 'lucide-react';

interface FormData {
  firstName: string;
  age: string;
  githubLink: string;
  linkedinLink: string;
  weeklyHours: string;
  motivation: string;
}

type Step = 'discord-check' | 'form' | 'success';

export default function ArgeApplicationPage() {
  const t = useTranslations('argeApplication');

  const [step, setStep] = useState<Step>('discord-check');
  const [discordUsername, setDiscordUsername] = useState('');
  const [discordUserId, setDiscordUserId] = useState('');
  const [discordAvatarUrl, setDiscordAvatarUrl] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    age: '',
    githubLink: '',
    linkedinLink: '',
    weeklyHours: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleDiscordVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!discordUsername.trim()) return;

    setIsVerifying(true);
    setVerifyError('');

    try {
      const res = await fetch('/api/check-discord-member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ discordUsername: discordUsername.trim() }),
      });

      const data = await res.json();

      if (data.isMember) {
        setDiscordUserId(data.userId || '');
        setDiscordAvatarUrl(data.avatarUrl || '');
        setStep('form');
      } else {
        setVerifyError(t('discordCheck.notMemberError'));
      }
    } catch {
      setVerifyError(t('discordCheck.notMemberError'));
    } finally {
      setIsVerifying(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/arge-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          discordUsername,
          discordUserId,
          discordAvatarUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Bir hata oluştu');
      }

      setStep('success');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : t('form.errorMessage'));
      setTimeout(() => setSubmitError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-dark-700/50 border-2 border-dark-600 focus:!border-dark-600 hover:shadow-[0_0_15px_rgba(255,180,50,0.4)] focus:shadow-[0_0_20px_rgba(255,180,50,0.6)] rounded-xl px-4 py-3 text-white placeholder-dark-400 transition-all duration-300 outline-none focus:outline-none focus:ring-0";

  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" style={{ zIndex: 0 }}></div>
      <div className="absolute inset-0 geometric-pattern opacity-20" style={{ zIndex: 1 }}></div>
      <div className="absolute inset-0 tiger-pattern opacity-10 animate-pulse-slow" style={{ zIndex: 2 }}></div>

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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-900/30 to-primary-800/30 border border-primary-500/40 rounded-full backdrop-blur-md mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-400 mr-2" />
              <span className="text-primary-200 text-xs font-bold tracking-widest uppercase">
                {t('badge')}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mb-6 rounded-full"></div>

            <p className="text-dark-200 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Discord Verification */}
            {step === 'discord-check' && (
              <motion.div
                key="discord-check"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative backdrop-blur-xl bg-gradient-to-br from-dark-800/80 via-dark-900/80 to-dark-800/80 border-2 border-primary-500/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-xl mx-auto"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h2 className="text-2xl font-display font-bold text-white text-center mb-3">
                  {t('discordCheck.title')}
                </h2>
                <p className="text-dark-300 text-center mb-8 leading-relaxed">
                  {t('discordCheck.description')}
                </p>

                <form onSubmit={handleDiscordVerify} className="space-y-4">
                  <div>
                    <label htmlFor="discordUsername" className="block text-white font-semibold mb-2">
                      Discord <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="discordUsername"
                      value={discordUsername}
                      onChange={(e) => setDiscordUsername(e.target.value)}
                      required
                      placeholder={t('discordCheck.placeholder')}
                      className={inputClass}
                    />
                  </div>

                  {verifyError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-300 text-sm">{verifyError}</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isVerifying || !discordUsername.trim()}
                    whileHover={!isVerifying ? { scale: 1.02 } : {}}
                    whileTap={!isVerifying ? { scale: 0.98 } : {}}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isVerifying ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t('discordCheck.verifying')}
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5" />
                        {t('discordCheck.verify')}
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-dark-400 text-sm mb-2">{t('discordCheck.joinPrompt')}</p>
                  <a
                    href="https://discord.gg/hydrabon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 font-semibold text-sm transition-colors duration-300"
                  >
                    {t('discordCheck.joinDiscord')} →
                  </a>
                </div>
              </motion.div>
            )}

            {/* Step 2: Application Form */}
            {step === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative backdrop-blur-xl bg-gradient-to-br from-dark-800/80 via-dark-900/80 to-dark-800/80 border-2 border-primary-500/20 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                {/* Verified Discord Badge */}
                <div className="flex items-center justify-between mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-green-300 text-sm font-medium">{t('form.verifiedAs')}</p>
                      <p className="text-white font-bold">{discordUsername}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setStep('discord-check'); setVerifyError(''); }}
                    className="text-dark-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t('form.changeUser')}
                  </button>
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center gap-3"
                    >
                      <AlertCircle className="w-6 h-6 text-red-400" />
                      <p className="text-red-300 font-medium">{submitError}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Age */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className={inputClass}
                      />
                    </div>

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
                        className={`${inputClass} appearance-none cursor-pointer`}
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

                  {/* GitHub and LinkedIn */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="githubLink" className="block text-white font-semibold mb-2">
                        {t('form.github.label')} <span className="text-dark-400 text-sm font-normal">({t('form.optionalField')})</span>
                      </label>
                      <input
                        type="url"
                        id="githubLink"
                        name="githubLink"
                        value={formData.githubLink}
                        onChange={handleInputChange}
                        placeholder={t('form.github.placeholder')}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="linkedinLink" className="block text-white font-semibold mb-2">
                        {t('form.linkedin.label')} <span className="text-dark-400 text-sm font-normal">({t('form.optionalField')})</span>
                      </label>
                      <input
                        type="url"
                        id="linkedinLink"
                        name="linkedinLink"
                        value={formData.linkedinLink}
                        onChange={handleInputChange}
                        placeholder={t('form.linkedin.placeholder')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Weekly Hours */}
                  <div>
                    <label htmlFor="weeklyHours" className="block text-white font-semibold mb-2">
                      {t('form.weeklyHours.label')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="weeklyHours"
                      name="weeklyHours"
                      value={formData.weeklyHours}
                      onChange={handleInputChange}
                      required
                      placeholder={t('form.weeklyHours.placeholder')}
                      className={inputClass}
                    />
                  </div>

                  {/* Motivation */}
                  <div>
                    <label htmlFor="motivation" className="block text-white font-semibold mb-2">
                      {t('form.motivation.label')} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder={t('form.motivation.placeholder')}
                      className={`${inputClass} resize-none`}
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

                  <p className="text-dark-400 text-sm text-center">
                    {t('form.infoText')}
                  </p>
                </form>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative backdrop-blur-xl bg-gradient-to-br from-dark-800/80 via-dark-900/80 to-dark-800/80 border-2 border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-xl mx-auto text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  {t('success.title')}
                </h2>
                <p className="text-dark-200 leading-relaxed mb-8">
                  {t('success.message')}
                </p>

                <a href="/" className="btn-primary inline-flex items-center gap-2">
                  {t('success.backHome')}
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
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
                className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300"
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
