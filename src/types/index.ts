export interface WasteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  wasteType: string;
  scheduledDate: string;
  status: 'Pending' | 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  createdAt: string;
  notes?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}