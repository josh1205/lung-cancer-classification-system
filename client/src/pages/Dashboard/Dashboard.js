// Auth
import { useUserAuth } from "../../contexts/UserAuthContext";

// React
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//Bootstrap
import Button from 'react-bootstrap/Button';

export const Dashboard = () => {
    const { user, logOut} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogout = async () => {
      setError("");
      try {
          await logOut();
          navigate("/");
      } catch (error) {
          setError(error.message);
      }
    }
    return (
        <div>
            <h1>Welcome to the dashboard</h1>
            <div>{user.email}</div>

            <Button onClick={handleLogout}>Logout</Button>
            {error}
        </div>
    )

}