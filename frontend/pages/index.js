import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({ title: '', content: '', _id: '' });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire(
          'Deleted!',
          'Your blog post has been deleted.',
          'success'
        );
      }
    });
  };

  const handleEdit = async (blog) => {
    setCurrentBlog(blog);
    setIsEditing(true);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/blogs/${currentBlog._id}`, currentBlog);
      setBlogs(blogs.map((blog) => (blog._id === currentBlog._id ? res.data : blog)));
      setIsEditing(false);
      setCurrentBlog({ title: '', content: '', _id: '' });
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleCancel = async () => {
    setIsEditing(false);
    setCurrentBlog({ title: '', content: '', _id: '' });
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">There is no blog!</p>
        ) : (
          <ul>
            {blogs.map((blog) => (
              <li key={blog._id} className="mb-4 p-4 border-b flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p>{blog.content}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(blog._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {isEditing && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
            <form onSubmit={handleUpdate}>
              <input type="hidden" value={currentBlog._id} />
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  value={currentBlog.title}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Content</label>
                <textarea
                  value={currentBlog.content}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, content: e.target.value })}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                ></textarea>
              </div>
              <div className="flex justify-end">
              <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-700 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700"
                >
                  Update Blog
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
