const express = require('express');
const router = express.Router();
const { 
  createSuccessStory, 
  getSuccessStories, 
  getAllSuccessStories, 
  approveSuccessStory, 
  deleteSuccessStory 
} = require('../controllers/successStoryController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/', createSuccessStory);
router.get('/', getSuccessStories);

// Admin routes
router.get('/admin', protect, getAllSuccessStories);
router.put('/:id/approve', protect, approveSuccessStory);
router.delete('/:id', protect, deleteSuccessStory);

module.exports = router; 