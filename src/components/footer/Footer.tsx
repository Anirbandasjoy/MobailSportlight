import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-20">
      <footer className="bg-blue-200 text-gray-700 py-8">
        <div className="container mx-auto px-4 py-14 flex flex-wrap justify-between">
          {/* Logo and Contact Information */}
          <div className="flex items-start space-x-4 mb-6 md:mb-0">
            <div className="flex-shrink-0">
              <img
                src="https://themes.webdevia.com/phonerepair/wp-content/uploads/2016/03/logo-footer.png"
                alt="Phone Repair"
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Mobail Sporlight</h2>
              <div className="space-y-1">
                <p className="mt-2">Phone: +8801772838734</p>
                <p>Fax: +1 496 457 654</p>
                <p>Email: joy600508@gmail.com</p>
                <p>Address: Dhaka, Sukrabad 32</p>
              </div>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">NEWSLETTER</h2>
            <form className="flex w-full max-w-sm">
              <input
                type="email"
                className="px-4 py-2 w-full rounded-l-md text-black"
                placeholder="Email Address"
              />
              <button className="px-6 bg-orange-500 text-white rounded-r-md">
                GO
              </button>
            </form>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-gray-600">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-gray-600">
                <FaTwitter />
              </Link>
              <Link to="#" className="text-gray-600">
                <FaVimeoV />
              </Link>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="container mx-auto text-center">
            <p>© 2024 Mobail Sporlight All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link to="/mobails" className="text-gray-600">
                Mobails
              </Link>
              <Link to="/about" className="text-gray-600">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
