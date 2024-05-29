import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SingleProductPage.css';
import SubHead from "../../Components/SubHead/SubHead";

const SingleProductPage = () => {
    const SingleProduct = [
        {
            category: "Compressor Nebulizer",
            productName: "SW HEALTH CARE Breast Reliever Pump WITH CUP",
            productImages: [
                "https://5.imimg.com/data5/SELLER/Default/2024/2/388298195/KV/DY/BW/184498134/manual-breast-pump-500x500.jpeg",
                "https://5.imimg.com/data5/SELLER/Default/2024/2/388299181/MU/BE/QV/184498134/manual-breast-pump-500x500.jpg",
                "https://5.imimg.com/data5/SELLER/Default/2024/2/388299311/EF/FU/MX/184498134/manual-breast-pump-500x500.jpeg",
                "https://5.imimg.com/data5/SELLER/Default/2024/2/388299523/UX/XA/UV/184498134/manual-breast-pump-500x500.jpg"
            ],
            actualPrice: 1200,
            offpercentage: 23,
            offerPrice: 925,
            desc: "Perfect for elder and kids. This machine is easy to use and more suitable for elder and kids. It is perfect for home use, providing dependable efficient nebulization treatments. Effective for cough, wheezing, asthma, cold, bronchitis and other conditions requiring nebulization.",
            points: [
                "Effective for cough, wheezing, asthma, COPD, bronchitis and other conditions requiring nebulization.",
                "The product is compatible with doctor prescribed medicine or can be used only with saline water.",
                "Suits for personal and professional use at home and hospital on daily basis for adult and child.",
                "Comes with 2 year warranty."
            ]
        }
    ];

    const productList = [
        {
            category: "Compressor Nebulizer",
            productName: "Piston Compressor Nebulizer",
            productImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/388328415/OJ/IF/OW/184498134/sw-health-care-piston-compressor-nebulizer-500x500.jpg",
            actualPrice: 1200,
            offpercentage: 23,
            offerPrice: 925,
            desc: "Perfect for elder and kids. This machine is easy to use and more suitable for elder and kids. It is perfect for home use, providing dependable efficient nebulization treatments. Effective for cough, wheezing, asthma, cold, bronchitis and other conditions requiring nebulization.",
            points: [
                "Effective for cough, wheezing, asthma, COPD, bronchitis and other conditions requiring nebulization.",
                "The product is compatible with doctor prescribed medicine or can be used only with saline water.",
                "Suits for personal and professional use at home and hospital on daily basis for adult and child.",
                "Comes with 2 year warranty."
            ]
        },
        {
            category: "Compressor Nebulizer",
            productName: "White Compressor Nebulizer",
            productImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/388355231/XI/HR/UC/184498134/white-compressor-nebulizer-500x500.jpg",
            actualPrice: 1200,
            offpercentage: 25,
            offerPrice: 900,
            desc: "Effective for cough, wheezing, asthma, cold, bronchitis and other conditions requiring nebulization.",
            points: [
                "Effective for cough, wheezing, asthma, COPD, bronchitis and other conditions requiring nebulization.",
                "The product is compatible with doctor prescribed medicine or can be used only with saline water.",
                "Suits for personal and professional use at home and hospital on daily basis for adult and child."
            ]
        },
        {
            category: "Compressor Nebulizer",
            productName: "Piston Compressor Nebulizer",
            productImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/386618471/QH/VT/UZ/184498134/piston-compressor-nebulizer-500x500.jpg",
            actualPrice: 1200,
            offpercentage: 23,
            offerPrice: 925,
            desc: "Effective for cough, wheezing, asthma, cold, bronchitis and other conditions requiring nebulization.",
            points: [
                "Effective for cough, wheezing, asthma, COPD, bronchitis and other conditions requiring nebulization.",
                "The product is compatible with doctor prescribed medicine or can be used only with saline water.",
                "Suits for personal and professional use at home and hospital on daily basis for adult and child."
            ]
        },
        {
            category: "Hot Water Bottle",
            productName: "Silicon Hot Water Bottle",
            productImage: "https://via.placeholder.com/500",
            actualPrice: 300,
            offpercentage: 20,
            offerPrice: 240,
            desc: "Silicon hot water bottle perfect for providing heat therapy.",
            points: [
                "Made from high-quality silicon material.",
                "Durable and long-lasting.",
                "Easy to fill and use.",
                "Provides effective heat therapy."
            ]
        },
        {
            category: "Hot Water Bottle",
            productName: "500ml Hot Water Bottle",
            productImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/388363785/OS/NT/RJ/184498134/hot-water-bag-500ml-500x500.jpeg",
            actualPrice: 150,
            offpercentage: 23,
            offerPrice: 115,
            desc: "500ml hot water bottle suitable for quick relief from pain.",
            points: [
                "Compact and portable.",
                "Made from high-quality rubber.",
                "Easy to fill and use.",
                "Provides effective pain relief."
            ]
        },
        {
            category: "Hot Water Bottle",
            productName: "2L Rubber Hot Water Bottle",
            productImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/388306967/KD/GV/TU/184498134/rubber-hot-water-bag-2l-500x500.jpg",
            actualPrice: 150,
            offpercentage: 20,
            offerPrice: 120,
            desc: "2L rubber hot water bottle for prolonged heat therapy.",
            points: [
                "Large capacity for extended use.",
                "Made from high-quality rubber.",
                "Durable and long-lasting.",
                "Provides effective heat therapy."
            ]
        }
    ];

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>{SingleProduct[0].productName}</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{SingleProduct[0].productName}</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="product-page py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-2">
                            <div className="main-slider">
                                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                                    {SingleProduct[0].productImages.map((image, index) => (
                                        <div key={index}>
                                            <img src={image} alt={`${SingleProduct[0].productName} ${index + 1}`} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="thumbnail-slider mt-2">
                                <Slider
                                    asNavFor={nav1}
                                    ref={slider => (sliderRef2 = slider)}
                                    slidesToShow={3}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {SingleProduct[0].productImages.map((image, index) => (
                                        <div key={index} className="sm-images">
                                            <img src={image} alt={`${SingleProduct[0].productName} ${index + 1}`} className="img-thumbnail mx-1" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-7 content">
                            <h1>{SingleProduct[0].productName}</h1>
                            <div className="d-flex prices gap-2">
                                <h2>₹{SingleProduct[0].offerPrice}</h2>
                                <h5>
                                    <del>₹{SingleProduct[0].actualPrice}</del>
                                    <span className="off">({SingleProduct[0].offpercentage}% off)</span>
                                </h5>
                            </div>
                            
                            <div className="d-flex gap-2 btns">

                                <div className="quantity-control">
                                    <button onClick={decreaseQuantity} className="input-btn">-</button>
                                    <span className="mx-2">{quantity}</span>
                                    <button onClick={increaseQuantity} className="input-btn">+</button>
                                </div>

                                <button onClick={addToCart} className=" add-to-cart-btn">Add to Cart</button>

                            </div>

                            <p>{SingleProduct[0].desc}</p>
                            <ol>
                                {SingleProduct[0].points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`text-center popup ${showModal ? 'show' : ''}`}>
                {SingleProduct[0].productName} <br /> added to cart!
            </div>

            {/* <div className={`modal-harsh ${showModal ? 'show' : ''}`} onClick={closeModal}>
                <div className="modal-content-harsh" onClick={e => e.stopPropagation()}>
                    <h2>Added to Cart</h2>
                    <p>{SingleProduct[0].productName} has been added to your cart with quantity {quantity}.</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div> */}


            <SubHead title="Related Products" />



            <section className='my-5'>
                <div className="container">
                    <div className="product-grid">

                        {productList.map((product, index) => (
                            <Link to="/category/products/product" className="single-pro" key={index}>
                                <div className="img">
                                    <img src={product.productImage} alt={product.productName} />
                                </div>
                                <div className="content">
                                    <div className="pro-name">{product.productName}</div>
                                    <div className="flex">
                                        <div className="price">
                                            <h4>₹{product.offerPrice}</h4>
                                            <del>₹{product.actualPrice}</del>
                                        </div>
                                        <div className="offpercent">{product.offpercentage}% off</div>
                                    </div>
                                    
                                    {/* <div className="grid-2">
                                        <button className="addTocart">Add to cart</button>
                                        <button className="buyNow">Buy Now</button>
                                    </div> */}
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </section>

        </>
    );
};

export default SingleProductPage;
