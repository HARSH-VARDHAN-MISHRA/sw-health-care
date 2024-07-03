import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MetaTag from '../../Components/Meta/MetaTag';

const ReturnRefund = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
        <MetaTag
        title="Return and Refund Policy - SW Health Care Private Limited"
        description="Understand the return and refund policy of SW Health Care Private Limited. Find out about our return process, eligibility, and refund conditions."
        keyword="return policy, refund policy, SW Health Care, return process, refund conditions"
      />
            <section class="bread">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Return & Refund</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Return & Refund</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section>
                <div class="container py-4">
                    <h1 class="display-4 mb-4">Return & Refund Policy</h1>
                    <p class="mb-4">We want you to be completely satisfied with your purchase from SW Health Care Private Limited. If you are not satisfied with your purchase for any reason, you may return it for a refund or exchange within 4-5 days of receiving your order.</p>

                    <h2 class="h4 mb-2">1. Return Eligibility</h2>
                    <p class="mb-4">To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>

                    <h2 class="h4 mb-2">2. Return Process</h2>
                    <p class="mb-4">To initiate a return, please contact our customer service team with your order number and reason for return. We will provide you with instructions on how to return your item.</p>

                    <h2 class="h4 mb-2">3. Refund Processing</h2>
                    <p class="mb-4">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days.</p>

                    <h2 class="h4 mb-2">4. Return Shipping</h2>
                    <p class="mb-4">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

                    <h2 class="h4 mb-2">5. Exchanges</h2>
                    <p class="mb-4">If you would like to exchange your item for a different size or color, please contact our customer service team for assistance.</p>

                    <h2 class="h4 mb-2">6. Contact Us</h2>
                    <p class="mb-4">If you have any questions about our return and refund policy, you can contact us at:</p>
                    <address class="mb-4">
                        SW Health Care Private Limited<br />
                        Ground Floor Pocket I, Sec-4, Plot No 50, Bawana DSIDC,<br />
                        Near Ganga Toli Mandir, Bawana Industrial Area, North,<br />
                        New Delhi-110039, Delhi, India<br />
                        Phone: +91-9870460015
                    </address>
                </div>
            </section>


        </>
    )
}

export default ReturnRefund