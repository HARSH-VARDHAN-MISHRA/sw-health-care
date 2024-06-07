import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from 'react-router-dom';

import './SingleProductPage.css';
import SubHead from "../../Components/SubHead/SubHead";
import axios from "axios";

const SingleProductPage = () => {
    
    
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


    const [showPopup, setShowPopup] = useState(false);

    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");

    

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        setShowPopup(true);
    };
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    // --- AXIOS --- 
    const { name , proname } = useParams([]);
    const [productData,setProductdata] = useState([]);
    const [categoryProductData,setCategoryProductData] = useState([]);

    const handleProductFetch = async ()=>{
        try {
            const response = await axios.get("http://localhost:9875/api/v1/get-all-product");
            const resData = response.data.data;
            const filterdata = resData.filter((item)=>item.categoryName === name && item.productName === proname);
            const filterCategorydata = resData.filter((item)=>item.categoryName === name);
            // console.log(filterdata)
            setProductdata(filterdata)
            setCategoryProductData(filterCategorydata);
            // console.log(productData)
            if (filterdata.length > 0) {
                setMainImage(filterdata[0].firstImage);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        handleProductFetch();
    }, [name,proname]);

    if (productData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>{productData[0].productName}</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{productData[0].productName}</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="product-page py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 mb-4">
                            <div className="main-image">
                                <img src={mainImage} className="img-thumbnail" alt={productData[0]?.productName} />
                            </div>
                            <div className="small-images row mt-2">                                
                                {[productData[0]?.firstImage, productData[0]?.secondImage, productData[0]?.thirdImage, productData[0]?.forthImage].map((image, index) => (
                                    <div className="col-3 ">
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${productData[0]?.productName} ${index + 1}`}
                                            onMouseEnter={() => setMainImage(image)}
                                            className="img-thumbnail"
                                        />

                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-7 content">
                            <h1>{productData[0].productName}</h1>
                            <div className="d-flex prices gap-2">
                                <h2>₹{productData[0].discountPrice}</h2>
                                <h5>
                                    <del>₹{productData[0].price}</del>
                                    <span className="off">({productData[0].discountPercentage}% off)</span>
                                </h5>
                            </div>
                            
                            <div className="d-flex gap-2 btns">

                                <div className="quantity-control">
                                    <button onClick={decreaseQuantity} className="input-btn">-</button>
                                    <span className="mx-2">{quantity}</span>
                                    <button onClick={increaseQuantity} className="input-btn">+</button>
                                </div>
                                

                            </div>

                            <div className="flex pg-btns">
                                <button className="hover-btn" onClick={addToCart}>
                                    <span>ADD TO CART</span>
                                </button>
                                <button className="hover-btn">
                                    <span>BUY NOW</span>
                                </button>

                            </div>

                            {showPopup && (
                                <div className="popup">
                                    <button className="closePopup" onClick={handleClosePopup}>×</button>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className='green text-center mb-2'> <i class="fa-regular fa-circle-check"></i> Added to cart successfully!</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="left text-center">
                                                
                                                <img src={productData[0].firstImage} alt={productData[0].productName} />
                                                <p>{productData[0].productName}</p>
                                                <p>QTY: {quantity}</p>
                                                
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="right">
                                                <p>There are {quantity} items in your cart</p>
                                                <p className='total'>TOTAL: Rs. 5,993.00</p>
                                                <div className="buttons">
                                                    <Link to="/categories" className="continueShopping">Continue shopping</Link>
                                                    <Link to="/cart" className="viewCart">View cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            )}

                            <p>{productData[0].productDescription}</p>
                            <ol>
                                {productData[0].productPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>


            <SubHead title="Related Products" />

            <section className='my-5'>
                <div className="container">
                    <div className="product-grid">

                    {categoryProductData.map((product, index) => (
                            <Link to={`/category/${product.categoryName}/${product.productName}`} className="single-pro" key={index}>
                                <div className="img">
                                    <img src={product.firstImage} alt={product.productName} />
                                    <div className="offpercent">{product.discountPercentage}% off</div>
                                    <div className="tag">{product.tag}</div>
                                </div>
                                <div className="content">
                                    <div className="pro-name">{product.productName}</div>

                                    <div className="price">
                                        <h4>₹{product.discountPrice}</h4>
                                        <del>₹{product.price}</del>
                                    </div>
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
