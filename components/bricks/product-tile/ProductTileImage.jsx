const ProductTileImage = ({ url, img: productImg, spec }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 aspect-w-3 aspect-h-4 hover:opacity-75 sm:aspect-none h-72 sm:h-56"
    >
      <img src={productImg} alt={spec} className="object-cover object-center w-full h-full sm:w-full sm:h-full" />
    </a>
  );
};

export default ProductTileImage;
