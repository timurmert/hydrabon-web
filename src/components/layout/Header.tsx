'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  Gamepad2,
  Crosshair, 
  Code2, 
  Video, 
  Users, 
  Info, 
  Mail,
  ExternalLink,
  Globe
} from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

const getNavigation = (locale: string) => [
  {
    key: 'community',
    href: `/${locale}/topluluk`,
    icon: Users,
  },
  {
    key: 'rnd',
    href: `/${locale}/ar-ge`,
    icon: Code2,
  },
  {
    key: 'media',
    href: `/${locale}/medya`,
    icon: Video,
  },
  {
    key: 'cs2',
    href: `/${locale}/cs2`,
    icon: Crosshair,
  },
  {
    key: 'esports',
    href: `/${locale}/espor`,
    icon: Gamepad2,
  },
  {
    key: 'about',
    href: `/${locale}/hakkimizda`,
    icon: Info,
  },
  {
    key: 'contact',
    href: `/${locale}/iletisim`,
    icon: Mail,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) || 'tr';
  const t = useTranslations('nav');
  const prefersReducedMotion = useReducedMotion();

  const navigation = getNavigation(locale);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Optimized hover handlers with requestAnimationFrame for smoother performance
  const handleLogoMouseEnter = () => {
    // Only enable hover effects on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      requestAnimationFrame(() => {
        setIsLogoHovered(true);
      });
    }
  };

  const handleLogoMouseLeave = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      requestAnimationFrame(() => {
        setIsLogoHovered(false);
      });
    }
  };

  const switchLocale = (newLocale: string) => {
    // Get current path without locale
    const pathWithoutLocale = pathname.replace(/^\/(tr|en)/, '') || '/';
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-winter-400/20 shadow-lg shadow-winter-500/10'
          : 'bg-dark-950/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 border-b border-winter-500/10 md:border-transparent'
      }`}
      initial={prefersReducedMotion ? { opacity: 0 } : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={prefersReducedMotion ? { duration: 0.25, ease: 'easeOut' } : { type: 'spring', stiffness: 500, damping: 32, mass: 0.6 }}
    >
      <div className="container-header">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href={`/${locale}`}
            className="flex items-center space-x-3 group mr-6" 
            style={{outline: 'none'}} 
            onFocus={(e) => e.target.blur()}
            onMouseEnter={handleLogoMouseEnter}
            onMouseLeave={handleLogoMouseLeave}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-105 p-2 will-change-transform transform-gpu">
              <Image
                src="/logo-transparent.png"
                alt="HydRaboN Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain winter-logo"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-winter-300 via-white to-ice-crystal bg-clip-text text-transparent group-hover:from-white group-hover:via-ice-blue group-hover:to-winter-300 transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:translate-x-1 group-hover:tracking-wide group-hover:drop-shadow-[0_0_12px_rgba(136,206,235,0.5)] will-change-transform transform-gpu leading-normal">
                HydRaboN
              </h1>
              <p className="text-xs text-winter-300 font-medium transition-all duration-300 ease-out group-hover:text-white group-hover:translate-x-1 group-hover:font-semibold group-hover:tracking-wide group-hover:drop-shadow-[0_0_6px_rgba(136,206,235,0.4)] group-hover:scale-[1.02] will-change-transform transform-gpu flex items-center">
                <span className="mr-1">❄</span>
                {locale === 'tr' ? 'Çok Yönlü Dijital Topluluk' : 'Versatile Digital Community'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-4 mr-6 will-change-transform transform-gpu"
            style={{
              transform: `translateX(${isLogoHovered ? '0.25rem' : '0'})`,
              transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {navigation.map((item) => (
              <div key={item.key} className="relative group">
                <Link
                  href={item.href}
                  className={`nav-link px-5 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 ease-out whitespace-nowrap ${
                    pathname === item.href
                      ? 'text-winter-300 bg-winter-500/10 shadow-frost'
                      : 'hover:text-winter-300 hover:bg-winter-500/5'
                  }`}
                  style={{outline: 'none'}}
                  onFocus={(e) => e.target.blur()}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{t(item.key)}</span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Discord Button, Language Switcher & Mobile Menu */}
          <div 
            className="flex items-center space-x-2 sm:space-x-4 will-change-transform transform-gpu"
            style={{
              transform: `translateX(${isLogoHovered ? '0.25rem' : '0'})`,
              transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Language Switcher - Desktop - Winter Theme */}
            <div className="hidden md:flex items-center space-x-1 bg-dark-900/60 rounded-lg p-1 border border-winter-500/20 backdrop-blur-sm">
              <button
                onClick={() => switchLocale('tr')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  locale === 'tr'
                    ? 'bg-gradient-to-r from-winter-500/80 to-winter-600/80 text-white shadow-frost'
                    : 'text-dark-300 hover:text-winter-300'
                }`}
                style={{outline: 'none'}}
                onFocus={(e) => e.target.blur()}
              >
                TR
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
                  locale === 'en'
                    ? 'bg-gradient-to-r from-winter-500/80 to-winter-600/80 text-white shadow-frost'
                    : 'text-dark-300 hover:text-winter-300'
                }`}
                style={{outline: 'none'}}
                onFocus={(e) => e.target.blur()}
              >
                EN
              </button>
            </div>

            {/* Discord Button - Winter Theme */}
            <a
              href="https://discord.gg/hydrabon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 btn-winter transition-all duration-200 ease-out hover:scale-105 will-change-transform transform-gpu"
              style={{outline: 'none'}}
              onFocus={(e) => e.target.blur()}
            >
              <SiDiscord className="w-4 h-4" />
              <span>{t('discord')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-dark-300 hover:text-winter-300 transition-colors duration-200 ease-out"
              style={{outline: 'none'}}
              onFocus={(e) => e.target.blur()}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Winter Theme */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-dark-950/98 backdrop-blur-xl border-t border-winter-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-header py-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.key}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        pathname === item.href
                          ? 'text-winter-300 bg-winter-500/15 shadow-frost'
                          : 'text-dark-300 hover:text-winter-300 hover:bg-winter-500/10'
                      }`}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span className="font-medium">{t(item.key)}</span>
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Language Switcher - Mobile - Winter Theme */}
              <div className="mt-4 px-4">
                <div className="flex items-center justify-center space-x-2 bg-dark-900/60 rounded-lg p-1 border border-winter-500/20">
                  <button
                    onClick={() => switchLocale('tr')}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all duration-200 ${
                      locale === 'tr'
                        ? 'bg-gradient-to-r from-winter-500/80 to-winter-600/80 text-white shadow-frost'
                        : 'text-dark-300 hover:text-winter-300'
                    }`}
                  >
                    <Globe className="w-4 h-4 inline-block mr-1" />
                    Türkçe
                  </button>
                  <button
                    onClick={() => switchLocale('en')}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all duration-200 ${
                      locale === 'en'
                        ? 'bg-gradient-to-r from-winter-500/80 to-winter-600/80 text-white shadow-frost'
                        : 'text-dark-300 hover:text-winter-300'
                    }`}
                  >
                    <Globe className="w-4 h-4 inline-block mr-1" />
                    English
                  </button>
                </div>
              </div>

              {/* Mobile Discord Button - Winter Theme */}
              <div className="mt-6 px-4">
                <a
                  href="https://discord.gg/hydrabon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 btn-winter w-full hover:scale-105 transition-transform duration-300 transform"
                >
                  <SiDiscord className="w-4 h-4" />
                  <span>{locale === 'tr' ? 'Discord Sunucumuza Katıl' : 'Join Our Discord'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
