import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";
const API_URL = "http://localhost:5005";


function NewPost(props) {
  const { user } = useContext(AuthContext);   // <== ADD
  const [name, setName] = useState("");
  const [img, setImg] = useState('')
  //const [url, setURL]= useState('')
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {   
    e.preventDefault();

    const storedToken = localStorage.getItem('authToken');

    const formData = new FormData()
    formData.append('file', img)
    formData.append("upload_preset", "bf6brdmh")
  //  console.log(img.type)
   function video(){
    axios
    .post("https://api.Cloudinary.com/v1_1/adsapiberlin/video/upload", formData)
    .then((response) => {
          //setURL(response.data.secure_url)
      const requestBody = { name, url:response.data.secure_url, description };
      axios
        .post(`/api/posts`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then((response) => {
          // Reset the state
          setName("");
          setDescription("");
          setImg("")
          props.refreshPosts(); 
        })
        .catch((error) => console.log(error));
    }
  )}

    img.type === "video/mp4" ? video() : 
    axios
    .post("https://api.Cloudinary.com/v1_1/adsapiberlin/image/upload", formData)
    .then((response) => {
          //setURL(response.data.secure_url)
      const requestBody = { name, url:response.data.secure_url, description };
      console.log(requestBody)
      axios
        .post(`/api/posts`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then((response) => {
          // Reset the state
        //  console.log(response)
          setName("");
          setDescription("");
          setImg("")
          props.refreshPosts(); 
        })
        .catch((error) => console.log(error));

  
      axios
      .post(`/api/users/${user._id}/uploads`, {uploads:response.data.secure_url}, { headers: { Authorization: `Bearer ${storedToken}` }})
      .then(response => console.log(response))
      .catch((error) => console.log(error));
      })
    .catch((error) => console.log(error));
  };

  return (
    <div> 
        <Navbar />
        <div className="AddPost">
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                /> 

                <label>Image:</label>
                <input type="file" className="imgPost" onChange={(e) => setImg(e.target.files[0])}/>
        
                <label>Description:</label>
                <textarea
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    
  );
}

export default NewPost;
