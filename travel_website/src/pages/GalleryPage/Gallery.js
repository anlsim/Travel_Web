import React from 'react';
import Hero from '../../components/Hero/Hero';
// import GalleryGrid from "./GalleryGrid";
import GalleryGrid from 'react-grid-gallery';
const images =[
    { 
        src: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
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
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
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
    <GalleryGrid images={images}/>
    </>
);

export default GalleryPage;