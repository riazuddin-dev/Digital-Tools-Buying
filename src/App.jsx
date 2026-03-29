import CtaSection from "./Component/CTA SECTION/CtaSection";
import Footer from "./Component/Footer Section/Footer";
import HeroSection from "./Component/HeroSection/HeroSection";
import Navbar from "./Component/Navbar/Navbar";
import Primium from "./Component/Premium Digital Tools/Primium";
import Pricing from "./Component/Pricing/Pricing";
import Steps from "./Component/Staps/Staps";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <HeroSection></HeroSection>

      <Primium></Primium>

      <Steps></Steps>
      <Pricing></Pricing>
      <CtaSection></CtaSection>
      <Footer></Footer>
    </>
  );
}

export default App;
