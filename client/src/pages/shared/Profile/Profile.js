import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../../firebase'; 
import { getDocs, collection } from 'firebase/firestore';
import '../Profile/Profile.css'

export default function Profile() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [permission, setPermission] = useState("");

  useEffect(() => {
    const cfCollectionRef = collection(db, "users");
    const getcfList = async () => {
      try {
        // Retrieve all documents in the "users" collection.
        const data = await getDocs(cfCollectionRef);
        // Convert the retrieved data into an array of objects, with each object representing a user and containing the user's data as well as their ID.
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id, }));
    
        // Get the currently logged-in user's information by finding the object that has the same email as the currently authenticated user.
        const currentUser = filteredData.find((user) => user.email === auth.currentUser.email);
        // Update the state variables with the user's information.
        setName(currentUser.firstName);
        setLastName(currentUser.lastName);
        setEmail(currentUser.email);
        setPermission(currentUser.permission);
      } catch (err) {
        console.error(err);
      }
    };
    
    // Call the getcfList function to retrieve and set the user's information when the component mounts.
    getcfList();
  }, []);

  const handleDashboard = async () => {
    setError("");
    try {
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePassword = async () => {
    try {
      navigate("/ResetPassword");
    } catch (error) {
      setError(error.message);
    }
  };

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
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            <label htmlFor="permission">Permission:</label>
            <input
              type="text"
              className="form-control"
              id="permission"
              value={permission}
              onChange={(e) => setPermission(e.target.value)}
            />
          </div>
          <div>
          <button onClick={handlePassword}type="button" className="m-3 btn btn-primary">Reset Password</button>
          </div>

          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </>
  )
}
