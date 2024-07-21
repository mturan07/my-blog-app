# my-blog-app

Fullstack Blog Application with React, Next.js, Node.js, and MongoDB

This is a fullstack blog application built using React, Next.js, Node.js, and MongoDB. The frontend is powered by Next.js and React, while the backend uses Node.js and Express. MongoDB is used as the database.

## Project Structure

my-blog-app/
├── backend/
│ ├── controllers/
│ │ └── blogController.js
│ ├── models/
│ │ └── Blog.js
│ ├── routes/
│ │ └── blogRoutes.js
│ ├── .env
│ ├── app.js
│ ├── package.json
│ └── README.md
├── frontend/
│ ├── components/
│ ├── pages/
│ │ ├── api/
│ │ │ └── hello.js
│ │ ├── _app.js
│ │ ├── index.js
│ │ └── add-blog.js
│ ├── public/
│ ├── styles/
│ │ └── globals.css
│ ├── .babelrc
│ ├── next.config.js
│ ├── package.json
│ └── README.md
└── README.md


## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (running locally or a MongoDB Atlas instance)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mturan07/my-blog-app.git
    cd my-blog-app
    ```

2. Install the dependencies for both frontend and backend:

    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI:

    ```env
    MONGO_URI=mongodb://localhost:27017/myblogapp
    ```

### Running the Application

1. Start the backend server:

    ```bash
    cd backend
    node app.js
    ```

2. Start the frontend development server:

    ```bash
    cd ../frontend
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend application. The backend server runs on [http://localhost:5000](http://localhost:5000).

## API Endpoints

The following endpoints are available on the backend server:

- **GET /api/blogs**
    - Retrieves all blog posts.
    - Example: `curl -X GET http://localhost:5000/api/blogs`

- **POST /api/blogs**
    - Creates a new blog post.
    - Request body:
      ```json
      {
        "title": "Your Blog Title",
        "content": "Your blog content goes here."
      }
      ```
    - Example: `curl -X POST http://localhost:5000/api/blogs -H "Content-Type: application/json" -d '{"title":"My New Blog","content":"Content of my new blog"}'`

- **DELETE /api/blogs/:id**
    - Deletes a blog post by ID.
    - Example: `curl -X DELETE http://localhost:5000/api/blogs/60c72b2f9b1e8b4a3c4e1e6b`

- **PUT /api/blogs/:id**
    - Updates a blog post by ID.
    - Request body:
      ```json
      {
        "title": "Updated Blog Title",
        "content": "Updated blog content goes here."
      }
      ```
    - Example: `curl -X PUT http://localhost:5000/api/blogs/60c72b2f9b1e8b4a3c4e1e6b -H "Content-Type: application/json" -d '{"title":"Updated Title","content":"Updated content"}'`

## Built With

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspiration: The need for a simple blog management application.
- Documentation: [Next.js Documentation](https://nextjs.org/docs), [Tailwind CSS Documentation](https://tailwindcss.com/docs)
