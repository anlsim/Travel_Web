import React from 'react';
import Hero from '../../components/Hero/Hero';
// import GalleryGrid from "./GalleryGrid";
import GalleryGrid from 'react-grid-gallery';
import './Gallery.scss';
const images =[
    { 
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
        
    },
    { 
        src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/200/400",
        thumbnail: "https://picsum.photos/200/400",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/400/400",
        thumbnail: "https://picsum.photos/400/400",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/500/300",
        thumbnail: "https://picsum.photos/500/300",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src: "https://picsum.photos/200/300",
        thumbnail: "https://picsum.photos/200/300",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/400/300",
        thumbnail: "https://picsum.photos/400/300",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },
    { 
        src:"https://picsum.photos/400/400",
        thumbnail: "https://picsum.photos/400/400",
        tags: [{value: "Virginia", title: "Virginia"},
                {value: "Alexandria", title: "Alexandria"}],
                caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    },

]

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "#FFF8F0",
    height: "auto",
    fontSize: "75%",
    fontWeight: "500",
    lineHeight: "1",
    padding: ".6em",
    borderRadius: ".25em",
    color: "#FF8811",
    verticalAlign: "baseline",
    margin: "2px"
};


const GalleryPage = () =>(
    <>
    <Hero title={'Gallery'}/>
    <div className="galleryContainer">

    <GalleryGrid images={images} margin={10} rowHeight={300} tagStyle={customTagStyle}/>
    </div>
    </>
);

export default GalleryPage;