import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import preventDefault from "@hoc/preventDefault";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={preventDefault(onClick)}
      className="absolute right-2 md:right-4 lg:-right-8 lg:translate-x-full top-1/2 -translate-y-1/2 z-10 bg-base-100 hover:bg-base-200 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
    >
      <IoIosArrowForward className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={preventDefault(onClick)}
      className="absolute left-2 md:left-4 lg:-left-8 lg:-translate-x-full top-1/2 -translate-y-1/2 z-10 bg-base-100 hover:bg-base-200 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
    >
      <IoIosArrowBack className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}

export { NextArrow, PrevArrow };
