import { Player, Staff, Match } from '@/types';

// Öncü oyuncu verisi - diğer oyunculardan bağımsız tutulur
export const pioneer: Player = {
  id: 'pioneer-1',
  name: 'Eymen Satılmış',
  nickname: 'HexDurdeN',
  role: 'Oyuncu, Koç, Yönetici',
  avatar: '/images/players/hexdurden.png',
  nationality: 'TR',
  joinDate: '2021-07-01',
  stats: {
    matchesPlayed: 1316,
    wins: 655,
    losses: 661,
    winRate: 49.8,
    averageKDA: 1.17,
    averageACS: 237.7,
    rank: 'Immortal',
  },
  socialMedia: {
    twitter: '@hexdurden_', 
  },
};

export const staff: Staff[] = [
  {
    id: '1',
    name: 'Doğukan Yazıcı',
    role: 'Manager',
    bio: 'Takımın yöneticisi ve lideri. Takımın başarısına katkıda bulunan en önemli kişi.',
    experience: '5+ yıl oyun deneyimi',
    socialMedia: {
      twitter: '@HRN_EpilepSee', 
    },
  },
  {
    id: '2',
    name: 'Buğrahan Demirci',
    role: 'Coach',
    bio: 'Takımın koçu. Takımın taktik ve stratejik yönetimini sağlayan en önemli kişi.',
    experience: '3+ yıl oyun & koçluk deneyimi',
    socialMedia: {
      twitter: '@BYsm1THI',
    },
  },
  {
    id: '3',
    name: 'İsmail Haluk Aydın',
    role: 'Analyst',
    bio: 'Takımın analisti. Takımın eksiklerini görmek ve geliştirmek için çalışan en önemli kişi.',
    experience: '3+ yıl oyun & analistlik deneyimi',
    socialMedia: {
      twitter: '@is0Tvlr',
    },
  },
  {
    id: '4',
    name: 'Kaan Emre Tuğlu',
    role: 'Player',
    bio: 'Takım oyuncuları içerisinden bu zamana kadar bizimle devam eden en önemli oyuncumuz.',
    experience: '5+ yıl oyun deneyimi',
    socialMedia: {
      twitter: '@KEmretuglu19855',
    },
  },
];

export const historicalMatches: Match[] = [
  {
    id: '1',
    opponent: 'Team Çorap',
    opponentLogo: '/images/teams/teamcorap.png',
    date: '2024-11-23',
    time: '19:15',
    tournament: 'Valorant Premier League',
    type: 'Premier',
    status: 'finished',
    score: { us: 16, them: 14 },
    maps: ['Bind'],
    duration: '53dk',
    matchUrl: 'https://tracker.gg/valorant/match/0e03a4fa-ce2d-40d9-a5a5-2d4f4cd2f46c'
  },
  {
    id: '2',
    opponent: 'Team Vice City',
    opponentLogo: '/images/teams/teamvicecity.png',
    date: '2025-02-08',
    time: '21:15',
    tournament: 'Valorant Premier League',
    type: 'Premier',
    status: 'finished',
    score: { us: 13, them: 11 },
    maps: ['Lotus'],
    duration: '46dk',
    matchUrl: 'https://tracker.gg/valorant/match/65606640-2f22-40d3-b3a4-32b4a12c8b79'
  },
  {
    id: '3',
    opponent: 'Kuvayi Milliye',
    opponentLogo: '/images/teams/kuvayimilliye.png',
    date: '2024-12-15',
    time: '20:00',
    tournament: 'Valorant Premier League',
    type: 'Premier',
    status: 'finished',
    score: { us: 13, them: 5 },
    maps: ['Ascent'],
    duration: '38dk',
    matchUrl: 'https://tracker.gg/valorant/match/47306445-1f7c-44c1-ae27-f1109f8ff802'
  },
];

export const teamStats = {
  matchesPlayed: 140,
  wins: 76,
  losses: 64,
  winRate: 54.3,
  mapWinRate: 54.3,
  averageRounds: 14.2,
  tournaments: "10+",
  championships: 2,
};

export const historicalAchievements = [
  {
    id: '1',
    title: 'BtcTurk Valorant Açık Eleme #2 Turnuvası Son 16\'lar',
    description: 'Türkiye\'nin prestijli turnuvalarından BtcTurk Turnuvasında 128 takım arasından son 16\'lara kadar ilerledik.',
    date: '2025-05-22',
    category: 'Tournament',
    importance: 'high' as const,
  },
  {
    id: '2',
    title: 'Valorant Premier League Şampiyonluğu',
    description: 'Premier League\'de birinciliğimizi koruyup Playoff\'larda Şampiyonluk elde ettik.',
    date: '2024-12-15',
    category: 'Milestone',
    importance: 'high' as const,
  },
  {
    id: '3',
    title: '80% Galibiyet Oranı',
    description: 'Takım tarihimizde ilk kez 80% galibiyet oranını aştık.',
    date: '2024-08-08',
    category: 'Milestone',
    importance: 'high' as const,
  },
];