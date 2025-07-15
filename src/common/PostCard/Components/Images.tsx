import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { usePostContext } from "@common/PostCard";

import { NextArrow, PrevArrow } from "@common/SliderArrows";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: "h-full"
};
function Images() {
  const { post } = usePostContext();


  if (post.imgUrls.length === 0) {
    return null;
  }
  return (
    <>

        <div className="relative min-h-[400px] overflow-visible w-3/4 mx-auto">
          <Slider {...settings}>
            {post.imgUrls.map((imgUrl, index) => (
              <div key={index} className="relative">
                <img
                  src={imgUrl}
                  alt={`uploaded-${index}`}
                  className="w-full h-[400px] object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      
    </>
  );
}

export default Images;
