import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar"
import Mapbox from './map'

export default function Home (){

    return (
        <div>
        <Navbar />
        <Link to="/feed"><h1> To feed </h1></Link> 
            <h1>we made it</h1>
            
        </div>
    )
}