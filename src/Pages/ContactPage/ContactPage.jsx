import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ContactPage.css'

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    }, []);
    return (
        <>
            <section class="bread">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Contact Us</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </section>


            <section className="contact">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Contact Us</h2>
                            <p>Email Id: example@example.com</p>
                            <p>Address: Ground Floor Pocket I, Sec-4, Plot No 50, Bawana DSIDC, Near Ganga Toli Mandir, Bawana Industrial Area, North, New Delhi-110039, Delhi, India</p>
                            <p>Phone: +91-9870460015</p>
                        </div>
                        <div className="col-md-6">
                            <h2>Send Us a Message</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.6794073500882!2d77.06324367496262!3d28.788820876967353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d077cfb2deb19%3A0x6fb37f5b003adcb4!2sDSIIDC%20Industrial%20Area%2C%20Sector%204%2C%20Khera%20Khurd%2C%20Delhi%2C%20110039!5e0!3m2!1sen!2sin!4v1716966095524!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage