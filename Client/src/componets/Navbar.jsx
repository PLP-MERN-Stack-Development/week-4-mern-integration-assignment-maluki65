import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold"><Link to="/">MERN Blog</Link></h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/create">New Post</Link>
      </div>
    </nav>
  );
}
