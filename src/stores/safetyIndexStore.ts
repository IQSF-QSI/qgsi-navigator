import { create } from 'zustand';

// Define the shape of a single data item
export interface SafetyData {
  rank: number;
  country: string;
  score: number;
  flag: string;
  laws: string;
  healthcare: string;
  social_acceptance: string;
}

// Define the shape of our store's state
interface SafetyIndexState {
  safetyData: SafetyData[];
  loading: boolean;
  error: string | null;
  fetchSafetyData: () => Promise<void>;
}

// Get the API URL from our environment variables
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/safety-index`;

export const useSafetyIndexStore = create<SafetyIndexState>((set) => ({
  // Initial state
  safetyData: [],
  loading: false,
  error: null,

  // The action to fetch data from the API
  fetchSafetyData: async () => {
    set({ loading: true, error: null }); // Set loading state
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch safety index data');
      }
      const data = await response.json();
      set({ safetyData: data, loading: false }); // Update state with data
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An unknown error occurred';
      set({ error: message, loading: false }); // Update state with error
    }
  },
}));