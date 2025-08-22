import Image from 'next/image'
import React from 'react'
import './bulk.css'
import img1 from '@/app/Images/Bulk SMS Promotion Page/High-Performance Bulk SMS Marketing Services to Grow Your Business.png'

export default function BulkSms() {
  return (
    <>
      <div className='MainSection'>
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='LeftSideSec'>
                        <div className='titleSec'>
                            <h1 className='fontweight'>WHAT  IS <span className='spanbold'>BULK SMS ?</span></h1>
                        </div>
                  <div className='subtitle'>
                    <p>Bulk SMS involves sending a large number of text messages at the same time to many people. It is commonly used by businesses, organizations, and other groups for different reasons, such as:</p>
                  </div>
                    <div className='ParaSec'>
                    <p  className='para list1'  > <b>Marketing Campaigns:</b> To introduce products, services, or special deals to a wide group of people.</p>
                       <p  className='para list2'  ><b>Customer Notifications:</b> To let customers know about updates on their orders, reminders for appointments, or alerts about services.</p>
                       <p  className='para list3'  ><b>Emergency Alerts:</b> To quickly send urgent messages or warnings to a big group of people.</p>
                       <p  className='para list4'  > <b>Event Reminders:</b> To inform participants about upcoming events, any changes, or important details.</p>
                       <p  className='para list5'  >Bulk SMS is usually handled through specific software or service providers that offer tools for sending messages efficiently.</p>
                       <p  className='para list6'  > These tools often have features like scheduling messages, customizing content, tracking responses, and providing reports to improve the success of SMS campaigns</p>

                    </div>
                                        </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                   <div className='RightSideSec d-flex justify-content-center align-items-center'>
                   <Image src={img1} alt=""  className='BulkImg' />
                   </div>
                </div>
            </div>

        </div>

      </div>
    </>
  )
}


