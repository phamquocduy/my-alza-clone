import ProductTileAvailability from "./ProductTileAvailability";
import ProductTileImage from "./ProductTileImage";
import ProductTilePrices from "./ProductTilePrices";
import ProductTileSpecification from "./ProductTileSpecification";
import ProductTileStickers from "./ProductTileStickers";
import ProductTileToolbar from "./ProductTileToolbar";

const ProductTile = ({ product, miniVersion = false }) => {
  return (
    <div className="relative flex flex-col p-2 bg-white">
      <ProductTileImage {...product} />

      <ProductTileStickers {...product} />

      <ProductTileToolbar {...product} />

      <ProductTileSpecification {...product} miniVersion={miniVersion} />

      <ProductTilePrices {...product} miniVersion={miniVersion} />

      <ProductTileAvailability {...product} />
    </div>
  );
};

export default ProductTile;
