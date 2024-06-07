import { FaHeart, FaComment } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const SocialFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'agustinforchieri',
      profilePic: '/images/profile.jpg',
      postPic: '/images/insta-post-1.jpg',
      likes: 120,
      comments: 15,
      description: 'Gran día de trabajo en el parlamento, avanzando con proyectos importantes para nuestra comunidad.',
    },
    {
      id: 2,
      username: 'agustinforchieri',
      profilePic: '/images/profile.jpg',
      postPic: '/images/insta-post-2.jpg',
      likes: 150,
      comments: 20,
      description: 'Reunión con vecinos para discutir mejoras en el barrio. Juntos construimos un mejor futuro.',
    },
    {
      id: 3,
      username: 'agustinforchieri',
      profilePic: '/images/profile.jpg',
      postPic: '/images/insta-post-3.jpg',
      likes: 200,
      comments: 25,
      description: 'Celebrando el aniversario de River Plate. Orgulloso de ser parte de esta gran familia.',
    },
  ]);

  useEffect(() => {
    // Cargar el script de Twitter solo en el lado del cliente
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Redes Sociales</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 flex items-center">
              <img src={post.profilePic} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="font-bold">{post.username}</h3>
              </div>
            </div>
            <img src={post.postPic} alt="Post" className="w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <FaHeart className="text-red-500 mr-2" /> {post.likes}
                  <FaComment className="text-gray-600 ml-4 mr-2" /> {post.comments}
                </div>
              </div>
              <p className="mb-2"><strong>{post.username}</strong> {post.description}</p>
              <p className="text-gray-500 text-sm">Hace 1 hora</p>
            </div>
          </div>
        ))}
        {/* Embedding Twitter Post */}
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
         
          </div>
          <div className="p-4">
            <blockquote className="twitter-tweet">
              <a href="https://twitter.com/aforchieri/status/1793314617189453954"></a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
