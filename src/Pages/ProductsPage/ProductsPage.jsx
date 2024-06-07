import React, { useEffect, useState } from 'react'
import './ProductsPage.css'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
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


    const [displayCount, setDisplayCount] = useState(5);
    const [loading, setLoading] = useState(false);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setDisplayCount(prevCount => prevCount + 4)
            setLoading(false);
        }, 2000);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <section class="bread mb-5">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Compressor Nebulizer</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item" aria-current="page"><Link to="/categories">Categories</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Compressor Nebulizer</li>
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
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <ul>
                                                <li><Link to="">Compressor Nebulizer</Link></li>
                                                <li><Link to="">Hot Water Bottle</Link></li>
                                                <li><Link to="">Digital Thermometer</Link></li>
                                                <li><Link to="">Surgical Tape</Link></li>
                                                <li><Link to="">Latex Gloves</Link></li>
                                                <li><Link to="">Pulse Oximeter</Link></li>
                                                <li><Link to="">Plastic Lancet</Link></li>
                                                <li><Link to="">Medical Mask</Link></li>
                                                <li><Link to="">Steam Vaporizer</Link></li>
                                                <li><Link to="">Hospital Bedpan</Link></li>
                                                <li><Link to="">Aluminium Stethoscope</Link></li>
                                                <li><Link to="">Manual Wheelchairs</Link></li>

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
                                <h3 >Compressor Nebulizer (22)</h3>
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

                                {productList.slice(0,displayCount).map((product, index) => (
                                    <Link to="/category/products/product" className="single-pro" key={index}>
                                        <div className="img">
                                            <img src={product.productImage} alt={product.productName} />
                                            <div className="offpercent">{product.offpercentage}% off</div>
                                        </div>
                                        <div className="content">
                                            <div className="pro-name">{product.productName}</div>

                                            <div className="price">
                                                <h4>₹{product.offerPrice}</h4>
                                                <del>₹{product.actualPrice}</del>
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


                            {displayCount < productList.length && (
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

export default ProductsPage