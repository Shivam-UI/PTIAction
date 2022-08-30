import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../loaderSpinner";
// get data
import axios from 'axios';

const LoginScreen = (data) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const emailRgx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

    const updateEmailInput = (evt) => {
        setEmail(evt.target.value);
    };

    const updatePasswordInput = (evt) => {
        setPassword(evt.target.value);
    };

    const loginwithValidation = () => {
        if (emailRgx.test(email)) {
            if (password.length > 5) {
                startLoginValidationSuccess();
            } else {
                toast.error("invalid password");
            }
        } else {
            toast.error("invalid email");
        }
    }

    const startLoginValidationSuccess = () => {
        setIsLoading(true);
        const data = {
            email: email,
            password: password,
        }
        axios.post('https://amazingtech.space/PTI/api/AdminAuthmoderator', data)
            .then((res) => {
                console.log('login_res', JSON.stringify(res.data))
                if (res.data.status === true) {
                    localStorage.setItem("user_type", 'admin_user');
                    localStorage.setItem("user_ip", res.data.id);
                    localStorage.setItem("user_name", res.data.name);
                    toast.success("Logged in successfully.", {
                        position: "top-center",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setIsLoading(false);
                    navigate("/");
                } else {
                    setIsLoading(false);
                    toast.error(res.data.message);
                }
            })
            .catch((err) => console.log('err', JSON.stringify(err)));
        // toast.success("Logged in successfully.", {
        //     position: "top-center",
        //     autoClose: 1500,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
    }

    return (
        <>
            {isLoading ? <LoadingSpinner /> : null}
            <div className="main-bg">
                <div className="frame-holder">
                    <div className="content-wrapper">
                        <div className="container h-100">
                            <div className="row align-items-center">
                                <div className="col-6 mx-auto">
                                    <div className="card h-100 border-primary justify-content-center">
                                        <div className="login_box">
                                            <img src="./assets/images/favicon.png" className="loginImageLogo img-responsive center" alt="logo" />
                                            <h4 className="loginText">Login Here</h4>
                                            <div className="container-fluid">
                                                <input className="formLogin" placeholder="Enter Email" onChange={updateEmailInput} required />
                                                <input className="formLogin" placeholder="Password" onChange={updatePasswordInput} required />
                                                <button className="loginButton" type="submit" onClick={() => loginwithValidation()}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default LoginScreen;