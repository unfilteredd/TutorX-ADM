const express = require('express');
const router = express.Router();
const { 
  createAppointment, 
  getAppointments, 
  updateAppointmentStatus, 
  deleteAppointment 
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/', createAppointment);

// Admin routes
router.get('/', protect, getAppointments);
router.put('/:id', protect, updateAppointmentStatus);
router.delete('/:id', protect, deleteAppointment);

module.exports = router; 