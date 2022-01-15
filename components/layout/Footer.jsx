const navigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/duy-pham-quoc/",
    img: "https://img.icons8.com/fluency/48/000000/linkedin.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/phamquocduy",
    img: "https://img.icons8.com/fluency/48/000000/github.png",
  },
];

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 bg-white">
      <div className="flex justify-center space-x-6 md:order-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{item.name}</span>
            <img src={item.img} alt={item.name} className="w-6 h-6" />
          </a>
        ))}
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base text-gray-400">&copy; 2022 by Phạm Quốc Duy</p>
      </div>
    </div>
  );
};

export default Footer;
