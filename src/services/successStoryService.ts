import api from './api';

export interface SuccessStoryData {
  name: string;
  email: string;
  title: string;
  story: string;
  rating: number;
}

export interface SuccessStoryResponse {
  _id: string;
  name: string;
  title: string;
  story: string;
  rating: number;
  approved: boolean;
  createdAt: string;
}

const successStoryService = {
  submitSuccessStory: async (storyData: SuccessStoryData): Promise<{ message: string; storyId: string }> => {
    try {
      console.log('Submitting success story:', storyData);
      const response = await api.post('/success-stories', storyData);
      console.log('Success story submission response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Success story submission error:', error);
      throw error;
    }
  },

  getSuccessStories: async (): Promise<SuccessStoryResponse[]> => {
    try {
      console.log('Getting success stories');
      const response = await api.get('/success-stories');
      console.log('Success stories response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error getting success stories:', error);
      throw error;
    }
  },

  // Admin functions
  getAllSuccessStories: async (): Promise<SuccessStoryResponse[]> => {
    try {
      console.log('Getting all success stories (admin)');
      const response = await api.get('/success-stories/admin');
      console.log('All success stories response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error getting all success stories:', error);
      throw error;
    }
  },

  approveSuccessStory: async (id: string): Promise<{ message: string }> => {
    try {
      console.log(`Approving success story ${id}`);
      const response = await api.put(`/success-stories/${id}/approve`);
      console.log('Approve success story response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error approving success story:', error);
      throw error;
    }
  },

  deleteSuccessStory: async (id: string): Promise<{ message: string }> => {
    try {
      console.log(`Deleting success story ${id}`);
      const response = await api.delete(`/success-stories/${id}`);
      console.log('Delete success story response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting success story:', error);
      throw error;
    }
  }
};

export default successStoryService; 