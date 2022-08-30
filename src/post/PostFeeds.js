import React from "react";
import PhotosPost from '../photos';
import VideosPost from '../videos';
import AllPostScreen from '../allPostScreen'
import TrandingPhotosPost from '../trendingPhotos';

const PostFeeds = (data) => {

    const [confirmOpen, setConfirmOpen] = React.useState(false);

    const handleLogout = () => {
        console.log("this hould logout the user");
    };

    return (
        <>
            <div className="srec">
                <div className="innercontainerBox">
                    {parseInt(data) === 0 ? <AllPostScreen />
                        : parseInt(data) === 1 ? <PhotosPost />
                            : parseInt(data) === 2 ? <VideosPost />
                                : <TrandingPhotosPost />
                    }
                </div></div>
        </>
    )
}

export default PostFeeds;