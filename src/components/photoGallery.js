import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhotoGallery() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <div>
      <div className="md:flex items-center max-w-5xl mx-auto text-left">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl py-4">Photo Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
        </div>
        <div className="md:w-3/4">
          <Slider {...settings}>
            <div className="p-4">
              <img
                className="aspect-9/16 object-cover"
                src="/rsrcs/gallery1.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                className="aspect-9/16 object-cover"
                src="/rsrcs/gallery2.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                className="aspect-9/16 object-cover"
                src="/rsrcs/gallery3.png"
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                className="aspect-9/16 object-cover"
                src="/rsrcs/gallery4.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                className="aspect-9/16 object-cover"
                src="/rsrcs/gallery5.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
