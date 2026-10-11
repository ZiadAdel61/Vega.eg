export interface NavItem {
  label: string;
  href: string;
}

export interface CoreValue {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  features: string[];
  iconName: string;
  badge: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  titleEn: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'construction' | 'mep' | 'fitout';
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  description: string;
  scope: string[];
  image: string;
  featured?: boolean;
}

export interface Differentiator {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RfqFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  projectDetails: string;
  estimatedArea: string;
}
