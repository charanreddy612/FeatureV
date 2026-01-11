
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
  link: string;
  keywords: string[];
}

export interface NavItem {
  name: string;
  path: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
