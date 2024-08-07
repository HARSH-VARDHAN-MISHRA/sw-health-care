import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import MetaTag from '../../Components/Meta/MetaTag';


const AllCategoryPage = () => {

    const [category,setCategory] = useState([]) 

    const handleFetch = async ()=>{
        try {
            const res = await axios.get("https://api.swhealthcares.com/api/v1/get-all-category");
            setCategory(res.data.data)
            console.log(category)
        } catch (error) {
            console.log("Something Issue to fetch categories : ",error)
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        handleFetch();
    }, []);
  return (
    <>
        <MetaTag 
            title="Our Categories - SW Health Care Private Limited"
            description="Explore a wide range of healthcare products and medical equipment from SW Health Care Private Limited. Find the best solutions for your health and wellness needs."
            keyword="Healthcare Products, Medical Equipment, SW Health Care, Compressor Nebulizer, Hot Water Bottle, Digital Thermometer, Surgical Tape, Latex Gloves, Pulse Oximeter, Plastic Lancet, Medical Mask, Steam Vaporizer, Hospital Bedpan, Aluminium Stethoscope, Manual Wheelchairs"
        />
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

                {category ? (
                    <div className="grid-6">

                        {category && category.map((cate, index) => (
                            <Link to={`/category/${cate.categoryName}`} className="single-cate" key={index}>
                                <img src={cate.categoryImage} alt={cate.categoryName} />
                                <h3>{cate.categoryName}</h3>
                            </Link>
                        ))}

                    </div>

                ) : "Soory , We Don't have products Now."}

            </div>
        </section>
    </>
  )
}

export default AllCategoryPage