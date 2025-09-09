import OurStory from "./Components/OurStory/OurStory";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import Faq from "./Components/Faq/Faq";
// import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonial from "./Components/Testimonial/Testimonial";
import StatsSection from "./Components/StateSection/StateSection";
import Services from "./Components/Services/Services";
import SEO from "./Components/SEO/SEO.jsx";
import Solutions from "./Components/Solutions/page.jsx";
import SEOSection from "./Components/SEOSection/SEOSection";
// import PricingPlans from "./Components/PricingPlans/PricingPlans";

export default function Home() {
   return (
      <>
         <div>
            <OurStory />
            <BrandCarousel />

            {/* <Header/> */}
            {/* <FeatureSection/> */}
            {/* <AboutUs/> */}
            <SEO />
            <Services />
            <section className="bg-white py-1">
               <Solutions />
            </section>
            {/* <PricingPlans/> */}
            <StatsSection />
            {/* <SEOSection/> */}
            <Testimonial />
            {/* <GoogleMap/> */}
            <Faq />

         </div>

      </>
   );
}
