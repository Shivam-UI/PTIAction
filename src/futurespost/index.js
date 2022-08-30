import * as React from 'react';
// get data
import $ from "jquery";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import "react-responsive-modal/styles.css";
// responsive slider
import 'react-spring-bottom-sheet/dist/style.css';
// webshare
import windowDimensions from '../Global/useWindowDimensions';
import 'react-spring-bottom-sheet/dist/style.css';
// comments box 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AllCommentsMessage from '../commentModel';

const SinglePost = () => {

    let { id } = useParams();
    const [PostData, setPostData] = React.useState([]);
    const [CommentData, setCommentData] = React.useState([{ id: 1, comment: 'Nice Post Good Work', }]);
    const { height, width } = windowDimensions();
    // comments box
    const [open, setOpen] = React.useState(false);
    // comment editor
    const [html, setHtml] = React.useState('my <b>HTML</b>');

    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => { setIsReadMore(!isReadMore) };

    //creating function to load ip address from the API
    const getData = async () => {
        await axios.get('https://amazingtech.space/PTI/api/posts-list')
            .then((res) => {
                if (res.data.status === true) {
                    setPostData(res.data.post);
                    console.log('getPostData', JSON.stringify(res.data))
                }
            }
            ).catch((err) => console.log('', JSON.stringify(err)));
    }

    const onOpenModal = () => {
        setOpen(true)
    };

    React.useEffect(() => {
        //passing getData method to the lifecycle method
        if (localStorage.getItem("user_ip")) {
            getData();
        }
    }, []);

    return (
        <>
            <div className="chat-block user-content-area">
                <div className="chat-card chat-date">
                    <p>24, June, 2022 {id}</p>
                </div>
                {PostData.map((items, index) => {
                    return (
                        <div key={index}>
                            <div className="chat-types update-type">
                                <div className="chat-card">
                                    <div className='chat-header'>
                                        <div className='row headerBox'>
                                            <div className='col-sm-1 col-xs-1 col-md-1'>
                                                <div className="msg-type">
                                                    <img
                                                        src={'https://amazingtech.space/PTI/storage/' + items.user_image} style={{ borderRadius: 100 }}
                                                        class="img-responsive"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className='col-sm-9 col-xs-9 col-md-9'>
                                                <div className='message-content-style'>
                                                    <h6 className='userName'>{items.name}</h6>
                                                    <div className="time-seen">
                                                        <div className="admin-seen">
                                                            <p>Seen 200K</p>
                                                        </div>
                                                        <div className="message-time">
                                                            <p>{items.created_time}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-2 col-xs-2 col-md-2'>
                                                <div className="dropdown">
                                                    <div id='userMoreMenu' className="btn-dropdown-ellipse dropdown-toggle" type="link" data-toggle="dropdown">
                                                        <img className='img-responsive' src='./assets/images/ellipses-icon.png' />
                                                    </div>
                                                    <ul className="dropdown-menu left arrow-top-right">
                                                        <li><a href="#"><i className="fa fa-clipboard" aria-hidden="true"></i><span className='linkText'>Copy to Clipboard</span></a></li>
                                                        <li><a href="#"><i className="fa fa-trash" aria-hidden="true"></i><span className='linkText'>Delete</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-content">
                                        <div className="chat-text-content">
                                            <span className="message-content-style">
                                                <h5 className='postTitle' >{items.post_title}</h5>
                                                <p className='testimonials__quote__text'>
                                                    {isReadMore ? $(items.description).text().slice(0, 150) : $(items.description).text()}
                                                    {$(items.description).text().length > 150 &&
                                                        <span onClick={toggleReadMore}>
                                                            {isReadMore ? <span className="readMore">...read more</span> : <span className="readMore"> ...show less</span>}
                                                        </span>
                                                    }
                                                </p>
                                            </span>

                                        </div>
                                    </div>
                                    <div className="sliderBox" style={{ marginTop: 0, marginBottom: 0 }}>
                                        <div>
                                            <div id="slider">
                                                <figure>
                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" />
                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg" />
                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" />
                                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-footer">
                                        <ul>
                                            <li>
                                                <a href="#" className="chat-like">
                                                    <i onClick={() => onOpenModal()} className="dislike-icon">
                                                        <img style={{ width: 22, height: 22 }} src='/assets/images/heart.png' />
                                                    </i>
                                                    <span style={{}} className="numberCount">8</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="chat-dislike">
                                                    <i onClick={() => onOpenModal()} className="like-icon">
                                                        <img style={{ width: 22, height: 22 }} src='/assets/images/broken-heart.png' />
                                                    </i>
                                                    <span style={{}} className="numberCount">8</span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown">
                                                    <i className="btn-dropdown-ellipse dropdown-toggle" type="link" data-toggle="dropdown">
                                                        <img style={{ width: 22, height: 22, marginTop: 5 }} src='/assets/images/share.png' />
                                                    </i>
                                                    <ul className="dropdown-menu left arrow-top-right">
                                                        <li><a href="#"><i className="fa fa-clipboard" aria-hidden="true"></i><span className='linkText'>Copy Link</span></a></li>
                                                        <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i><span className='linkText'>To Facebook</span></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i><span className='linkText'>To Twitter</span></a></li>
                                                        <li><a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i><span className='linkText'>To Whatsapp</span></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='commentlistBox'>
                                        <div className='commentInnerBox'>
                                            {CommentData.map((items, index) => {
                                                return (
                                                    <div className='commentItems' key={index}>
                                                        <div className='usersBox'>
                                                            <img style={{ width: 18, height: 18 }} className='send_icon' src='/assets/images/action-icon.png' />
                                                            <span className='userIDs'>252323</span>
                                                        </div>
                                                        <div className='comment'>
                                                            Hi Comments
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='commentInputBox'>
                                        <input style={{}} className='commentinput' placeholder='Write your comments' />
                                        <div style={{}} className='clickCommentBox'>
                                            <img style={{ width: 18, height: 18 }} className='send_icon' src='/assets/images/send.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default SinglePost;