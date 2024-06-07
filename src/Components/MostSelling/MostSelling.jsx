import React from 'react'
import { Link } from 'react-router-dom';

const MostSelling = () => {
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
    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="product-grid">

                        {productList.map((product, index) => (
                            <Link to="/category/products/product" className="single-pro" key={index}>
                                <div className="img">
                                    <img src={product.productImage} alt={product.productName} />
                                    <div className="offpercent">{product.offpercentage}% off</div>
                                    <div className="tag">New Arrival</div>
                                </div>
                                <div className="content">
                                    <div className="pro-name">{product.productName}</div>
                                    
                                    <div className="price">
                                        <h4>₹{product.offerPrice}</h4>
                                        <del>₹{product.actualPrice}</del>
                                    </div>
                                    
                                    
                                    {/* <div className="grid-2">
                                        <button className="addTocart">Add to cart</button>
                                        <button className="buyNow">Buy Now</button>
                                    </div> */}
                                </div>
                            </Link>
                        ))}
                    
                    </div>
                        <div className="view-more my-4">
                            <Link to="/category/products">View All Products</Link>
                        </div>
                </div>
            </section>
        </>
    )
}

export default MostSelling