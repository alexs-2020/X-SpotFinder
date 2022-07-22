// src/components/AddProject.js
import React from "react";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";



function AddPost(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault();
    const requestBody = { name, description };
    axios
      .post(`${API_URL}/api/posts`, requestBody)
      .then((response) => {
        // Reset the state
        setName("");
        setDescription("");
        props.refreshPosts(); 
      })
      .catch((error) => console.log(error));
  };

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
  );
}

export default AddPost;
