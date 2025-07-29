import api from './api';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

const authService = {
  register: async (userData: RegisterData): Promise<UserData> => {
    try {
      console.log('Registering user:', { ...userData, password: '***' });
      const response = await api.post('/auth/signup', userData);
      console.log('Registration response:', response.data);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  login: async (userData: LoginData): Promise<UserData> => {
    try {
      console.log('Logging in user:', { ...userData, password: '***' });
      const response = await api.post('/auth/login', userData);
      console.log('Login response:', response.data);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: (): UserData | null => {
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        return JSON.parse(userStr);
      }
      return null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  getProfile: async (): Promise<UserData> => {
    try {
      console.log('Getting user profile');
      const response = await api.get('/auth/profile');
      console.log('Profile response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error getting profile:', error);
      throw error;
    }
  },
};

export default authService; 