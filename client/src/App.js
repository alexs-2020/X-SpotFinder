import './App.css';
import Feed from "./pages/feed"
import { Routes, Route } from "react-router-dom";
import Posts from "./components/post"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage"
import IsPrivate from "./components/IsPrivate";  // <== IMPORT
import IsAnon from "./components/IsAnon";  // <== IMPORT
import Locals from "./components/locations"
import Profile from "./pages/profile"
import NewPost from "./pages/newPost"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path='/feed' element={<IsPrivate><Feed /> </IsPrivate>} />
        <Route path="/newPost" element={<IsPrivate> <NewPost/> </IsPrivate> } />
        <Route path="/map" element={<IsPrivate><Locals /></IsPrivate>} />
        <Route path="/profile" element={<IsPrivate> <Profile /> </IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
