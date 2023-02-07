import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";
import Mapbox from "../pages/map"

    export default function Locals(){
        const [locations, setLocations] = useState([]); 
        
        const getAllLocals = () => {
            const storedToken = localStorage.getItem("authToken");
            console.log(storedToken)
            axios
            .get(`${API_URL}/api/locations`, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((response) => {
                setLocations(response.data.Locations)})
            .catch((error) => console.log(error));   
        }    

        useEffect(() => {
            getAllLocals()
        }, [] );
        
            return(
                <div >
                <Mapbox refreshLocals={getAllLocals} />
                    <div className="LocalList">
                        {locations.map((location) => {
                            return (
                                <div className="location"> 
                                    <h2>{location.title}</h2>
                                    <img src={location.img} />
                                    <p>{location.city}</p>
                                </div>
                            );
                        })}     
                    </div>
                </div>
            );
    }
