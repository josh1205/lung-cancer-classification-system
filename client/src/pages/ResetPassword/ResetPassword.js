import './Reset.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    //Functions
    const handleDashboard = async () => {
        setError("");
        try {
          navigate("/dashboard");
        } catch (error) {
          setError(error.message);
        }
      }

      const handleProfile = async () => {
        setError("");
        try {
          navigate("/profile");
        } catch (error) {
          setError(error.message);
        }
      }
  
  return (
    <>
      {error}
      <h1>Reset Password Page</h1>
      <div>
        <button onClick={handleProfile}type="button" className="m-3 btn btn-primary">Back to Profile settings</button>
        <button onClick={handleDashboard}type="button" className="m-3 btn btn-primary">Back to Dashboard</button>
      </div>
      <div className="mt-5">
        <form>
          <div className="form-group">
            <label htmlFor="oldPassword">Current Password:</label>
            <input
              type="text"
              className="form-control"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="text"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="verifyPassword">Verify Password:</label>
            <input
              type="text"
              className="form-control"
              id="verifyPassword"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ResetPassword
          </button>
        </form>
      </div>
    </>
  )
}