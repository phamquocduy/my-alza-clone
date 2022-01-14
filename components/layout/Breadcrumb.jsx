import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

const breadcrumbs = [
  { id: 1, label: "Počítače a notebooky", href: "#" },
  { id: 2, label: "Notebooky", href: "#" },
];

const Breadcrumb = () => {
  return (
    <div className="border-b border-gray-200 font-medium text-sm">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-1 py-4">
          <li>
            <a href="#" aria-current="page" className="text-gray-500 hover:text-gray-900">
              <div className="flex items-center">
                <HomeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              </div>
            </a>
          </li>

          {breadcrumbs.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex items-center text-gray-500 hover:text-gray-900">
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <a href="#" aria-current="page" className="mx-2">
                    {item.label}
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
