import React from 'react'
import aboutImg from '../../Assets/about.webp'
import './About.css'

const About = () => {
  return (
    <>
        <section className="about my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Welcome to <span>SW Health Care</span>  Private Limited</h1>
                        <p>Welcome to <strong>SW Health Care Private Limited</strong>, your trusted source for quality medical equipment since 2020. Based in New Delhi, we manufacture and trade essential healthcare products like Manual Breast Pumps, Hot Water Bottles, Compressor Nebulizers, Steam Vaporizers, and Wheel Chairs. Our mission is to enhance health and wellness through reliable and innovative solutions.</p>
                        <p>Our diverse range includes Digital Thermometers, Surgical Tapes, Latex Gloves, Pulse Oximeters, Plastic Lancets, Medical Masks, and Hospital Bedpans. Committed to excellence, we ensure every product meets stringent quality standards, making us a preferred choice for healthcare professionals and patients alike.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={aboutImg} alt="about-image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About