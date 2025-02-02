import aboutimg from "../assets/about-img.svg";

const AboutUs = () => {
  return (
    <div id="about" className="mt-20 w-full relative">
      {/* Image */}
      <img
        src={aboutimg}
        alt="Kith Automative Group about image"
        className="w-full h-[500px] lg:h-[700px] object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 right-0 flex flex-col px-4 py-6 *:text-white">
        {/* About Us Heading */}
        <h1 className="text-2xl font-bold text-center mb-4 md:text-3xl lg:text-4xl">
          About Us
        </h1>

        {/* Two Divs Side by Side */}
        <div className="text-base lg:text-xl bg-black bg-opacity-40 md:bg-transparent lg:mt-10">
          <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-6xl mx-auto">
            {/* Left Div */}
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
              <p className="font-semibold">
                Kith Automative Group{" "}
                <span className="font-normal">
                  is an automobile agency to find your desire dream car and make
                  your dream comes true.
                </span>
              </p>
              <p className="font-semibold">
                Mission{" "}
                <span className="font-normal">
                  To help you find and own your dream car through exceptional
                  service and trust.
                </span>
              </p>
              <p className="font-semibold">
                Vision{" "}
                <span className="font-normal">
                  To be the automotive agency that turns car dreams into
                  lifelong realities.
                </span>
              </p>
            </div>

            {/* Right Div */}
            <div className="w-full md:w-[45%] pl-0 md:pl-4">
              <p className="font-semibold">
                Vision{" "}
                <span className="font-normal">
                  Customer First: Your dreams drive us.
                </span>
              </p>
              <ul className="list-decimal pl-4">
                <li>Integrity: Honesty in every deal.</li>
                <li>Excellence: Quality in everything we do.</li>
                <li>Passion: Love for cars, love for you.</li>
                <li>Community: Building relationships that last.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
