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
  title: 'Cybersecurity Enthusiast',
  location: 'Bangalore, India',
  bio: `Highly experienced and dynamic software engineer with a rich professional background spanning over 11 years. Throughout my career, I've held positions in renowned tech companies across Albania, France, USA, and Germany. My contributions have been pivotal in designing and constructing microservices for distributed systems, implementing data pipelines on Google Cloud, and engaging in full-stack development.`,
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
  {
    title: 'Senior Software Engineer',
    company: 'Unicepta',
    location: 'Cologne, Germany',
    startDate: 'Jul 2020',
    endDate: 'Nov 2025',
    description: `Part of Core team working on AI-powered Media & Data Intelligence Solutions. Designed and built microservices for distributed systems, engineered data pipelines on Google Cloud, and wrote full-stack code for front/back/cloud.`,
    type: 'hybrid',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Ritech Solutions',
    location: 'Tirana, Albania',
    startDate: 'Jul 2018',
    endDate: 'Jul 2020',
    description: `Part of Core team leading tech decisions. Led AppriseMobile CRM for Toyota and Microsoft IOT marketing project deployed across USA, Canada, and Australia.`,
    type: 'onsite',
  },
  {
    title: 'Software Engineer',
    company: 'Gutenberg Technology',
    location: 'Paris, France',
    startDate: 'Feb 2017',
    endDate: 'Aug 2018',
    description: `Fullstack developer building real-time publisher platform used by National Geographic, IUBH, and Fujitsu. Developed highly available MEFIO platform and integrated SaaS strategy.`,
    type: 'onsite',
  },
  {
    title: 'Software Engineer',
    company: 'Group of Companies',
    location: 'Tirana, Albania',
    startDate: 'Mar 2015',
    endDate: 'Feb 2017',
    description: `Developed bar/restaurant management app, optimized bank system aggregation from 11h to 1h, and built water supply billing process for Albania government project.`,
    type: 'onsite',
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Redux', 'MobX', 'Angular', 'Bootstrap', 'Material-UI', 'React Native', 'Ionic'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Hapi', 'Firebase', 'Cloud Functions', 'AWS Lambda', 'AWS S3', 'NGINX'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Google Cloud', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Cloud Run'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Firestore', 'RethinkDB', 'Redis', 'PostgreSQL', 'SQL Server', 'BigQuery'],
  },
  {
    category: 'Tools & More',
    skills: ['Git', 'Elasticsearch', 'GraphQL', 'pandas', 'Jest', 'Cypress', 'Jira', 'VSCode'],
  },
  {
    category: 'Architecture',
    skills: ['Microservices', 'SaaS', 'Pub/Sub', 'Routing Slip', 'Dead Letter Queues'],
  },
  {
    category: 'Methodologies',
    skills: ['Agile', 'Scrum', 'CI/CD', 'TDD'],
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor\'s Degree in Computer Science',
    institution: 'University of Tirana',
    startYear: '2013',
    endYear: '2016',
    location: 'Tirana, Albania',
  },
];

export const languages: Language[] = [
  { name: 'Albanian', proficiency: 'native' },
  { name: 'English', proficiency: 'fluent' },
  { name: 'German', proficiency: 'intermediate' },
  { name: 'Italian', proficiency: 'intermediate' },
];
