import React from "react";
import { Routes, Route } from "react-router-dom";
import UserProvider from "./hooks/UserContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ConfirmationScreen from "./pages/ConfirmationScreen";

const App = () => {
   const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <UserProvider>
      <Routes isLoggedIn={isLoggedIn}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/con" element={<ConfirmationScreen />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
