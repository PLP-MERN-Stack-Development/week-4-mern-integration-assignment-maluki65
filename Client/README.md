# MERN Blog - Client (React + Vite)

This is the frontend of the MERN Blog application, built using React and Vite. It allows users to view, create, and read blog posts by interacting with a backend REST API.

---

## 🚀 Features

- React with Vite for fast development and builds
- React Router for page navigation
- Axios for communication with the backend API
- Custom hook (`useFetch`) for reusability
- Form handling and validation
- Dynamic routing for post detail pages
- Proxy configuration for clean API calls
- Tailwind CSS (optional) for responsive styling

---

## 🛠 Technologies Used

- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS (optional)

---

## 📦 Getting Started

### 1. Navigate to the client folder

```bash
cd client
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit the app in your browser:
[http://localhost:5173](http://localhost:5173)

---

## 🔁 API Proxy Setup

Vite is configured to forward `/api` requests to the backend server running at `http://localhost:5000`.

Check `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
```

This allows you to use `/api/posts` instead of the full URL.

---

## 🧭 App Routes

| Path        | Description           |
| ----------- | --------------------- |
| `/`         | Home page (all posts) |
| `/create`   | Create new post       |
| `/post/:id` | View single post      |

---

## 📁 Project Structure

```
client/
├── public/
├── src/
│   ├── api/              # Axios instance
│   ├── components/       # Navbar, PostCard, etc.
│   ├── hooks/            # Custom useFetch hook
│   ├── pages/            # Home, PostDetail, PostForm
│   ├── App.jsx           # Main routing component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles (Tailwind)
├── vite.config.js        # Dev server config with proxy
├── package.json
└── README.md             # You're here
```

---

## 📄 Environment Variables (Optional)

You may create a `.env` file to define runtime variables:

```
VITE_API_URL=http://localhost:5000
```

Note: This is only necessary if you're using `import.meta.env` variables. The proxy already handles API routing in development.

---

## 📝 Future Improvements (Optional)

* Authentication (login/signup)
* Image uploads for posts
* Comments and likes
* Pagination and search
* Role-based access control (admin/editor)

---

## 📄 License

This project is licensed under the MIT License.