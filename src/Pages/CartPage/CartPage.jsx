import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const productList = [
    {
        category: "Compressor Nebulizer",
        productName: "Piston Compressor Nebulizer",
        productImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/388328415/OJ/IF/OW/184498134/sw-health-care-piston-compressor-nebulizer-500x500.jpg",
        actualPrice: 1200,
        offpercentage: 23,
        offerPrice: 925,
        quantity: 1
    },
    {
        category: "Compressor Nebulizer",
        productName: "White Compressor Nebulizer",
        productImage: "https://5.imimg.com/data5/SELLER/Default/2024/2/388355231/XI/HR/UC/184498134/white-compressor-nebulizer-500x500.jpg",
        actualPrice: 1200,
        offpercentage: 25,
        offerPrice: 900,
        quantity: 1
    },
    {
        category: "Hot Water Bottle",
        productName: "Silicon Hot Water Bottle",
        productImage: "https://via.placeholder.com/500",
        actualPrice: 300,
        offpercentage: 20,
        offerPrice: 240,
        quantity: 1
    }
];

const CartPage = () => {
    const [cart, setCart] = useState(productList); // Using productList as the initial cart items
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState('');

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.offerPrice * item.quantity), 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal() - discount;
    };

    const updateQuantity = (index, amount) => {
        const newCart = [...cart];
        newCart[index].quantity += amount;
        if (newCart[index].quantity <= 0) newCart[index].quantity = 1; // Ensure quantity doesn't drop below 1
        setCart(newCart);
    };

    const removeItem = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const applyCoupon = () => {
        // Dummy coupon logic
        if (coupon === 'DISCOUNT10') {
            setDiscount(0.1 * calculateSubtotal());
            setCouponMessage('Coupon applied successfully!');
        } else {
            setDiscount(0);
            setCouponMessage('Invalid coupon code');
        }
    };

    return (
        <div className="container mt-5 cartPage">
            <div className="row">
                <div className="col-md-8">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <img src="https://via.placeholder.com/500" alt="Empty Cart" />
                            <h3>Your cart is empty</h3>
                            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                        </div>
                    ) : (
                        <div className="cart-details">
                            {cart.map((item, index) => (
                                <div key={index} className="cart-item d-flex mb-3 p-3 border">
                                    <img src={item.productImage} alt={item.productName} className="cart-item-image me-3" />
                                    <div className="item-info flex-grow-1">
                                        <h5>{item.productName}</h5>
                                        <p>Price: ₹{item.offerPrice}</p>
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
                    )}
                </div>

                <div className="col-md-4">
                    <div className="summary p-3 border">
                        <h5>Order Summary</h5>
                        <div className="apply-coupon my-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Coupon Code"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <button className="btn btn-primary mt-2" onClick={applyCoupon}>Apply Coupon</button>
                            {couponMessage && (
                                <div className={`mt-2 ${coupon === 'DISCOUNT10' ? 'text-success' : 'text-danger'}`}>
                                    {couponMessage}
                                </div>
                            )}
                        </div>
                        <div className="subtotal d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>₹{calculateSubtotal()}</span>
                        </div>
                        <div className="discount d-flex justify-content-between">
                            <span>Discount</span>
                            <span>-₹{discount.toFixed(2)}</span>
                        </div>
                        <div className="total d-flex justify-content-between mt-2">
                            <strong>Total</strong>
                            <strong>₹{calculateTotal().toFixed(2)}</strong>
                        </div>
                        <Link to="/cart/checkout" className="btn btn-success w-100 mt-3">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
