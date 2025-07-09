'use client';

import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Clock,
  Twitter,
  Instagram,
  Youtube,
  Github,
  ExternalLink,
  ArrowUp,
  Heart
} from 'lucide-react';

const footerLinks = {
  organization: {
    title: 'Organizasyon',
    links: [
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'Misyonumuz', href: '/hakkimizda#misyon' },
      { name: 'Vizyonumuz', href: '/hakkimizda#vizyon' },
      { name: 'Değerlerimiz', href: '/hakkimizda#degerler' },
      { name: 'Tarihçe', href: '/hakkimizda#tarihce' },
    ],
  },
  divisions: {
    title: 'Birimlerimiz',
    links: [
      { name: 'Espor Takımı', href: '/espor' },
      { name: 'Ar-Ge & Yazılım', href: '/ar-ge' },
      { name: 'Medya Ekibi', href: '/medya' },
      { name: 'Discord Topluluğu', href: '/topluluk' },
    ],
  },
  community: {
    title: 'Topluluk',
    links: [
      { name: 'Discord Sunucusu', href: '/topluluk/discord' },
      { name: 'Etkinlikler', href: '/topluluk/etkinlikler' },
      { name: 'Başvuru Formu', href: '/topluluk/basvur' },
      { name: 'SSS', href: '/topluluk/sss' },
      { name: 'Kurallar', href: '/topluluk/kurallar' },
    ],
  },
  legal: {
    title: 'Yasal',
    links: [
      { name: 'Gizlilik Politikası', href: '/gizlilik' },
      { name: 'Kullanım Şartları', href: '/kullanim-sartlari' },
      { name: 'Çerez Politikası', href: '/cerez-politikasi' },
      { name: 'İletişim', href: '/iletisim' },
    ],
  },
};

const socialMedia = [
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
    color: 'hover:text-pink-400',
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
    color: 'hover:text-red-500',
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
    color: 'hover:text-white',
  },
];

const contactInfo = {
  email: 'info@hydrabon.com',
  address: 'Türkiye',
  hours: '7/24 Discord Desteği',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800 relative">
      {/* Tiger Pattern Background */}
      <div className="absolute inset-0 tiger-pattern opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">H</span>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-gradient">
                    HydRaboN
                  </h3>
                  <p className="text-dark-400 font-medium">
                    Professional Esports Organization
                  </p>
                </div>
              </div>
              
              <p className="text-dark-300 text-lg mb-8 leading-relaxed">
                Güçlü bir simgeye ve organizasyonel yapıya sahip, profesyonellikten 
                taviz vermeyen, genç ve disiplinli bir topluluk yapılanması.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-dark-300">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-500 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-300">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-300">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-4 mt-8">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-dark-800 rounded-lg text-dark-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-dark-700`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="text-white font-display font-semibold text-lg mb-6 relative">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-300 hover:text-primary-500 transition-colors duration-300 flex items-center group"
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-dark-800">
          <div className="container-custom py-12">
            <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-8 border border-dark-700">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h4 className="text-2xl font-display font-bold text-white mb-2">
                    Güncellemelerden Haberdar Ol
                  </h4>
                  <p className="text-dark-300">
                    Turnuva sonuçları, yeni projeler ve topluluk etkinlikleri hakkında bilgi al.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors duration-300 w-full sm:w-80"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Abone Ol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-800">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-dark-400 mb-4 md:mb-0">
                <span>© {currentYear} HydRaboN. Tüm hakları saklıdır.</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline flex items-center">
                  Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for the community
                </span>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-dark-400 hover:text-primary-500 transition-colors duration-300 group"
              >
                <span>Başa Dön</span>
                <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 