import { Project, Freelancer, Category } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Custom E-commerce Dashboard',
    description: 'Looking for a React developer to build a modern dashboard for a niche fashion brand.',
    budget: '$800 - $1,200',
    skills: ['React', 'Tailwind CSS', 'Framer Motion'],
    deadline: '2 weeks',
    clientName: 'EcoStyle Fashion',
    clientRating: 4.8,
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'Brand Identity for AI Startup',
    description: 'Minimalist logo and social media kit for a new AI-powered productivity tool.',
    budget: '$400 - $600',
    skills: ['Logo Design', 'Branding', 'Figma'],
    deadline: '10 days',
    clientName: 'Nova Intelligence',
    clientRating: 4.9,
    category: 'Graphic Design'
  },
  {
    id: '3',
    title: 'Mobile App Wireframes',
    description: 'UX researcher needed to create wireframes for a fitness tracking app.',
    budget: '$500 - $700',
    skills: ['UX Design', 'Wireframing', 'Figma'],
    deadline: '7 days',
    clientName: 'FitFlow App',
    clientRating: 4.7,
    category: 'Architecture & CAD'
  }
];

export const MOCK_FREELANCERS: Freelancer[] = [
  {
    id: 'f1',
    name: 'Sarah Chen',
    avatar: 'https://picsum.photos/seed/sarah/200/200',
    skills: ['Full Stack Dev', 'UI/UX', 'Python'],
    rating: 4.9,
    completedProjects: 42,
    tagline: 'Building the next generation of web apps.',
    bio: 'Self-taught developer with a passion for clean code and beautiful interfaces.'
  },
  {
    id: 'f2',
    name: 'Marcus Miller',
    avatar: 'https://picsum.photos/seed/marcus/200/200',
    skills: ['Graphic Design', 'Motion Graphics'],
    rating: 4.8,
    completedProjects: 28,
    tagline: 'Visual storyteller and brand strategist.',
    bio: 'Helping startups stand out with bold and unique design perspectives.'
  }
];

export const CATEGORIES: string[] = [
  "Graphic Design",
  "Content Writing",
  "Web Development",
  "Video Editing",
  "Social Media",
  "Data & Admin",
  "Electronics & IoT",
  "Architecture & CAD"
];
