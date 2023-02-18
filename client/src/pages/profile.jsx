import React from "react";
import Navbar from "../components/navbar"
import { AuthContext } from "../context/auth.context"; 
import { useState, useEffect, useContext} from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";

export default function Profile(){
    const { user } = useContext(AuthContext);   // <== ADD
    const storedToken = localStorage.getItem("authToken");
    const [userProf, setUserProf ] = useState(user)
    const [userPosts, setUserPosts] = useState([]); 
    // console.log(storedToken)


    useEffect(()=>{
        axios.get(`${API_URL}/api/users/${user._id}`, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then((response) => {
            setUserProf(response.data)

            const requestBody = (response.data.uploads); //array of links
            requestBody.forEach(element => {
                // console.log(element)
                axios.post(`${API_URL}/api/postsbyurl`,{"url": element}, { headers: { Authorization: `Bearer ${storedToken}` } })
                .then((response) => {
                    setUserPosts(response.data)
                    console.log(response.data)
                })
                });
            // console.log({"url": requestBody})

           
            // console.log(response)
        })
        

    }, [])

    
 
        console.log(userPosts)
        const uploads = userPosts

    return (
        <div className='profile'>
            <Navbar />
             <div>
                <div className="profiletop">
                    <h3>Profile</h3>
                        <h1>{user.username}</h1> 
                </div>
                <div className="profilecontent">
                    {uploads ?.map((post)=>{
                        return (
                            
                            post.url.slice(post.url.length-3) === 'mp4' ?  <div className="post"><video className="vidPost" controls><source src={post.url} type="video/mp4"/></video> <h3>{post.name}</h3><p> {post.description} </p></div> : <div className='post'key={post._id} ><img src={post.url} className="imgPost" /><h3>{post.name}</h3><p> {post.description} </p></div>
                            
                        )
                        })}
                        
                </div>
            </div>
            </div>
        )
}


// <form action="/posts/{{_id}}/delete" method="POST">
// <button>Delete</button>
// </form>