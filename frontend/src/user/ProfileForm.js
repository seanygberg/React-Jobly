import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../api";
import UserContext from "../UserContext";

const ProfileForm = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
    });

    const [error, setError] = useState(null); // For handling errors
    const [success, setSuccess] = useState(false); // For handling success

    useEffect(() => {
        if (currentUser) {
            setFormData({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                username: currentUser.username,
            });
        }
    }, [currentUser]);

    async function handleSubmit(event) {
        event.preventDefault();
        setError(null); // Clear previous errors
        setSuccess(false); // Reset success state

        try {
            let profileData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
            };

            let username = formData.username;
            console.log(username);
            console.log(profileData);
            let newUser = await JoblyApi.editProfile(username, profileData);

            setFormData({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                username: newUser.username,
            });

            setCurrentUser(newUser);
            setSuccess(true);
            navigate.push("/");

        } catch (err) {
            setError(err.response?.data?.error?.message || "An unexpected error occurred.");
        }
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>Profile updated successfully!</div>}
        </form>
    );
};

export default ProfileForm;