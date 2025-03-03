import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div className="footer-column">
          <img
            src="your-logo.png"
            alt="Netsa-Delala Logo"
            className="footer-logo mb-4 w-32"
          />
          <p className="text-sm mb-2">
            Ak4 Delala is a website designed for brokers. In this website,
            anyone can advertise their product or service. Register and try it
            now.
          </p>
          <p>
            <strong>ADDRESS:</strong> Addis Ababa, Ethiopia
          </p>
          <p>
            <strong>PHONE:</strong> +251-949-61-83-38
          </p>
          <p>
            <strong>OR:</strong> +251-964-84-66-09
          </p>
          <p>
            <strong>EMAIL:</strong> aklilubeyero@gmail.com
          </p>
        </div>

        {/* Pages Links */}
        <div className="footer-column">
          <h4 className="text-lg font-semibold mb-4">Pages</h4>
          <ul>
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-blue-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/advertise" className="hover:text-blue-400">
                To Advertise
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4 className="text-lg font-semibold mb-4">Our Company</h4>
          <ul>
            <li>
              <Link to="/login" className="hover:text-blue-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-400">
                Register
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/latest-products" className="hover:text-blue-400">
                Latest Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-blue-400">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/short-video" className="hover:text-blue-400">
                Short Video
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Subscribe */}
        <div className="footer-column">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="social-icons flex space-x-4 mb-4">
            <Link to="#">
              <img
                src="../images/facebook-icon.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </Link>
            <Link to="#">
              <img
                src="../images/youtube-icon.png"
                alt="YouTube"
                className="w-6 h-6"
              />
            </Link>
            <Link to="#">
              <img
                src="../images/telegram-icon.png"
                alt="Telegram"
                className="w-6 h-6"
              />
            </Link>
            <Link to="#">
              <img
                src="../images/instagram-icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </Link>
          </div>
          <h4 className="text-lg font-semibold mb-4">Subscribe Now</h4>
          <p className="text-sm mb-4">
            Subscribe to watch a helpful video about how to upload a product on
            Netsa-Delala.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
