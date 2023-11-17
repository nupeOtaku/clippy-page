import logo from "../images/logo.svg";

export const HeroSection = () => {
  return (
    <div className="section-container mb-40 pt-16">
      <img src={logo} alt="logo" className="mx-auto my-16" />
      <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
        A history of everything you copy
      </h3>
      <p className="section-content mb-10 text-2xl">
        Clipboard allows you to track and organize everything you copy.
        Instanctly access your clipbord on all your devices.
      </p>

      {/* Button Container */}
      <div className="button-container">
        <a
          href="#"
          className="rounded-full bg-strongCyan p-4 px-8 shadow-lg transition duration-200 hover:opacity-80"
        >
          Download for iOS
        </a>
        <a
          href="#"
          className="rounded-full bg-lightBlue p-4 px-8 shadow-lg transition duration-200 hover:opacity-80"
        >
          Download for Mac
        </a>
      </div>

      {/* Snippets Container */}
      <Snippets />
    </div>
  );
};
const Snippets = () => {
  return (
    <section id="snippets">
      <div className="section-container my-20 ">
        <h3>Keep track of your snippets</h3>
        <p className="section-content mb-24">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
    </section>
  );
};
