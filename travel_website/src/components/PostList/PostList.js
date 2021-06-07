import React from 'react';
import {Link } from 'react-router-dom';
import "./PostList.scss";

export default function PostList({updates}) {
    
    return (
    
        <div className="card-columns">
        
     {updates.map((update, id)=>(
            
            
            <Link key = {id} to = {`/post/${update._id}`}>
            <div className="card" >
                <img src={update.imgUrl} class="card-img-top" alt="..."></img>
                <div className="card-img-overlay">
                
                    <div className="bottom">
                    <p className="card-text"><small>{new Date(update.createdAt).toDateString()}</small></p> 
                    <h3 className="card-title">{update.title}</h3>
                    </div>
                   
               
                </div>
            </div> 
            </Link>  
        ))
        }
           
    </div>
   
  
    )
}



// import React from 'react';
// import {Link } from 'react-router-dom';
// import "./PostList.scss"

// const PostList = ({updates}) => (
//     <>
//     <div className="card-columns">
        
//         {updates.map((update, id)=>(
//             <Link key = {id} to = {`/post/${update._id}`}>
//             <div className="card" >
//                 <img src={update.imgUrl} class="card-img-top" alt="..."></img>
//                 <div className="card-img-overlay">
                
//                     <div className="bottom">
//                     <p className="card-text"><small>{update.createdAt}</small></p> 
//                     <h3 className="card-title">{update.title}</h3>
//                     </div>
                   
               
//                 </div>
//             </div> 
//             </Link>  
//         ))
//         }
           
//     </div>
   
//     </>
// );

// export default PostList;