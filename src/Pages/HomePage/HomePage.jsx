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

    const [allShopBanner,setShopBanner] = useState([]) 

    const handleShopBanner = async ()=>{
        try {
            const res = await axios.get("http://localhost:9875/api/v1/get-all-sale-banner");
            const resData = res.data.data;
            const filterdata = resData.filter((item)=>item.active === true);
            // console.log(filterdata)
            setShopBanner(filterdata)
            // console.log(allShopBanner)
        } catch (error) {
            console.log("Something Issue to fetch Shop Banners : ",error)
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        handleShopBanner();
    }, []);

    return (
        <>
            <Carasol/>
            <About/>

            <SubHead title="Our Categories" />
            <AllCategory/>
            <SubHead title="Most Selling Products" />
            <MostSelling/>

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

            <SubHead title="New Arrivals" />
            <MostSelling/>

            <Payment />
        </>
    )
}

export default HomePage