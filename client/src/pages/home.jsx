import React from "react";
import { Link } from "react-router-dom";

export default function Home (){

    return (
        <div>
        <Link to="/feed"><h1> To feed </h1></Link> 
            <h1>we made it</h1>
        </div>
    )
}