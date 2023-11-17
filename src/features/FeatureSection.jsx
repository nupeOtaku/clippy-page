/* eslint-disable react/prop-types */
import computer from "../images/image-computer.png";

const FeatureSection = () => {
  return (
    // Features Section
    <section id="features">
      <div className="section-container mb-10 mt-20">
        <div className="flex flex-col md:flex-row md:space-x-32">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={computer} alt="computer" />
          </div>
          {/* Items Container */}
          <div className="mb-24 mt-16 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
            {/* Items */}
            <Items
              title={" Quick Search"}
              text={
                " Easily search your snippets by content, category, web address,application and more."
              }
            />
            <Items
              title={"iCloud Sync"}
              text={
                "Instantly saves and sync snippets across all your devices."
              }
            />
            <Items
              title={"Completely History"}
              text={
                "Receive any snippet from the first moment you start using the app."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Items = ({ title, text }) => {
  return (
    <div>
      <h5>{title}</h5>
      <p className="max-w-md text-grayishBlue">{text}</p>
    </div>
  );
};

export { FeatureSection };
