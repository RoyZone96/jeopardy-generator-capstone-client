import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import TokenService from '../services/TokenService';

const LogoutButton = () => {
    const [navigate, setNavigate] = useState(false);

    const logout = (event) => {
        TokenService.clearAuthToken();
        setNavigate(true);
    };

    if (navigate) {
        return <Redirect to="/" push={true} />;
    }

    return <button className="logout" onClick={logout}>Log Out</button>;
};

export default LogoutButton;