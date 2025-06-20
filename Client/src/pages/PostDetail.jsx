import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/posts/${id}`).then(res => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">Category: {post.category?.name}</p>
      <p>{post.content}</p>
    </div>
  );
}
