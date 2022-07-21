import React from "react";
import Posts from "../components/post"

export default function Feed(){

    return (
        <div className="scroll-bg">
            <div className="scroll-div">
                <div className="scroll-obj">
                    <h1>weiner</h1>
                    <Posts />
                </div>
            </div> 
        </div>
        )
}