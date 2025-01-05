import React, { useContext } from "react";
import UserContext from "../UserContext";
import "./Home.css"

function Home() {
    const { currentUser } = useContext(UserContext);

    return (
        <div>
            <h1> Jobly </h1>
            <p>All the jobs you need.</p>
            {currentUser
                    ? <h2>
                        Great to see you again, {currentUser.firstName || currentUser.username}!
                    </h2>
                    : (
                        <div>
                            
                        </div>
                    )}
        </div>
    );
}

export default Home;