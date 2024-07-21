import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import axios from 'axios';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /blog posts/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders blog posts', async () => {
    const mockBlogs = [
      { _id: '1', title: 'Test Blog 1', content: 'Content 1' },
      { _id: '2', title: 'Test Blog 2', content: 'Content 2' },
    ];

    // Mocking axios.get to return the mockBlogs
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockBlogs });

    render(<Home />);

    const blogTitles = await screen.findAllByRole('heading', { level: 2 });
    expect(blogTitles).toHaveLength(mockBlogs.length);
    expect(blogTitles[0]).toHaveTextContent('Test Blog 1');
    expect(blogTitles[1]).toHaveTextContent('Test Blog 2');

    axios.get.mockRestore();
  });
});
