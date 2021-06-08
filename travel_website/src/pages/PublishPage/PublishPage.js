import React from 'react';
import "./PublishPage.scss";

export default function PublishPage() {
    return (
        <div className="publishMain">
            <form className="publishForm">
                <div className="fields">
                    
                    <input type="text" placeholder="Post Title"/>
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="State"/>
                    <input type="text" placeholder="Coordinates"/>
                    <input type="text" placeholder="Photos"/>
                    <input type="text" placeholder="Video"/>
                </div>   
               
                <div className="fields">
                    <textarea placeholder="Write your text here..." type="text"></textarea>
                    <button className="btnSubmit">Publish your post!</button>
                </div>
                
            </form>
        </div>
    )
}
