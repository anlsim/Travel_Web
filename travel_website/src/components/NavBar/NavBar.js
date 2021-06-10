import {useContext}from 'react'
import {Link} from 'react-router-dom';
import {Context} from "../../context/Contex";
import "./NavBar.scss";


export default function NavBar() {
  const {user, dispatch } = useContext(Context);
  const handleLogOut = () => {
    dispatch({type: "LOGOUT"});
  };
 

  // console.log(user.admin)
  return (
    <>
    <nav className="navBar navbar-expand-lg navbar-light">
    
      <Link className="navBar-logo" to="/">TRAVEL BLOG</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul className="navBar-menu"> 
        <li className="navBar-menu-link">
          <Link to="/blog">BLOG</Link>
        </li>
        <li className="navBar-menu-link">
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li className="navBar-menu-link">
          <Link to="/map">MAP</Link>
        </li>         
        <li className="navBar-menu-link">
          <Link to="/about">ABOUT</Link>
        </li>
          { user ? (
          <>
            {user.admin &&
            <li className="navBar-menu-link">
                <Link to="/publish">PUBLISH</Link>
            </li>
            }
            <li className="navBar-menu-link" onClick={handleLogOut}>
              <Link to="/">{user && "LOGOUT"}</Link>        
            </li>
            </>
            ) : (
            <li className="navBar-menu-link">
                <Link to="/">{user && "LOGOUT"}</Link> 
            </li>
            )}
          </ul>
          </div>
    </nav>


</>
  )
}
