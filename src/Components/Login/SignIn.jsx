import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import sideBg from './sideBg.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const SignIn = () => {

    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    });


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
            const response = await axios.post('http://localhost:9875/api/v1/register',formData);
            console.log(response.data);
            setLoading(false)
            
            // window.location.href=`/sign-up/confirm-account/${formData.email}`
            toast.success('OTP Send Successfully !!');
            navigate(`/sign-up/confirm-account/${formData.email}`)
        } catch (error) {
            setLoading(false)
            console.log(error)
            toast.error(error.response.data.message)
            console.log(error.response.data.message);
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

                        <div className="col-md-6 form-div text-center">
                            <div className="headings">
                                <h1>Create Your Account</h1>
                                <p>Create your account with your personal Details</p>
                            </div>
                            <div className="form" onSubmit={handleSubmit}>
                                <form>
                                    <div className="input-field">
                                        <i class="fa-solid fa-user-lock"></i>
                                        <input type="text" autoFocus value={formData.name} name='name' onChange={handleChange} placeholder="Enter Name" required />
                                    </div>
                                    <div className="input-field">
                                        <i class="fa-solid fa-envelope"></i>
                                        <input type="email" onChange={handleChange} value={formData.email} name='email' placeholder="Enter Email" required />
                                    </div>
                                    <div className="input-field">
                                        <i class="fa-solid fa-phone-volume"></i>
                                        <input type="tel" onChange={handleChange} value={formData.phoneNumber} name='phoneNumber' placeholder="Enter Mobile Number" required />
                                    </div>
                                    <div className="input-field">
                                        <i class="fa-solid fa-lock"></i>
                                        <input type="password" onChange={handleChange} value={formData.password} name='password' placeholder="Enter Password" required />
                                    </div>

                                    <div className="">
                                        <Link to="/login">Already Have a Account?</Link>
                                        <div></div>
                                    </div>

                                    <button type='submit' disabled={loading} className={`${loading ? 'not-allowed':'allowed' }`}>
                                        {loading ? "Please Wait ..." : "Send OTP"}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <img src={sideBg} alt="laboratry Image" />
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default SignIn