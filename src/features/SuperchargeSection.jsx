/* eslint-disable react/prop-types */
import blacklist from "../images/icon-blacklist.svg";
import text from "../images/icon-text.svg";
import preview from "../images/icon-preview.svg";

const content = [
  {
    title: "Create Blacklist",
    image: blacklist,
    text: " Easily search your Snippets, by content, category, web address, application and more.",
  },
  {
    title: "Plain Text Snippets",
    image: text,
    text: "Remove unwanted formatting from copied text, for a consistent look",
  },
  {
    title: "Sneak Preview",
    image: preview,
    text: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

const SuperchargeSection = () => {
  return (
    <section id="supercharge">
      <div className="section-container my-10">
        <h3>Supercharge Your Workflow</h3>
        <p className="section-content mb-16 text-xl">
          We`ve got the tools to boost your productivity
        </p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
          {content.map((items) => {
            return <Items item={items} key={items.text} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Items = ({ item }) => {
  const { title, text, image } = item;
  return (
    <div className="flex flex-col items-center space-y-5">
      <img src={image} alt="image" className="mb-6" />
      <h5>{title}</h5>
      <p className="max-w-md text-grayishBlue">{text}</p>
    </div>
  );
};

export { SuperchargeSection };
