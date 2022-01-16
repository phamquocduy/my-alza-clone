import { CheckIcon, ExclamationIcon, ThumbUpIcon } from "@heroicons/react/solid";

import classNames from "../../../utils/classNames";

const availIconCls = "h-6 w-6 rounded-full flex items-center justify-center";

const ProductTileAvailability = ({ avail, maxCanBuy }) => {
  // random rule
  let availTextCls = classNames(
    maxCanBuy ? (maxCanBuy < 100 ? "text-yellow-500" : "text-green-500") : "text-red-500",
    "text-sm font-semibold"
  );

  // random rule
  function renderAvailIcon() {
    if (maxCanBuy) {
      return (
        <span className={classNames(maxCanBuy < 100 ? "bg-yellow-500" : "bg-green-500", availIconCls)}>
          <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
        </span>
      );
    } else {
      // warning icon with a micro animation
      return (
        <span className={classNames("bg-red-500", availIconCls)}>
          <ExclamationIcon className="absolute h-4 w-4 text-white" aria-hidden="true" />
          <ExclamationIcon className="relative h-4 w-4 text-white animate-ping" aria-hidden="true" />
        </span>
      );
    }
  }

  return (
    <ul role="list" className="-mb-8 px-2 py-2">
      <li>
        <div className="relative pb-2">
          {/* vertical line */}
          <span className="absolute z-20 top-6 left-3 -ml-px h-2 w-0.5 bg-gray-200" aria-hidden="true" />

          <div className="relative flex space-x-2">
            <div>
              <span className="h-6 w-6 rounded-full flex items-center justify-center bg-green-500">
                <ThumbUpIcon className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="min-w-0 mt-0.5 flex-1 flex justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-green-500">
                  Můžete mít zítra od <span className="font-bold whitespace-nowrap text-green-500">8:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div className="relative pb-8">
          <div className="relative flex space-x-2">
            {renderAvailIcon()}

            <div className="min-w-0 mt-0.5 flex-1 flex justify-between space-x-4">
              <div>
                <p className={availTextCls}>{avail}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ProductTileAvailability;
