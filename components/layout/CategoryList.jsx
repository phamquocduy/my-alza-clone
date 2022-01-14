const categories = [
  { label: "Windows 11 kompatibilní", img: "https://cdn.alza.cz/Foto/category/40/18891299.png" },
  { label: "Běžné užití", img: "https://cdn.alza.cz/Foto/category/40/18843464_4.png" },
  { label: "Herní", img: "https://cdn.alza.cz/Foto/category/40/18848814_4.png" },
  { label: "Pracovní", img: "https://cdn.alza.cz/Foto/category/40/18853299_5.png" },
  { label: "MacBook", img: "https://cdn.alza.cz/Foto/category/40/18854758_5.png" },
  { label: "Lenovo", img: "https://cdn.alza.cz/Foto/category/40/18865374_8.png" },
  { label: "HP", img: "https://cdn.alza.cz/Foto/category/40/18865376_3.png" },
  { label: "Dell", img: "https://cdn.alza.cz/Foto/category/40/18865373_2.png" },
  { label: "Acer", img: "https://cdn.alza.cz/Foto/category/40/18865375_4.png" },
];

const CategoryList = () => {
  return (
    <div className="my-6 md:my-8 lg:my-12">
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {categories.map((item) => {
          return (
            <li
              key={item.label}
              className="col-span-1 flex bg-sky-100 hover:bg-sky-200 cursor-pointer shadow-sm rounded-md"
            >
              {/* icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img className="max-w-[40px]" alt="item.label" src={item.img} />
              </div>

              {/* text */}
              <div className="flex items-center">
                <p className="text-gray-900">{item.label}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
