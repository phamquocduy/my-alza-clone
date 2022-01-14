import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const BestBuySection = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900">Nejprodávanější</h2>

      <div className="mt-6 w-auto h-64 flex">
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 8 },
            768: { slidesPerView: 3, spaceBetween: 8 },
            1024: { slidesPerView: 5, spaceBetween: 8 },
          }}
        >
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 1</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 2</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 3</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 4</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 5</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 6</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 7</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 8</SwiperSlide>
          <SwiperSlide className="flex flex-col items-center bg-red-400">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestBuySection;
