import React from 'react';
import Gallery from 'react-photo-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ImageGrid } from "react-fb-image-video-grid"
// 
class PhotosPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
                    width: 2,
                    height: 3
                },
                {
                    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
                    width: 2,
                    height: 1
                },
                {
                    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
                    width: 3,
                    height: 3
                }, {
                    src: 'http://example.com/example/img1.jpg',
                    width: 4,
                    height: 3
                },
                {
                    src: 'http://example.com/example/img2.jpg',
                    width: 5,
                    height: 1
                }, {
                    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    width: 6,
                    height: 3,
                }
            ]
        }
    }

    render() {
        return (
            <div className='chat-block user-content-area'>
                <div class="chat-card chat-date photoDate">
                    <p>24, June, 2022 </p>
                </div>
                <ImageGrid showModal={false}>
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    /> 
                </ImageGrid>
                <div class="chat-card chat-date photoDate">
                    <p>24, June, 2022 </p>
                </div>
                <ImageGrid>
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    /> 
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                </ImageGrid>
                <div class="chat-card chat-date photoDate">
                    <p>24, June, 2022 </p>
                </div>
                <ImageGrid>
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    /> 
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                    <img
                        alt="ig"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    />
                </ImageGrid> 
            </div>
        );
    }

}

// import React from "react";
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { render } from 'react-dom';
// import Gallery from 'react-grid-gallery';
// import windowDimensions from '../Global/useWindowDimensions';


// const PhotosPost = (data) => {

//     const divRef = React.useRef();
//     const { height, width } = windowDimensions();
//     const [images] = React.useState([
//         { id: 1, url: "/images/ahmed1.jpg", name: "Macline" },
//         { id: 2, url: "/images/ahsan1.jpg", name: "ahsan32" },
//         { id: 3, url: "/images/babar1.jpg", name: "babar42" },
//         { id: 4, url: "/images/fawad1.jpg", name: "fawad2" },
//         { id: 5, url: "/images/feroz1.jpg", name: "feroz432" },
//         { id: 6, url: "/images/0.jfif", name: "adil5" },
//         { id: 7, url: "/images/imrankhan1.jpg", name: "imran4" },
//         { id: 8, url: "/images/imrankhan3.jpg", name: "khan4" },
//         { id: 9, url: "/images/imrankhanpost.jpg", name: "alikhan4" },
//         { id: 10, url: "/images/feroz1.jpg", name: "feroz432" },
//         { id: 11, url: "/images/0.jfif", name: "adil5" },
//         { id: 12, url: "/images/imrankhan1.jpg", name: "imran4" },
//         { id: 13, url: "/images/imrankhan3.jpg", name: "khan4" },
//         { id: 14, url: "/images/imrankhanpost.jpg", name: "alikhan4" },
//     ]);

//     const IMAGES =
//         [{
//             src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//             thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//             thumbnailWidth: 320,
//             thumbnailHeight: 174,
//             isSelected: true,
//             caption: "After Rain (Jeshu John - designerspics.com)"
//         },
//         {
//             src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//             thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//             thumbnailWidth: 320,
//             thumbnailHeight: 212,
//             tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
//             caption: "Boats (Jeshu John - designerspics.com)"
//         },

//         {
//             src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//             thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//             thumbnailWidth: 320,
//             thumbnailHeight: 212
//         }]


//     return (
//         <>
//             <div class="chat-block user-content-area">
//                 <div className="container-fluid" >
//                     <Gallery images={IMAGES} />
//                 </div>
//             </div>
//         </>
//     )
// }

export default PhotosPost;