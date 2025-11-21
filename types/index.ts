// Types for your portfolio data

export interface SocialLink {
  name: string;
  url: string;
  icon?: string; // You can use icons from lucide-react or any icon library
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type?: 'hybrid' | 'remote' | 'onsite';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  location: string;
}

export interface Language {
  name: string;
  proficiency?: 'native' | 'fluent' | 'intermediate' | 'basic';
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatar?: string;
  email?: string;
  phone?: string;
}
