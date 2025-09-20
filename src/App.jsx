import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Register";
import Login from "./pages/login";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

