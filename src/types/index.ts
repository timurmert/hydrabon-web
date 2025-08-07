// Ana organizasyon türleri
export interface Organization {
  name: string;
  logo: string;
  description: string;
  foundedYear: number;
  mission: string;
  vision: string;
  values: string[];
}

// Espor takımı türleri
export interface Player {
  id: string;
  name: string;
  nickname: string;
  role: 'Duelist' | 'Initiator' | 'Controller' | 'Sentinel' | 'IGL';
  avatar: string;
  age: number;
  nationality: string;
  joinDate: string;
  stats: PlayerStats;
  socialMedia: SocialMedia;
}

export interface PlayerStats {
  matchesPlayed: number;
  wins: number;
  losses: number;
  winRate: number;
  averageKDA: number;
  averageACS: number;
  rank: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'Coach' | 'Manager' | 'Analyst' | 'Mental Coach';
  avatar: string;
  bio: string;
  experience: string;
  socialMedia: SocialMedia;
}

export interface Match {
  id: string;
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  tournament: string;
  type: 'Premier' | 'VCT' | 'Scrim' | 'Tournament';
  status: 'upcoming' | 'live' | 'finished';
  score?: {
    us: number;
    them: number;
  };
  maps?: string[];
  stream?: string;
}

export interface Tournament {
  id: string;
  name: string;
  logo: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'finished';
  placement?: number;
  prizePool?: string;
  format: string;
}

// Ar-Ge & Yazılım türleri
export interface Project {
  id: string;
  name: string;
  description: string;
  category: 'Discord Bot' | 'Tournament System' | 'AI Analysis' | 'Web Application' | 'Mobile App';
  status: 'planning' | 'development' | 'testing' | 'completed' | 'maintenance';
  technologies: string[];
  startDate: string;
  completionDate?: string;
  githubUrl?: string;
  demoUrl?: string;
  images: string[];
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Lead Developer' | 'Frontend Developer' | 'Backend Developer' | 'UI/UX Designer' | 'DevOps Engineer' | 'Quality Assurance';
  avatar: string;
  skills: string[];
  experience: string;
  socialMedia: SocialMedia;
}

// Medya türleri
export interface MediaContent {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'image' | 'article' | 'infographic';
  category: 'Team Highlights' | 'Tournament Coverage' | 'Behind Scenes' | 'Announcements' | 'Training';
  url: string;
  thumbnail: string;
  publishDate: string;
  views?: number;
  duration?: string; // For videos
  tags: string[];
  featured: boolean;
}

export interface MediaTeam {
  id: string;
  name: string;
  role: 'Video Editor' | 'Graphic Designer' | 'Photographer' | 'Content Creator' | 'Social Media Manager';
  avatar: string;
  portfolio: string[];
  specialties: string[];
  experience: string;
  socialMedia: SocialMedia;
}

// Discord topluluk türleri
export interface CommunityStats {
  totalMembers: number | string;
  onlineMembers: number | string;
  boostLevel: number;
  boostCount: number;
  roles: DiscordRole[];
  channels: DiscordChannel[];
}

export interface DiscordRole {
  id: string;
  name: string;
  color: string;
  memberCount: number;
  permissions: string[];
  requirements?: string;
}

export interface DiscordChannel {
  id: string;
  name: string;
  type: 'text' | 'voice' | 'category' | 'forum';
  description: string;
  memberCount?: number;
}





// Genel yardımcı türler
export interface SocialMedia {
  twitter?: string;
  instagram?: string;
  discord?: string;
  twitch?: string;
  youtube?: string;
  linkedin?: string;
  github?: string;
  flickr?: string;
  dribbble?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  businessHours: string;
  responseTime: string;
}

export interface News {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'Esports' | 'Development' | 'Media' | 'Community' | 'General';
  author: string;
  publishDate: string;
  image: string;
  tags: string[];
  featured: boolean;
  views: number;
}

export interface Partnership {
  id: string;
  name: string;
  logo: string;
  type: 'Sponsor' | 'Technology Partner' | 'Media Partner' | 'Community Partner';
  description: string;
  website: string;
  since: string;
  status: 'active' | 'inactive';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'Tournament' | 'Recognition' | 'Milestone' | 'Award';
  date: string;
  image?: string;
  importance: 'high' | 'medium' | 'low';
}

// API Response türleri
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// Form türleri
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  department: 'General' | 'Esports' | 'Development' | 'Media' | 'Community';
}

export interface JoinForm {
  personalInfo: {
    name: string;
    email: string;
    age: number;
    country: string;
    timezone: string;
  };
  gameInfo?: {
    rank: string;
    role: string;
    experience: string;
    hoursPerWeek: number;
  };
  motivation: string;
  availability: string[];
  portfolio?: string;
  socialMedia: SocialMedia;
}

// Component Props türleri
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CardProps extends ComponentProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  variant?: 'default' | 'featured' | 'minimal';
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// CS2 Server türleri
export interface CS2Server {
  id: string;
  name: string;
  ip: string;
  port: number;
  currentMap: string;
  gameMode: string;
  maxPlayers: number;
  currentPlayers: number;
  status: 'online' | 'offline' | 'maintenance';
  region: string;
  tickrate: number;
  anticheat: string;
  password?: boolean;
}

export interface CS2Map {
  id: string;
  name: string;
  displayName: string;
  type: 'Competitive' | 'Casual' | 'Deathmatch' | 'Arms Race' | 'Custom';
  image: string;
  description: string;
  playCount: number;
  averageRating: number;
  lastPlayed?: string;
}

export interface CS2GameMode {
  id: string;
  name: string;
  description: string;
  icon: string;
  playerCount: string;
  duration: string;
  features: string[];
  available: boolean;
}

export interface CS2PlayerStats {
  steamId: string;
  nickname: string;
  avatar: string;
  rank?: string;
  hoursPlayed: number;
  kills: number;
  deaths: number;
  assists: number;
  kdr: number;
  headshots: number;
  headshotPercentage: number;
  matchesWon: number;
  matchesLost: number;
  winRate: number;
  favoriteWeapon: string;
  favoriteMap: string;
  lastSeen: string;
}

export interface CS2ServerStats {
  totalPlaytime: number;
  totalMatches: number;
  totalKills: number;
  averagePlayers: number;
  peakPlayers: number;
  popularMaps: string[];
  activePlayerCount: number;
  registeredPlayers: number;
}

export interface CS2Event {
  id: string;
  title: string;
  description: string;
  type: 'Tournament' | 'Training' | 'Fun Match' | 'Community Event';
  startDate: string;
  endDate: string;
  maxParticipants?: number;
  currentParticipants?: number;
  prizePool?: string;
  rules: string[];
  requirements: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface CS2ServerRule {
  id: string;
  title: string;
  description: string;
  category: 'General' | 'Gameplay' | 'Chat' | 'Admin';
  severity: 'info' | 'warning' | 'strict';
} 