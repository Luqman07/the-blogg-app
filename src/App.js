import Homepage from "./pages/Homepage";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Homeauthpage from "./pages/Homeauthpage";
import Userpage from "./pages/Userpage";
import NewBlog from "./components/NewBlog";
import Publishpage from "./pages/Publishpage";
import Settingspage from "./pages/Settingspage";
import Blogdetailpage from "./pages/Blogdetail";
import Topicdetailpage from "./pages/Topicdetail";
import { useContext, useState } from "react";
import { AuthContext } from "./context/authContext";
import Bookmarkpage from "./pages/Bookmarkpage";
import 'react-loading-skeleton/dist/skeleton.css'
import MobileNav from "./components/MobileNav";


function App() {
 
  const {user, authIsReady} = useContext(AuthContext)
  const [likeCount, setLikeCount] = useState(0)
  const {pathname} = useLocation()
  
  const RequireAuth = ({ children }) => user ? children : <Navigate to="/login"/>

  return (
    <div className="App w-full min-h-screen bg-white text-black dark:bg-dark-mode dark:text-white transition">
      {
        authIsReady && (
          <Routes>
            {/* <Route path="/" element={<RequireAuth><Homeauthpage setLikeCount={setLikeCount} likeCount={likeCount} /></RequireAuth>} /> */}
            <Route path="/" element={user ? <Homeauthpage setLikeCount={setLikeCount} likeCount={likeCount}/> : <Homepage />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="signup" element={<Signuppage />} />
            <Route path="new-blog" element={<RequireAuth><NewBlog /></RequireAuth>} />
            <Route path="publish" element={<RequireAuth><Publishpage /></RequireAuth>} />
            <Route path=":userId" element={<RequireAuth><Userpage /></RequireAuth>} />
            <Route path="settings" element={<RequireAuth><Settingspage /></RequireAuth>} />
            <Route path="bookmark" element={<Bookmarkpage />} />
            <Route path="/blog/:id" element={<RequireAuth><Blogdetailpage setLikeCount={setLikeCount} likeCount={likeCount}/> </RequireAuth>} />
            <Route path="topic/:topic" element={<RequireAuth><Topicdetailpage /></RequireAuth>} />
          </Routes>
        )
      }
      {console.log(user)}
      { pathname !== '/login' && pathname !== '/signup' && (user !== null && pathname === "/")  && <MobileNav/> }
    </div>
  );
}

export default App;
