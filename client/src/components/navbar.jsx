import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);   // <== ADD

  
  //  Update the rendering logic to display different content 
  //  depending on the user being logged in or not
  return (
    <nav className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

     
      {isLoggedIn && (
        <>
          <Link to="/feed">
            <button>Feed</button>
          </Link>    
          <Link to="/map">
            <button>Map</button>
          </Link>      
           <Link to='/'>
          <button onClick={logoutUser}>Logout</button>
          <span>{user && user.name}</span>
          </Link>  
        </>

      )}
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;