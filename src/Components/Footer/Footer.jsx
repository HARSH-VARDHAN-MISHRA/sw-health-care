import React from 'react'
import logo from '../../Assets/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer class="mt-5 py-4 pb-0">
          <div class="container">
            <div class="row">
              {/* <!-- Logo and Content --> */}
              <div class="col-md-3">
                  <Link to="/">
                    <img src={logo} alt="SW Health Care Logo" class="img-fluid mb-2" />
                  </Link>
                  <p>Welcome to SW Health Care Private Limited, your trusted source for quality medical equipment since 2020. We are committed to enhancing health and wellness through innovative and reliable medical products.</p>
              </div>

              <div class="col-md-3">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="/home" >Home</a></li>
                    <li><a href="/about" >About Us</a></li>
                    <li><a href="/our-products" >Products</a></li>
                    <li><a href="/contact" >Contact Us</a></li>
                </ul>
              </div>

              <div class="col-md-3">
                <h5>Categories</h5>
                <ul class="list-unstyled">
                    <li><a href="/products/compressor-nebulizer" >Compressor Nebulizer</a></li>
                    <li><a href="/products/hot-water-bottle" >Hot Water Bottle</a></li>
                    <li><a href="/products/digital-thermometer" >Digital Thermometer</a></li>
                    <li><a href="/products/surgical-tape" >Surgical Tape</a></li>
                    <li><a href="/products/latex-gloves" >Latex Gloves</a></li>
                    <li><a href="/products/pulse-oximeter" >Pulse Oximeter</a></li>
                    <li><a href="/products/plastic-lancet" >Plastic Lancet</a></li>
                    <li><a href="/products/medical-mask" >Medical Mask</a></li>
                    <li><a href="/products/steam-vaporizer" >Steam Vaporizer</a></li>
                    <li><a href="/products/hospital-bedpan" >Hospital Bedpan</a></li>
                </ul>
              </div>
              
              <div className="col-md-3">
                <h5>Contact Us</h5>
                  <ul class="list-unstyled">
                    <li><a href="https://maps.app.goo.gl/9m8wntyKMdKk7xPG7" target="_blank" >Ground Floor Pocket I, Sec-4, Plot No 50, Bawana DSIDC, Near Ganga Toli Mandir, Bawana Industrial Area, North, New Delhi-110039, Delhi, India</a></li>
                    <li><a href="tel:+919870460015" >Phone: 9870460015</a></li>
                  </ul>
              </div>

            </div>    
            <div className="row">
              <div className="col-12 copyright text-center">
                <p>Copyright © 2024 SW Health Care. Designed By <a href="https://www.digiindiasolutions.com/" target="_blank">DIGI INDIA SOLUTIONS</a></p>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer