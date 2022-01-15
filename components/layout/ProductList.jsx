import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

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
      <div className="sm:hidden">
        <Listbox className="block w-full" value={selected} onChange={setSelected}>
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
              <Listbox.Options className="absolute z-10 w-[93%] max-h-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
      </div>

      {/* tabs header - desktop */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-8" aria-label="Tabs">
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
          </nav>
        </div>
      </div>

      {/* tabs content */}
      <div className="max-w-2xl mx-auto mt-6 bg-gray-100 lg:max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px]">
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
