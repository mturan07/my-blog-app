# My Blog App Backend

This is the backend server for the My Blog App, built using Node.js, Express, and MongoDB. The backend handles CRUD operations for blog posts.

## Getting Started

These instructions will help you set up the backend server on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (running locally or a MongoDB Atlas instance)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mturan07/my-blog-app-backend.git
    cd my-blog-app-backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI:

    ```env
    MONGO_URI=mongodb://localhost:27017/myblogapp
    ```

### Running the Server

To start the server, run:

```bash
node app.js
