import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="border rounded p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-sm text-gray-600">{post.category?.name}</p>
      <p className="mt-2 line-clamp-3">{post.content}</p>
      <Link to={`/post/${post._id}`} className="text-blue-600 mt-2 inline-block">Read More</Link>
    </div>
  );
}
