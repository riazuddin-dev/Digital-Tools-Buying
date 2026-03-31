import { Suspense, useState } from "react";
import CtaSection from "./Component/CTA SECTION/CtaSection";
import Footer from "./Component/Footer Section/Footer";
import HeroSection from "./Component/HeroSection/HeroSection";
import Navbar from "./Component/Navbar/Navbar";
import Primium from "./Component/Premium Digital Tools/Primium";
import Pricing from "./Component/Pricing/Pricing";
import Steps from "./Component/Staps/Staps";
import Card from "./Component/All UI/Card";
import Cart from "./Component/Premium Digital Tools/Cart/Cart";

const products = async () => {
  const res = await fetch("/Products.json");

  return res.json();
};

function App() {
  const productsPromis = products();

  const [cartData, setCartData] = useState([]);


 
  return (
    <>
      <Navbar cartData={cartData}
          setCartData={setCartData}></Navbar>

      <HeroSection></HeroSection>

      <Suspense>
        <Primium
          productsPromis={productsPromis}
          cartData={cartData}
          setCartData={setCartData}
        ></Primium>
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <CtaSection></CtaSection>
      <Footer></Footer>
    </>
  );
}

export default App;
