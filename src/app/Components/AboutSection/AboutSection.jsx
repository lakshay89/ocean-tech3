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

                                    <h1 className='text-right fontweight'>Delivering <span className='titlebold'> INNOVATION AND STRATEGIC BUSINESS </span> Solutions for Growth and Success"</h1>
                                </div>
                                <div className='aboutDetail-sec'>
                                    <p className='text-center fw-bold '>OCEAN TECH ZONE SINCE 2017 </p>
                                    <p className=' paragraph-details'>Ocean Tech Zone, established in 2017, is a leading provider of advanced business communication solutions. We specialize in services like Bulk SMS, Voice Call Solutions, WhatsApp Business Messaging, and IVR Systems, empowering businesses to engage their customers more effectively. With a strong focus on reliability, cost-efficiency, and customization, Ocean Tech Zone delivers communication tools tailored to meet the unique needs of every client — helping them grow, connect, and thrive in todays competitive landscape.

                                    </p>
                                    <h3 className='titlebold '>What We Do </h3>
                                    <p className='paragraph-details'>"We specialize in delivering high-quality Bulk SMS services tailored to enhance your business communication strategy.
                                        Our platform includes features like high delivery rates, real-time tracking, and customizable messaging options, ensuring your messages reach the right audience at the right time."
                                    </p>
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

                                <h1 className='fontweight mb-3'>	Why Choose Us for Your <span className='titlebold'>Trusted Business</span> Growth Partner </h1>
                                <p className='paragraph-details'>Bulk SMS has become an indispensable tool for businesses in Delhi, offering a powerful, cost-effective way to communicate with customers. Below are the key reasons why Bulk SMS is the best choice for Delhi-based businesses
                                </p>

                                <b>
                                    "Local Expertise</b>
                                <p className='paragraph-details'>Our team has extensive knowledge of the Delhi market, enabling us to help you design effective SMS campaigns that are specifically tailored to your target audience.
                                </p>


                                <b>High Conversion Rates</b>
                                <p className='paragraph-details'>
                                    SMS has an excellent 98% open rate, which is higher than other marketing channels such as email and social media.
                                    This strong engagement leads to better campaign results and quicker conversion of leads into customers.
                                </p>


                                <b>Cost-Effective Alternative</b>
                                <p className='paragraph-details'>

                                    SMS marketing is a more affordable option compared to costly methods like direct mail, email campaigns, or paid advertisements.
                                    For small and medium businesses in Delhi, Bulk SMS provides an economical way to reach a wide audience without sacrificing performance.

                                </p>


                                <b>24/7 Availability</b>
                                <p className='paragraph-details'>

                                    Our service is available around the clock, allowing businesses to provide support and share information even when they are not open for regular business hours.
                                </p>


                                <b>Instant Delivery</b>
                                <p className='paragraph-details'>
                                    With instant delivery, your SMS messages are sent to recipients within seconds.
                                    This ensures real-time communication for promotions, alerts, OTPs, and other urgent updates, delivering maximum speed and efficiency. </p>

                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className='Detail-Sec'>
                                <h1 className='fontweight mb-3'>   Our Vision Shaping the Future with <span className='titlebold'>Innovation and Excellence	</span>	</h1>
                                <p className='paragraph-details'>
                                    To be the global leader in bulk SMS solutions, we aim to transform the way people communicate by upholding the highest standards of reliability, innovation, and customer satisfaction. Our vision is a world where businesses of all sizes can leverage the power of SMS to create stronger connections, boost growth, and provide outstanding value to their customers. Through ongoing advancements in technology and expanding our services, we seek to shape the future of messaging and become the trusted partner for organizations looking to enhance their communication strategies.
                                </p>

                            </div>

                            <Image src={Pic2} alt='bottomImg' className='AboutImagePic2' />












                        </div>
                    </div>
                </div>

            </div>


            <div className='container mb-5'>
                <h3 className='text-center titlebold'>  OUR MISSION	</h3>

                <p className='paragraph-details'>
                    Our mission is to empower businesses with innovative and reliable SMS solutions that drive engagement, enhance communication, and optimize customer relationships. Through our state-of-the-art bulk SMS platform, we deliver seamless transactional and promotional messaging services that enable our clients to connect with their audience effectively and efficiently. We are committed to providing exceptional service, cutting-edge technology, and unparalleled support to help businesses achieve their goals and grow their brand.”
                </p>
            </div>







        </>
    )
}
