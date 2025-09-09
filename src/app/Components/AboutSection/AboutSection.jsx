"use client";
import Image from "next/image";
import React from "react";
import "./aboutsec.css";
import Pic1 from "@/app/Images/About Us Page/our story.png";
import Pic2 from "@/app/Images/About Us Page/Why Choose Us for Your Trusted Business Growth Partner.png";
import Pic3 from "@/app/Images/current/Founder.png";
import Pic4 from "@/app/Images/current/Teamleader.png";
import Pic5 from "@/app/Images/current/mg.png";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: Pic3,
    desc: "Visionary leader with a passion for innovation and digital growth.",
  },
  {
    name: "Priya Mehta",
    role: "HR Manager",
    image: Pic5,
    desc: "Drives business operations and long-term strategy.",
  },
  {
    name: "Amit Verma",
    role: "Team Leader",
    image: Pic4,
    desc: "Leads project teams to success with effective strategies.",
  },
];


export default function AboutSection() {
  return (
    <>
      <div className="about-section ">
        <div className="container">
          <h2 className="mt-5 mb-5 text-center titlebold">ABOUT US </h2>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div>

                <div className="aboutDetail-sec">
                  <p className="text-center fw-bold  fontWeb">
                    OCEAN TECH ZONE SINCE 2017
                  </p>
                  <p className=" paragraph-details">
                    At Ocean Tech Zone, we are more than just a digital
                    marketing agency—we are growth partners for businesses that
                    want to thrive in today’s competitive online world. Our team
                    of passionate marketers, creative designers, and data-driven
                    strategists works together to deliver customized digital
                    marketing solutions that help brands stand out, attract
                    customers, and drive measurable results.{" "}
                  </p>

                  <h5 className="text-black fontWeb">Our Mission </h5>
                  <p className=" paragraph-details">
                    To empower businesses of all sizes with result-oriented
                    digital marketing strategies that increase brand visibility,
                    generate quality leads, and boost ROI.
                  </p>

                  <h5 className="text-black fontWeb">Our Vision </h5>
                  <p className=" paragraph-details">
                    To become a trusted global digital marketing agency known
                    for innovation, creativity, and delivering measurable growth
                    for clients across industries.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-md-6">
              <Image src={Pic1} alt="about image " className="AboutImagePic1" />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="aboutbottomSec">
                <h2 className="fontweight mb-8  fontWeb">
                  Our Core Values
                </h2>
                <p className="paragraph-details">
                  Digital marketing has become an essential growth tool for
                  businesses in Delhi, offering powerful and cost-effective ways
                  to build brand visibility.
                </p>

                <b>Creativity</b>
                <p className="paragraph-details">
                  We craft campaigns that inspire, engage, and convert.
                  Our team has in-depth knowledge of the Delhi market, allowing
                  us to create customized digital strategies that resonate with
                  your local audience.
                </p>

                <b>Transparency</b>
                <p className="paragraph-details">
                  Open communication and clear results are at the heart of our work.
                  Search engines and social media platforms are where your
                  audience is most active.
                </p>

                <b>Performance-Driven</b>
                <p className="paragraph-details">
                  Every strategy we create is backed by data and analytics
                  Compared to traditional advertising methods, digital marketing
                  is far more cost-efficient.
                </p>

                <b>Client Success</b>
                <p className="paragraph-details">
                  Your growth defines our success.
                  With a professionally designed website and ongoing
                  optimization, your business remains visible and accessible
                  24/7.
                </p>

                <b>Innovation</b>
                <p className="paragraph-details">
                  Adapting to the latest tools, trends, and technologies in digital marketing.
                  From immediate visibility on social media through SMO to
                  long-term search engine rankings via SEO, our solutions
                  combine short-term impact with sustained growth.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Detail-Sec">
                <h5 className=" mb-3 fontWeb"> Our Journey </h5>
                <p className="paragraph-details">
                  Founded with a vision to simplify online marketing, [Your
                  Agency Name] has grown into a full-service digital marketing
                  agency. From helping small businesses build their first online
                  presence to scaling established brands through SEO, social
                  media, paid ads, and content marketing, we’ve been driving
                  success stories for clients across diverse industries
                </p>
              </div>

              <Image src={Pic2} alt="bottomImg" className="AboutImagePic2" />
            </div>
          </div>
        </div>
      </div>




      <section className="py-5 ">
        <div className="container">
          <h2 className="text-center text-primary fw-bold mb-5">Meet Our Team</h2>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow border-0 text-center rounded-4 p-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-circle mx-auto"
                    style={{
                      objectFit: "cover",
                      border: "4px solid #007bff",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold mt-3">
                      {member.name}
                    </h5>
                    <h6 className="text-muted">{member.role}</h6>
                    <p className="card-text mt-3 text-dark">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container mt-5 mb-5 text-center d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-center titlebold"> OUR MISSION </h3>

        <p className="paragraph-details text-center">
          Our mission is to empower businesses with innovative and
          results-driven digital solutions that enhance visibility, boost
          engagement, and strengthen customer relationships. Through our
          expertise in SEO, SMO, and Website Designing, we provide tailored
          strategies that help our clients build a strong online presence,
          connect with their target audience, and achieve measurable growth. We
          are committed to delivering exceptional service, cutting-edge
          technology, and dedicated support to help businesses reach their full
          potential in the digital world.{" "}
        </p>
      </div>
    </>
  );
}
