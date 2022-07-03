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
    <div className="px-4">
      <div className="md:flex items-center max-w-5xl mx-auto text-left">
        <div className="mx-2">
          <h2 className="text-2xl font-bold sm:text-3xl py-4">Photo Gallery</h2>
          <p>
            Lets share your creativity to the world and see how they are
            inspired by it.
          </p>
        </div>
        <div className="md:w-3/4">
          <Slider {...settings}>
            <div className="p-4">
              <img
                className="aspect-9/16 object-cover"
                src="/rsrcs/gallery0.jpg"
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
                src="/rsrcs/gallery3.jpg"
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
