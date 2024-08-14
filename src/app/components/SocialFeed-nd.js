import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import moment from 'moment';

const SocialFeedND = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(9); // Mostramos inicialmente 9 posts, para que se distribuyan en 3 columnas

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get('/api/instagram-feed');
        const instagramData = response.data.data.map(post => {
          let postPic = post.media_url;
          if (post.media_type === 'CAROUSEL_ALBUM') {
            postPic = [post.media_url];
          }
          return {
            id: post.id,
            type: post.media_type,
            username: 'nd_riverplate',
            profilePic: '/images/River/logo_nd.png',
            postPic: postPic,
            description: post.caption,
            timestamp: post.timestamp ? moment(post.timestamp).format('DD/MM/YYYY') : 'Fecha inválida',
            likes: 0,
            comments: 0
          };
        });
        setPosts(instagramData);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  const renderPostContent = (post) => {
    switch (post.type) {
      case 'IMAGE':
        return <Image src={post.postPic} alt="Instagram Post" width={400} height={256} className="w-full h-auto object-cover rounded-lg shadow-md" />;
      case 'VIDEO':
        return (
          <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
            <video controls className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md">
              <source src={post.postPic} type="video/mp4" />
            </video>
          </div>
        );
      case 'CAROUSEL_ALBUM':
        return (
          <div className="carousel">
            {Array.isArray(post.postPic) ? post.postPic.map((pic, index) => (
              <Image key={index} src={pic} alt={`Post ${index}`} width={400} height={256} className="w-full h-auto object-cover rounded-lg" />
            )) : (
              <Image src={post.postPic} alt="Post" width={400} height={256} className="w-full h-auto object-cover rounded-lg" />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 9); // Carga 9 más para que cubra las 3 columnas
  };

  return (
    <section className="p-4 md:p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Redes Sociales</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="flex-1 px-4">
          {posts
            .filter((_, index) => index % 3 === 0)
            .slice(0, visiblePosts / 3)
            .map((post) => (
              <div key={post.id} className="mb-10 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 flex items-center">
                  <Image src={post.profilePic} alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-bold">{post.username}</h3>
                  </div>
                </div>
                {renderPostContent(post)}
                <div className="p-4">
                  <p className="mb-2">
                    <strong>{post.username}</strong> {post.description}
                  </p>
                  <p className="text-gray-500 text-sm">{post.timestamp}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 px-4">
          {posts
            .filter((_, index) => index % 3 === 1)
            .slice(0, visiblePosts / 3)
            .map((post) => (
              <div key={post.id} className="mb-10 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 flex items-center">
                  <Image src={post.profilePic} alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-bold">{post.username}</h3>
                  </div>
                </div>
                {renderPostContent(post)}
                <div className="p-4">
                  <p className="mb-2">
                    <strong>{post.username}</strong> {post.description}
                  </p>
                  <p className="text-gray-500 text-sm">{post.timestamp}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 px-4">
          {posts
            .filter((_, index) => index % 3 === 2)
            .slice(0, visiblePosts / 3)
            .map((post) => (
              <div key={post.id} className="mb-10 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 flex items-center">
                  <Image src={post.profilePic} alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-bold">{post.username}</h3>
                  </div>
                </div>
                {renderPostContent(post)}
                <div className="p-4">
                  <p className="mb-2">
                    <strong>{post.username}</strong> {post.description}
                  </p>
                  <p className="text-gray-500 text-sm">{post.timestamp}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMorePosts}
            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
          >
            Ver más
          </button>
        </div>
      )}
    </section>
  );
};

export default SocialFeedND;
