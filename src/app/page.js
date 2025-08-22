import Image from "next/image";
import styles from "./page.module.css";
import OurStory from "./Components/OurStory/OurStory";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import FeatureSection from "./Components/Features/Features";
import Faq from "./Components/Faq/Faq";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Testimonial from "./Components/Testimonial/Testimonial";
import StatsSection from "./Components/StateSection/StateSection";
import Services from "./Components/Services/Services";
import BulkSms from "./Components/BulkSMS/BulkSms";
import PricingPlans from "./Components/PricingPlans/PricingPlans";
import GoogleMap from "./Components/GoogleMap/GoogleMap";

export default function Home() {
  return (
   <>
      <div>
         <OurStory/>
         <BrandCarousel/>
         {/* <Header/> */}
         {/* <FeatureSection/> */}
         <AboutUs/>
         <Services/>
         <PricingPlans/>
         <StatsSection/>
         <BulkSms/>
         <Testimonial/>
         {/* <GoogleMap/> */}
         <Faq/>

      </div>
   
   </>
  );
}
