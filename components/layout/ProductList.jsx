import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

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

  // products = products.slice(0, 2);

  return (
    <div>
      {/* tabs header - mobile */}
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
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
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {productTabs.map((tab) => (
              <div
                key={tab.name}
                className={classNames(
                  tab.current
                    ? "border-teal-500 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap py-4 px-1 border-b-2 font-normal transition hover:cursor-pointer"
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
      <div className="mt-6 max-w-2xl lg:max-w-7xl mx-auto bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white flex flex-col overflow-hidden p-2">
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

              <div className="flex-1 px-4 py-2 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a
                    className="text-sky-900 font-bold hover:underline"
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                  </a>
                </h3>
                <p className="text-xs text-gray-500">{product.spec}</p>

                {/* promo */}
                <div className="flex-1 flex flex-row justify-between">
                  <span className="text-red-600 text-xs font-bold whitespace-nowrap">+ ZDARMA</span>
                  <span className="ml-6 px-1 text-gray-500 text-xs font-bold whitespace-pre-line">
                    Elektronická licence
                  </span>
                </div>

                {/* prices */}
                <div
                  className={classNames(
                    product.order && product.order > 20 ? "bg-yellow-200" : "bg-transparent", // random rule
                    "bg-yellow-200 h-20 flex flex-row justify-between items-center px-2"
                  )}
                >
                  <div>
                    <div className="text-red-500 text-lg font-semibold">{product.priceInfo.priceWithVat}</div>
                    <div className="text-xs">
                      bez DPH <span className="font-bold">{product.priceInfo.priceWithoutVat}</span>
                    </div>
                  </div>

                  {/* Buy btn */}
                  <DropdownButton />
                </div>

                <div className="h-10 flex flex-col justify-center items-center text-green-600">
                  <div className="text-lg font-bold">Můžete mít zítra od 8:00</div>
                  <div className="text-sm font-light">{product.avail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;