import React from 'react'
import { Link } from 'react-router-dom'
import './ProfilePage.css'
import user from './user.png'

const ProfilePage = () => {
    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb ">
                        <h2>My Profile</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="profile-page my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="profile">
                                <div className="img">
                                    <img src="" onerror="this.onerror=null; this.src={`${user}`};" alt="profile-image" />
                                </div>
                                <h4>Harsh vardhan mishra</h4>
                                <p>harsh@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-8">

                            <div className="row">
                                <div className="col-12">

                                    {/* -- Tab & Pills Links --  */}
                                    <div className="btns-tab-list">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My Profile</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">My Orders</button>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-12">
                                    {/* Pills --  */}
                                    <div className="col-12">
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                                {/* ---- My Order Table ---  */}
                                                profile

                                            </div>

                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                orders

                                            </div>

                                        </div>
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

export default ProfilePage