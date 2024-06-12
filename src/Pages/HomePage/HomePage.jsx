import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Carasol from '../../Components/Carasol/Carasol'

import AllCategory from '../../Components/AllCategory/AllCategory'
import SubHead from '../../Components/SubHead/SubHead'
import MostSelling from '../../Components/MostSelling/MostSelling'
import About from '../../Components/About/About'
import Payment from '../../Components/Payment/Payment'

const HomePage = () => {

    const [allShopBanner,setShopBanner] = useState([]); 
    const [allTags,setTags] = useState([]); 
    const [allProducts,setAllProducts] = useState([]); 

    const handleShopBanner = async ()=>{
        try {
            const res = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-sale-banner");
            const resData = res.data.data;
            const filterdata = resData.filter((item)=>item.active === true);
            // console.log(filterdata)
            setShopBanner(filterdata)
            // console.log(allShopBanner)
        } catch (error) {
            console.log("Something Issue to fetch Shop Banners : ",error)
        }
    }

    const fetchTags = async ()=>{
        try {
            const res = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-tag");
            setTags(res.data.data)
            console.log(allTags)
        } catch (error) {
            console.log("Something Issue to fetch Tags : ",error)
        }
    }

    const fetchAllProducts = async ()=>{
        try {
            const res = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-product");
            setAllProducts(res.data.data)
            console.log(allProducts)
        } catch (error) {
            console.log("Something Issue to fetch Products : ",error)
        }
    }

    


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        handleShopBanner();
        fetchTags();
        fetchAllProducts();
    }, []);

    return (
        <>
            <Carasol/>
            <About/>

            <SubHead title="Our Categories" />
            <AllCategory/>

            {allTags && allTags.map((tags,tagIndex)=>(
                <>
                <section key={tagIndex}>
                    <SubHead title={tags.title} />
                    <div className="container my-4">
                        <div className="product-grid" >
                            {
                                allProducts.filter((item)=>item.tag === tags.title).map((filterpro,filterproindex)=>(
                                                                    
                                    <Link to={`/category/${filterpro.categoryName}/${filterpro.productName}`} className="single-pro" key={filterproindex}>
                                        <div className="img">
                                            <img src={filterpro.firstImage} alt={filterpro.productName} />
                                            <div className="offpercent">{filterpro.discountPercentage}% off</div>
                                            <div className="tag">{filterpro.tag}</div>
                                        </div>
                                        <div className="content">
                                            <div className="pro-name">{filterpro.productName}</div>

                                            <div className="price">
                                                <h4>₹{filterpro.discountPrice}</h4>
                                                <del>₹{filterpro.price}</del>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                ))
                            }
                        </div>
                    </div>

                </section>
                    
                    
                </>
                
            ))}

            <section className="banners">
                <div className="container">
                    <div className="row">
                        {allShopBanner && allShopBanner.map((shopBan,indexNum)=>(
                            <div className="col-md-6 p-2" key={indexNum}>
                                <Link to="/shop"><img src={shopBan.saleBannerImage} alt={shopBan.saleBannerTitle} /></Link>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <Payment />
        </>
    )
}

export default HomePage