import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const SocialFeed = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(2);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/ig-posts?populate=*`);
        const instagramData = response.data.data.map(item => {
          const post = item.attributes.data_ig;
          let postPic = post.media_url;
          if (post.media_type === 'CAROUSEL_ALBUM') {
            postPic = [post.media_url]; 
          }
          return {
            id: item.id, // Asegúrate de usar el id correcto aquí
            type: post.media_type,
            username: 'agustinforchieri',
            profilePic: '/images/profile.jpg',
            postPic: postPic,
            description: post.caption,
            timestamp: new Date(post.timestamp).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            }),
            likes: 0,
            comments: 0
          };
        });

        // Ordenar por id de manera descendente
        const sortedInstagramData = instagramData.sort((a, b) => b.id - a.id);
        setPosts(prevPosts => [...sortedInstagramData, ...prevPosts]);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    const fetchTweets = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/tweets`);
        const tweetsData = response.data.data.map(tweet => ({
          id: tweet.id,
          type: 'twitter',
          twitterUrl: tweet.attributes.twitterUrl,
        }));
        setPosts(prevPosts => [...tweetsData, ...prevPosts]);

        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = () => {
          window.twttr.widgets.load();
        };
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchInstagramPosts();
    fetchTweets();
  }, []);

  const renderPostContent = (post) => {
    switch(post.type) {
      case 'IMAGE':
        return <Image src={post.postPic} alt="Post" width={400} height={256} className="w-full h-auto object-cover rounded-lg" />;
      case 'VIDEO':
      case 'REELS':
        return (
          <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
            <video controls className="absolute top-0 left-0 w-full h-full object-cover rounded-lg">
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
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 2);
  };

  const instagramPosts = posts.filter(post => post.type !== 'twitter');
  const tweets = posts.filter(post => post.type === 'twitter');

  return (
    <section className="p-4 md:p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Redes Sociales</h2>
      
      {/* Vista móvil */}
      <div className="md:hidden flex flex-col space-y-4">
        {/* Tweets */}
        {tweets.map((post) => (
          <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full">
            <div className="p-4 flex justify-center">
              <blockquote className="twitter-tweet" data-dnt="true" data-theme="light" style={{ width: '100%', marginBottom: 0 }}>
                <a href={post.twitterUrl}></a>
              </blockquote>
            </div>
          </div>
        ))}
        
        {/* Posts de Instagram */}
        {instagramPosts.slice(0, visiblePosts).map((post) => (
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

      {/* Vista desktop */}
      <div className="hidden md:grid grid-cols-3 gap-10">
  {/* Columna 1 y 2: Posts de Instagram */}
  <div className="col-span-2 grid grid-cols-2 gap-10" style={{ gridAutoRows: 'min-content' }}>
    {instagramPosts.slice(0, visiblePosts).map((post, index) => (
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

  {/* Columna 3: Tweets */}
  <div className="flex flex-col space-y-4">
    {tweets.map((post) => (
      <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full">
        <div className="p-4 flex justify-center">
          <blockquote className="twitter-tweet" data-dnt="true" data-theme="light" style={{ width: '100%', marginBottom: 0 }}>
            <a href={post.twitterUrl}></a>
          </blockquote>
        </div>
      </div>
    ))}
  </div>
</div>


      {visiblePosts < instagramPosts.length && (
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

export default SocialFeed;
