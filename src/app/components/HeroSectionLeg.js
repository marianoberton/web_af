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
    autoplaySpeed: 3000,
  };

  const images = [
    "https://af-strapi-8y5n.onrender.com/uploads/perfil_otra_hero_edit_aa813a88ba.jpg",
    "https://af-strapi-8y5n.onrender.com/uploads/perfil_legislativo41_33689cd5c8.jpg",
  ];

  return (
    <div className="hero mb-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="h-96 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-end p-5">
              <h1 className="text-white text-5xl font-bold">Legislatura</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
