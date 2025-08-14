"use client"
import React, { useState } from 'react'
import './faq.css';
import Image from 'next/image';
import img1 from '@/app/Images/faqimg.avif'


const faqData = [
  // {
  //   question: ' What is Bulk SMS ?',
  //   answer: ' Bulk SMS is the process of sending a large number of text messages simultaneously to many recipients. It is widely used by businesses and organizations for marketing, notifications, alerts, and reminders.'
  // },
  {
    question: 'Who typically uses Bulk SMS services?',
    answer: 'Businesses, organizations, event planners, emergency services, and customer service teams commonly use Bulk SMS to communicate important messages to their customers or members.'
  },
  // {
  //   question: 'What are some common uses of Bulk SMS ?',
  //   answer: 'Common uses include marketing campaigns, customer notifications, emergency alerts, and event reminders.',
  // },
  {
    question: 'How do I send Bulk SMS messages',
    answer: 'Bulk SMS is usually sent using specialized software or service providers that offer easy-to-use tools to manage and send large volumes of messages.',
  },
  {
    question: ' What features do Bulk SMS service providers offer?',
    answer: 'Most providers offer features like message scheduling, content customization, response tracking, and detailed reporting to measure campaign success.',
  },
  {
    question: 'Can I schedule my Bulk SMS messages?',
    answer: 'Yes, many Bulk SMS tools allow you to schedule messages to be sent at a specific date and time for better campaign planning.',
  },
  {
    question: 'Is it possible to personalize Bulk SMS messages?',
    answer: 'Absolutely! You can customize message content to include recipient names or other personalized information to increase engagement.',
  },
  {
    question: 'How do I know if my Bulk SMS campaign is successful?',
    answer: 'Bulk SMS service providers usually provide reports and analytics that track message delivery, responses, and engagement rates.',
  },
  {
    question: 'Are Bulk SMS messages cost-effective?',
    answer: 'Yes, Bulk SMS is one of the most affordable and direct ways to communicate with large groups quickly and effectively.',
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  }


  return (
    <>
      <div>
        <div className='container'>
          <div className="row">
            <div className="col-md-7">
            <div className='faq-container'>
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className='faq-question'>
              {faq.question}
              <span className='faq-icon'>{activeIndex === index ? '-' : '+'} </span>

            </div>
            <div className='faq-answer'
              style={{
                maxHeight: activeIndex === index ? '200px' : '0',
                opacity: activeIndex === index ? '1' : '0',
              }}
            >
              <p>{faq.answer}</p>
            </div>

          </div>
        ))

        }

      </div>
            </div>
            <div className="col-md-5">
             <div className='RightSec mt-3'>
             <Image src={img1} alt="faqimg" className='RightSecImg'/>
             </div>
            </div>
          </div>

        </div>
      </div>

    </>


  )
}



















// "use client"
// import React, { useState } from 'react'
// import './faq.css';


// const faqData = [
//   {
//     question: ' What is Bulk SMS ?',
//     answer: ' Bulk SMS is the process of sending a large number of text messages simultaneously to many recipients. It is widely used by businesses and organizations for marketing, notifications, alerts, and reminders.'
//   },
//   {
//     question: 'Who typically uses Bulk SMS services?',
//     answer: 'Businesses, organizations, event planners, emergency services, and customer service teams commonly use Bulk SMS to communicate important messages to their customers or members.'
//   },
//   {
//     question: 'What are some common uses of Bulk SMS ?',
//     answer: 'Common uses include marketing campaigns, customer notifications, emergency alerts, and event reminders.',
//   },
//   {
//     question: 'How do I send Bulk SMS messages',
//     answer: 'Bulk SMS is usually sent using specialized software or service providers that offer easy-to-use tools to manage and send large volumes of messages.',
//   },
//   {
//     question: ' What features do Bulk SMS service providers offer?',
//     answer: 'Most providers offer features like message scheduling, content customization, response tracking, and detailed reporting to measure campaign success.',
//   },
//   {
//     question: 'Can I schedule my Bulk SMS messages?',
//     answer: 'Yes, many Bulk SMS tools allow you to schedule messages to be sent at a specific date and time for better campaign planning.',
//   },
//   {
//     question: 'Is it possible to personalize Bulk SMS messages?',
//     answer: 'Absolutely! You can customize message content to include recipient names or other personalized information to increase engagement.',
//   },
//   {
//     question: 'How do I know if my Bulk SMS campaign is successful?',
//     answer: 'Bulk SMS service providers usually provide reports and analytics that track message delivery, responses, and engagement rates.',
//   },
//   {
//     question: 'Are Bulk SMS messages cost-effective?',
//     answer: 'Yes, Bulk SMS is one of the most affordable and direct ways to communicate with large groups quickly and effectively.',
//   },
// ]

// export default function Faq() {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const toggleFAQ = (index) => {
//     setActiveIndex(prev => (prev === index ? null : index));
//   }


//   return (
//     <>
//       <div className='faq-container'>
//         {faqData.map((faq, index) => (
//           <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className='faq-question'>
//               {faq.question}
//               <span className='faq-icon'>{activeIndex === index ? '-' : '+'} </span>

//             </div>
//             <div className='faq-answer'
//               style={{
//                 maxHeight: activeIndex === index ? '200px' : '0',
//                 opacity: activeIndex === index ? '1' : '0',
//               }}
//             >
//               <p>{faq.answer}</p>
//             </div>

//           </div>
//         ))

//         }

// {/* 
//         <div className="faq-download-box">
//           <h6>The Ultimate Mobile App for Beauty and Cosmetic Products</h6>
//           <h2>Download the App Now!</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
//           <div className="download-buttons">
//             <img src="/google-play.png" alt="Google Play" />
//             <img src="/app-store.png" alt="App Store" />
//           </div>
//         </div> */}


//       </div>


//     </>


//   )
// }
