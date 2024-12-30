import categories from "../services/categories.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full space-y-4">
      <div className="font-semibold text-3xl flex flex-row justify-between items-center">
        <h1 className="text-[var(--second-color)] text-3xl font-semibold">
          Categorías
        </h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Ver todas
        </button>
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h3 className="text-center text-gray-700 font-medium">
                {item.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
