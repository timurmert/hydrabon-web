'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Gamepad2, 
  Code, 
  Video, 
  Users, 
  Info, 
  Mail,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const navigation = [
  {
    name: 'Espor',
    href: '/espor',
    icon: Gamepad2,
    submenu: [
      { name: 'Takım', href: '/espor/takim' },
      { name: 'Maçlar', href: '/espor/maclar' },
      { name: 'İstatistikler', href: '/espor/istatistikler' },
      { name: 'Turnuvalar', href: '/espor/turnuvalar' },
    ],
  },
  {
    name: 'Ar-Ge',
    href: '/ar-ge',
    icon: Code,
    submenu: [
      { name: 'Projeler', href: '/ar-ge/projeler' },
      { name: 'Ekip', href: '/ar-ge/ekip' },
      { name: 'Teknolojiler', href: '/ar-ge/teknolojiler' },
    ],
  },
  {
    name: 'Medya',
    href: '/medya',
    icon: Video,
    submenu: [
      { name: 'Videolar', href: '/medya/videolar' },
      { name: 'Galeriler', href: '/medya/galeriler' },
      { name: 'Ekip', href: '/medya/ekip' },
    ],
  },
  {
    name: 'Topluluk',
    href: '/topluluk',
    icon: Users,
    submenu: [
      { name: 'Discord', href: '/topluluk/discord' },
      { name: 'Etkinlikler', href: '/topluluk/etkinlikler' },
      { name: 'Başvur', href: '/topluluk/basvur' },
    ],
  },
  {
    name: 'Hakkımızda',
    href: '/hakkimizda',
    icon: Info,
  },
  {
    name: 'İletişim',
    href: '/iletisim',
    icon: Mail,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const handleSubmenuToggle = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-custom border-b border-dark-800'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group" 
            style={{outline: 'none'}} 
            onFocus={(e) => e.target.blur()}
            onMouseEnter={handleLogoMouseEnter}
            onMouseLeave={handleLogoMouseLeave}
          >
            <div className="w-16 h-16 flex items-center justify-center transition-transform duration-200 ease-out group-hover:scale-105 p-2 will-change-transform transform-gpu">
              <Image
                src="/logo-transparent.png"
                alt="HydRaboN Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-orange-400 via-primary-500 to-orange-600 bg-clip-text text-transparent group-hover:from-primary-500 group-hover:via-orange-500 group-hover:to-orange-700 transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:translate-x-1 group-hover:tracking-wide group-hover:drop-shadow-[0_0_12px_rgba(255,107,53,0.4)] will-change-transform transform-gpu">
                HydRaboN
              </h1>
              <p className="text-xs text-orange-400 font-medium transition-all duration-300 ease-out group-hover:text-orange-300 group-hover:translate-x-1 group-hover:font-semibold group-hover:tracking-wide group-hover:drop-shadow-[0_0_6px_rgba(255,107,53,0.3)] group-hover:scale-[1.02] will-change-transform transform-gpu">
                Çok Yönlü Dijital Topluluk
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-1 will-change-transform transform-gpu"
            style={{
              transform: `translateX(${isLogoHovered ? '0.25rem' : '0'})`,
              transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`nav-link px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ease-out ${
                    pathname === item.href
                      ? 'text-primary-500 bg-primary-500/10'
                      : ''
                  }`}
                  style={{outline: 'none'}}
                  onFocus={(e) => e.target.blur()}
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => item.submenu && setActiveSubmenu(null)}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 ease-out group-hover:rotate-180 will-change-transform transform-gpu" />
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-56 bg-dark-900/95 backdrop-blur-custom border border-dark-700 rounded-xl shadow-dark-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        onMouseEnter={() => setActiveSubmenu(item.name)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        <div className="p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-dark-300 hover:text-primary-500 hover:bg-primary-500/10 rounded-lg transition-all duration-150 ease-out"
                              style={{outline: 'none'}}
                              onFocus={(e) => e.target.blur()}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Discord Button & Mobile Menu */}
          <div 
            className="flex items-center space-x-4 will-change-transform transform-gpu"
            style={{
              transform: `translateX(${isLogoHovered ? '0.25rem' : '0'})`,
              transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Discord Button */}
            <a
              href="https://discord.gg/hydrabon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 btn-primary transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 will-change-transform transform-gpu"
              style={{outline: 'none'}}
              onFocus={(e) => e.target.blur()}
            >
              <Users className="w-4 h-4" />
              <span>Discord</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-dark-300 hover:text-primary-500 transition-colors duration-200 ease-out"
              style={{outline: 'none'}}
              onFocus={(e) => e.target.blur()}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-dark-950/98 backdrop-blur-custom border-t border-dark-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-primary-500 bg-primary-500/10'
                            : 'text-dark-300 hover:text-primary-500 hover:bg-dark-800'
                        }`}
                      >
                        {item.icon && <item.icon className="w-5 h-5" />}
                        <span className="font-medium">{item.name}</span>
                      </Link>
                      {item.submenu && (
                        <button
                          onClick={() => handleSubmenuToggle(item.name)}
                          className="p-2 text-dark-400 hover:text-primary-500 transition-colors duration-300"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeSubmenu === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {item.submenu && activeSubmenu === item.name && (
                      <motion.div
                        className="ml-6 mt-2 space-y-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-dark-400 hover:text-primary-500 transition-colors duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Discord Button */}
              <div className="mt-6 px-4">
                <a
                  href="https://discord.gg/hydrabon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 btn-primary w-full"
                >
                  <Users className="w-4 h-4" />
                  <span>Discord Sunucumuza Katıl</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-dark-950/95 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsMenuOpen(false)}>
          <div className={`fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-dark-900 shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`} onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-display font-bold text-white">HydRaboN</div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-dark-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-dark-200 hover:text-white hover:bg-dark-800 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-2 px-4 text-sm text-dark-300 hover:text-white hover:bg-dark-800 rounded-lg transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-dark-700">
                <a
                  href="https://discord.gg/hydrabon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Discord&apos;a Katıl
                </a>
              </div>
            </div>
          </div>
        </div>
    </motion.header>
  );
} 