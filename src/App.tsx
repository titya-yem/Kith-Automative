import heroImage from "./assets/hero-image.png";

const App = () => {
  return (
    <section className="mb-14 bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl text-center md:text-left mb-4 text-2xl md:text-4xl font-extrabold tracking-tight leading-none dark:text-white">
            We guarantee to get you the best exclusive deal for your luxury
            automation
          </h1>
          <p className="max-w-2xl text-center md:text-left text-base mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
            At Kith Automative Group we will servce you to the best of our
            ability to get you the best deal for your luxury automation.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-4 text-sm md:text-base md:px-5 md:py-3 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Contact With Us
              <svg
                className="w-4 h-4 ml-2 -mr-1 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="md:flex md:mt-0 mt-12 lg:col-span-5">
          <img src={heroImage} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default App;
