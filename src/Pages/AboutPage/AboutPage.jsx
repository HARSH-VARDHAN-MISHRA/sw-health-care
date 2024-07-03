import React, { useEffect } from 'react'
import aboutImg from '../../Assets/about.webp'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <>
      <section className="bread">
        <div className="container">
          <nav aria-label="breadcrumb">
            <h2>About Us</h2>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </section>
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

export default AboutPage