import Banner from "@/components/banner/Banner";

import FAQ from "./Question";
import Contact from "./Contact";
import FoodsCom from "@/components/Foods/Foods";

const Home = () => {
  return (
    <div>
      <Banner
        imageURL="https://plus.unsplash.com/premium_photo-1663852297522-d01619dc3e55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        headingText="Wellcome."
        subheadingText="Pleas explore my mobail website visite here and my website"
      />
      <div>
        <FoodsCom />
      </div>
      <div className="sm:mt-32 ">
        <FAQ />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
