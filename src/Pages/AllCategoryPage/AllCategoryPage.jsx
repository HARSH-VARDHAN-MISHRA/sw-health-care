import React, { useEffect } from 'react'
import AllCategory from '../../Components/AllCategory/AllCategory'
import { Link } from 'react-router-dom'



const AllCategoryPage = () => {

    const allcategory = [
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388355231/XI/HR/UC/184498134/white-compressor-nebulizer-250x250.jpg",
            "catName": "Compressor Nebulizer"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388305232/OU/VM/WJ/184498134/rubber-hot-water-bottle-2-5-ltr-sw-health-care-250x250.jpg",
            "catName": "Hot Water Bottle"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388309974/OK/SZ/TX/184498134/digital-thermometer-250x250.jpg",
            "catName": "Digital Thermometer"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388296789/YH/OQ/ZF/184498134/sw-health-care-microporus-paper-tape-5-mtr-250x250.jpg",
            "catName": "Surgical Tape"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388337036/UV/AP/YQ/184498134/sw-health-care-latex-powder-free-examination-gloves-250x250.png",
            "catName": "Latex Gloves"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388303322/KA/KM/BW/184498134/fingertip-pulse-oximeter-sw-health-care-a3-250x250.jpg",
            "catName": "Pulse Oximeter"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388353789/UF/FI/AR/184498134/plastic-safety-lancet-250x250.jpg",
            "catName": "Plastic Lancet"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/386614581/WB/QH/UG/184498134/bmc-nasal-pillow-mask-250x250.jpg",
            "catName": "Medical Mask"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388326556/WR/YY/ZP/184498134/sw-health-care-plastic-steam-vaporizer-250x250.jpg",
            "catName": "Steam Vaporizer"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388300880/VG/QJ/PF/184498134/img-20230615-wa0104-250x250.jpeg",
            "catName": "Hospital Bedpan"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388339139/GF/TI/JX/184498134/sw-health-care-regal-black-deciwell-stethoscope-250x250.jpg",
            "catName": "Aluminium Stethoscope"
        },
        {
            "catImg": "https://5.imimg.com/data5/SELLER/Default/2024/2/388338473/QQ/AD/EM/184498134/sw-health-care-foldable-wheelchair-250x250.jpg",
            "catName": "Manual Wheelchairs"
        }
    ]

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
  return (
    <>
        <section class="bread">
            <div class="container">
                <nav aria-label="breadcrumb ">
                    <h2>Our Categories</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Categories</li>
                    </ol>
                </nav>
            </div>
        </section>

        <section className="all-cate my-5">
            <div className="container">
                <div className="grid-6">

                    {allcategory && allcategory.map((category, index) => (
                        // <Link to={`category/${category.catName}`} className="single-cate" key={index}>
                        <Link to={`/category/products`} className="single-cate" key={index}>
                            <img src={category.catImg} alt={category.catName} />
                            <h3>{category.catName}</h3>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    </>
  )
}

export default AllCategoryPage