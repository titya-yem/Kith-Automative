const ProductCategories = ({
  image,
  name,
  rating,
}: {
  image: string;
  name: string;
  rating: string;
}) => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {/* Image container with flexible height */}
      <div className="flex-1 max-h-64 p-4 min-h-[200px]">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt="product image"
        />
      </div>

      {/* Fixed-height content container */}
      <div className="h-[160px] flex flex-col px-5 pb-5">
        {/* Title Section */}
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2.5">
          Brand: {name}
        </h5>

        {/* Rating Section */}
        <div className="flex items-center mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
        </div>

        {/* Spacer to push CTA to bottom */}
        <div className="flex  items-center justify-between">
          <div className="flex flex-col mb-4">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Option: Variety
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Year: Variety
            </span>
          </div>
          <a
            href="https://formsubmit.co/el/tuvefa"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
