import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])
  return (
    <>
        <section class="bread">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Privacy & Policy</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Privacy & Policy</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section>
                <div class="container py-4">
                    <h1 class="display-4 mb-4">Privacy Policy</h1>
                    <p class="mb-4">Welcome to SW Health Care Private Limited. This privacy policy outlines the rules and regulations for the use of our website and how we handle your personal information.</p>
                    <p class="mb-4">By accessing this website, we assume you accept this privacy policy in full. Do not continue to use SW Health Care Private Limited's website if you do not accept all of the policies stated on this page.</p>

                    <h2 class="h4 mb-2">1. Information Collection</h2>
                    <p class="mb-4">We collect personal information from you when you visit our website, register, place an order, subscribe to our newsletter, or fill out a form.</p>

                    <h2 class="h4 mb-2">2. Use of Information</h2>
                    <p class="mb-4">The information we collect from you may be used in one of the following ways:</p>
                    <ul class="list-unstyled pl-3 mb-4">
                        <li class="mb-2">• To personalize your experience</li>
                        <li class="mb-2">• To improve our website</li>
                        <li class="mb-2">• To improve customer service</li>
                        <li class="mb-2">• To process transactions</li>
                        <li class="mb-2">• To administer a contest, promotion, survey, or other site feature</li>
                        <li class="mb-2">• To send periodic emails</li>
                    </ul>

                    <h2 class="h4 mb-2">3. Protection of Information</h2>
                    <p class="mb-4">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>

                    <h2 class="h4 mb-2">4. Disclosure to Third Parties</h2>
                    <p class="mb-4">We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

                    <h2 class="h4 mb-2">5. Changes to Our Privacy Policy</h2>
                    <p class="mb-4">If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on [Date].</p>

                    <h2 class="h4 mb-2">6. Contact Us</h2>
                    <p class="mb-4">If you have any questions about this privacy policy, you can contact us at:</p>
                    <address class="mb-4">
                        SW Health Care Private Limited<br />
                        Ground Floor Pocket I, Sec-4, Plot No 50, Bawana DSIDC,<br />
                        Near Ganga Toli Mandir, Bawana Industrial Area, North,<br />
                        New Delhi-110039, Delhi, India<br />
                        Phone: +91-9870460015
                    </address>
                    <p class="mb-4">We SW Health Care Private Limited are Manufacturer and Trader of Manual Breast Pump, Hot Water Bottle, Compressor Nebulizer, Steam Vapourizer, Wheel Chair And Other Medical Equipments Since 2020 in New Delhi, Delhi.</p>
                </div>
            </section>
    </>
  )
}

export default PrivacyPolicy