import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        const confirmation = window.confirm("You won't logout. Do you want to proceed?");
        if (confirmation) {
            // Redirect to /adminpanel
            navigate("/adminpanel");
        }
    };

    return (
        <center>
            <button type="button" className="btn btn-danger mb-2" onClick={handleLogout}>
                Logout
            </button>
        </center>
    );
};

export default LogoutButton;
