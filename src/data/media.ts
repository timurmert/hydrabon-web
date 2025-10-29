import { MediaContent } from '@/types';

export const mediaContent: MediaContent[] = [
  {
    id: '1',
    title: 'Motive, Berksan, Hande Yener - PVG X HABERİ VAR MI (Mix)',
    description: 'Motive\'nin "PVG", Berksan ve Hande Yener\'in "Haberi Var Mı" şarkılarının mix versiyonu.',
    type: 'video',
    category: 'Mix',
    url: 'https://youtu.be/jz-_YtAtsbQ',
    thumbnail: '/images/media/mix-1.jpg',
    publishDate: '2024-04-12',
    views: '300.000+',
    duration: '3:18',
    tags: ['Mix'],
    featured: true,
  },
  {
    id: '2',
    title: 'Eylem Aktaş - Yüreğimden Tut Fon Müziği [Slowed + Reverb]',
    description: 'Eylem Aktaş\'ın "Yüreğimden Tut" şarkısının slowed & reverb versiyonu.',
    type: 'video',
    category: 'Mix',
    url: 'https://youtu.be/gAXvxdqMCro',
    thumbnail: '/images/media/mix-2.jpg',
    publishDate: '2024-10-25',
    views: '100.000+',
    duration: '3:07',
    tags: ['Mix'],
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
    name: 'X',
    handle: '@hydrabonx',
    followers: '100+',
    followersText: 'Takipçi',
    url: 'https://x.com/hydrabonx',
    color: 'text-sky-400',
  },
  {
    name: 'Discord',
    handle: 'HydRaboN',
    followers: '850+',
    followersText: 'Üye',
    url: 'https://discord.gg/hydrabon',
    color: 'text-indigo-400',
  },
];