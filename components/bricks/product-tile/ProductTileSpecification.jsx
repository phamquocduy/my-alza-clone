import classNames from "../../../utils/classNames";

const ProductTileSpecification = ({ url, name, spec, miniVersion }) => {
  let specCls = classNames(miniVersion ? "line-clamp-3" : "", "text-xs text-gray-500");

  return (
    <div className="flex flex-col flex-1 space-y-2">
      <h3 className="text-sm font-medium">
        <a className="font-bold text-sky-900 hover:underline" href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>

      <p className={specCls}>{spec}</p>

      {/* promo */}
      <div className="flex flex-row px-1 text-left">
        <span className="text-xs font-bold text-red-600 whitespace-nowrap">+ ZDARMA</span>
        <span className="px-1 ml-6 text-xs font-bold text-gray-500 whitespace-pre-line">
          Elektronická licence a bezstarostný servis
        </span>
      </div>
    </div>
  );
};

export default ProductTileSpecification;
