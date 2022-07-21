import './App.css';
import Home from "./pages/home"
import Feed from "./pages/feed"
import { Routes, Route } from "react-router-dom";
import Posts from "./components/post"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/feed" element={<Feed />}/>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
