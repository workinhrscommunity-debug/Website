
export type Project = {
  id: string;
  title: string;
  description: string;
  budget: string;
  skills: string[];
  deadline: string;
  clientName: string;
  clientRating: number;
  category: string;
}

export type Freelancer = {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  rating: number;
  completedProjects: number;
  bio: string;
  tagline: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
}
