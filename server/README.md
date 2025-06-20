# MERN Blog - Server (Express + MongoDB)

This is the backend of the MERN Blog application, built with Express.js and MongoDB using Mongoose. It exposes a RESTful API for managing blog posts and categories.

---

## 🚀 Features

- Express server with RESTful endpoints
- MongoDB for data storage
- Mongoose for schema modeling
- Environment configuration via `.env`
- Input validation with `express-validator`
- Centralized error handling
- Supports CORS for frontend integration

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- express-validator
- dotenv
- nodemon (for development)

---

## 📦 Getting Started

### 1. Navigate to the server folder

```bash
cd server
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
MONGO_URI=mongodb://localhost:27017/mern_blog
PORT=5000
```

### 4. Run the development server

```bash
npm run dev
```

> The server will start on: [http://localhost:5000](http://localhost:5000)

---

## 📋 API Endpoints

### 📘 Posts

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/posts`     | Get all posts     |
| GET    | `/api/posts/:id` | Get a single post |
| POST   | `/api/posts`     | Create a new post |
| PUT    | `/api/posts/:id` | Update a post     |
| DELETE | `/api/posts/:id` | Delete a post     |

### 🗂 Categories

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | `/api/categories` | Get all categories    |
| POST   | `/api/categories` | Create a new category |

---

## 🗂 Project Structure

```
server/
├── controllers/         # Route handlers
│   ├── categories.js
│   └── posts.js
├── models/              # Mongoose schemas
│   ├── Category.js
│   └── Post.js
├── routes/              # Express routers
│   ├── categories.js
│   └── posts.js
├── middleware/          # Custom error handling (optional)
│   └── errorHandler.js
├── .env                 # Environment config (add manually)
├── index.js             # Entry point
├── package.json
└── README.md            # You're here
```

---

## 🔐 Environment Variables

Place in a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/mern_blog
PORT=5000
```

---

## 📄 License

This project is open-source and licensed under the MIT License.