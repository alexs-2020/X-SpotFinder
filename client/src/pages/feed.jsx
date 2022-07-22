import React from "react";
import Posts from "../components/post"
import Navbar from "../components/navbar"
export default function Feed(){

    return (
        <div classname="feedcontainer">
            <Navbar />
            <div className="scroll-div">
                <div className="scroll-obj">
                    <h1>weiner</h1>
                    <Posts />
                </div>
            </div> 
        </div>
        )
}