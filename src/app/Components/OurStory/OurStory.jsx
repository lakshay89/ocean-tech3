import React from "react";
import "./ourstory.css";

import Img1 from "@/app/Images/Home Page/BulkSMS.png"; // replace with your image
import Image from "next/image";
// import recipeImg from "./recipe.png"; // replace with your image

export default function OurStory() {
  return (
    <section className="story-hero container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6">
          <h1 className="fw-bold">
          Best Bulk <span className="storyTitle" >SMS SERVICE</span><br /> Provider in Delhi
          </h1>
          <p className="text-muted">
          "Boost efficiency and reduce costs with our Bulk SMS services in Delhi — instantly connect with a global audience for faster communication."									
									
          </p>
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary btn-lg story-btn">Lets story</button>
            <button className="btn btn-outline-warning btn-lg explore-btn">
              Get Start Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center position-relative">
          <div className="hero-bg-shape"></div>
          <Image src={Img1} alt="Cooking" className="img-fluid story-img" />
          <div className="recipe-card d-flex align-items-center shadow">
            {/* <img src={recipeImg} alt="recipe" className="recipe-img" /> */}
            {/* <p className="m-0  text-light ms-2">More than 5000+ Clients </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
