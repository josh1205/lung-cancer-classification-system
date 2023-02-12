import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [healthprovider, setHealthprovider] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleDashboard = async () => {
        setError("");
        try {
          navigate("/dashboard");
        } catch (error) {
          setError(error.message);
        }
      }

      const handlePassword = async () => {
        try {
          navigate("/ResetPassword");
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
      <div className="mt-5">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="healthprovider">Health Provider:</label>
            <input
              type="text"
              className="form-control"
              id="healthprovider"
              value={healthprovider}
              onChange={(e) => setHealthprovider(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          
          <button onClick={handlePassword}type="button" className="m-3 btn btn-primary">Reset Password</button>
          
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </>
  )
}

