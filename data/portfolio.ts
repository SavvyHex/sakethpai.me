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
  name: 'Saketh Pai',
  title: 'Cybersecurity Enthusiast & Full-Stack Developer',
  location: 'Bangalore, India',
  bio: `Passionate cybersecurity enthusiast and full-stack developer. I specialize in identifying vulnerabilities, implementing robust security measures, and leveraging AI/ML to enhance threat detection and system intelligence. My journey spans across cybersecurity research, modern web development with cutting-edge frameworks, and integrating AI-powered solutions to solve complex real-world problems.`,
  avatar: '/images/avatar.png', // Add your avatar image to public/images/
  email: 'hello@sakethpai.me',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/SavvyHex',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/saketh-pai-53704a310/',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/InitFailure',
  },
];

export const experiences: Experience[] = [
  // Format:
  {
    title: 'Web Game Developer Intern',
    company: 'Sri Sathya Sai International Organization',
    location: 'Bangalore, India',
    startDate: 'Nov 2025',
    endDate: 'Jan 2026',
    description: `Part of Core team working on a web-based game development project. Developed interactive game features using modern web technologies, collaborated with designers to enhance user experience, and ensured cross-platform compatibility.`,
    type: 'remote',
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap','React Native'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'C', 'C++', 'C#', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Render', 'NGINX'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Google Cloud', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Firestore', 'Supabase', 'Redis', 'PostgreSQL', 'SQL Server'],
  },
  {
    category: 'Tools & More',
    skills: ['Git', 'Elasticsearch', 'GraphQL', 'pandas', 'Jest', 'Cypress', 'Jira', 'VSCode', 'Linux'],
  },
  {
    category: 'Cybersecurity Tools',
    skills: ['Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Kali Linux', 'Bettercap'],
  }
];

export const education: Education[] = [
  {
    degree: '10th Grade',
    institution: 'Saint Francis de Sales Public School',
    startYear: '2016',
    endYear: '2022',
    location: 'Bangalore, India',
    grade: '94.6%',
  },
    {
    degree: '12th Grade',
    institution: 'Christ Academy Junior College',
    startYear: '2022',
    endYear: '2024',
    location: 'Bangalore, India',
    grade: '92.4%',
  },
    {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'PES University',
    startYear: '2024',
    endYear: '2028',
    location: 'Bangalore, India',
    grade: '8.02 GPA',
  },
];

export const languages: Language[] = [
  { name: 'Hindi', proficiency: 'intermediate' },
  { name: 'English', proficiency: 'fluent' },
  { name: 'German', proficiency: 'basic' },
  { name: 'Kannada', proficiency: 'intermediate' },
];
