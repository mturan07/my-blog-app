const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const blogRoutes = require('../routes/blogRoutes');

const app = express();
app.use(express.json());
app.use('/api/blogs', blogRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/myblogapp_test');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Blog API', () => {
  it('should create a new blog', async () => {
    const res = await request(app)
      .post('/api/blogs')
      .send({
        title: 'Test Blog',
        content: 'This is a test blog.',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('title', 'Test Blog');
  });

  it('should get all blogs', async () => {
    const res = await request(app).get('/api/blogs');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
