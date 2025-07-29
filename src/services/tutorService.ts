import api from './api';

export interface TutorApplicationData {
  fullName: string;
  email: string;
  phone: string;
  expertise: string;
  experience: string;
  about: string;
  availability: string;
}

const tutorService = {
  applyAsTutor: async (applicationData: TutorApplicationData): Promise<{ message: string; applicationId: string }> => {
    try {
      console.log('Submitting tutor application:', applicationData);
      const response = await api.post('/tutors/apply', applicationData);
      console.log('Tutor application response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Tutor application error:', error);
      throw error;
    }
  },
};

export default tutorService; 