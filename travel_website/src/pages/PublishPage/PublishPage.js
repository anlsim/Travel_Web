import {useState, useContext} from 'react';
import axios from "axios";
import "./PublishPage.scss";
import {Context } from "../../context/Contex";

export default function PublishPage() {
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [location, setLocation] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [imgUrl, setimgUrl] = useState("");
    const [video, setVideo] = useState("");
    const [content, setContent] = useState("");
    const {user} = useContext(Context);


        const handlePublish = async (e) => {
            e.preventDefault();
            const newPost = {
                userId: user.email,
                title,
                city, 
                state,
                imgUrl,
                location,
                photos,
                video,
                content,

            }
            setLocation(arr => [...arr, location])
            try{
            
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id)
            } catch(err){
                console.log(err)
            }

        };
          
  
        
   

    return (
        <div className="publishMain">
            <form className="publishForm" onSubmit={handlePublish}>
                <div className="fields">
                    
                    <input 
                        type="text" 
                        placeholder="Post Title" 
                        onChange={e=> setTitle(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="City"
                        onChange={e=> setCity(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="State"
                        onChange={e=> setState(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Coordinates"
                        onChange={e=> setLocation(parseFloat(e.target.value))}
                    />
                    
                    {/* <input 
                        type="text" 
                        placeholder="Coordinates 1"
                        onChange={e=> setLocation(parseFloat(e.target.value))}
                    /> */}
                    {/* <input 
                        type="text" 
                        placeholder="Coordinates "
                        onChange={e=> setLocation( e.target.value)}
                    /> */}
                    <input 
                        type="text" 
                        placeholder="Photo Cover"
                        onChange={e=> setimgUrl(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Photos"
                        onChange={e=> setPhotos(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Video"
                        onChange={e=> setVideo(e.target.value)}
                    />
                </div>   
               
                <div className="fields">
                    <textarea 
                        placeholder="Write your text here..." 
                        type="text"
                        onChange={e=> setContent(e.target.value)}
                        ></textarea>
                    <button className="btnSubmit" type="submit">Publish your post!</button>
                </div>
                
            </form>
        </div>
    )
}
