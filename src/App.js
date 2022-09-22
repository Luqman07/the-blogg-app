import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Homeauthpage from "./pages/Homeauthpage";
import Userpage from "./pages/Userpage";
import NewBlog from "./components/NewBlog";
import Publishpage from "./pages/Publishpage";
import Settingspage from "./pages/Settingspage";
import Blogdetailpage from "./pages/Blogdetail";
import Topicdetailpage from "./pages/Topicdetail";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { Navigate } from "react-router-dom"

function App() {
  const { pathname } = useLocation()
  const {user, authIsReady} = useContext(AuthContext)
  console.log(user)
  
  const RequireAuth = ({ children }) => user  ? children : <Navigate to="/login"/>
  // const Authorized = () => user  ?  <Navigate to="/home"/> : <Navigate to="/"/>;

  return (
    <div className="App w-full min-h-screen bg-white text-black dark:bg-dark-mode dark:text-white transition">
      {pathname === "/"   && <Navbar/>}
      {
        authIsReady && (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="signup" element={<Signuppage />} />
            <Route path="home" in element={<RequireAuth><Homeauthpage /></RequireAuth>} />
            <Route path="new-blog" element={<RequireAuth><NewBlog /></RequireAuth>} />
            <Route path="publish" element={<RequireAuth><Publishpage /></RequireAuth>} />
            <Route path=":userId" element={<Userpage />} />
            <Route path="settings" element={<Settingspage />} />
            <Route path="/blog/:id" element={<Blogdetailpage />} />
            <Route path="topic/:topic" element={<Topicdetailpage />} />
          </Routes>
        )
      }
    </div>
  );
}

export default App;
