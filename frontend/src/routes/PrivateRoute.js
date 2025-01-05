import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

function PrivateRoute({ children }) {
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default PrivateRoute;
