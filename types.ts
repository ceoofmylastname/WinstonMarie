
export interface CakeImage {
  url: string;
  title: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
}

export type SectionType = 'home' | 'vintage' | 'confections' | 'menu' | 'order' | 'inquiry';

export interface NavItem {
  label: string;
  id: SectionType;
}
