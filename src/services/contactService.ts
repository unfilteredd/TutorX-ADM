import api from './api';

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactService = {
  submitContact: async (contactData: ContactData): Promise<{ message: string }> => {
    try {
      console.log('Submitting contact form data:', contactData);
      const response = await api.post('/contact', contactData);
      console.log('Contact form submission response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Contact form submission error:', error);
      throw error;
    }
  },
};

export default contactService; 