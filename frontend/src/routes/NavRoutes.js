import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../home/Home.js";
import CompanyList from "../companies/CompanyList.js";
import CompanyDetail from "../companies/CompanyDetail.js";
import JobList from "../jobs/JobList.js"
import LoginForm from "../user/LoginForm.js";
import SignupForm from "../user/SignupForm.js";
import ProfileForm from "../user/ProfileForm.js";
import PrivateRoute from "./PrivateRoute.js";

function NavRoutes({ signup, login }) {
    return (
        <div>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm login={login} />} />
                <Route path="/signup" element={<SignupForm signup={signup} />} />
                
                {/* Private Routes */}
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfileForm />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/companies"
                    element={
                        <PrivateRoute>
                            <CompanyList />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/companies/:handle"
                    element={
                        <PrivateRoute>
                            <CompanyDetail />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/jobs"
                    element={
                        <PrivateRoute>
                            <JobList />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default NavRoutes;
