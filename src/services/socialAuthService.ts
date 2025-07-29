import api from './api';

export interface SocialAuthData {
  provider: 'google' | 'facebook';
  token: string;
  name?: string;
  email?: string;
}

const socialAuthService = {
  loginWithSocial: async (authData: SocialAuthData): Promise<any> => {
    try {
      console.log(`Logging in with ${authData.provider}:`, authData);
      const response = await api.post('/auth/social', authData);
      console.log(`${authData.provider} login response:`, response.data);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error(`${authData.provider} login error:`, error);
      throw error;
    }
  }
};

export default socialAuthService; 