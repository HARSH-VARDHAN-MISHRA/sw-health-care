import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Pagination ,Navigation ,Autoplay } from 'swiper/modules';
import axios from 'axios';

const Carasol = () => {
    const [caraImg,setImage]  = useState([])

    const handleCaraImg= async()=>{
        try {
            const response = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-main-banner");
            const resData = response.data.data;
            const filterdata = resData.filter((item)=>item.active === true);
            // console.log(filterdata)
            setImage(filterdata)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        handleCaraImg()
    },[])
  return (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            {
                caraImg && caraImg.map((item,index)=>(
                    <SwiperSlide key={index}><img src={item.bannerImage} alt={item.title} /></SwiperSlide>
                ))
            }
            
        </Swiper>
    </>
  )
}

export default Carasol