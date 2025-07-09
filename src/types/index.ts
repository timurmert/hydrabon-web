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
  team: TeamMember[];
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
  totalMembers: number;
  onlineMembers: number;
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

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'Tournament' | 'Training' | 'Community Event' | 'Meeting' | 'Stream';
  date: string;
  time: string;
  duration: string;
  location?: string;
  discordChannel?: string;
  participants?: number;
  maxParticipants?: number;
  requirements?: string[];
  prizes?: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface Application {
  id: string;
  type: 'Player' | 'Staff' | 'Developer' | 'Media Team' | 'Moderator';
  applicantName: string;
  applicantEmail: string;
  applicantAge: number;
  experience: string;
  motivation: string;
  availability: string;
  portfolio?: string;
  socialMedia: SocialMedia;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  submissionDate: string;
  reviewDate?: string;
  reviewerNotes?: string;
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