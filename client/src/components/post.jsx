import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";


    export default function Posts(){
        const [posts, setPosts] = useState([]); 
        const getAllPosts = () => {
            const storedToken = localStorage.getItem("authToken");
            axios
            .get(`/api/posts`, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                setPosts(response.data.Posts)})
            .catch((error) => console.log(error));   
        }    

        useEffect(() => {
            getAllPosts()
        }, [] );
        
            return(
                <div className="PostsList">
                    {posts.map((post) => {
                        return(
                            post.url.slice(post.url.length-3) === 'mp4' ?  <div className="post"><video className="vidPost" controls><source src={post.url} type="video/mp4"/></video> <h3>{post.name}</h3><p> {post.description} </p></div> : <div className='post'key={post._id} ><img src={post.url} className="imgPost" /><h3>{post.name}</h3><p> {post.description} </p></div>
                        )
                    })}     
                </div>
            );
    }



    // <AddPost  refreshPosts={getAllPosts}/>