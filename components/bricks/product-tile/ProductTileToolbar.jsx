import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

import classNames from "../../../utils/classNames";

const ProductTileToolbar = ({ rating }) => {
  let roundedRating = Math.round(rating * 10) / 10;

  return (
    <div className="flex justify-between py-2 xl:col-span-1">
      {/* rating */}
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
          {roundedRating} z 5
        </div>
      </div>

      {/* links */}
      <div className="text-right">
        <button
          type="button"
          className="inline-flex items-center gap-2 border border-transparent rounded-full focus:outline-none focus:ring-0"
        >
          <HeartIcon className="w-5 h-5 text-red-200 hover:text-red-500" aria-hidden="true" />
          <ShareIcon className="w-5 h-5 text-sky-200 hover:text-sky-500" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ProductTileToolbar;
