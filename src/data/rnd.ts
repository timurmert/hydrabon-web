import { Project } from '@/types';

// Ar-Ge İstatistikleri (Manuel)
export const rndStats = {
  totalProjects: "10+",      // Toplam Proje Sayısı
  completedProjects: 11,  // Tamamlanan Proje Sayısı
  activeProjects: 4,     // Aktif Proje Sayısı
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'İnsansız Hava Aracı Sistemleri',
    description: 'Dünya çapında düzenlenen bir yarışmada 8. sırada yer alan bu insansız hava aracı projesinde, uçuşun kontrolü ve veri yönetimi için kullanılan yer istasyonu yazılımı; görev planlama, telemetri takibi ve uçuş sırasında gerçek zamanlı veri aktarımı gibi özelliklerle projeye katkı sağlamaktadır.',
    category: 'Automation Systems',
    status: 'completed',
    technologies: ['Python', 'PyQt5', 'Figma'],

    startDate: '2023-06-01',
    completionDate: '2024-02-15',
    features: [
      'Canlı telemetri izleme',
      'Görev planlama ve rota yönetimi',
      'Gerçek zamanlı veri aktarımı ve kayıt',
    ],
  },
  {
    id: '2',
    name: 'Discord Bot Sistemleri',
    description: 'Topluluk yönetimini kolaylaştırmak ve etkileşimi artırmak amacıyla moderasyon, kullanıcı takibi ve otomasyonlar gibi entegre özelliklerle Discord sunucularına kapsamlı bir çözüm sunar.',
    category: 'Discord Bot',
    status: 'completed',
    technologies: ['Python', 'MySQL'],

    startDate: '2023-03-17',
    features: [
      'Gelişmiş moderasyon ve otomasyon sistemi',
      'Otomatik yanıtlar, hatırlatıcılar ve zamanlayıcılar',
      'Etkinlik yönetimi, kullanıcı takibi ve detaylı loglama altyapısı',
    ],
  },
  {
    id: '3',
    name: 'Modern Web Çözümleri',
    description: 'Kurumsal ve topluluk odaklı platformlar için modern, hızlı ve sürdürülebilir web çözümleri sunar; UI/UX standartlarına uygun, SEO dostu ve ölçeklenebilir yapılarla projelere uzun vadeli değer kazandırır.',
    category: 'Web Application',
    status: 'completed',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Framer Motion'],

    startDate: '2025-06-10',
    completionDate: '2025-08-10',
    features: [
      'Mobil uyumlu ve yüksek performans',
      'SEO dostu yapı ve teknik optimizasyonlar',
      'Animasyonlu arayüz bileşenleri ve tema entegrasyonu',
    ],
  },
  {
    id: '4',
    name: 'AI Sohbet Botu',
    description: 'Doğal dil işleme ve makine öğrenmesi teknikleriyle tasarlanan sohbet botu; kullanıcı etkileşimlerini anlamlandırarak bağlama uygun yanıtlar sunar, görevleri otomatikleştirir ve çoklu platform desteği ile farklı senaryolara uyum sağlar.',
    category: 'AI Systems',
    status: 'planning',
    technologies: ['Python', 'OpenAI', 'TensorFlow'],

    startDate: '2025-08-10',
    features: [
      'Otomatik görev ve komut yürütme',
      'Doğal dil işleme ve makine öğrenmesi',
      'Kullanıcı etkileşimlerini anlamlandırma',
    ],
  },
];

export const technologies = [
  {
    name: 'React',
    icon: '/images/tech/react.svg', 
    category: 'Frontend',
    experience: '1+ yıl',
    projects: ['Modern Web Çözümleri'],
  },
  {
    name: 'Node.js',
    icon: '/images/tech/nodejs.svg',
    category: 'Runtime Environment',
    experience: '1+ yıl',
    projects: ['Modern Web Çözümleri'],
  },
  {
    name: 'TypeScript',
    icon: '/images/tech/typescript.svg',
    category: 'Language',
    experience: '1+ yıl',
    projects: ['Modern Web Çözümleri'],
  },
  {
    name: 'MongoDB',
    icon: '/images/tech/mongodb.svg',
    category: 'Database',
    experience: '1+ yıl',
    projects: ['Discord Bot Sistemleri'],
  },
  {
    name: 'Python',
    icon: '/images/tech/python.svg',
    category: 'Backend',
    experience: '4+ yıl',
    projects: ['Discord Bot Sistemleri'],
  },
  {
    name: 'OpenCV',
    icon: '/images/tech/opencv.svg',
    category: 'Computer Vision',
    experience: '2+ yıl',
    projects: ['İnsansız Hava Aracı Sistemleri'],
  },
  {
    name: 'Java',
    icon: '/images/tech/java.svg',
    category: 'Language',
    experience: '2+ yıl',
    projects: [],
  },
  {
    name: 'Spring Boot',
    icon: '/images/tech/springboot.svg',
    category: 'Framework',
    experience: '2+ yıl',
    projects: [],
  },
  {
    name: 'MySQL',
    icon: '/images/tech/mysql.svg',
    category: 'Database',
    experience: '3+ yıl',
    projects: ['Discord Bot Sistemleri'],
  },
  {
    name: 'Tailwind CSS',
    icon: '/images/tech/tailwindcss.svg',
    category: 'CSS Framework',
    experience: '1+ yıl',
    projects: ['Modern Web Çözümleri'],
  },
  {
    name: 'Next.js',
    icon: '/images/tech/nextjs.svg',
    category: 'Framework',
    experience: '1+ yıl',
    projects: ['Modern Web Çözümleri'],
  },
  {
    name: 'Docker',
    icon: '/images/tech/docker.svg',
    category: 'Containerization Platform',
    experience: '1+ yıl',
    projects: ['Modern Web Çözümleri'],
  },
];