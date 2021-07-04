import { useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../../context/Contex";
import "./Login.scss";

export default function Login() {
    const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    return (
        <div className="loginDiv">
            <span className="formTitle">Login</span>
            <form className="mainForm" onSubmit={handleLogin}>
                <input 
                    className="mainForm-input" 
                    type="email" 
                    placeholder="Enter your email..."
                    ref={emailRef}
                />
                <input 
                    className="mainForm-input" 
                    type="password" 
                    placeholder="Enter your password..."
                    ref={passwordRef}
                    />
                <button className="mainForm-button" type="submit" disabled={isFetching}>Login</button>
            </form>
           
        </div>
    )
}
