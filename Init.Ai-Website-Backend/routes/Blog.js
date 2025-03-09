// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const {getBlogs , getAllBlogs , getBlogById} = require('../controllers/Blog');

router.get('/blogs/all',getAllBlogs);
router.get('/blogs',getBlogs);
router.get('/blogs/:id',getBlogById);

module.exports = router;
