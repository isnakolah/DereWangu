import { LucideIcon } from 'lucide-react';

export interface StatItem {
  number: string;
  label: string;
  icon: LucideIcon;
}

export interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export interface SafetyFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface BusinessPlan {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  accent: string;
}

export interface PricingFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

