import React from 'react'
import payImg from './payment.webp'
import './Payment.css'
import { Link } from 'react-router-dom'

const Payment = () => {
    return (
        <>
            <section class="payment ">
                <div class="payment_1">
                    <div class="shipp">
                        <i class="fa-solid fa-truck-fast"></i>
                        <h5>Free Shipping</h5>

                    </div>
                    <div class="cod">
                        <i class="fa-solid fa-wallet"></i>
                        <h5>COD Available</h5>
                    </div>
                    <div class="queri">
                        <h5>Have Queries or Concerns ?</h5>
                        <Link to="/contact">
                            <div class="queri_btn">CONTACT US</div>
                        </Link>
                    </div>
                </div>
                <div class="payment_2">
                    <h6>PAYMENT</h6>
                    <p> <i class="fa-solid fa-shield"></i> 100% Payment Protection, Easy Return Policy 100% Payment Protection,
                        Easy Return Policy</p>
                    <img src={payImg} alt="" />
                </div>
            </section>
        </>
    )
}

export default Payment