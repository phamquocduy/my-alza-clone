import dynamic from "next/dynamic";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

// turn-off ssr to fix hydration error caused by Swiper
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

import classNames from "../../utils/classNames";

const BestBuySection = ({ products }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold text-gray-900">Nejprodávanější</h2>

      <div className="flex mt-6">
        <Swiper
          modules={[Navigation, Pagination]}
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
                <div className="relative flex flex-col pb-2 bg-white">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 aspect-w-3 aspect-h-4 hover:opacity-75 sm:aspect-none h-72 sm:h-56"
                  >
                    <img
                      src={product.img}
                      alt={product.spec}
                      className="object-cover object-center w-full h-full sm:w-full sm:h-full"
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
                  <div className="flex justify-between px-3 pt-2 xl:col-span-1">
                    <div className="text-left">
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

                    <div className="text-right">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 p-1 border border-transparent rounded-full focus:outline-none focus:ring-0"
                      >
                        <HeartIcon className="w-5 h-5 text-red-200 hover:text-red-500" aria-hidden="true" />
                        <ShareIcon className="w-5 h-5 text-sky-200 hover:text-sky-500" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col h-56 px-4 py-2">
                    <div className="h-28">
                      <h3 className="text-sm font-medium">
                        <a
                          className="text-sm font-bold text-sky-900 hover:underline"
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {product.name}
                        </a>
                      </h3>

                      {/* promo */}
                      <div className="flex flex-row justify-between mt-4">
                        <span className="text-xs font-bold text-red-600 whitespace-nowrap">+ ZDARMA</span>
                        <span className="px-1 ml-6 text-xs font-bold text-gray-500 whitespace-pre-line">
                          Elektronická licence
                        </span>
                      </div>
                    </div>

                    {/* prices */}
                    <div
                      className={classNames(
                        product.order && product.order > 20 ? "bg-yellow-200" : "bg-transparent", // random rule
                        "h-16 flex flex-row justify-between items-center px-1"
                      )}
                    >
                      <div>
                        <div className="text-lg font-semibold text-red-500">{product.priceInfo.priceWithVat},-</div>
                        <div className="text-xs">
                          bez DPH <span className="font-bold">{product.priceInfo.priceWithoutVat},-</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="inline-flex items-center px-2 py-1 font-medium leading-4 bg-white rounded-md shadow-md group hover:bg-sky-600 focus:outline-none focus:ring-0"
                      >
                        <img
                          src="/images/cart.png"
                          className="group-hover:text-white w-6 h-6 mr-0.5"
                          aria-hidden="true"
                        />
                      </button>
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
