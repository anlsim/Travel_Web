import { useContext, useState } from "react";
import './UserSettings.scss';
import Hero from '../../components/Hero/Hero';

export default function UserSettings() {

    return (
      <>
        <Hero title={'ACCOUNT SETTINGS'}/>
        <div className="settings">
          <form className="settings-form">
            <h4>Update Your Password</h4>
            <input className="settings-form-input" type="password" placeholder="New Password" name="password" />
            <button className="settings-form-button" type="submit">
              Update Password
            </button>
          </form>
        </div>
      </>
    )
}
