import React, { useEffect, useState } from 'react'
import './ProductsPage.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const ProductByCategory = () => {
    const { name } = useParams();

    const [productData,setProductData] = useState([]);
    const [allcategory,setCategory] = useState([]); 


    const handleCategory = async ()=>{
        try {
            const res = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-category");
            setCategory(res.data.data)
            console.log(allcategory)
        } catch (error) {
            console.log("Something Issue to fetch categories : ",error)
        }
    }

    const handleProductData = async ()=>{
        try {
            const response = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-product");
            const resData = response.data.data;
            const filterdata = resData.filter((item)=>item.categoryName === name);
            console.log(filterdata)
            setProductData(filterdata)
            console.log(productData)
        } catch (error) {
            console.log(error)
        }
    }

    
    const [displayCount, setDisplayCount] = useState(8);
    const [loading, setLoading] = useState(false);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setDisplayCount(prevCount => prevCount + 8);
            setLoading(false);
        }, 2000);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        handleProductData();
        handleCategory();
    }, [name])
    return (
        <>
            <section class="bread mb-5">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>{name}</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item" aria-current="page"><Link to="/categories">Categories</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                </div>
            </section>


            <section className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-block">

                            {/* ---- Accordions ---  */}
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <div class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Products
                                        </div>
                                    </h2>


                                    {/* ---- All categories --- */}
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <ul>
                                                {allcategory.map((category, index) => (
                                                    <li><Link to={`/category/${category.categoryName}`} key={index}>{category.categoryName}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <div class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Price
                                        </div>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <div class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            AVAILABILITY
                                        </div>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <ul>
                                                <li><Link to="">In Stock</Link></li>
                                                <li><Link to="">Out of Stock</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-9">

                            {/* --- Collection Products --  */}
                            <div className="head-ban flex mb-4">
                                <h3>{name} ({productData.length})</h3>
                                <div className="grids-btns">
                                    <select name="selection" id="selection">
                                        <option>Featured</option>
                                        <option>Best Selling</option>
                                        <option>Price Ascending</option>
                                        <option>Price Descending</option>
                                        <option>Name Ascending</option>
                                        <option>Name Descending</option>
                                        <option>Date Ascending</option>
                                        <option>Date Descending</option>
                                    </select>
                                </div>
                            </div>

                            <div className="product-grid grid-3">

                                {productData.slice(0,displayCount).map((product, index) => (
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

                            {loading && (
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                            )}


                            {displayCount < productData.length && (
                                <div className="show-more">
                                    <button onClick={handleShowMore}>Show More</button>
                                </div>
                            )}

                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductByCategory