import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import ContactForm from "../component/ContactForm";

const Enquiry = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <h1 className="text-[42px] font-semibold text-gray-900 mb-4">
        Get in Touch
      </h1>

      <p className="text-gray-500 text-lg mb-16">
        Let’s Connect: Reach out and let’s bring your vision to life, together
      </p>

      <div className="flex items-center justify-center mb-16">
        <div className="w-full border-t border-gray-200"></div>
        <h2 className="px-6 text-sm tracking-widest text-black whitespace-nowrap relative">
          LET’S MAKE SOMETHING GREAT TOGETHER
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"></span>
        </h2>
        <div className="w-full border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4 relative md:pr-10">
          <CiLocationOn size={26} />
          <h3 className="font-semibold tracking-wide">ADDRESS</h3>
          <p className="text-gray-500 leading-relaxed">
            Anywhere from India,
            <br />
            Now at, Vellore
          </p>

          <span className="hidden md:block absolute right-0 top-0 h-full w-[1px] bg-gray-300"></span>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4 relative md:px-10">
          <MdOutlineMailOutline size={26} />
          <h3 className="font-semibold tracking-wide">E-MAIL</h3>
          <p className="text-gray-900">info@azerotech.com</p>

          <span className="hidden md:block absolute right-0 top-0 h-full w-[1px] bg-gray-300"></span>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4 md:pl-10">
          <FiPhone size={26} />
          <h3 className="font-semibold tracking-wide">PHONE</h3>
          <p className="text-gray-900 bg-gray-200 px-3 py-1 rounded">
            +91 9363 95 9787
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Enquiry;
