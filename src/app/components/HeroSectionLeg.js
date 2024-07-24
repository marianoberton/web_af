import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const images = [
    "/images/perfil_otra_hero_edit.jpg",
    "/images/perfil_legislativo41.jpg"
  ];

  return (
    <div className="hero mb-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-96 relative">
            <div 
              className="bg-cover bg-center h-full"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="bg-black bg-opacity-50 h-full w-full flex items-end justify-end p-5">
                <h1 className="text-white text-5xl font-bold">Legislatura</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
