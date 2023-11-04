import './App.css';
import Menu from './components/menu'
import Forum from './components/forum'
import Dashboard  from './components/dashboard'
import Sideb from './components/Sideb'
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
// import EmojiPicker from 'emoji-picker-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { LogIn } from 'lucide-react';
import {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

// import Resource from "./pages/Resource";
// import Profile from "./pages/Profile";

function App() {

  const [val,setVal] = useState(false);
  const location = useLocation();
  const data = useSelector((state) => state.name.name);
  console.log("name is ",data);
  console.log(data);
  const user = "Jay Chatpalliwar";
  return (
    <div className="flex flex-row gap-1 overflow-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 ">
      {location.pathname === "/dashboard" &&
      <Sideb/>}  
      {location.pathname === "/doubtforum" &&
      <Sideb/>}  
    <Routes>
    <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route path="doubtforum" element={<Forum user={user} />}/>
          <Route path="dashboard" element={<Dashboard/>} />

          <Route path="" element={<Home/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="login" element={<Login/>} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
    </Routes>
    <Toaster />
    </div>
  );
}
export default App;
