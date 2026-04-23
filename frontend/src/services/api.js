import axios from 'axios';

const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Response interceptor to handle API responses
apiClient.interceptors.response.use(
  (response) => {
    // Return the data directly for successful responses
    return response.data.success ? response.data.data : response.data;
  },
  (error) => {
    // Handle error responses
    console.error('API Error:', error);
    const message = error.response?.data?.error || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

export const api = {
  // Team endpoints
  team: {
    getAll: () => apiClient.get('/team'),
    create: (data) => apiClient.post('/team', data),
  },

  // Analysis areas endpoints
  analysisAreas: {
    getAll: () => apiClient.get('/analysis-areas'),
  },

  // Articles endpoints
  articles: {
    getAll: (params = {}) => apiClient.get('/articles', { params }),
    getById: (id) => apiClient.get(`/articles/${id}`),
    create: (data) => apiClient.post('/articles', data),
  },

  // Reports endpoints
  reports: {
    getAll: (params = {}) => apiClient.get('/reports', { params }),
    getById: (id) => apiClient.get(`/reports/${id}`),
    create: (data) => apiClient.post('/reports', data),
  },

  // Events endpoints
  events: {
    getAll: (params = {}) => apiClient.get('/events', { params }),
    getById: (id) => apiClient.get(`/events/${id}`),
    create: (data) => apiClient.post('/events', data),
    register: (id) => apiClient.post(`/events/${id}/register`),
  },

  // Contact endpoints
  contact: {
    submit: (data) => apiClient.post('/contact', data),
    getAll: (params = {}) => apiClient.get('/contact', { params }),
  },

  // Newsletter endpoints
  newsletter: {
    subscribe: (email) => apiClient.post('/newsletter/subscribe', { email }),
    unsubscribe: (email) => apiClient.delete('/newsletter/unsubscribe', { params: { email } }),
  },

  // Utility functions
  initializeData: () => apiClient.post('/init-data'),
};

// Export individual services for convenience
export const teamService = api.team;
export const articlesService = api.articles;
export const reportsService = api.reports;
export const eventsService = api.events;
export const contactService = api.contact;
export const newsletterService = api.newsletter;

export default api;