// src/components/AddProject.js
import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";



function AddPost(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState('')
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {   
    e.preventDefault();
    const requestBody = { name, img, description };

    axios
      .post(`${API_URL}/api/posts`, requestBody)
      .then((response) => {
        // Reset the state
      //  console.log(response)
        setName("");
        setDescription("");
        setImg("")
        props.refreshPosts(); 
      })
      .catch((error) => console.log(error));
  };
  const uploadImage =()=>{
    const formData = new FormData()
    formData.append('file', img)
    formData.append("upload_preset", "bf6brdmh")
    console.log(formData)

    axios.post("https://api.Cloudinary.com/v1_1/adsapiberlin/image/upload", formData)
    .then((response => {console.log(response)}))
    .catch((error) => console.log(error));
  }
  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 

        <label>Image:</label>
        <input type="file" onChange={(e) => {
          setImg(e.target.files[0])}}/>


        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" onClick={uploadImage}>Submit</button>
      </form>
    </div>
  );
}

export default AddPost;
