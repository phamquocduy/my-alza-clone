import React from "react";

const ProductTileStickers = ({ order }) => {
  // random rule
  let stickerImg =
    order == null
      ? ""
      : order > 10 && order < 15
      ? "https://cdn.alza.cz/Foto/CommodityIcons/exclusivity-cz.svg"
      : order > 20
      ? "https://i.alza.cz/Foto/CommodityIcons/neo-cz.svg"
      : "https://webapi.alza.cz/api/catalog/icons/dynamicIcon?path=https%3a%2f%2fcdn.alza.cz%2fFoto%2fCommodityIcons%2fdynamic-discount.svg&value=-10%25";

  return (
    <div className="absolute w-max h-max inset-2">
      <img src={stickerImg} alt="Akce" />
    </div>
  );
};

export default ProductTileStickers;
