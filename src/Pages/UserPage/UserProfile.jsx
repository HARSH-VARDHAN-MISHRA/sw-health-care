import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    const Token = localStorage.getItem('swToken')
    if (Token === null) window.location.href = '/login';
    const User = localStorage.getItem("swUser");
    const user = JSON.parse(User);

    const handleLogout = () => {
        localStorage.removeItem('swToken');
        localStorage.removeItem('swUser');
        window.location.href = '/login';
    };

    return (
        <>
            {Token ? (
                <>
                    <section class="bread">
                        <div class="container">
                            <nav aria-label="breadcrumb ">
                                <h2>Profile</h2>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </section>

                    <section>
                        <div className="container mt-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>User Profile</h3>
                                </div>
                                <div className="card-body">
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                                    <p><strong>Account Created At:</strong> {new Date(user.createdAt).toLocaleString()}</p>
                                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </>

            ) : (
                <div className="text-center">
                    <h4>You are not Log In</h4>
                </div>
            )}


        </>
    )
}

export default UserProfile