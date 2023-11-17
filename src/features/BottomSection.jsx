const BottomSection = () => {
  return (
    <section id="bottom">
      <div className="section-container my-10">
        <h3>Clipboard for iOS and MacOS</h3>
        <p className="section-content mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you`re ready to start adding to your Clipboard.
        </p>

        {/* Botton Container */}
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
      </div>
    </section>
  );
};

export { BottomSection };
