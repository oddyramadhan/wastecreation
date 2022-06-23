import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery1 from "../rsrcs/gallery1.jpg";
import Gallery2 from "../rsrcs/gallery2.jpg";
import Gallery3 from "../rsrcs/gallery3.png";
import Gallery4 from "../rsrcs/gallery4.jpg";
import Gallery5 from "../rsrcs/gallery5.jpg";

export default function PhotoGallery() {
  const settings = {
    classNameName: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <div className="bg-gray-100">
      <div className="md:flex items-center max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl p-4">Photo Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
        </div>
        <div className="md:w-3/4">
          <Slider {...settings}>
            <div className="p-4">
              <img className="aspect-9/16 object-cover" src={Gallery1} alt="" />
            </div>
            <div className="p-4">
              <img className="aspect-9/16 object-cover" src={Gallery2} alt="" />
            </div>
            <div className="p-4">
              <img className="aspect-9/16 object-cover" src={Gallery3} alt="" />
            </div>
            <div className="p-4">
              <img className="aspect-9/16 object-cover" src={Gallery4} alt="" />
            </div>
            <div className="p-4">
              <img className="aspect-9/16 object-cover" src={Gallery5} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
