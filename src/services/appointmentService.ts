import api from './api';

export interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface AppointmentResponse {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

const appointmentService = {
  bookAppointment: async (appointmentData: AppointmentData): Promise<{ message: string; appointmentId: string }> => {
    try {
      console.log('Booking appointment:', appointmentData);
      const response = await api.post('/appointments', appointmentData);
      console.log('Appointment booking response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Appointment booking error:', error);
      throw error;
    }
  },

  // Admin functions
  getAppointments: async (): Promise<AppointmentResponse[]> => {
    try {
      console.log('Getting appointments');
      const response = await api.get('/appointments');
      console.log('Appointments response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error getting appointments:', error);
      throw error;
    }
  },

  updateAppointmentStatus: async (id: string, status: 'pending' | 'confirmed' | 'cancelled' | 'completed'): Promise<{ message: string; appointment: AppointmentResponse }> => {
    try {
      console.log(`Updating appointment ${id} status to ${status}`);
      const response = await api.put(`/appointments/${id}`, { status });
      console.log('Update appointment response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw error;
    }
  },

  deleteAppointment: async (id: string): Promise<{ message: string }> => {
    try {
      console.log(`Deleting appointment ${id}`);
      const response = await api.delete(`/appointments/${id}`);
      console.log('Delete appointment response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting appointment:', error);
      throw error;
    }
  }
};

export default appointmentService; 