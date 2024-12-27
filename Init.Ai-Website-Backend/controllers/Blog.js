const Blog = require('../models/blogs.models');

exports.getBlogs = async (req, res) => {
  try {
    const { keywords, categories } = req.query;
    let searchCriteria = {};
    if (keywords) {
      const keywordArray = keywords.split(',').map(keyword => new RegExp(keyword.trim(), 'i'));
      searchCriteria.keywords = { $all: keywordArray };
    }
    if (categories) {
      searchCriteria.categories = new RegExp(categories, 'i');
    }
    console.log('Search criteria:', searchCriteria);
    const blogs = await Blog.find(searchCriteria).sort({ date: -1 });
    console.log('Blogs retrieved successfully');
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    res.status(500).json({ message: 'Server error while retrieving blogs' });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    console.log('All blogs retrieved successfully');
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error retrieving blogs:", error);
    res.status(500).json({ message: 'Server error while retrieving blogs' });
  }
}

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      console.error('Blog not found');
      return res.status(404).json({ message: 'Blog not found' });
    }
    console.log('Blog retrieved successfully');
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error retrieving blog:", error);
    res.status(500).json({ message: 'Server error while retrieving blog' });
  }
}