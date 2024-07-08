import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './OrderConfirm.css';

const OrderConfirm = () => {
    const [latestOrder, setLatestOrder] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const swToken = localStorage.getItem('swToken');
    const swUser = JSON.parse(localStorage.getItem('swUser'));
        console.log(swUser);
    useEffect(() => {
        const fetchLatestOrder = async () => {
            try {
                const response = await axios.get(`https://api.swhealthcares.com/api/v1/get-my-latest-order/${id}`, {
                    headers: {
                        Authorization: `Bearer ${swToken}`,
                    },
                });
                if (response.data && response.data.success) {
                    setLatestOrder(response.data.data);
                } else {
                    console.error("Error fetching latest order: ", response.data.msg);
                }
            } catch (error) {
                console.error("Error fetching latest order:", error);
            }
        };

        if (swToken) {
            fetchLatestOrder();
        }
    }, [swToken]);

    if (!latestOrder) {
        return <div>Loading...</div>; // or any other loading state
    }

    return (
        <>
            <section className="order-confirm my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Your Trusted SW HEALTH CARE</h3>
                            <div className="flex-row">
                                <div className="icon"><i className="fa-regular fa-circle-check"></i></div>
                                <div className="content">
                                    <strong>Thank You</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="bordered-box">
                                <h4 className='h4'>Order Information</h4>
                                <div className="row table-inner">
                                    <div className="col-md-6">
                                        <div className="strong">Contact Information</div>
                                        <p>{latestOrder.UserInfo.Name || "N/A"}</p>
                                        <p>{latestOrder.UserInfo.Email || "N/A"}</p>
                                        <p>{latestOrder.UserInfo.PhoneNumber || "N/A"}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="strong">Billing address</div>
                                        <p>{latestOrder.UserDeliveryAddress.Street}</p>
                                        <p>{latestOrder.UserDeliveryAddress.City}, {latestOrder.UserDeliveryAddress.State}</p>
                                        <p>{latestOrder.UserDeliveryAddress.Pincode}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="strong">Payment method</div>
                                        <p>{latestOrder.PaymentMode}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="strong">Total Amount</div>
                                        <p>₹{latestOrder.FinalPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="bordered-box cart-subtotal">
                                <div className="font-semibold h5 mb-2" style={{ color: 'var(--color-red)' }}>Cart Subtotal</div>
                                <ul>
                                    <li className="flex justify-between mb-1"><span>Sub-Total:</span>₹{latestOrder.FinalPrice}</li>
                                    <li className="flex justify-between mb-1"><span>Shipping Cost:</span>₹0.00</li>
                                    <li className="flex justify-between border-top pt-2 h6 font-bold"><span>TOTAL:</span>₹{latestOrder.FinalPrice}</li>
                                </ul>
                            </div>
                            <div className="text-center go-to bg-slate-200">
                                <Link to='/'>CONTINUE SHOPPING</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderConfirm;
