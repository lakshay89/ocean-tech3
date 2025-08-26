import Image from 'next/image'
import React from 'react'
import './aboutsec.css'
import Pic1 from '@/app/Images/About Us Page/our story.png'
import Pic2 from '@/app/Images/About Us Page/Why Choose Us for Your Trusted Business Growth Partner.png'

export default function AboutSection() {
    return (
        <>
            <div className="about-section">
                <div className="container">
                    <h2 className='mt-5 mb-5 text-center titlebold'>OUR STORY</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <div>     
                                <div className="aboutSecTitle">

                                    <h2 className='text-right fontweight'>Delivering <span className='titlebold'> INNOVATION AND STRATEGIC BUSINESS </span> Solutions for Growth and Success"</h2>
                                </div>
                                <div className='aboutDetail-sec'>
                                    <p className='text-center fw-bold '>OCEAN TECH ZONE SINCE 2017 </p>
                                    <p className=' paragraph-details'>Ocean Tech Zone, established in 2017, is a leading provider of digital marketing and web development solutions. We specialize in SEO (Search Engine Optimization), SMO (Social Media Optimization), and Website Designing, helping businesses enhance their online visibility, build brand authority, and engage customers more effectively.

With a strong focus on reliability, cost-efficiency, and customized strategies, Ocean Tech Zone delivers solutions tailored to the unique goals of each client — empowering them to grow, connect, and thrive in today’s competitive digital landscape.
                                    </p>
                                    <h3 className='titlebold '>What We Do </h3>
                                    <p className='paragraph-details'>We specialize in delivering high-quality digital solutions tailored to enhance your business’s online presence. Our core services include SEO (Search Engine Optimization), SMO (Social Media Optimization), and Website Designing, all crafted to drive visibility, engagement, and conversions. With a focus on strategy, performance, and customization, we ensure that your brand reaches the right audience at the right time, helping your business grow and stand out in the digital landscape.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Image src={Pic1} alt="about image " className='AboutImagePic1' />

                        </div>
                    </div>
                </div>
            </div>








            <div className=''>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='aboutbottomSec'>

                                <h2 className='fontweight mb-3'>Why Choose Us for Your <span className='titlebold'>Trusted Business</span> Growth Partner </h2>
                                <p className='paragraph-details'>Digital marketing has become an essential growth tool for businesses in Delhi, offering powerful and cost-effective ways to build brand visibility, engage customers, and drive conversions. Here why services like SEO, SMO, and Website Designing are the best choice for Delhi-based businesses.</p>

                                <b>
                                    "Local Expertise</b>
                                <p className='paragraph-details'>Our team has in-depth knowledge of the Delhi market, allowing us to create customized digital strategies that resonate with your local audience. From keyword research to region-specific social media campaigns and web design that reflects local trends, we tailor every solution to maximize your impact.</p>


                                <b>High Conversion Rates</b>
                                <p className='paragraph-details'>
                                    Search engines and social media platforms are where your audience is most active. With our SEO and SMO strategies, your brand gets better visibility, higher engagement, and improved conversion rates — far outperforming traditional marketing channels.</p>


                                <b>Cost-Effective Alternative</b>
                                <p className='paragraph-details'>

                                   Compared to traditional advertising methods, digital marketing is far more cost-efficient. Whether you're a startup or an established business in Delhi, our SEO, SMO, and website designing services help you reach a broader audience without overspending — delivering real ROI.
                                </p>


                                <b>24/7 Availability</b>
                                <p className='paragraph-details'>

                                   With a professionally designed website and ongoing optimization, your business remains visible and accessible 24/7. This ensures your customers can find information, make inquiries, or interact with your brand at any time — even outside business hours.   </p>


                                <b>Instant Delivery</b>
                                <p className='paragraph-details'>
                                    From immediate visibility on social media through SMO to long-term search engine rankings via SEO, our solutions combine short-term impact with sustained growth. A well-designed website ties everything together, offering users a seamless, high-converting experience.</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className='Detail-Sec'>
                                <h2 className='fontweight mb-3'>   Our Vision Shaping the Future with <span className='titlebold'>Innovation and Excellence	</span>	</h2>
                                <p className='paragraph-details'>
                                   Our vision is to become a global leader in digital marketing and web solutions, transforming the way businesses grow and connect with their audience. We strive to uphold the highest standards of innovation, reliability, and customer satisfaction through our core services — SEO, SMO, and Website Designing. We envision a future where businesses of all sizes can harness the full potential of digital platforms to build stronger relationships, drive growth, and deliver exceptional value. By continuously evolving our strategies and embracing cutting-edge technologies, we aim to shape the future of digital engagement and become the trusted partner for businesses seeking long-term success online.</p>

                            </div>

                            <Image src={Pic2} alt='bottomImg' className='AboutImagePic2' />












                        </div>
                    </div>
                </div>

            </div>


            <div className='container mb-5 text-center d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center titlebold'>  OUR MISSION	</h3>

                <p className='paragraph-details text-center'>
                    Our mission is to empower businesses with innovative and results-driven digital solutions that enhance visibility, boost engagement, and strengthen customer relationships. Through our expertise in SEO, SMO, and Website Designing, we provide tailored strategies that help our clients build a strong online presence, connect with their target audience, and achieve measurable growth. We are committed to delivering exceptional service, cutting-edge technology, and dedicated support to help businesses reach their full potential in the digital world.                </p>
            </div>







        </>
    )
}
