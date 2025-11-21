// Fill this file with your actual portfolio data

import {
  PersonalInfo,
  SocialLink,
  Experience,
  SkillCategory,
  Education,
  Language,
} from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Professional Title', // e.g., "Senior Software Engineer"
  location: 'Your City, Country',
  bio: `Write your professional bio here. Talk about your experience, 
  what you're passionate about, and what makes you unique. 
  Make it engaging and authentic.`,
  avatar: '/images/avatar.png', // Add your avatar image to public/images/
  email: 'your.email@example.com',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
  },
  // Add more social links as needed
];

export const experiences: Experience[] = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    startDate: 'Jan 2020',
    endDate: 'Present',
    description: `Describe your role, responsibilities, and achievements. 
    What technologies did you work with? What impact did you make?`,
    type: 'hybrid',
  },
  {
    title: 'Previous Job Title',
    company: 'Previous Company',
    location: 'City, Country',
    startDate: 'Jan 2018',
    endDate: 'Dec 2019',
    description: `Another role description. Highlight key projects and accomplishments.`,
    type: 'onsite',
  },
  // Add more experiences
];

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
  },
  // Add more skill categories
];

export const education: Education[] = [
  {
    degree: 'Bachelor\'s Degree in Computer Science',
    institution: 'University Name',
    startYear: '2015',
    endYear: '2019',
    location: 'City, Country',
  },
  // Add more education entries
];

export const languages: Language[] = [
  { name: 'English', proficiency: 'native' },
  { name: 'Spanish', proficiency: 'fluent' },
  // Add more languages
];
