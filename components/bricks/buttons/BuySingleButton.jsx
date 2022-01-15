const BuySingleButton = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2 py-1 font-medium leading-4 bg-white rounded-md shadow-md group hover:bg-sky-600 focus:outline-none focus:ring-0"
    >
      <img src="/images/cart.png" className="group-hover:text-white w-6 h-6 mr-0.5" aria-hidden="true" />
    </button>
  );
};

export default BuySingleButton;
