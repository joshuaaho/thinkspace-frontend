import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@pages/CreatePost/Components/Image";
import { useFormContext } from "react-hook-form";
import { FormData } from "@pages/CreatePost/Form";
import { NextArrow, PrevArrow } from "@common/SliderArrows";
import { FaPlus } from "react-icons/fa6";

export default function SliderComponent() {
  const { watch } = useFormContext<FormData>();
  const imgUrls = watch("imgUrls");

  if (!imgUrls || imgUrls.length === 0) return null;

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

  return (
    <div className="absolute inset-0">
      <Slider {...settings}>
        {imgUrls.map((url, index) => (
          <div key={index} className="h-[400px]">
            <Image imageUrl={url} />
          </div>
        ))}
      </Slider>
      
      {/* Add more images icon */}
      <div className="absolute top-16 right-4 z-20">
        <div className="w-10 h-10 bg-base-100 hover:bg-base-200 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer">
          <FaPlus className="w-5 h-5 text-base-content" />
        </div>
      </div>
    </div>
  );
}
