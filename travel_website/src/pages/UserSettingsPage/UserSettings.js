import { useContext, useState } from "react";
import './UserSettings.scss';
import Hero from '../../components/Hero/Hero';

export default function UserSettings() {

    return (
        <>
        <Hero title={'ACCOUNT SETTINGS'}/>
        <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <h3>Update Your Password</h3>
          </div>
          <form className="settingsForm">
        
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        
      </div>
      </>
    )
}
