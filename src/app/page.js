import Image from "next/image";
import styles from "./page.module.css";
import OurStory from "./Components/OurStory/OurStory";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import FeatureSection from "./Components/Features/Features";
import Faq from "./Components/Faq/Faq";
import AboutUs from "./Components/AboutUs/AboutUs";

export default function Home() {
  return (
   <>
      <div>
         <OurStory/>
         <BrandCarousel/>
         <FeatureSection/>
         <AboutUs/>
         <Faq/>

      </div>
   
   </>
  );
}
