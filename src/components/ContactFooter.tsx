import contactImage from "../assets/footer-image.png";
import FooterForm from "./FooterForm";

const ContactFooter = () => {
  return (
    <div id="contact" className="relative">
      {/* Image */}
      <img
        src={contactImage}
        alt="Kith Automotive Group contact image"
        className="w-full h-[650px] lg:h-[700px] object-cover"
      />

      {/* Overlay Text - "Contact Us" */}
      <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white text-center md:text-3xl lg:text-4xl z-10">
        Contact Us
      </h1>

      {/* Form Section */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[500px] rounded-md px-4 bg-white bg-opacity-90 z-20
                   lg:top-1/4 lg:left-16 lg:transform-none lg:w-1/3"
      >
        <FooterForm />
      </div>
    </div>
  );
};

export default ContactFooter;
