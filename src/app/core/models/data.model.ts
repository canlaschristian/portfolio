export interface Skill {
    id: number;
    name: string;
    level: string;
    progress: number;
    icon: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
    features?: string[];
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
    company?: string;
  }
  
  export interface Experience {
    id: number;
    position: string;
    company: string;
    period: string;
    responsibilities: string[];
    logo?: string;
  }
  
  export interface Education {
    id: number;
    degree: string;
    institution: string;
    year: string;
    fieldOfStudy?: string;
    description?: string;
  }
  
  export interface ContactForm {
    name: string;
    email: string;
    message: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    color?: string;
  }