// React
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleDashboard = async () => {
        setError("");
        try {
          navigate("/dashboard");
        } catch (error) {
          setError(error.message);
        }
      }
  
  return (
    <>
      {error}
      <h1>Profile page</h1>
      <div>
        <button onClick={handleDashboard}type="button" className="m-3 btn btn-primary">Back to Dashboard</button>
      </div>
    </>
  )
}
