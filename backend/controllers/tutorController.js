const TutorApplication = require('../models/TutorApplication');

// @desc    Submit a tutor application
// @route   POST /api/tutors/apply
// @access  Public/Private
const applyAsTutor = async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      phone, 
      expertise, 
      experience, 
      about, 
      availability 
    } = req.body;
    
    // Add user ID if authenticated
    const userId = req.user ? req.user._id : null;
    
    const application = await TutorApplication.create({
      fullName,
      email,
      phone,
      expertise,
      experience,
      about,
      availability,
      userId
    });
    
    if (application) {
      res.status(201).json({ 
        message: 'Application submitted successfully',
        applicationId: application._id 
      });
    } else {
      res.status(400).json({ message: 'Invalid application data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { applyAsTutor }; 