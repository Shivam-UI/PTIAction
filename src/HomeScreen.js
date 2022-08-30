import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sparkles from 'react-sparkle';
// custom feeds 
import ConfirmModal from "./AddPostModal/ConfirmModal";
// model dialoug
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// dialoug 
import Modal from 'react-bootstrap/Modal';
import { BottomSheet } from 'react-spring-bottom-sheet';
import "./App.css";
// get data
import axios from 'axios';
// get data from server
import AllPostScreen from './allPostScreen';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const HomeScreen = () => {

    const navigate = useNavigate();
    const [counter, setCounter] = React.useState(1);
    const type_user = localStorage.getItem('user_type');
    const [isLoading, setIsLoading] = React.useState(true);
    const [openComment, setOpenComments] = React.useState(true);
    const [value, setValue] = React.useState(0);
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const [destroyOnClose, setDestroyOnClose] = React.useState(false);
    // 
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
        setCounter(5);
        console.log('handleClickOpen', counter);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClick = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const loggedOut = () => {
        localStorage.clear();
        if (localStorage.length === 0) {
            toast('Successfully logged out!');
            window.location.reload();
        } else {
            toast.error('something wrong!');
        }
    }

    // const onDestroyOnCloseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setDestroyOnClose(e.target.checked);
    // };

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    //creating IP state
    const [ip, setIP] = useState('');

    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
        setUserData(res.data.IPv4);
    }

    const setUserData = async (ip_me) => {
        const data = {
            ip_address: ip_me,
        }
        axios.post('https://amazingtech.space/PTI/api/login', data)
            .then((res) => {
                console.log('resp', JSON.stringify(res.data));
                if (res.data.status === true) {
                    localStorage.setItem("user_type", 'local_user');
                    localStorage.setItem("user_ip", res.data.id);
                    localStorage.setItem("ip_address", res.data.ip_address);
                    toast.success("Logged in successfully.", {
                        position: "top-center",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.error(res.data.message, {
                        position: "No valid user!",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch((err) => console.log('err', JSON.stringify(err)));

    }

    useEffect(() => {
        //passing getData method to the lifecycle method
        if (!localStorage.getItem("user_ip")) {
            getData();
        }
    }, [])

    const handleLogout = () => {
        console.log("this hould logout the user");
    };

    // const dialog = (
    //     <Dialog
    //         visible={visible}
    //         destroyOnClose={destroyOnClose}
    //         animation="slide-fade"
    //         maskAnimation="fade"
    //         onClose={onClose}
    //         style={{ width: 600 }}
    //         title={<div>第二个弹框</div>}
    //         footer={[
    //             <button type="button" className="btn btn-default" key="close" onClick={onClose}>
    //                 Close
    //             </button>,
    //             <button type="button" className="btn btn-primary" key="save" onClick={onClose}>
    //                 Save changes
    //             </button>,
    //         ]}
    //     >
    //         {/* <InnerRender /> */}
    //         <h4>Text in a modal</h4>
    //         <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    //         <hr />
    //         <h4>Overflowing text to show scroll behavior</h4>
    //         <p>
    //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
    //             egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    //         </p>
    //         <p>
    //             <button type="button" className="btn btn-primary">
    //                 Primary
    //             </button>{' '}
    //             <button type="button" className="btn btn-secondary">
    //                 Secondary
    //             </button>{' '}
    //             <button type="button" className="btn btn-success">
    //                 Success
    //             </button>{' '}
    //             <button type="button" className="btn btn-danger">
    //                 Danger
    //             </button>{' '}
    //             <button type="button" className="btn btn-warning">
    //                 Warning
    //             </button>{' '}
    //             <button type="button" className="btn btn-info">
    //                 Info
    //             </button>{' '}
    //         </p>
    //         <p>
    //             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
    //             vel augue laoreet rutrum faucibus dolor auctor.
    //         </p>
    //         <div style={{ display: '' }}>
    //             <p>
    //                 Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
    //                 scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
    //                 auctor fringilla.
    //             </p>
    //             <p>
    //                 Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
    //                 in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    //             </p>
    //             <p>
    //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
    //                 vel augue laoreet rutrum faucibus dolor auctor.
    //             </p>
    //             <p>
    //                 Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
    //                 scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
    //                 auctor fringilla.
    //             </p>
    //             <p>
    //                 Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
    //                 in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    //             </p>
    //             <p>
    //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
    //                 vel augue laoreet rutrum faucibus dolor auctor.
    //             </p>
    //             <p>
    //                 Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
    //                 scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
    //                 auctor fringilla.
    //             </p>
    //         </div>
    //     </Dialog>
    // );

    return (
        <div>
            <div className="main-bg">
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText
                                primary="Default notification ringtone"
                                secondary="Tethys"
                            />
                        </ListItem>
                    </List>
                </Dialog>
                <div className="frame-holder">
                    <div className="content-wrapper">
                        <div className="card-block">
                            {type_user === 'admin_user' ? <div className="clickForPopUp" onClick={handleClickOpen}>
                                <img style={{ width: 22, }} src="./assets/images/add_post.png" className="img-responsive navbar__icons" />
                            </div> : null}
                            <div className="card-header">
                                <div className="col-md-2 logoBox">
                                    <div className="main-logo">
                                        <Sparkles
                                            color={'#00867b'}
                                            count={20}
                                            minSize={7}
                                            maxSize={9}
                                            overflowPx={10}
                                            fadeOutSpeed={10}
                                            flicker={false}
                                        />
                                        <img src="./assets/images/logo.svg" className="img-responsive product_logo" alt="logo" />
                                    </div>
                                </div>
                                <div className="col-md-8 menuBox">
                                    <ul className="menuContainer">
                                        <li className="menuitems active">
                                            <img className="img-responsive menuIcons" style={{}} src="./assets/images/new_home.png" />
                                        </li>
                                        <li className="menuitems">
                                            <img className="img-responsive menuIcons" style={{}} src="./assets/images/trending_icon" />
                                        </li>
                                        <li className="menuitems">
                                            <img className="img-responsive menuIcons" style={{}} src="./assets/images/image_new.png" />
                                        </li>
                                        <li className="menuitems">
                                            <img className="img-responsive menuIcons" style={{}} src="./assets/images/video_new_icon.png" />
                                        </li> 
                                    </ul>
                                </div>
                                <div className="col-md-2 sideMenuBox">
                                    <div className="extraBox" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <li>
                                            <img style={{  }} src="./assets/images/notification_icon" className="img-responsive navbar__icons" />
                                        </li>
                                        <li className="dropdown">
                                            <div className="btn-dropdown-ellipse dropdown-toggle" type="link" data-toggle="dropdown">
                                                <img style={{ marginTop: 2 }} src="./assets/images/iconsc_menu.png" className="img-responsive navbar__icons" />
                                            </div>
                                            <ul className="dropdown-menu left arrow-top-right">
                                                <li><a to="/Login"><i className="fa fa-bell" aria-hidden="true"></i>Update Notification</a></li>
                                                <li><a href="/Login"><i className="fa fa-bullseye" aria-hidden="true"></i>Action Notification</a></li>
                                                {localStorage.getItem('user_name') !== null ? <li><a className="loggedout" onClick={() => loggedOut()}><i className="fa fa-sign-in" aria-hidden="true"></i><span className="user_found">{localStorage.getItem('user_name')}</span> Logout</a></li> : <li ><Link className="loggin" to="/Login"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</Link></li>}
                                                <li><a href="/Login"><i className="fa fa-facebook-square" aria-hidden="true"></i>Our Facebook</a></li>
                                                <li><a href="/Login"><i className="fa fa-twitter-square" aria-hidden="true"></i>Our Twitter</a></li>
                                                <li><a href="/AboutUs"><i className="fa fa-info-circle" aria-hidden="true"></i>About</a></li>
                                            </ul>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="contextBox">
                                <AllPostScreen isOpen={openComment} />
                                <Dialog fullScreen={fullScreen} />
                            </div>
                        </div>
                    </div>
                    <ConfirmModal
                        content="Are you sure you want to leeeave us ?"
                        open={confirmOpen}
                        setOpen={setConfirmOpen}
                        onConfirm={handleLogout}
                    />
                </div>
            </div>
            <ToastContainer />
        </div>
    );

}

export default HomeScreen;

{/* <Alltabsstories />
<Stories />
<Create />
<Posts />
<Sidebar /> */}
