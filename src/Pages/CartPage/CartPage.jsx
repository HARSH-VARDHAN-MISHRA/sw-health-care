import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import emptyCart from './empty-cart.png';
import axios from 'axios';
import MetaTag from '../../Components/Meta/MetaTag';

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState('');
    const [LastPrice, setLastprice] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('swcart')) || [];
        setCart(storedCart);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    useEffect(() => {
        const subtotal = calculateSubtotal();
        const total = calculateTotal();
        setLastprice(total);  // Set LastPrice to the total initially
        localStorage.setItem('swFinalPrice', total.toFixed(2));
        localStorage.setItem('swDiscountPrice', discount.toFixed(2));
        localStorage.setItem('swSubtotal', subtotal.toFixed(2));
        localStorage.setItem('swDiscount', discount.toFixed(2));
    }, [cart, discount]);

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal() - discount;
    };

    const updateQuantity = (index, amount) => {
        const newCart = [...cart];
        newCart[index].quantity += amount;
        if (newCart[index].quantity <= 0) newCart[index].quantity = 1;
        setCart(newCart);
        localStorage.setItem('swcart', JSON.stringify(newCart));
    };

    const removeItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
        localStorage.setItem('swcart', JSON.stringify(newCart));
    };

    const [formData, setFormData] = useState({
        CouponeCode: '',
        orderTotal: 0
    });

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            orderTotal: calculateTotal()
        }));
    }, [cart, discount]);

    const applyCoupon = async () => {
        try {
            const res = await axios.post('https://sw-health-care-backend.onrender.com/api/v1/apply-vouchers', formData);
            const RoundTotal = Math.round(res.data.data.discountedTotal);
            setLastprice(RoundTotal);
            setDiscount(calculateSubtotal() - RoundTotal);
            setCouponMessage('Coupon applied successfully!');
        } catch (error) {
            console.log(error);
            setCouponMessage('Invalid coupon code');
            setLastprice(calculateSubtotal() - discount); // Show total price without discount
            setDiscount(0); // Reset discount if the coupon code is invalid
        }
    };

    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            CouponeCode: e.target.value
        }));
        setCouponMessage(''); // Clear coupon message when user starts typing a new code
        setLastprice(calculateTotal()); // Reset LastPrice to original total when user types a new code
        setDiscount(0); // Reset discount
    };

    return (
        <>
        <MetaTag
            title="Your Cart - SW Health Care Private Limited"
            description="View and manage items in your cart at SW Health Care Private Limited. Add, remove, or modify items before checkout."
            keyword="cart, shopping cart, SW Health Care, manage cart, checkout"
        />
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h2>Your Cart</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {cart.length === 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="empty-cart">
                                <img src={emptyCart} alt="Empty Cart" />
                                <h3>Your cart is empty</h3>
                                <Link to="/categories" className="btn btn-primary">Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mt-5 cartPage">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="cart-details">
                                {cart.map((item, index) => (
                                    <div key={item.id} className="cart-item d-flex mb-3 p-3 border">
                                        <img src={item.image} alt={item.name} className="cart-item-image me-3" />
                                        <div className="item-info flex-grow-1">
                                            <h5>{item.name}</h5>
                                            <p>Price: ₹{item.price}</p>
                                            <div className="d-flex quan align-items-center">
                                                <button className="btn btn-outline-secondary me-2" onClick={() => updateQuantity(index, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button className="btn btn-outline-secondary ms-2" onClick={() => updateQuantity(index, 1)}>+</button>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-danger ms-3 removeBtn" onClick={() => removeItem(index)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="summary p-3 border">
                                <h5>Order Summary</h5>
                                <div className="apply-coupon my-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Coupon Code"
                                        value={formData.CouponeCode}
                                        onChange={handleChange}
                                        name='CouponeCode'
                                    />
                                    <button className="btn btn-primary mt-2" onClick={applyCoupon}>Apply Coupon</button>
                                    {couponMessage && (
                                        <div className={`mt-2 ${couponMessage === 'Coupon applied successfully!' ? 'text-success' : 'text-danger'}`}>
                                            <div className="text-center">{couponMessage}</div>
                                        </div>
                                    )}
                                </div>
                                <div className="subtotal d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <span>₹{calculateSubtotal().toFixed(2)}</span>
                                </div>
                                <div className="discount d-flex justify-content-between">
                                    <span>Discount</span>
                                    <span>-₹{discount.toFixed(2)}</span>
                                </div>
                                <div className="total d-flex justify-content-between mt-2">
                                    <strong>Total</strong>
                                    <strong>₹{LastPrice.toFixed(2)}</strong>
                                </div>
                                <Link to="/cart/checkout" className="btn btn-success w-100 mt-3">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartPage;
