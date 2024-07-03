import React from 'react'
import './Faq.css'
import { Link } from 'react-router-dom';
import SubHead from '../SubHead/SubHead';

const Faq = () => {

    const faqs = [
        {
          question: "What is SW Health Care Private Limited?",
          answer: "SW Health Care Private Limited is a New Delhi-based company specializing in the manufacturing and trading of medical equipment. Established in 2020, we offer a range of high-quality healthcare products, including Manual Breast Pumps, Hot Water Bottles, Compressor Nebulizers, Steam Vaporizers, and Wheel Chairs."
        },
        {
          question: "What products do you offer?",
          answer: "We provide a diverse range of medical equipment and healthcare products such as: Manual Breast Pumps, Hot Water Bottles, Compressor Nebulizers, Steam Vaporizers, Wheel Chairs, Digital Thermometers, Surgical Tapes, Latex Gloves, Pulse Oximeters, Plastic Lancets, Medical Masks, Hospital Bedpans, Aluminium Stethoscopes, Manual Wheelchairs."
        },
        {
          question: "How can I place an order?",
          answer: "You can place an order directly through our e-commerce website. Simply browse through our product categories, select the items you need, add them to your cart, and proceed to checkout."
        },
        {
          question: "What are your contact details?",
          answer: "You can reach us at: Address: Ground Floor Pocket I, Sec-4, Plot No 50, Bawana DSIDC, Near Ganga Toli Mandir, Bawana Industrial Area, North, New Delhi-110039, Delhi, India. Phone: 9870460015."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including credit/debit cards, net banking, and UPI."
        },
        // {
        //   question: "How can I track my order?",
        //   answer: "Once your order is shipped, we will provide you with a tracking number via email. You can use this tracking number to check the status of your delivery on our website."
        // },
        {
          question: "What is your return policy?",
          answer: "We have a hassle-free return policy. If you are not satisfied with your purchase, you can return the product within 15 days of delivery. Please ensure that the product is unused and in its original packaging. For more details, please visit our return policy page."
        },
        {
          question: "Do you offer international shipping?",
          answer: "Currently, we offer shipping only within India. We are working on expanding our services to international customers soon."
        },
        {
          question: "Are your products certified?",
          answer: "Yes, all our products meet stringent quality standards and are certified by relevant health authorities."
        },
        {
          question: "How can I get in touch with customer support?",
          answer: "For any queries or support, you can contact our customer support team at 9870460015 or email us at support@swhealthcare.com. We are here to assist you with any concerns you may have."
        }
      ];
      

      

    return (
        <>
            <SubHead title="Frequently Asked Questions" />
            <div className="container faq my-5">
                
                
                <div className="accordion" id="faqAccordion">
                    
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                    aria-controls={`collapse${index}`}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Faq