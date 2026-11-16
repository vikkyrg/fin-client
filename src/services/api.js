import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loanService = {
  getAllLoans: () => api.get('/loans'),
  getLoanBySlug: (slug) => api.get(`/loans/${slug}`),
};

export const enquiryService = {
  submitEnquiry: (enquiryData) => api.post('/enquiries/submit', enquiryData),
};

export const blogService = {
  getBlogs: (params) => api.get('/blogs', { params }),
  getBlogBySlug: (slug) => api.get(`/blogs/${slug}`),
  getCategories: () => api.get('/blogs/categories'),
};

export const contentService = {
  getFAQs: (category) => api.get('/content/faqs', { params: { category } }),
  getPartners: () => api.get('/content/partners'),
  getNews: () => api.get('/content/news'),
  getNewsBySlug: (slug) => api.get(`/content/news/${slug}`),
  getPageContent: (pageKey) => api.get(`/content/page/${pageKey}`),
  getSettings: () => api.get('/content/settings'),
};

export default api;
