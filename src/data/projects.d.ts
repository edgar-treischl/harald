export const projects: {
  id: number | string;
  title: string;
  description: string;
  image: string;
  link?: string;
  topics: string[];
  technologies: string[];
  layout?: 'standard' | 'custom';
}[];