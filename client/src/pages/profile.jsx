import React from "react";
import Navbar from "../components/navbar"
import { AuthContext } from "../context/auth.context"; 
import { useState, useEffect, useContext} from "react";
const API_URL = "http://localhost:5005";

export default function Profile(){
    const { user } = useContext(AuthContext);   // <== ADD
    const storedToken = localStorage.getItem("authToken");
    const [userProf, setUserProf ] = useState(user)

useEffect(()=>{
    axios.get(`/api/users/${user._id}`, { headers: { Authorization: `Bearer ${storedToken}` }})
    .then((response) => {
        setUserProf(response.data)
        console.log(response.data.uploads)
    })

}, [])
     const uploads = userProf.uploads
    



console.log(uploads)
    return (
        <div className='profile'>
            <Navbar />
            <div>
                <div className="profiletop">
                    <h3>Profile</h3>
                    <h1>{user.username}</h1> 
                </div>
                <div className="profilecontent">
                    {uploads ?.map((url)=>{
                        return (
                            
                                <img src={url} />
                        
                        )
                        })}
                </div>
           </div>
        </div>
        )
}
