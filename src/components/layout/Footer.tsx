'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock,
  Instagram,
  Youtube,
  ExternalLink,
  ArrowUp,
  Heart
} from 'lucide-react';
import { SiDiscord, SiSteam, SiKick, SiX } from 'react-icons/si';

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
      { name: 'Topluluğumuz', href: '/topluluk' },
      { name: 'Ar-Ge & Yazılım', href: '/ar-ge' },
      { name: 'Medya Ekibimiz', href: '/medya' },
      { name: 'CS2 Sunucumuz', href: '/cs2' },
      { name: 'Espor Takımımız', href: '/espor' },
    ],
  },
  community: {
    title: 'Topluluk',
    links: [
      { name: 'Discord Sunucumuz', href: 'https://discord.gg/hydrabon' },
      { name: 'Steam Grubumuz', href: 'https://steamcommunity.com/groups/HydRaboN' },
      { name: 'İletişim', href: '/iletisim' },
    ],
  },
  legal: {
    title: 'Yasal',
    links: [
      { name: 'Gizlilik Politikası', href: '/yasal#gizlilik' },
      { name: 'Kullanım Şartları', href: '/yasal#kullanim-sartlari' },
      { name: 'Çerez Politikası', href: '/yasal#cerez-politikasi' },
    ],
  },
};

const socialMedia = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hydrabon.official/',
    icon: Instagram,
    color: 'hover:text-pink-400 hover:shadow-pink-400/25',
    bgColor: 'hover:bg-pink-400/10',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/hydrabonx',
    icon: SiX,
    color: 'hover:text-sky-400 hover:shadow-sky-400/25',
    bgColor: 'hover:bg-sky-400/10',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@hydrabon',
    icon: Youtube,
    color: 'hover:text-red-500 hover:shadow-red-500/25',
    bgColor: 'hover:bg-red-500/10',
  },
  {
    name: 'Kick',
    href: 'https://kick.com/hydrabon',
    icon: SiKick,
    color: 'hover:text-green-400 hover:shadow-green-400/25',
    bgColor: 'hover:bg-green-400/10',
  },
  {
    name: 'Steam Community',
    href: 'https://steamcommunity.com/groups/HydRaboN',
    icon: SiSteam,
    color: 'hover:text-blue-300 hover:shadow-blue-300/25',
    bgColor: 'hover:bg-blue-300/10',
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/hydrabon',
    icon: SiDiscord,
    color: 'hover:text-indigo-400 hover:shadow-indigo-400/25',
    bgColor: 'hover:bg-indigo-400/10',
  },
];

const contactInfo = {
  email: 'contact@hydrabon.com',
  address: 'Türkiye',
  hours: '7/24 Discord Desteği',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [titleWidths, setTitleWidths] = useState<Record<string, number>>({});
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const titleRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  // Measure title widths on mount and when content changes
  useEffect(() => {
    const measureTitleWidths = () => {
      const widths: Record<string, number> = {};
      Object.entries(footerLinks).forEach(([key]) => {
        if (titleRefs.current[key]) {
          const element = titleRefs.current[key];
          if (element) {
            // Use getBoundingClientRect for more precise measurement
            const rect = element.getBoundingClientRect();
            widths[key] = Math.ceil(rect.width); // Round up to ensure full coverage
          }
        }
      });
      setTitleWidths(widths);
    };

    // Measure after fonts are loaded
    const initMeasurement = async () => {
      // Wait for fonts to load
      await document.fonts.ready;
      // Small delay to ensure layout is complete
      setTimeout(measureTitleWidths, 50);
    };

    initMeasurement();
    
    // Also measure on window resize
    const handleResize = () => {
      measureTitleWidths();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run only once

  // Optimized hover handlers
  const handleLogoMouseEnter = () => {
    // Logo hover animations are handled via CSS
  };

  const handleLogoMouseLeave = () => {
    // Logo hover animations are handled via CSS
  };

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Brand Section */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <Link 
                href="/"
                className="flex items-center space-x-3 mb-6 group w-fit"
                onMouseEnter={handleLogoMouseEnter}
                onMouseLeave={handleLogoMouseLeave}
                style={{outline: 'none'}}
                onFocus={(e) => e.target.blur()}
              >
                <div className="w-20 h-20 flex items-center justify-center p-3 transition-transform duration-200 ease-out group-hover:scale-105 will-change-transform transform-gpu">
                  <Image
                    src="/logo-transparent.png"
                    alt="HydRaboN Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-orange-400 via-primary-500 to-orange-600 bg-clip-text text-transparent group-hover:from-primary-500 group-hover:via-orange-500 group-hover:to-orange-700 transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:tracking-wide group-hover:drop-shadow-[0_0_15px_rgba(255,107,53,0.4)] will-change-transform transform-gpu leading-normal">
                    HydRaboN
                  </h3>
                  <p className="text-orange-400 font-medium transition-all duration-300 ease-out group-hover:text-orange-300 group-hover:font-semibold group-hover:tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.3)] will-change-transform transform-gpu">
                    Çok Yönlü Dijital Topluluk
                  </p>
                </div>
              </Link>
              
              <p className="text-dark-300 text-lg mb-8 leading-relaxed transition-colors duration-300 hover:text-dark-200">
                Topluluk yönetimi, teknoloji, medya ve espor alanlarında yenilikçi çözümler üreten, 
                güçlü bir simgeye ve organizasyonel yapıya sahip, genç ve disiplinli bir topluluk yapılanması.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-dark-300 group">
                  <Mail className="w-5 h-5 text-primary-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.5)] will-change-transform transform-gpu" />
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="hover:text-primary-400 transition-all duration-300 hover:tracking-wide hover:drop-shadow-[0_0_6px_rgba(255,107,53,0.3)] will-change-transform"
                    style={{outline: 'none'}}
                    onFocus={(e) => e.target.blur()}
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-300 group">
                  <MapPin className="w-5 h-5 text-primary-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.5)] will-change-transform transform-gpu" />
                  <span className="transition-colors duration-300 group-hover:text-dark-200">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-300 group">
                  <Clock className="w-5 h-5 text-primary-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.5)] will-change-transform transform-gpu" />
                  <span className="transition-colors duration-300 group-hover:text-dark-200">{contactInfo.hours}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3 mt-8 flex-wrap">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-dark-800 rounded-lg text-dark-400 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-rotate-3 will-change-transform transform-gpu`}
                    aria-label={social.name}
                    style={{outline: 'none'}}
                    onFocus={(e) => e.target.blur()}
                  >
                    <social.icon className="w-5 h-5 transition-transform duration-300 hover:scale-110 will-change-transform transform-gpu" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="min-w-[150px] break-words">
                <h4 
                  className="text-white font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6 relative group leading-tight"
                  onMouseEnter={() => {
                    if (window.matchMedia('(hover: hover)').matches) {
                      setHoveredTitle(key);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia('(hover: hover)').matches) {
                      setHoveredTitle(null);
                    }
                  }}
                >
                  <span 
                    ref={(el) => { titleRefs.current[key] = el; }}
                    className="transition-all duration-300 group-hover:text-primary-400 group-hover:tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.3)] will-change-transform"
                  >
                    {section.title}
                  </span>
                  <div 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 via-primary-500 to-orange-600 transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(255,107,53,0.6)] group-hover:from-primary-400 group-hover:via-orange-400 group-hover:to-orange-500 will-change-transform transform-gpu rounded-full"
                    style={{
                      width: hoveredTitle === key && titleWidths[key] ? `${titleWidths[key]}px` : '0px',
                      transition: 'all 0.5s ease-out'
                    }}
                  ></div>
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-300 hover:text-primary-400 transition-all duration-300 flex items-center group relative hover:translate-x-1 hover:drop-shadow-[0_0_6px_rgba(255,107,53,0.3)] will-change-transform leading-snug"
                        style={{outline: 'none'}}
                        onFocus={(e) => e.target.blur()}
                      >
                        <span className="relative z-10">{link.name}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 will-change-transform transform-gpu" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-800">
          <div className="container-custom py-12">
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-all duration-300 group hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,107,53,0.3)] will-change-transform transform-gpu bg-dark-800 hover:bg-dark-700 px-6 py-3 rounded-xl border border-dark-600 hover:border-primary-500/50"
                style={{outline: 'none'}}
                onFocus={(e) => e.target.blur()}
              >
                <span className="transition-all duration-300 group-hover:tracking-wide font-medium">Başa Dön</span>
                <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.5)] will-change-transform" />
              </button>
              
              {/* Copyright and Made with Love */}
              <div className="text-center space-y-2">
                <div className="text-dark-400 transition-all duration-300 hover:text-primary-400 hover:tracking-wide hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.3)] will-change-transform cursor-default">
                  © {currentYear} HydRaboN. Tüm hakları saklıdır.
                </div>
                <div className="flex items-center justify-center space-x-1 text-dark-400 text-sm transition-all duration-300 hover:text-dark-300 cursor-default">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] will-change-transform transform-gpu" />
                  <span>for the community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 