export type ProjectCategory = 'all' | 'ml' | 'web' | 'simulation';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  problemStatement: string;
  description: string;
  technologies: string[];
  contribution: string;
  githubUrl: string;
  demoUrl?: string;
  status: 'Completed' | 'In Progress' | 'Academic Research';
  featured: boolean;
  isPlaceholderRepo?: boolean;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  accent: 'violet' | 'cyan' | 'purple';
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Sports' | 'Arts & Culture' | 'Leadership';
  description: string;
  badge?: string;
  icon: string;
}

export interface InterestItem {
  name: string;
  category: 'Tech' | 'Creative' | 'Leadership';
  icon: string;
}

export interface ProfileInfo {
  name: string;
  nickname?: string;
  title: string;
  tagline: string;
  heroDescription: string;
  aboutIntro: string;
  aboutPhilosophy: string;
  leadershipIntro: string;
  education: {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    graduationYear: string;
    status: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  resumeFileName: string;
}
