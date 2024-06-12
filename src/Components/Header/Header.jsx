import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Sidecart from '../sidecart/Sidecart'

const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    const [fixedHeader, setFixedHeader] = useState(false);



    const handleOpenBar = () => {
        setSidebar(true)
    }
    const handleCloseBar = () => {
        setSidebar(false)
    }

    const handleScroll = () => {
        // if (window.scrollY > window.innerHeight * 0) {
        //     setFixedHeader(true);
        // } else {
        //     setFixedHeader(false);
        // }
        setFixedHeader(false);
    };

    const [category,setCategory] = useState([]) 

    const handleFetch = async ()=>{
        try {
            const res = await axios.get("https://sw-health-care-backend.onrender.com/api/v1/get-all-category");
            setCategory(res.data.data)
            console.log(category)
        } catch (error) {
            console.log("Something Issue to fetch categories : ",error)
        }
    }


    // For Handle the search functionality 
    const [searchInput, setSearchInput] = useState()

    const handleSearchtext = () => {
        window.location.href = `/search-by/${searchInput}`
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearchtext();
        }
    }

    // ----- cart Items ---
    const cartItems = JSON.parse(localStorage.getItem('swcart')) || [];
    const cartLength = cartItems.length;
    // console.log(cartLength)



    // --- Side Cart ---- 
    const [cartOpen, setCartOpen] = useState(false)
    const handleCartOpen = () => {
        setCartOpen(!cartOpen)
    }
    const handleCartClose = () => {
        setCartOpen(false)
    }


    useEffect(() => {
        handleFetch();

        // -- To fix the header at top -- 
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const token = localStorage.getItem('swToken')
    const User = localStorage.getItem("swUser")
    const user = JSON.parse(User)

    return (
        <>
            <header className={fixedHeader ? 'fixed-top' : ''}>
                <div className="header-top text-center">
                    <p>WELCOME TO CAMRO - SW Health Care</p>
                </div>

                <div className="header-navbar">

                    <div className="logo">
                        <Link to="/" ><img src={logo} alt="logo" /></Link>
                    </div>


                    <div className="search-bar">
                        <input type="text"
                            placeholder="Search for Cookware Sets"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="icons">
                        {token ? (
                            <Link to="/profile" className="cart icon">
                                <i class="fa-regular fa-user"></i>
                            </Link>
                        ) : (
                            <>
                                <Link to="/login" className="cart icon">
                                    <div className="cre">Login</div>
                                </Link>
                                {/* <span style={{ color: "green" }}>|</span>
                                <Link to="/sign-up" className="cart icon">
                                    <div className="cre">Create Account</div>
                                </Link> */}
                            </>
                        )}



                        {/* <Link  onClick={handleCartOpen} className="cart icon"> */}
                        <Link to="/cart" className="cart icon">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span className='cart-numb'>{cartLength}</span>
                        </Link>
                        <div className="bar icon" onClick={handleOpenBar}>
                            <i class="fa-solid fa-bars"></i>
                        </div>

                    </div>

                </div>
            </header>

            <div className={`side-navbar ${sidebar ? "active" : ""}`}>
                <div className="closeSidebar" onClick={handleCloseBar}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <nav >
                    <ul>

                        <li><Link onClick={handleCloseBar} to="/">Home <i class="fa-solid fa-arrow-right"></i></Link></li>
                        <li><Link onClick={handleCloseBar} to="/categories">Shop By Categories <i class="fa-solid fa-arrow-right"></i></Link></li>

                        {category && category.map((item, index) => (
                            <li key={index}><Link onClick={handleCloseBar} to={`/category/${item.categoryName}`}>{item.categoryName} <i class="fa-solid fa-arrow-right"></i></Link></li>
                        ))}
                    </ul>

                    <div class="social-icons d-none">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=919870460015" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>

                    {token ? (
                        <div className="bottom-nav">
                            <div className="profile">
                                <div className="detail">
                                    <h5>{user.name}</h5>
                                    <Link to="/profile" onClick={handleCloseBar}>View Profile</Link>
                                </div>
                            </div>

                        </div>
                    ) : (
                        ""
                    )}

                    

                </nav>
            </div>

            {/* <Sidecart cartOpen={cartOpen} handleCartClose={handleCartClose} /> */}
        </>
    )
}

export default Header