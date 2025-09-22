import { WasteRequest } from '../types';

const STORAGE_KEY = 'waste_requests';

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};

export const saveRequest = (request: Omit<WasteRequest, 'id' | 'status' | 'createdAt'>): string => {
  try {
    const existingRequests = getRequests();
    const newRequest: WasteRequest = {
      ...request,
      id: generateId(),
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    
    const updatedRequests = [newRequest, ...existingRequests];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRequests));
    
    return newRequest.id;
  } catch (error) {
    console.error('Error saving request:', error);
    throw new Error('Failed to save request');
  }
};

export const getRequests = (): WasteRequest[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error getting requests:', error);
    return [];
  }
};

export const getRequestById = (id: string): WasteRequest | null => {
  try {
    const requests = getRequests();
    return requests.find(req => req.id === id) || null;
  } catch (error) {
    console.error('Error getting request by ID:', error);
    return null;
  }
};

export const getRequestByPhone = (phone: string): WasteRequest | null => {
  try {
    const requests = getRequests();
    return requests.find(req => req.phone === phone) || null;
  } catch (error) {
    console.error('Error getting request by phone:', error);
    return null;
  }
};

export const updateRequestStatus = (id: string, status: WasteRequest['status']): boolean => {
  try {
    const requests = getRequests();
    const requestIndex = requests.findIndex(req => req.id === id);
    
    if (requestIndex === -1) return false;
    
    requests[requestIndex].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
    
    return true;
  } catch (error) {
    console.error('Error updating request status:', error);
    return false;
  }
};