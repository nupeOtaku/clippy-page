import google from "../images/logo-google.png";
import ibm from "../images/logo-ibm.png";
import microsoft from "../images/logo-microsoft.png";
import hp from "../images/logo-hp.png";
import vectorGraphics from "../images/logo-vector-graphics.png";

const ReferenceSection = () => {
  return (
    <section id="references">
      <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
        <img src={google} alt="Google" />
        <img src={ibm} alt="ibm" />
        <img src={microsoft} alt="microsoft" />
        <img src={hp} alt="hp" />
        <img src={vectorGraphics} alt="vectorGraphics" />
      </div>
    </section>
  );
};

export { ReferenceSection };
