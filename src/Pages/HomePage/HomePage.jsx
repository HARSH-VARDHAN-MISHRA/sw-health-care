import React, { useEffect } from 'react'
import AllCategory from '../../Components/AllCategory/AllCategory'
import SubHead from '../../Components/SubHead/SubHead'
import MostSelling from '../../Components/MostSelling/MostSelling'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import bn1 from './banner1.jpg'
import bn2 from './banner2.jpg'
import bn3 from './banner3.jpg'
import Payment from '../../Components/Payment/Payment'
import aboutImg from '../../Assets/about.webp'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <section className="cara">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={bn1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={bn2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={bn3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <About/>

            <SubHead title="Our Categories" />
            <AllCategory/>
            <SubHead title="Most Selling Products" />
            <MostSelling/>


            <SubHead title="New Arrivals" />
            <MostSelling/>

            <Payment />
        </>
    )
}

export default HomePage