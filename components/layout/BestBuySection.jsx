import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { StarIcon } from "@heroicons/react/solid";

import classNames from "../../utils/classNames";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const BestBuySection = ({ products }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold text-gray-900">Nejprodávanější</h2>

      <div className="mt-6 flex">
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 8 },
            768: { slidesPerView: 3, spaceBetween: 8 },
            1024: { slidesPerView: 4, spaceBetween: 8 },
            1280: { slidesPerView: 5, spaceBetween: 8 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col items-center">
              <div key={product.id} className="relative bg-white flex flex-col overflow-hidden pb-2">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-w-3 aspect-h-4 hover:opacity-75 sm:aspect-none h-72 sm:h-56 p-2"
                >
                  <img
                    src={product.img}
                    alt={product.spec}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  />
                </a>

                {/* stickers */}
                <div className="absolute w-max h-max inset-2">
                  <img
                    src={
                      // random rule
                      product.order == null
                        ? ""
                        : product.order > 10 && product.order < 15
                        ? "https://cdn.alza.cz/Foto/CommodityIcons/exclusivity-cz.svg"
                        : product.order > 20
                        ? "https://i.alza.cz/Foto/CommodityIcons/neo-cz.svg"
                        : "https://webapi.alza.cz/api/catalog/icons/dynamicIcon?path=https%3a%2f%2fcdn.alza.cz%2fFoto%2fCommodityIcons%2fdynamic-discount.svg&value=-10%25"
                    }
                    alt="Akce"
                  />
                </div>

                {/* rating */}
                <div className="px-3 py-2 flex justify-center items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? "text-yellow-400" : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm hover:underline text-gray-700">{product.rating}x</p>
                </div>

                <div className="h-56 px-4 py-2 flex flex-col">
                  <div className="h-28">
                    <h3 className="text-sm font-medium text-center">
                      <a
                        className="text-sm text-sky-900 font-bold hover:underline"
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.name}
                      </a>
                    </h3>

                    {/* promo */}
                    <div className="mt-4 flex flex-row justify-between">
                      <span className="text-red-600 text-xs font-bold whitespace-nowrap">+ ZDARMA</span>
                      <span className="ml-6 px-1 text-gray-500 text-xs font-bold whitespace-pre-line">
                        Elektronická licence
                      </span>
                    </div>
                  </div>

                  {/* prices */}
                  <div
                    className={classNames(
                      product.order && product.order > 20 ? "bg-yellow-200" : "bg-transparent", // random rule
                      "h-16 flex flex-row justify-between items-center px-2"
                    )}
                  >
                    <div>
                      <div className="text-red-500 text-lg font-semibold">{product.priceInfo.priceWithVat},-</div>
                      <div className="text-xs">
                        bez DPH <span className="font-bold">{product.priceInfo.priceWithoutVat},-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestBuySection;
