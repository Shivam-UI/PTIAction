import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import windowDimensions from '../Global/useWindowDimensions';

const TrandingPhotosPost = (data) => {

    const { height, width } = windowDimensions();
    const [images] = React.useState([
        { id: 1, url: "/images/ahmed1.jpg", name: "Macline" },
        { id: 2, url: "/images/ahsan1.jpg", name: "ahsan32" },
        { id: 3, url: "/images/babar1.jpg", name: "babar42" },
        { id: 4, url: "/images/fawad1.jpg", name: "fawad2" },
        { id: 5, url: "/images/feroz1.jpg", name: "feroz432" },
        { id: 6, url: "/images/0.jfif", name: "adil5" },
        { id: 7, url: "/images/imrankhan1.jpg", name: "imran4" },
        { id: 8, url: "/images/imrankhan3.jpg", name: "khan4" },
        { id: 9, url: "/images/imrankhanpost.jpg", name: "alikhan4" },
    ]);

    return (
        <>
            <div className='row' style={{ flexDirection: 'row', alignItems: 'center' }}>
                <h1>Tranding Photos Post</h1>
                {images.map((items, index) => {
                    return (
                        <div className='col-lg-4' style={{ width: width / 3 }}>
                            <h1>{index}</h1>
                        </div>
                    )
                }
                )}
            </div>
        </>
    )
}

export default TrandingPhotosPost;