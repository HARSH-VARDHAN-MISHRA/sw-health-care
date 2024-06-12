import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

import './SingleProductPage.css';
import SubHead from "../../Components/SubHead/SubHead";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProductPage = () => {

    const navigate = useNavigate();
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
            const response = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-product");
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
    
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('swcart')) || [];
        const product = {
            id: productData[0]._id,
            categoryName: productData[0].categoryName,
            name: productData[0].productName,
            price: productData[0].discountPrice,
            quantity,
            image: productData[0].firstImage,
            sku: productData[0].sku
        };

        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
            toast.success('Product quantity updated in cart');
        } else {
            cart.push(product);
            toast.success('Product added to cart');
        }

        localStorage.setItem('swcart', JSON.stringify(cart));
        console.log("cart Item",JSON.parse(localStorage.getItem('swcart').length))
        setShowPopup(true);
    };

    const handleBuyNow = () =>{
        handleAddToCart();

        setTimeout(() => {
            navigate('/cart')
            
        }, 2000);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        handleProductFetch();
    }, [name,proname]);

    if (productData.length === 0) {
        return <div className="container my-5">Loading...</div>;
    }

    // Retrieve the swcart from localStorage
    const swcart = JSON.parse(localStorage.getItem('swcart')) || [];

    // Get the length of the swcart array
    const cartLength = swcart.length;

    console.log("Length of swcart:", cartLength);

    return (
        <> 
            <ToastContainer />

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
                                <button className="hover-btn" onClick={handleAddToCart}>
                                    <span>ADD TO CART</span>
                                </button>
                                <button className="hover-btn" onClick={handleBuyNow}>
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
                                                {/* <p>There are {quantity} items in your cart</p> */}
                                                <p>There are {cartLength} items in your cart</p>
                                                
                                                {/* <p className='total'>TOTAL: Rs. 5,993.00</p> */}
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
