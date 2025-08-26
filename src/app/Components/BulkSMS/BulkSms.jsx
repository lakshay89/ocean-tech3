import Image from 'next/image'
import React from 'react'
import './bulk.css'
import img1 from '../../Images/current/seo-7168460_1920.png'

export default function BulkSms() {
  return (
    <>
      <div className='MainSection'>
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='LeftSideSec'>
                        <div className='titleSec'>
                            <h1 className='fontweight'>What is <span className='spanbold'>Search Engine Optimization (SEO) ?</span></h1>
                        </div>
                    <div className='ParaSec'>
                      <p  className='para list3'  >Our SEO services ensure that your business ranks higher in search results, driving organic traffic and potential customers to your website. 
                        With a proven track record, TheClickFunnel offers expert solutions in keyword research,
                         on-page SEO, link-building, and more.
                         Unlock the full potential of your website and boost your search rankings with our expert SEO services. </p>
                       <p  className='para list5'  ><b>Keyword Research</b> Our team conducts in-depth research to find the most effective keywords for your business.</p>
                       <p  className='para list5'  ><b>On-Page Optimization</b> We ensure your website’s structure and content are optimized for the best search results.</p>
                       <p  className='para list5'  ><b>Link Building</b> Enhance your domain authority with high-quality backlinks from reputable sites.</p>
                       <p  className='para list5'  ><b>SEO Audit</b> We analyze your current SEO efforts and identify areas for improvement.</p>
                       <p  className='para list5'  ><b>Analytics & Reporting</b> Get detailed insights and performance reports on how your SEO strategy is performing.</p>
                       <p  className='para list5'  ><b>Local SEO</b>Target local customers by optimizing your business for location-based searches.</p>

                    </div>
                                        </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                   <div className='RightSideSec d-flex justify-content-center align-items-center'>
                   <Image src={img1} alt=""  className='BulkImg img-fluid' />
                   </div>
                </div>
            </div>

        </div>

      </div>
    </>
  )
}


