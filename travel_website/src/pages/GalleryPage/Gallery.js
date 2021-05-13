import React from 'react';
import Hero from '../../components/Hero/Hero';
// import GalleryGrid from "./GalleryGrid";
import GalleryGrid from 'react-grid-gallery';
import './Gallery.scss';
const images =[
    { 
        src: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
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
    <div className="galleryContainer">

    <GalleryGrid images={images} margin={10} rowHeight={300}/>
    </div>
    </>
);

export default GalleryPage;