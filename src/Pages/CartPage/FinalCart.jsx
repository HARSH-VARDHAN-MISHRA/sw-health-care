import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../../Components/Login/Login';

const FinalCart = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const navigate = useNavigate();

    const FinalCart = localStorage.getItem('swcart') || "{}"; // Set default value as "{}" (empty object) if no data found
    const MakeOrder = JSON.parse(FinalCart);
    const token = localStorage.getItem("swToken");

    const FinalPrice = JSON.parse(localStorage.getItem('swFinalPrice')); // Set default value as "{}" (empty object) if no data found

    if (!token) {
        return <>
            
            <div className="section my-2 my-md-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div class="alert alert-warning h6 text-center" role="alert">
                                <div>You Are Not Loged In,</div>
                                <div className='mt-1'>Please Login First</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Login/>
        </>
        // window.location.href = "/login";
    }

    console.log(MakeOrder);
    const [Order, setOrder] = useState({
        items: MakeOrder || [],
        address: {
            street: "",
            city: "",
            state: "",
            pincode: ""
        },
        PaymentMode: "",
        finalPrice: FinalPrice || 0,
        UserInfo: {}, // Assuming you have user info
        UserDeliveryAddress: {} // Assuming you have user delivery address
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'street' || name === 'city' || name === 'state' || name === 'pincode') {
            setOrder(prevOrder => ({
                ...prevOrder,
                address: {
                    ...prevOrder.address,
                    [name]: value
                }
            }));
        } else {
            setOrder(prevOrder => ({
                ...prevOrder,
                [name]: value
            }));
        }
    };

    const handlePaySubmit = async () => {
        try {
            const response = await axios.post('https://sw-health-care-backend.onrender.com/api/v2/payment-create', {
                amount: Order.finalPrice,
                // Merchant: generateMerchantTransactionId(),
                // transactionId: generateMerchantTransactionId()
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response);

            const redirectUrl = response.data.paydata.data.instrumentResponse.redirectInfo.url;

            if (redirectUrl) {
                window.location.href = redirectUrl;
            } else {
                alert('Something went wrong while creating the payment');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Order.PaymentMode === "Online") {
            await handlePaySubmit();

            try {
                const response = await axios.post('https://sw-health-care-backend.onrender.com/api/v1/create-order', Order, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('Order creation response:', response.data);
            } catch (error) {
                console.error('Order creation Error:', error);
            }
        } else {
            try {
                const response = await axios.post('https://sw-health-care-backend.onrender.com/api/v1/create-order', Order, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('Order creation response:', response.data);
                sessionStorage.setItem('orderData', JSON.stringify(Order));
                toast.success("Order Placed SuccessFully !!")

                setTimeout(() => {
                    // window.location.href = "/";
                    navigate('/')
                    localStorage.removeItem('swcart');
                }, 2000);
                // window.location.href = "/order-confirmed";
            } catch (error) {
                console.error('Order creation Error:', error);
            }
        }
    };

    return (
        <>
        <ToastContainer />
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Order Summary</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page"><Link to="/cart">Cart</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Order Summary</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="container finalcart-page mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <p className="h5 font-weight-bold">Order Summary</p>
                            <p className="text-muted">Check your items and select a suitable shipping method.</p>
                            <div className="mt-4 p-3 border rounded bg-white">
                                {MakeOrder && MakeOrder.length > 0 ? (
                                    MakeOrder.map((item, index) => (
                                        <div key={item.id} className="d-flex flex-column flex-md-row mb-3 p-2 border rounded">
                                            <img className="m-2 h-100 w-100 rounded border" src={item.image} alt="" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                                            <div className="flex-grow-1 d-flex flex-column justify-content-between px-3 py-2">
                                                <span className="product-name font-weight-bold">{item.name}</span>
                                                <span className='h6 font-weight-bold'>Quantity: {item.quantity}</span>
                                                <p className="h5 font-weight-bold text-danger">Rs {item.price}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products in the cart</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mt-4 bg-light p-4 rounded">
                            <p className="h5 font-weight-bold">Billing Address</p>
                            <p className="text-muted">Complete your order by providing your Address details.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mt-3">
                                    <label htmlFor="street" className="font-weight-bold">Street</label>
                                    <input onChange={handleChange} type="text" required={true} id="street" value={Order.address.street} name="street" className="form-control" placeholder="Street Address" />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="city" className="font-weight-bold">City</label>
                                    <input onChange={handleChange} type="text" required={true} id="city" value={Order.address.city} name="city" className="form-control text-uppercase" placeholder="Enter Your City" />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="state" className="font-weight-bold">State</label>
                                    <input onChange={handleChange} type="text" required={true} id="state" name="state" value={Order.address.state} className="form-control" placeholder="Enter Your State" />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="pincode" className="font-weight-bold">Pincode</label>
                                    <input onChange={handleChange} type="text" required={true} id="pincode" value={Order.address.pincode} name="pincode" className="form-control" placeholder="Pincode" />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="paymentType" className="font-weight-bold">Payment Type</label>
                                    <select onChange={handleChange} value={Order.PaymentMode} name="PaymentMode" className="form-control">
                                        <option value="">Select Payment Method</option>
                                        <option value="COD">COD</option>
                                        <option disabled value="Online">Online</option>
                                    </select>
                                </div>

                                <div className="mt-4 border-top border-bottom py-2">
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0 font-weight-bold">Subtotal</p>
                                        <p className="mb-0 font-weight-bold h6">Rs {JSON.parse(localStorage.getItem('swSubtotal'))}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0 font-weight-bold">Shipping</p>
                                        <div>
                                            <span className='text-success h6 mx-2'>Free</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 d-flex justify-content-between">
                                    <p className="h4 font-weight-bold">Total</p>
                                    <p className="h4 font-weight-bold">Rs {FinalPrice}</p>
                                </div>
                                <button type="submit" className="mt-4 w-100 btn btn-danger">Place Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .order-summary-img {
                    max-width: 100px;
                    max-height: 100px;
                }
                .finalcart-page .product-name {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 0.5rem;
                }
                .finalcart-page .form-control:focus {
                    border-color: var(--color-main);
                    outline: 0;
                    box-shadow: none;
                }
            `}</style>
        </>
    );
};

export default FinalCart;
