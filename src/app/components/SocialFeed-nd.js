import { FaHeart, FaComment } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import moment from 'moment';

const SocialFeedND = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6); // Mostramos inicialmente 6 posts

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
        setPosts(prevPosts => [...instagramData, ...prevPosts]);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    const fetchTweets = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/tweets-nds`);
        const tweetsData = response.data.data.map(tweet => ({
          id: tweet.id,
          type: 'twitter',
          twitterUrl: tweet.attributes.twitterUrl,
        }));
        setPosts(prevPosts => [...prevPosts, ...tweetsData]); // Combina tweets con los posts de Instagram
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchInstagramPosts();
    fetchTweets();

    // Cargar el script de Twitter
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 6); // Carga 6 más en lugar de 4
  };

  return (
    <section className="p-4 md:p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Redes Sociales</h2>
      <div className="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-3">
        <div className="col-span-2 flex flex-col md:flex-row md:space-x-10">
          <div className="flex-1 flex flex-col space-y-4">
            {posts.filter((post, index) => index % 2 === 0 && post.type !== 'twitter')
              .slice(0, visiblePosts / 2).map((post) => (
                <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full">
                  <div className="p-4 flex items-center">
                    <Image src={post.profilePic} alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <h3 className="font-bold">{post.username}</h3>
                    </div>
                  </div>
                  {renderPostContent(post)}
                  <div className="p-4">
                    <p className="mb-2"><strong>{post.username}</strong> {post.description}</p>
                    <p className="text-gray-500 text-sm">{post.timestamp}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex-1 flex flex-col space-y-4">
            {posts.filter((post, index) => index % 2 !== 0 && post.type !== 'twitter')
              .slice(0, visiblePosts / 2).map((post) => (
                <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full">
                  <div className="p-4 flex items-center">
                    <Image src={post.profilePic} alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <h3 className="font-bold">{post.username}</h3>
                    </div>
                  </div>
                  {renderPostContent(post)}
                  <div className="p-4">
                    <p className="mb-2"><strong>{post.username}</strong> {post.description}</p>
                    <p className="text-gray-500 text-sm">{post.timestamp}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-10">
          {posts.filter(post => post.type === 'twitter').map((post) => (
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
