import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT
import { useEffect } from "react";



function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logoutUser, isLoading } = useContext(AuthContext);   // <== ADD

  return ( 
    <nav className="navbar">
    <ul>
          
      {isLoggedIn && (
        <>
        <li>
          <Link to="/feed">
            <button>Feed</button>
          </Link>  
        </li>
        <li>
           <Link to="/map">
            <button>Map</button>
           </Link>  
        </li> 
        <li>
           <Link to="/profile">
            <button>Profile</button>
           </Link>  
        </li> 
        <li>
        <Link to="/newPost">
         <button>New Post</button>
        </Link>  
     </li> 
        <li>
          <Link to='/'>
            <button onClick={logoutUser}>Logout</button>
            
          </Link>  
        </li>    
        </>
      )}
      {!isLoggedIn && (
        <>
          <li><Link to="/signup"> <button>Sign Up</button> </Link></li>
          <li><Link to="/login"> <button>Login</button> </Link></li>
        </>
      )}
    </ul>
    </nav>
  );

      }
export default Navbar;



//<span>{user && user.username}</span>
