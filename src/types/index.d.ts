export interface DeskItem {
  name: string;
  benefit: string;
  price: string;
}

export interface DeskCategory {
  category: string;
  items: DeskItem[];
}

export interface HealthTip {
  title: string;
  description: string;
  frequency: string;
}

export interface PsychTip {
  title: string;
  tip: string;
}

export interface NewsOutlet {
  name: string;
  url: string;
  description: string;
}

export interface EngineeringResource {
  category: string;
  links: ResourceLink[];
}

export interface ResourceLink {
  name: string;
  url: string;
}

export interface Notification {
  id: number;
  message: string;
  type: 'water' | 'stand';
}

export type Theme = 'light' | 'dark';
export type PageId = 'home' | 'desk' | 'health' | 'news' | 'engineering';
