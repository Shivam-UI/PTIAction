import * as React from 'react';
// get data
import $ from "jquery";
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

const AllPostScreen = () => {

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
                                                        <div className="message-time">
                                                            <p>{items.created_time}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-2 col-xs-2 col-md-2'>
                                                <div className="dropdown">
                                                    <div id='userMoreMenu' className="btn-dropdown-ellipse dropdown-toggle" type="link" data-toggle="dropdown">
                                                        <img style={{ marginTop: 0, width: 20 }} className='img-responsive' src='./assets/images/share_new_icon.png' />
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
                                                <h2 className='postTitle' >{items.post_title}</h2>
                                                <p className='testimonials__quote__text'>
                                                    {isReadMore ? $(items.description).text().slice(0, 150) : $(items.description).text()}
                                                    {$(items.description).text().length > 150 &&
                                                        <span onClick={toggleReadMore}>
                                                            {isReadMore ? <span className="readMore">...Read More</span> : <span className="readMore"> ...show less</span>}
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
                                                        <img style={{width: 26, height: 22,objectFit:'fill'}} src='./assets/images/heart_like.png' />
                                                    </i>
                                                    <span style={{}} className="numberCount">8</span>
                                                </a>
                                            </li>
                                            <li>
''                                                <a href="#" className="chat-dislike">
                                                    <i onClick={() => onOpenModal()} className="like-icon">
                                                        <img style={{ width: 22, height: 22 }} src='/assets/images/message_icon.png' />
                                                    </i>
                                                    <span style={{}} className="numberCount">8</span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown">
                                                    <i className="btn-dropdown-ellipse dropdown-toggle" type="link" data-toggle="dropdown">
                                                        <img style={{ width: 22, height: 22, marginTop: 5 }} src='./assets/images/share.png' />
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
                                                        {/* <div className='usersBox'>
                                                            <img style={{ width: 18, height: 18 }} className='send_icon' src='./assets/images/action-icon.png' />
                                                            <span className='userIDs'>23K</span>
                                                        </div> */}
                                                        <div className='comment'>
                                                            <span className='more_comments'>View Comments</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* <div className='commentInputBox'>
                                        <input style={{}} className='commentinput' placeholder='Write your comments' />
                                        <div style={{}} className='clickCommentBox'>
                                            <img style={{ width: 18, height: 18 }} className='send_icon' src='./assets/images/send.png' />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

/* <div class="chat-types update-type video-type">
    <div class="chat-card">
        <div class="chat-content">
            <div class="chat-options">
                <div class="dropdown">
                    <div class="btn-dropdown-ellipse dropdown-toggle" type="link" data-toggle="dropdown">
                        <img src='./assets/images/ellipses-icon.png' />
                    </div>
                    <ul class="dropdown-menu left arrow-top-right">
                        <li><a href="#"><i class="fa fa-clipboard" aria-hidden="true"></i>Copy to Clipboard</a></li>
                        <li><a href="#"><i class="fa fa-trash" aria-hidden="true"></i>Delete</a></li>
                    </ul>
                </div>
            </div>
            <div class="msg-type">
                <img src="./assets/images/ahmed1.jpg" style={{ borderRadius: 100 }} class="img-responsive" alt="" />
            </div>
            <div class="chat-text-content">
                <span class="message-content-style">
                    <h6>Macline Carlieo:</h6>Majority have suffered alteration randomised words which<a href="#" class="readmore">Read More</a>
                </span>
                <div class="time-seen">
                    <div class="admin-seen">
                        <p>Seen 200K</p>
                    </div>
                    <div class="message-time">
                        <p>12:15 pm</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-video">
            <div class="video-frame">
                <video class="frame-vedio-control" controls src="./assets/images/post-video.mp4" type="video/mp4"></video>
            </div>
            <div class="video-play-btn"></div>
        </div>
        <div class="chat-footer">
            <ul>
                <li>
                    <a href="#" class="chat-dislike">
                        {true ? <i class="dislike-icon">
                            <img style={{ width: 22, height: 22 }} src='./assets/images/heart.gif' />
                        </i> : <i class="dislike-icon">
                            <img style={{ width: 22, height: 22 }} src='./assets/images/heart.gif' />
                        </i>}
                        <span style={{}} className="numberCount">5</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="chat-like">
                        <i class="like-icon">
                            <img style={{ width: 22, height: 22 }} src='./assets/images/comments.gif' />
                        </i>
                        <span style={{}} className="numberCount">8</span>
                    </a>
                </li>
                <li>
                    <RWebShare
                        title={'Share'}
                        data={{
                            text: "Like humans, flamingos make friends for life",
                            url: "https://on.natgeo.com/2zHaNup",
                            title: "Flamingos",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <i class="share-icon">
                            <img style={{ width: 22, height: 22 }} class="img-responsive" src='./assets/images/share.png' />
                        </i>
                    </RWebShare>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="chat-types update-type audio-type">
    <div class="chat-card">
        <div class="chat-content">
            <div class="chat-options">
                <div class="dropdown">
                    <div class="btn-dropdown-ellipse dropdown-toggle" type="link" data-toggle="dropdown">
                        <img src='./assets/images/ellipses-icon.png' />
                    </div>
                    <ul class="dropdown-menu left arrow-top-right">
                        <li><a href="#"><i class="fa fa-clipboard" aria-hidden="true"></i>Copy to Clipboard</a></li>
                        <li><a href="#"><i class="fa fa-trash" aria-hidden="true"></i>Delete</a></li>
                    </ul>
                </div>
            </div>
            <div class="msg-type">
                <img src="./assets/images/ahmed1.jpg" style={{ borderRadius: 100 }} class="img-responsive" alt="" />
            </div>
            <div class="chat-text-content">
                <span class="message-content-style">
                    <h6>Macline Carlieo:</h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, <a href="#" class="readmore">Read More</a>
                </span>
                <div class="time-seen">
                    <div class="admin-seen">
                        <p>Seen 200K</p>
                    </div>
                    <div class="message-time">
                        <p>12:15 pm</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-audio">
            <div class="audio-frame">
                <audio className="audioPlayer" preload="auto" controls src="./assets/images/door.mp3"></audio>
            </div>
        </div>
        <div class="chat-footer">
            <ul>
                <li>
                    <a href="#" class="chat-dislike">
                        {false ? <i class="dislike-icon">
                            <img style={{ width: 22, height: 22 }} src='./assets/images/heart.gif' />
                        </i> : <i class="dislike-icon">
                            <img style={{ width: 22, height: 22 }} src='./assets/images/heart_dislike.gif' />
                        </i>}
                        <span style={{}} className="numberCount">5</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="chat-like">
                        <i class="like-icon">
                            <img style={{ width: 22, height: 22 }} src='./assets/images/comments.gif' />
                        </i>
                        <span style={{}} className="numberCount">8</span>
                    </a>
                </li>
                <li>
                    <RWebShare
                        title={'Share'}
                        data={{
                            text: "Like humans, flamingos make friends for life",
                            url: "https://on.natgeo.com/2zHaNup",
                            title: "Flamingos",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <i class="share-icon">
                            <img style={{ width: 22, height: 22 }} class="img-responsive" src='./assets/images/share.png' />
                        </i>
                    </RWebShare>
                </li>
            </ul>
        </div>
    </div>
    <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
             </Sheet.Content >
         </Sheet.Container >
        <Sheet.Backdrop />
     </Sheet>
</div>
*/

export default AllPostScreen;