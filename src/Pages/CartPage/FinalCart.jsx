import React from 'react'
import { Link } from 'react-router-dom'

const FinalCart = () => {
  return (
    <>
        <section class="bread">
            <div class="container">
                <nav aria-label="breadcrumb ">
                    <h2>Order Summary</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Order Summary</li>
                    </ol>
                </nav>
            </div>
        </section>

        

    </>
  )
}

export default FinalCart