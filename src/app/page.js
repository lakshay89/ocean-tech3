import OurStory from "./Components/OurStory/OurStory";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import Faq from "./Components/Faq/Faq";
// import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonial from "./Components/Testimonial/Testimonial";
import StatsSection from "./Components/StateSection/StateSection";
import Services from "./Components/Services/Services";
import BulkSms from "./Components/BulkSMS/BulkSms";
import Solutions from "./Components/Solutions/page.jsx";
// import PricingPlans from "./Components/PricingPlans/PricingPlans";

export default function Home() {
  return (
   <>
      <div>
         <OurStory/>
         <BrandCarousel/>
         <Solutions />
         {/* <Header/> */}
         {/* <FeatureSection/> */}
         {/* <AboutUs/> */}
         <Services/>
         {/* <PricingPlans/> */}
         <StatsSection/>
         <BulkSms/>
         <Testimonial/>
         {/* <GoogleMap/> */}
         <Faq/>

      </div>
   
   </>
  );
}
