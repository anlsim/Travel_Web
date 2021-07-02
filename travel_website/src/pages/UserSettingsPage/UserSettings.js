import React from 'react';
import './UserSettings.scss';

export default function UserSettings() {
    return (
        <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Password</span>
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
    )
}
