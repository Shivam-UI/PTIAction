import React from "react";
import { ReactSession } from 'react-client-session';

const AboutScreen = (data) => {

    const username = ReactSession.get("user_ip");
    const [confirmOpen, setConfirmOpen] = React.useState(false);

    const handleLogout = () => {
        console.log("this hould logout the user");
    };

    return (
        <>
            <div className="main-bg">
                <div className="frame-holder">
                    <div className="content-wrapper">
                        <div className="card-block">
                            <div className="card-header">
                                <div className="pti-action-navbar">
                                    <div className="main-logo">
                                        <a href="./">
                                            <img src="https://ptiaction.com/assets/images/logo.svg" className="img-responsive" alt="logo" /></a>
                                    </div>
                                </div>
                                <div className="menu-options">
                                    <button className="notification-btn counter-badge-holder">
                                        <a href="./">H {localStorage.getItem("user_ip")}</a>
                                    </button>
                                    <div className="dropdown">
                                        <button className="btn-dropdown-ellipse dropdown-toggle" type="button" data-toggle="dropdown">T</button>
                                        <ul className="dropdown-menu left arrow-top-right">
                                            <li><a href="#" className="active with-checkbox up-noti">
                                                <i>Z</i>
                                                <label className="custom-checkbox">Updates Notification
                                                    <input type="checkbox" checked="checked" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a></li>
                                            <li><a href="#" className="with-checkbox action-noti"><i>Y</i>
                                                <label className="custom-checkbox text-red">Action Notification
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a></li>
                                            <li>
                                                <a href="./" className="with-checkbox action-noti">
                                                    <i className="fa fa-sign-out" aria-hidden="true">Y</i>
                                                    <label className="custom-checkbox text-red">Sign In </label>
                                                </a></li>
                                            <li><a href="./"><i className="fa fa-facebook-square" aria-hidden="true"></i>Our Facebook</a></li>
                                            <li><a href="./"><i className="fa fa-twitter" aria-hidden="true"></i>Our Twitter</a></li>
                                            <li><a href="./">About us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-block about-content-area cms-about">
                                <div className="inner-content">
                                    <h3>About Us</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultri lces gravida. Risus commodo viverra maecenas accu msan lacus vel facilisis.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen disse ultri lces gravida. Risus commodo viverra maecenas accu msan lacus vel facilisis. </p>
                                </div>
                                <div className="step-back-btn text-center">
                                    <a href="./" type="button" className="btn-back">
                                        <div className="backBtnBox">
                                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                                        </div>
                                        Back
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutScreen;