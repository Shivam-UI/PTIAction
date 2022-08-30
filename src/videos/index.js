import * as React from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import windowDimensions from '../Global/useWindowDimensions';

const VideosPost = (data) => {

    const [images] = React.useState(["./assets/images/imrankhanpost.jpg", "./assets/images/ahmed1.jpg", "./assets/images/ahsan1.jpg", "./assets/images/babar1.jpg", "./assets/images/fawad1.jpg", "./assets/images/feroz1.jpg", "./assets/images/0.jfif", "./assets/images/imrankhan1.jpg", "./assets/images/imrankhan3.jpg", "./assets/images/imrankhanpost.jpg","./assets/images/imrankhanpost.jpg", "./assets/images/ahmed1.jpg", "./assets/images/ahsan1.jpg", "./assets/images/babar1.jpg", "./assets/images/fawad1.jpg", "./assets/images/feroz1.jpg", "./assets/images/0.jfif", "./assets/images/imrankhan1.jpg", "./assets/images/imrankhan3.jpg", "./assets/images/imrankhanpost.jpg"]);

    return (
        <>
            <div className='chat-block user-content-area'>
                <div class="chat-card chat-date">
                    <p>24, June, 2022 </p>
                </div>
                <FbImageLibrary images={images} />
                <FbImageLibrary images={images} />
                <FbImageLibrary images={images} />
            </div>
        </>
    )
}

export default VideosPost;


// <div style={{maginTop:50}} className="grid">
// <div className="grid__item">
//     <div className="content">
//         <div className="content-inside">
//             <h2>2:1</h2>
//             <p>Centered</p>
//         </div>
//     </div>
// </div>
// <div className="grid__item">
//     <div className="content">
//         <div className="content-inside">
//             <h2>1:1</h2>
//             <p>Lower Left</p>
//         </div>
//     </div>
// </div>
// </div>