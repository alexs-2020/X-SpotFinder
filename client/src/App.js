import './App.css';
import Home from "./pages/home"
import Feed from "./pages/feed"
import { Routes, Route } from "react-router-dom";
import Posts from "./components/post"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage"
import IsPrivate from "./components/IsPrivate";  // <== IMPORT
import IsAnon from "./components/IsAnon";  // <== IMPORT
import Locals from "./components/locations"
import Profile from "./pages/profile"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/feed" element={<Feed />}/>
        <Route path="/posts" element={ <IsPrivate> <Posts/> </IsPrivate> } />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/map" element={<IsPrivate> <Locals /> </IsPrivate>} />
        <Route path="/profile" element={<IsPrivate> <Profile /> </IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
