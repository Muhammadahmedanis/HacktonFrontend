import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white relative">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      style={{ backgroundImage: "url('/beneficiary-help.jpg')" }}
    ></div>
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Beneficiary App</h3>
          <p className="text-green-100 mb-4">Simplifying beneficiary management for a better tomorrow.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-green-200 transition-colors">
              <FaFacebook size={23} />
            </a>
            <a href="#" className="text-white hover:text-green-200 transition-colors">
              <RiTwitterXLine size={21} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button
                variant="link"
                className="text-white hover:text-green-200 p-0 h-auto font-normal"
                // onClick={() => setCurrentPage("admin")}
              >
                Admin Dashboard
              </button>
            </li>
            <li>
              <button
                variant="link"
                className="text-white hover:text-green-200 p-0 h-auto font-normal"
                // onClick={() => setCurrentPage("department")}
              >
                Department Management
              </button>
            </li>
            <li>
              <button
                variant="link"
                className="text-white hover:text-green-200 p-0 h-auto font-normal"
                // onClick={() => setCurrentPage("registration")}
              >
                Beneficiary Registration
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-green-100 mb-2 flex gap-x-2 items-center">
            <MdOutlineMarkEmailRead size={21} />
            info@beneficiaryapp.com
          </p>
          <p className="text-green-100 mb-4 flex gap-x-2 items-center">
            <LuPhone size={20} />
            (123) 456-7890
          </p>
          <button className="bg-white px-2 py-1.5 rounded text-green-600 hover:bg-green-100">Contact Support</button>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t border-green-500 text-center text-green-100">
        <p>&copy; {new Date().getFullYear()} Beneficiary App. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;