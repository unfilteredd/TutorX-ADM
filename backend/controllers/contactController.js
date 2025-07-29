const Contact = require('../models/Contact');

// @desc    Create a new contact message
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });
    
    if (contact) {
      res.status(201).json({ message: 'Message sent successfully' });
    } else {
      res.status(400).json({ message: 'Invalid contact data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createContact }; 