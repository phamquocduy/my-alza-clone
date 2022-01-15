import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

import classNames from "../../utils/classNames";

import DropdownButton from "../bricks/DropdownButton";

const tabs = [
  { name: "top", label: "TOP", current: true },
  { name: "best_buy", label: "Nejprodávanější", current: false },
  { name: "price_asc", label: "Od nejlevnějšího", current: false },
  { name: "price_desc", label: "Od nejdražšího", current: false },
];

const ProductList = ({ products }) => {
  const [productTabs, setTabs] = useState(tabs);

  return (
    <div>
      {/* tabs header - mobile */}
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full py-2 pl-3 pr-10 text-base rounded-md ring-sky-500 border-sky-500 focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          defaultValue={productTabs.find((tab) => tab.current).label}
        >
          {productTabs.map((tab) => (
            <option key={tab.name}>{tab.label}</option>
          ))}
        </select>
      </div>

      {/* tabs header - desktop */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-8" aria-label="Tabs">
            {productTabs.map((tab) => (
              <div
                key={tab.name}
                className={classNames(
                  tab.current
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap py-4 px-1 border-b-2 font-semibold transition hover:cursor-pointer"
                )}
                aria-current={tab.current ? "page" : undefined}
                onClick={() => setTabs(productTabs.map((item) => ({ ...item, current: item.name === tab.name })))}
              >
                {tab.label}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* tabs content */}
      <div className="max-w-2xl mx-auto mt-6 bg-gray-100 lg:max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px]">
        {products.map((product) => {
          let roundedRating = Math.round(product.rating * 10) / 10;

          return (
            <div key={product.id} className="relative flex flex-col p-2 bg-white">
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

              <div className="flex flex-col flex-1 px-4 py-2 space-y-2">
                <h3 className="text-sm font-medium">
                  <a
                    className="font-bold text-sky-900 hover:underline"
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                  </a>
                </h3>
                <p className="text-xs text-gray-500">{product.spec}</p>

                {/* promo */}
                <div className="flex flex-row justify-between flex-1">
                  <span className="text-xs font-bold text-red-600 whitespace-nowrap">+ ZDARMA</span>
                  <span className="px-1 ml-6 text-xs font-bold text-gray-500 whitespace-pre-line">
                    Elektronická licence
                  </span>
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

                  {/* Buy btn */}
                  <DropdownButton />
                </div>

                <div className="flex flex-col items-center justify-center h-10 text-green-600">
                  <div className="text-lg font-bold">Můžete mít zítra od 8:00</div>
                  <div className="text-sm">{product.avail}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
