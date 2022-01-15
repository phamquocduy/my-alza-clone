import dynamic from "next/dynamic";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

import ProductTile from "../bricks/product-tile/ProductTile";

// turn-off ssr to fix hydration error caused by Swiper
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

const BestBuySection = ({ products }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold text-gray-900">Nejprodávanější</h2>

      <div className="flex mt-6">
        <Swiper
          className="pb-8"
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex">
              <ProductTile product={product} miniVersion={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestBuySection;
