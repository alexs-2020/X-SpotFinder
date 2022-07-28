import mapboxgl from 'mapbox-gl'; 
import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navbar'
mapboxgl.accessToken = 'pk.eyJ1IjoidXNhbW9ua2V5YnJhc2lsIiwiYSI6ImNsNTd6MGFzczF5NWEza3BwcTczdzJwMXcifQ.1MZ55KFPsj0qnTPB_Lg9Jg';
import axios from 'axios';
import Locals from "../components/locations"
import ReactDOM from "react-dom";
// import ReactMapGL, { Marker } from 'react-map-gl';
const API_URL = "http://localhost:5005";


export default function Mapbox(props){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [long, setLong] = useState(0);
    const [lati, setLati] = useState(0);
    const [location, setLocal] = useState({long: '', lat: ''})
 

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
    });
    useEffect(() => {
       if (!map.current) return; // wait for map to initialize
       map.current.on('move', () => {
       setLng(map.current.getCenter().lng.toFixed(4));
       setLat(map.current.getCenter().lat.toFixed(4));
       setZoom(map.current.getZoom().toFixed(2));
       });
       map.current.on('click', (event)=> {
        const marker = new mapboxgl.Marker() // initialize a new marker
            .setLngLat(event.lngLat) // Marker [lng, lat] coordinates
            .addTo(map.current);
        setLong(event.lngLat.lng)
        setLati(event.lngLat.lat)
        setLocal({ long: event.lngLat.lng, lat: event.lngLat.lat})   
        })
   
    });
    useEffect(() => {
        getMarkers()
    }, [] );
   
const getMarkers = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
    .get(`/api/locations`, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then(responseFromApi => {
        let cords = responseFromApi.data.Locations
        cords.forEach(exactCoords => {
            new mapboxgl.Marker()
              .setLngLat([exactCoords.location.long,exactCoords.location.lat])
              .addTo(map.current);
        })
    }) 
}


    const [title, setTitle] = useState("");
    const [img, setImg] = useState('')
    const [city, setCity] = useState('')

    
    const handleSubmit = (e) => {  
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');
        const requestBody = { title, img, city, location };
        console.log(requestBody)
        axios.post(`/api/locations`, requestBody,{ headers: { Authorization: `Bearer ${storedToken}` }})
        .then((response) => {
            setTitle("");
            setImg("");
            setCity("")
            getMarkers();
           props.refreshLocals(); 
      })
      .catch((error) => console.log(error));
    }


     return (
    <div>
        <Navbar />
        <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>  
        <div ref={mapContainer} className="map-container" />
        <form onSubmit={handleSubmit}>
            <input type="text" name="title"  placeholder="Spot Name" value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" name="img"  placeholder="Image URL" value={img}
            onChange={(e) => setImg(e.target.value)}/>
            <input type="text" name="city"  placeholder="Closest City" value={city}
            onChange={(e) => setCity(e.target.value)}/>
            <input value={location.long} step="0.0000000000000001" name="location.long" id="long"/>
            <input value={location.lat} step="0.0000000000000001" name="location.lat" id="lat"/>
            <button type="submit" >Create Spot</button>
        </form>
    </div>
  );
}


//refreshLocations={getAllLocals}