import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FilterIcon,
  SelectorIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/react/solid";

import classNames from "../../utils/classNames";

import ProductTile from "../bricks/product-tile/ProductTile";

const tabs = [
  { name: "top", label: "TOP" },
  { name: "best_buy", label: "Nejprodávanější" },
  { name: "price_asc", label: "Od nejlevnějšího" },
  { name: "price_desc", label: "Od nejdražšího" },
];

const ProductList = ({ products }) => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div>
      {/* tabs header - mobile */}
      <div className="md:hidden flex justify-between">
        <Listbox className="block w-1/2" value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 border-2 border-sky-500 text-left bg-white rounded-lg cursor-pointer sm:text-sm">
              <span className="block truncate">{selected.label}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-1/2 max-h-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {tabs.map((tab, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "text-sky-900 bg-sky-100" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-10"
                      )
                    }
                    value={tab}
                  >
                    {({ selected }) => (
                      <>
                        <span className={classNames(selected ? "font-medium" : "font-normal", "block truncate")}>
                          {tab.label}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        {/* Filter + View mode */}
        <FilterPanel />
      </div>

      {/* tabs header - desktop */}
      <div className="hidden md:block">
        <div className="border-b border-gray-200">
          <nav className="flex justify-between" aria-label="Tabs">
            <div className="flex -mb-px space-x-8">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={classNames(
                    tab.name === selected.name
                      ? "border-sky-500 text-sky-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "truncate py-4 px-1 border-b-2 font-semibold transition hover:cursor-pointer"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                  onClick={() => setSelected(tab)}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            {/* Filter + View mode */}
            <FilterPanel />
          </nav>
        </div>
      </div>

      {/* tabs content */}
      <div className="max-w-2xl mx-auto mt-6 bg-gray-100 lg:max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px]">
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>

      {/* tabs pagination */}
      <div className="bg-white py-2 flex items-center justify-between border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-700">
            Celkem <span className="font-bold">{products.length}</span> položek
          </p>
        </div>
        <div>
          <nav className="z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button className="inline-flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-sky-600 hover:text-white">
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            {[1, 2, 3].map((item) => (
              <button
                key={item}
                className="bg-white border-gray-300 text-sm font-semibold text-gray-500 hover:bg-sky-600 hover:text-white md:inline-flex items-center px-4 py-2 border"
              >
                {item}
              </button>
            ))}

            <span className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>

            <button className="inline-flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-sky-600 hover:text-white">
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

const FilterPanel = () => {
  return (
    <div className="flex justify-end items-center space-x-2">
      <button
        type="button"
        className="-ml-px inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-sky-500 text-sm font-medium text-white hover:bg-sky-600"
      >
        <FilterIcon className="h-5 w-5 mr-2 -ml-1 text-white" aria-hidden="true" />
        Filtrovat
      </button>
      <div className="inline-flex shadow-sm rounded-md">
        <button
          type="button"
          className="-mr-px inline-flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-sky-500"
        >
          <ViewGridIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-ml-px inline-flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400"
        >
          <ViewListIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
