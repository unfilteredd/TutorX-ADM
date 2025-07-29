const express = require('express');
const router = express.Router();
const { applyAsTutor } = require('../controllers/tutorController');
const { protect } = require('../middleware/authMiddleware');

// Both authenticated and non-authenticated users can apply
router.post('/apply', applyAsTutor);

module.exports = router; 