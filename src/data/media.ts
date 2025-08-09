import { MediaContent } from '@/types';

export const mediaContent: MediaContent[] = [
  {
    id: '1',
    title: 'Motive, Berksan, Hande Yener - PVG X HABERİ VAR MI (Mix)',
    description: 'Motive\'nin PVG, Berksan ve Hande Yener\'in Haberi Var Mi şarkısının mixi.',
    type: 'video',
    category: 'Announcements',
    url: 'https://youtu.be/jz-_YtAtsbQ',
    thumbnail: '/images/media/season-intro.jpg',
    publishDate: '2024-01-15',
    views: '300.000+',
    duration: '3:45',
    tags: ['Sezon', 'Tanıtım', 'Valorant', 'HydRaboN'],
    featured: true,
  },
  {
    id: '2',
    title: 'Eylem Aktaş - Yüreğimden Tut Fon Müziği [Slowed + Reverb]',
    description: 'Eylem Aktaş\'ın Yüreğimden Tut Fon Müziği şarkısının slowed + reverb versiyonu.',
    type: 'video',
    category: 'Tournament Coverage',
    url: 'https://youtu.be/gAXvxdqMCro',
    thumbnail: '/images/media/vct-highlights.jpg',
    publishDate: '2024-11-28',
    views: '18.750+',
    duration: '8:22',
    tags: ['VCT', 'Highlights', 'Final', 'Esports'],
    featured: true,
  },
];

export const featuredContent = mediaContent.filter(content => content.featured);

export const mediaStats = {
  totalVideos: "150+",
  totalViews: "1.5M+",
  subscribers: "800+",
  campaign: "10+",
  contentProduced: "150+",
};

export const socialMediaPlatforms = [
  {
    name: 'YouTube',
    handle: '@HydRaboN',
    followers: '600+',
    followersText: 'Abone',
    url: 'https://youtube.com/@hydrabon',
    color: 'text-red-500',
  },
  {
    name: 'Instagram',
    handle: '@hydrabon.official',
    followers: '100+',
    followersText: 'Takipçi',
    url: 'https://instagram.com/hydrabon.official',
    color: 'text-pink-500',
  },
  {
    name: 'Twitter',
    handle: '@hydrabonesports',
    followers: '100+',
    followersText: 'Takipçi',
    url: 'https://x.com/hydrabonesports',
    color: 'text-blue-500',
  },
  {
    name: 'Discord',
    handle: 'HydRaboN',
    followers: '850+',
    followersText: 'Üye',
    url: 'https://discord.gg/hydrabon',
    color: 'text-purple-500',
  },
];