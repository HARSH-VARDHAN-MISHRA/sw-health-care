import React from 'react'
import { Link } from 'react-router-dom'
import './AllCategory.css'
import { useState } from 'react'
import axios from 'axios'

const AllCategory = () => {

    const [allcategory,setCategory] = useState([]) 

    const handleFetch = async ()=>{
        try {
            const res = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-category");
            setCategory(res.data.data)
            console.log(allcategory)
        } catch (error) {
            console.log("Something Issue to fetch categories : ",error)
        }
    }
    
    const maxDisplay = 10;
    const displayCategories = allcategory.slice(0, maxDisplay);

    useState(()=>{
        handleFetch();
    },[])

  return (
    <>
        <section className="all-cate my-5">
            <div className="container">
                <div className="grid-6">

                    {displayCategories.map((category, index) => (
                        <Link to={`/category/${category.categoryName}`} className="single-cate" key={index}>
                            <img src={category.categoryImage} alt={category.categoryName} />
                            <h3>{category.categoryName}</h3>
                        </Link>
                    ))}

                </div>

                <div className="viewAllbtn">
                    {allcategory.length > maxDisplay && (
                        <Link to="/categories" className="view-more">
                            View More
                        </Link>
                    )}
                </div>

            </div>
        </section>
    </>
  )
}

export default AllCategory