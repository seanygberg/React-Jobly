import React from "react";
import Home from "../home/Home.js"
import LoginForm from "../user/LoginForm.js"
import SignupForm from "../user/SignupForm.js"
import { Routes, Route, Navigate } from "react-router-dom";

function NavRoutes({ signup, login }) {
    /**
     *          <Route path="/companies" element={<Companies />} />
                <Route path="/companies/:handle" element={<CompanyDetail />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/login" element={<Login login={login} />} />
                <Route path="/signup" element={<Signup signup={signup} />} />
                <Route path="/profile" element={<Profile />} />
     */
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/companies" />
                <Route path="/companies/:handle" />
                <Route path="/jobs" />
                <Route path="/login" element={<LoginForm login={login}/>} />
                <Route path="/signup" element={<SignupForm signup={signup}/>} />
                <Route path="/profile" />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            
        </div>
    );
};

export default NavRoutes;