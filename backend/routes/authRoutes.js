const express = require('express');
const router = express.Router();
const { registerUser, loginUser, socialLogin, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/social', socialLogin);
router.get('/profile', protect, getUserProfile);

module.exports = router; 