import { HeroSection } from "./features/HeroSection";
import { FeatureSection } from "./features/FeatureSection";
import { AccessSection } from "./features/AccessSection";
import { SuperchargeSection } from "./features/SuperchargeSection";
import { ReferenceSection } from "./features/ReferenceSection";
import { BottomSection } from "./features/BottomSection";
import { Footer } from "./features/Footer";

const App = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Access Section */}
      <AccessSection />

      {/* Supercharge Section */}
      <SuperchargeSection />

      {/* References Section */}
      <ReferenceSection />

      {/* Bottom CTA Section */}
      <BottomSection />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default App;
