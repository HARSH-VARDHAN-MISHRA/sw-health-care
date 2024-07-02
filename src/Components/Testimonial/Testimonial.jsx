import React from 'react';
import './testimonial.css';
import p1 from './p1.jpeg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';

const testimonials = [
    {
        img: p2,
        name: 'Harsh Vardhan',
        review: 'Reliable products and quick delivery. Very satisfied with my Manual Breast Pump and Digital Thermometer.'
    },
    {
        img: p1,
        name: 'Mayank Johri',
        review: 'Great quality medical equipment! Their Compressor Nebulizers and Pulse Oximeters are top-notch. Excellent service too!'
    },
    {
        img: p3,
        name: 'Rahul Sharma',
        review: 'High-quality medical masks and latex gloves. SW Health Care is our preferred supplier. Highly recommend!'
    }
];

const Testimonial = () => {
    return (
        <section className="testimonial my-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="font-weight-bold">Our Happy Clients</h2>
                    <p className="text-muted">Here's what our clients have to say about SW Health Care</p>
                </div>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src={testimonial.img} alt="User Image" />
                                    <h5 className="card-title">{testimonial.name}</h5>
                                    <div className="stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <p className="card-text">{testimonial.review}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
