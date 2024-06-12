import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import sideBg from './sideBg.jpg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [loading,setLoading] = useState(false);
    const [formData,setFormData] = useState({
        password:'',
        email:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = async (event) =>{
        setLoading(true)
        event.preventDefault();
        try {
            const response = await axios.post('https://sw-health-care-backend.onrender.com/api/v1/login',formData);
            setLoading(false)
            console.log(response.data);
            toast.success('Login SuccessFull')
            localStorage.setItem('swToken',response.data.token);
            localStorage.setItem('swUser', JSON.stringify(response.data.user));
            
            window.location.href = "/"
        } catch (error) {
            console.log("Error While Login",error)
            if (error.response && error.response.data) {
                console.log("error.response",error)
                console.log(error.response.data.msg);
                toast.error(error.response.data.msg);
            } else {
                console.log(error.response.data.msg);  // Fallback to the error's message if no response
                toast.error('An unexpected error occurred');
            }
        
            setLoading(false);
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

  return (
    <>
        <ToastContainer />
        <section className="my-3 login-page">
            <div className="container">
                <div className="row login">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={sideBg} alt="laboratry Image" />
                    </div>
                    <div className="col-md-6 form-div text-center">
                        <div className="headings">
                            <h1>Welcome Back !</h1>
                            <p>Please login with your personal Details</p>
                        </div>
                        <div className="form" onSubmit={handleSubmit}>
                            <form>
                                <div className="input-field">
                                    <i class="fa-solid fa-envelope"></i>
                                    <input type="email" autoFocus value={formData.email} name='email' onChange={handleChange} placeholder="Enter Email" required />
                                </div>
                                <div className="input-field">
                                    <i class="fa-solid fa-lock"></i>
                                    <input type="
                                    " onChange={handleChange} value={formData.password} name='password' placeholder="Enter Password" required />
                                </div>

                                <div className="">
                                    <Link to="/login/forget-password">Forget Password?</Link>
                                    <div></div>
                                </div>
                                
                                <button type='submit' disabled={loading} className={`${loading ? 'not-allowed':'allowed' }`}>
                                    {loading ? "Please Wait ..." : "Login"}
                                </button>
                            </form>

                            <div className="tagline">
                                Don't have an Account? <Link to="/sign-up">Sign-Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login