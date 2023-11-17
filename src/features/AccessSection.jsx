import devices from "../images/image-devices.png";

const AccessSection = () => {
  return (
    <section id="access">
      <div className="section-container my-10">
        <h3>Access Clipboard Anywhere</h3>
        <p className="section-content mb-10 text-xl">
          Whether you`re on the go, or at your computer, you can access all your
          Clipboard snippets u=in a few simple clicks.
        </p>

        <img src={devices} alt="devices" />
      </div>
    </section>
  );
};

export { AccessSection };
