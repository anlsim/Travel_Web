import {useContext, useState}from 'react'
import {Link} from 'react-router-dom';
import {Context} from "../../context/Contex";
import "./NavBar.scss";
import {MenuItems} from './MenuItems'

export default function NavBar() {
  const {user, dispatch } = useContext(Context);
  const[clicked, setClicked] = useState(false);
  const handleLogOut = () => {
    dispatch({type: "LOGOUT"});
  };
 
  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <>
    <nav className="navBar">
      <Link className="navBar-logo" to="/">TRAVEL BLOG</Link>
      <div className="navBar-icon" onClick={handleClicked}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'navBar-menu active': 'navBar-menu'}> 
          {
            MenuItems.map((item, index) => {
              return(
                <li key={index}>
                  <Link className={item.cName} to={item.url}>{item.title}</Link>
                </li>
              )
              
            })
          }     
        
          { user ? (
          <>
            {user.admin &&
            <li>
                <Link className="navBar-menu-links nav-item" to="/publish">PUBLISH</Link>
            </li>
            }
            <li  onClick={handleLogOut}>
              <Link className="navBar-menu-links nav-item" to="/">{user && "LOGOUT"}</Link>        
            </li>
            </>
            ) : (
            <li>
                <Link className="navBar-menu-links nav-item" to="/">{user && "LOGOUT"}</Link> 
            </li>
            )}
          </ul>
      
        
    </nav>


</>
  )
}
