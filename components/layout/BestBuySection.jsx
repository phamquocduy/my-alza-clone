import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon, ScaleIcon } from "@heroicons/react/outline";

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
          {products.map((product) => {
            let roundedRating = Math.round(product.rating * 10) / 10;

            return (
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
                  <div className="px-3 pt-2 xl:col-span-1 flex justify-between">
                    <div className="text-left">
                      <button
                        type="button"
                        className="inline-flex items-center p-1 gap-2 border border-transparent rounded-full shadow-sm focus:outline-none focus:ring-0"
                      >
                        <HeartIcon className="h-5 w-5 text-red-200 hover:text-red-500" aria-hidden="true" />
                        <ScaleIcon className="h-5 w-5 text-sky-200 hover:text-sky-500" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div
                        className={classNames(
                          roundedRating > 3 ? "bg-yellow-50 text-yellow-800" : "bg-gray-50 text-gray-800",
                          "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                        )}
                      >
                        <StarIcon
                          className={classNames(
                            roundedRating > 3 ? "text-yellow-500" : "text-gray-500",
                            "-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 "
                          )}
                          aria-hidden="true"
                        />
                        {roundedRating}/5
                      </div>
                    </div>
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
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BestBuySection;
