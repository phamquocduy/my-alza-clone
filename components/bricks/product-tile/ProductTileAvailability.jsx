const ProductTileAvailability = ({ avail }) => {
  return (
    <div className="flex flex-col items-center justify-center h-10 text-green-600">
      <div className="text-lg font-bold">Můžete mít zítra od 8:00</div>
      <div className="text-sm">{avail}</div>
    </div>
  );
};

export default ProductTileAvailability;
