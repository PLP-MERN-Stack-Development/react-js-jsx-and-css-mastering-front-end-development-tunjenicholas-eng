import React, { useState, useEffect } from 'react';
import Card from '../components/Card'; // Reuse your Card component

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading state
  if (loading) {
    return <div className="text-center text-lg">Loading posts...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-red-500 text-lg">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Fetched API Data</h1>

      {/* Search Feature */}
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <h3 className="text-lg font-bold mb-2 capitalize text-blue-600 dark:text-blue-400">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </Card>
          ))
        ) : (
          <p className="text-center md:col-span-2 lg:col-span-3 text-gray-500">
            No posts found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default PostsPage;