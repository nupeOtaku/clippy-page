import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className=" flex flex-col items-center justify-between md:flex-row">
          {/* Image */}
          <img src={logo} alt="logo" className="scale-50" />
          {/* Container for Menu & Socials */}
          <div className="m-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
            {/* Menus */}
            <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
              {/* Menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Menu 2 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>

              {/* Menu 3 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
};

const Social = () => {
  return (
    <div className="flex w-32 justify-between p-1">
      <a href="#">
        <img src={facebook} alt="facebook" className="faicon duration-200" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" className="faicon duration-200" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram" className="faicon duration-200" />
      </a>
    </div>
  );
};

export { Footer };
