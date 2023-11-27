import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";

import Admin from "./components/Admin/Admin";
import Login from "./components/Registration/Login";
import RegisterUser from "./components/Registration/RegisterUser";
import RegisterAdmin from "./components/Registration/RegisterAdmin";
import RegisterDealer from "./components/Registration/RegisterDealer";
import LoginDealer from "./components/Dealers/LoginDealer";
import AdminLogin from "./components/Admin/AdminLogin";
import DealerPortal from "./components/Dealers/DealersPortal";
import Home from "./components/Pages/Home";

function App() {
  const [data, setData] = useState();
  const handleData = (v) => {
    setData(v);
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registerUser" element={<RegisterUser />} />

        <Route path="/registermanager" element={<RegisterDealer />} />
        <Route path="/loginmanager" element={<LoginDealer />} />

        <Route path="/registerAdmin" element={<RegisterAdmin />} />
        <Route path="/loginAdmin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<Home />} />
        <Route path="/manager" element={<DealerPortal />} />
        <Route path="*" element={<NoPage></NoPage>} />
      </Routes>
    </div>
    /* */
  );
}

export default App;
