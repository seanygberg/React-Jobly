import React, { useContext } from "react";
import UserContext from "../UserContext";
import "./Home.css"

function Home() {
    const { currentUser } = useContext(UserContext);

    return (
        <div>
            <h1> Jobly </h1>
            <p>All the jobs you need in one, very convenient place.</p>
            {currentUser
                    ? <h2>
                        Welcome Back, {currentUser.firstName || currentUser.username}!
                    </h2>
                    : (
                        <div>
                            
                        </div>
                    )}
        </div>
    );
}

export default Home;