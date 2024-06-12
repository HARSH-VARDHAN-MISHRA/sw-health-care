import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import sideBg from './sideBg.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const [loading, setLoading] = useState(false);
    const [getOtp, setgetOtp] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        newPassword: "",
        otp: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault()
        try {
            const response = await axios.post("https://sw-health-care-backend.onrender.com/api/v1/Password-change-request", formData)
            console.log(response.data);
            setLoading(false);
            toast.success(response.data.msg)
            setgetOtp(true);
        }
        catch (err) {
            console.log(err);
            console.log(err.response?.data.msg);
            toast.error(err.response?.data?.msg?? "Internal Server error")
            setLoading(false)

        }
    }

    const handleOTPSubmit = async (otpevent) => {
        setLoading(true)
        otpevent.preventDefault()
        try {
            const response = await axios.post(`https://sw-health-care-backend.onrender.com/api/v1/Verify-Otp/${formData.email}/${formData.newPassword}`, formData)
            console.log(response.data);
            setLoading(false);
            toast.success(response.data.msg)
            window.location.href="/login"

        } catch (error) {
            console.log(error)
            console.log(error.response.data.msg);
            toast.error(error.response.data.msg)

            setLoading(false)
        }
    }
    const resendOTP = async (otpevent) => {
        setLoading(true)
        otpevent.preventDefault()
        try {
            const response = await axios.post(`https://sw-health-care-backend.onrender.com/api/v1/Resend-Otp/`, formData)
            console.log(response.data);
            setLoading(false);

        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(error.response.data.msg)

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
        <ToastContainer/>
            <section className="my-3 login-page">
                <div className="container">
                    <div className="row login">
                        <div className="col-md-6 d-none d-md-block">
                            <img src={sideBg} alt="laboratory Image" />
                        </div>
                        <div className="col-md-6 form-div text-center">
                            <div className="headings">
                                <h1>Forget Password</h1>
                                <p>Verify your account and reset your password</p>
                            </div>
                            <div className="form">
                                <form>
                                    <div className="input-field">
                                        <i className="fa-solid fa-envelope"></i>
                                        <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder='Email Id' required />
                                    </div>
                                    <div className="input-field">
                                        <i className="fa-solid fa-key"></i>
                                        <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} placeholder='New Password' required />
                                    </div>

                                    {getOtp ? (
                                        <>
                                            <div className="input-field">
                                                <i className="fa-solid fa-key"></i>
                                                <input required type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder='Enter OTP' />
                                            </div>
                                            {/* <input required type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder='Enter OTP' /> */}
                                            <p className="text-warning h6">OTP is only valid for 5 minutes.</p>
                                        
                                            <div className="flex">
                                                <div className="keep">
                                                    <Link onClick={resendOTP}><i class="fa-solid fa-arrow-rotate-left"></i> Resend OTP</Link>
                                                </div>
                                                <div className="member">

                                                </div>
                                            </div>
                                        </>
                                    ) : ""}

                                    {/* {
                                        getOtp ? (
                                            
                                            <button onClick={handleOTPSubmit} type="submit" value="Submit Otp " >Submit OTP</button>
                                        ) : (
                                            <button onClick={handleSubmit} type="submit" value="GET OTP " >Get OTP</button>
                                        )
                                    }
                                     */}

                                    <button type='submit' disabled={loading} className={`${loading ? 'not-allowed':'allowed' }`} onClick={getOtp ? handleOTPSubmit : handleSubmit}>
                                        {loading ? "Please Wait ..." : getOtp ? "Submit OTP" : "Get OTP"}
                                    </button>

                                </form>

                                

                                <div className="flex mt-5 width-80">
                                    <div className="resend-btn">
                                        {/* {otpGenerated ? (
                                            <Link to="#"><i className="fa-solid fa-arrow-rotate-right"></i> Resend OTP</Link>
                                        ) : ""} */}
                                    </div>
                                    <div className="tagline">
                                        Create new account. <Link to="/sign-up">Sign-Up</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForgetPassword
