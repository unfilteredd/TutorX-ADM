const SuccessStory = require('../models/SuccessStory');

// @desc    Create a new success story
// @route   POST /api/success-stories
// @access  Public
const createSuccessStory = async (req, res) => {
  try {
    const { name, email, title, story, rating } = req.body;
    
    const successStory = await SuccessStory.create({
      name,
      email,
      title,
      story,
      rating
    });
    
    if (successStory) {
      res.status(201).json({ 
        message: 'Success story submitted successfully! It will be reviewed before being published.',
        storyId: successStory._id 
      });
    } else {
      res.status(400).json({ message: 'Invalid story data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all approved success stories
// @route   GET /api/success-stories
// @access  Public
const getSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find({ approved: true })
      .sort({ createdAt: -1 });
    
    res.json(successStories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all success stories (including unapproved ones)
// @route   GET /api/success-stories/admin
// @access  Private/Admin
const getAllSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find()
      .sort({ createdAt: -1 });
    
    res.json(successStories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Approve a success story
// @route   PUT /api/success-stories/:id/approve
// @access  Private/Admin
const approveSuccessStory = async (req, res) => {
  try {
    const successStory = await SuccessStory.findById(req.params.id);
    
    if (!successStory) {
      return res.status(404).json({ message: 'Success story not found' });
    }
    
    successStory.approved = true;
    await successStory.save();
    
    res.json({ message: 'Success story approved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Delete a success story
// @route   DELETE /api/success-stories/:id
// @access  Private/Admin
const deleteSuccessStory = async (req, res) => {
  try {
    const successStory = await SuccessStory.findById(req.params.id);
    
    if (!successStory) {
      return res.status(404).json({ message: 'Success story not found' });
    }
    
    await successStory.deleteOne();
    
    res.json({ message: 'Success story removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createSuccessStory,
  getSuccessStories,
  getAllSuccessStories,
  approveSuccessStory,
  deleteSuccessStory
}; 