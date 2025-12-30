export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'Analysis' | 'Technical' | 'Soft Skills' | 'Tools';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}