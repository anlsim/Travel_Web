import React from 'react';
import Hero from '../../components/Hero/Hero';
// import GalleryGrid from "./GalleryGrid";
import GalleryGrid from 'react-grid-gallery';
import './Gallery.scss';
const images =[
    { 
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        margin: "15",
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
        tags: [{value: "People", title: "People"},
                   {value: "Industrial", title: "Industrial"}],
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        
    },
    { 
        src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
    },
    { 
        src:"https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    },
    { 
        src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    },
    { 
        src:"https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    },
    { 
        src:"https://picsum.photos/200/400",
        thumbnail: "https://picsum.photos/200/400",
    },
    { 
        src:"https://picsum.photos/400/400",
        thumbnail: "https://picsum.photos/400/400",
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
    },
    { 
        src:"https://picsum.photos/500/300",
        thumbnail: "https://picsum.photos/500/300",
    },
    { 
        src: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
    },
    { 
        src:"https://picsum.photos/400/400",
        thumbnail: "https://picsum.photos/400/400",
    },

]
const GalleryPage = () =>(
    <>
    <Hero title={'Gallery'}/>
    <div className="galleryContainer">

    <GalleryGrid images={images} margin={10} rowHeight={300}/>
    </div>
    </>
);

export default GalleryPage;