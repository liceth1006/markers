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
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-primary fw-semibold fs-3">Categorías</h1>
        <button className="btn btn-success">Ver todas</button>
      </div>
      <div>
        <Slider {...settings}>
          {categories.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.categories_url}
                alt={item.name}
                className="rounded-circle img-fluid"
                style={{ width: "6rem", height: "6rem", objectFit: "cover" }}
              />
              <h3 className="mt-2 text-secondary fw-medium">{item.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
