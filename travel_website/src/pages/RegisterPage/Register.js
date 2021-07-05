import {useState} from 'react';
import * as emailjs from 'emailjs-com';
import './Register.scss';

export default function Register() {

    const [error, setError] = useState(false);
    const [result, setResult] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_u8iqxdv', e.target, 'user_w23wcjoGEbLPGHn1FfQmh')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
        setResult(true);

      };
    

    return (
        <div className="registerDiv">
        { result &&
        <h4>Thanks for requesting access, we will send you your login information soon!</h4> }
        <span className="formTitle">Request Access</span>
        <form className="mainForm" onSubmit={handleRegister}>

            <input 
                className="mainForm-input" 
                type="text" 
                placeholder="Full Name"
                name="full_name"
                required
            />

            <input 
                className="mainForm-input" 
                type="text" 
                placeholder="Email Address"
                name="user_email"
                required
            />
            
            <button className="mainForm-button" type="submit">Send Request</button>
        </form>
        
        {error && <span>Something went wrong!</span> }
       
        
    </div>
    )
}
