import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";

function App() {
  const { pathname } = useLocation()

  return (
    <div className="App w-full min-h-[100vh] bg-white text-black dark:bg-dark-mode dark:text-white">
      {pathname !== "/signup" && pathname !== "/login" && <Navbar/>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="signup" element={<Signuppage />} />
        {/* <Route path="product/:id" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
