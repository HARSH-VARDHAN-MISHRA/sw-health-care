import React, { useEffect } from 'react'
import AllCategory from '../../Components/AllCategory/AllCategory'
import SubHead from '../../Components/SubHead/SubHead'
import MostSelling from '../../Components/MostSelling/MostSelling'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'

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
                            <img src="https://drtrust.in/cdn/shop/files/Kids_BP_Monitorc_1915x549.png?v=1707912215" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://drtrust.in/cdn/shop/files/Kids_BP_Monitorc_1915x549.png?v=1707912215" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://drtrust.in/cdn/shop/files/Kids_BP_Monitorc_1915x549.png?v=1707912215" class="d-block w-100" alt="..." />
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
        </>
    )
}

export default HomePage