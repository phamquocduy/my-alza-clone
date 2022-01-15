import classNames from "../../../utils/classNames";

import BuyDropdownButton from "../buttons/BuyDropdownButton";
import BuySingleButton from "../buttons/BuySingleButton";

const ProductTilePrices = ({ order, priceInfo, miniVersion }) => {
  // random rule
  let pricesWrapperCls = classNames(
    order && order > 20 ? "bg-yellow-200" : "bg-transparent",
    "h-16 p-2 flex flex-row justify-between items-center"
  );

  return (
    <div className={pricesWrapperCls}>
      <div>
        <div className="text-lg font-semibold text-red-500">{priceInfo.priceWithVat},-</div>
        <div className="text-xs">
          bez DPH <span className="font-bold">{priceInfo.priceWithoutVat},-</span>
        </div>
      </div>

      {miniVersion ? <BuySingleButton /> : <BuyDropdownButton />}
    </div>
  );
};

export default ProductTilePrices;
