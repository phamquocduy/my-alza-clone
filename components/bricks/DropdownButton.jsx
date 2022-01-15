import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon, FastForwardIcon, ScaleIcon, BellIcon, DocumentAddIcon } from "@heroicons/react/outline";

import classNames from "../../utils/classNames";

const items = [
  { name: "Koupit zrychleně", href: "#", icon: FastForwardIcon },
  { name: "Porovnat", href: "#", icon: ScaleIcon },
  { name: "Hlídat", href: "#", icon: BellIcon },
  { name: "Přidat do seznamu", href: "#", icon: DocumentAddIcon },
];

const DropdownButton = () => {
  return (
    <div className="relative z-10 inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="inline-flex items-center px-2 py-1 text-sm font-medium leading-4 text-white border border-transparent shadow-sm rounded-l-md bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-0"
      >
        <ShoppingCartIcon className="w-5 h-5 mr-2 -ml-0.5" aria-hidden="true" />
        Koupit
      </button>
      <Menu as="span" className="relative z-10 block -ml-0.5">
        <Menu.Button className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-white border border-transparent shadow-sm border-l-white rounded-r-md bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-0">
          <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-20 py-1 mt-1 origin-top-right bg-white rounded-md shadow-lg w-44 ring-1 ring-gray-900 ring-opacity-5 focus:outline-none">
            {items.map(({ name, icon: ItemIcon, href }) => (
              <Menu.Item key={name}>
                {({ active }) => (
                  <a
                    href={href}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <div className="flex items-center">
                      {<ItemIcon className="w-5 h-5 mr-2 -ml-0.5" aria-hidden="true" />}
                      {name}
                    </div>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownButton;
