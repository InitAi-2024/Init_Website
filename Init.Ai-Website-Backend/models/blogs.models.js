const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  layout: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  mdcontent: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Blog', BlogSchema,'Blog');
