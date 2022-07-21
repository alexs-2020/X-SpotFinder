import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";


    export default function Posts(){
        const [posts, setPosts] = useState([]);     
        useEffect(() => {
            axios
            .get(`${API_URL}/api/posts`)
            .then((response) => {
                setPosts(response.data.Posts)})
            .catch((error) => console.log(error));     
        }, [] );
            return(
                <div className="PostsList">
                    {posts.map((post) => {
                        return (
                            <div key={post._id} >
                                <Link to={`/posts/${post._id}`}>
                                    <h3>{post.name}</h3>
                                </Link>
                                <p> {post.name} </p>
                            </div>
                        );
                    })}     
                </div>
            );
    }
