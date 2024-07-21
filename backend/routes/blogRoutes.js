const express = require('express');
const { getBlogs, createBlog, deleteBlog, updateBlog } = require('../controllers/blogController');

const router = express.Router();

router.get('/', getBlogs);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);
router.put('/:id', updateBlog);

module.exports = router;
