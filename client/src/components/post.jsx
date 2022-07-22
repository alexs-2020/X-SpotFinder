import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddPost from "./addPost"
const API_URL = "http://localhost:5005";


    export default function Posts(){
        const [posts, setPosts] = useState([]); 
        const getAllPosts = () => {
            axios
            .get(`${API_URL}/api/posts`)
            .then((response) => {
                setPosts(response.data.Posts)})
            .catch((error) => console.log(error));   
        }    
        useEffect(() => {
            getAllPosts()
        }, [] );
            return(
                <div className="PostsList">
                <AddPost  refreshPosts={getAllPosts}/>
                    {posts.map((post) => {
                        return (
                            <div key={post._id} >
                                <img src={post.img} />
                                <Link to={`/posts/${post._id}`}>
                                    <h3>{post.name}</h3>
                                </Link>
                                <p> {post.description} </p>
                            </div>
                        );
                    })}     
                </div>
            );
    }
