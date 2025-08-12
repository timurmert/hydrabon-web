'use client';

import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        <div className="absolute inset-0 bg-gradient-hero" style={{ zIndex: 0 }}></div>
        <div className="absolute inset-0 geometric-pattern" style={{ zIndex: 1 }}></div>
        <div className="absolute inset-0 tiger-pattern opacity-15 animate-pulse-slow" style={{ zIndex: 2 }}></div>
        <div className="absolute inset-0 animated-grid opacity-20" style={{ zIndex: 3 }}></div>

        <div className="container-custom relative z-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary-300 via-white to-primary-300 bg-clip-text text-transparent">
                Yasal Bilgiler
              </span>
            </h1>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            <p className="text-base md:text-lg text-dark-100 leading-relaxed font-medium mt-6">
              Tüm yasal metinlerimizi tek bir sayfada topladık. Aşağıdaki başlıklardan ilgili metni görüntüleyebilirsiniz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            <motion.article id="gizlilik" className="professional-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Gizlilik Politikası</h2>
              <p className="text-dark-300 leading-relaxed">
                Bu Gizlilik Politikası, HydRaboN tarafından sunulan hizmetlerde kişisel verilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar. Kullanıcı verileri, hizmet kalitesini artırmak, güvenliği sağlamak ve yasal yükümlülüklerimizi yerine getirmek amacıyla işlenir. Kullanıcılar, talep etmeleri halinde verilerine erişim, düzeltme ve silme haklarına sahiptir.
              </p>
            </motion.article>

            <motion.article id="kullanim-sartlari" className="professional-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Kullanım Şartları</h2>
              <p className="text-dark-300 leading-relaxed">
                Bu platformu kullanarak topluluk kurallarına ve geçerli mevzuata uygun davranmayı kabul etmiş olursunuz. Platform üzerinde paylaşılan içerikler, telif ve lisans haklarına tabidir. Hizmetlerde yapılan değişiklikler, bakım çalışmaları veya topluluk güvenliği için gerekli durumlarda erişim kısıtlanabilir.
              </p>
            </motion.article>

            <motion.article id="cerez-politikasi" className="professional-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Çerez Politikası</h2>
              <p className="text-dark-300 leading-relaxed">
                Çerezler, kullanıcı deneyimini geliştirmek ve istatistiksel analizler için kullanılmaktadır. Zorunlu çerezler, platformun çalışması için gereklidir. Tercih çerezleri kullanıcı ayarlarını hatırlamak; performans ve analitik çerezler kullanım alışkanlıklarını analiz etmek; hedefleme çerezleri ise kişiselleştirilmiş içerik sunmak için kullanılır. Tarayıcı ayarlarından çerez tercihlerinizi yönetebilirsiniz.
              </p>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
}


