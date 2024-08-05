import { FaHeart, FaComment } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const SocialFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'twitter',
      twitterUrl: 'https://twitter.com/aforchieri/status/1768120068519473596', // URL del tweet
    },
    {
      id: 2,
      type: 'twitter',
      twitterUrl: 'https://twitter.com/aforchieri/status/1812948400142492114', // URL del tweet
    },
    {
      id: 3,
      type: 'instagram',
      username: 'agustinforchieri',
      profilePic: '/images/profile.jpg',
      postPic: '/images/insta-post-1.jpg',
      likes: 120,
      comments: 15,
      description: 'Gran día de trabajo en el parlamento, avanzando con proyectos importantes para nuestra comunidad.',
      timestamp: 'Hace 1 hora',
    },
    {
      id: 4,
      type: 'instagram',
      username: 'agustinforchieri',
      profilePic: '/images/profile.jpg',
      postPic: '/images/insta-post-2.jpg',
      likes: 150,
      comments: 20,
      description: 'Disfrutando de un día maravilloso en el Monumental.',
      timestamp: 'Hace 2 horas',
    },
    {
      id: 5,
      type: 'instagram',
      profilePic: '/images/profile.jpg',
      postPic: '/images/buena_foto.jpg',
      likes: 100,
      comments: 10,
      description: 'Gran reunión con los directivos del club.',
      timestamp: 'Hace 3 horas',
    },
    {
      id: 6,
      type: 'instagram',
      username: 'agustinforchieri',
      profilePic: '/images/profile.jpg',
      postPic: '/images/perfil_legislativo6.jpg',
      likes: 200,
      comments: 30,
      description: 'Celebrando una gran victoria con el equipo.',
      timestamp: 'Hace 4 horas',
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
    <section className="p-4 md:p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Redes Sociales</h2>
      <div className="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-3">
        <div className="col-span-2 grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-2">
          {posts.filter(post => post.type === 'instagram').map((post) => (
            <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full">
              <div className="p-4 flex items-center">
                <Image src={post.profilePic} alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="font-bold">{post.username}</h3>
                </div>
              </div>
              <Image src={post.postPic} alt="Post" width={400} height={256} className="w-full h-64 object-cover rounded-lg" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <FaHeart className="text-red-500 mr-2" /> {post.likes}
                    <FaComment className="text-gray-600 ml-4 mr-2" /> {post.comments}
                  </div>
                </div>
                <p className="mb-2"><strong>{post.username}</strong> {post.description}</p>
                <p className="text-gray-500 text-sm">{post.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-10">
          {posts.filter(post => post.type === 'twitter').slice(0, 2).map((post) => (
            <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full">
              <div className="p-4 flex justify-center">
                <blockquote className="twitter-tweet" data-dnt="true" data-theme="light" style={{ width: '100%' }}>
                  <a href={post.twitterUrl}></a>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
