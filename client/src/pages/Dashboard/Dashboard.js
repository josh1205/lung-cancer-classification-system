// Auth
import { useUserAuth } from "../../contexts/UserAuthContext";

// React
import React from "react";
import { useNavigate } from 'react-router-dom';

// Components
import PatientCreateForm from "./components/PatientCreateForm"
import DisplayPatients from "./components/DisplayPatients"

export default function Dashboard() {
    // Auth
    const { user, logOut} = useUserAuth();

    // VARIABLES
    const navigate = useNavigate();


    // FUNCTIONS
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    }

    const handleProfile = async () => {
      try {
        navigate("/profile");
      } catch (error) {
        console.log(error.message)
      }
    }

    return (
        <div>
            <h1>Welcome to the Vanilla Dashboard</h1>
            <span>{`Practitioner email: ${user.email}`}</span>
            <div>
                <h3>Top Nav Links</h3>
                <button type="button" className="m-3 btn btn-primary">Upload CT Scan</button>
                <button onClick={handleProfile} type="button" className="m-3 btn btn-primary">Profile</button>
                <button onClick={handleLogout} type="button" className="m-3 btn btn-primary">Logout</button>
            </div>
            <div>
                <div>
                    <h3>Main Page</h3>
                    <span><i>Patient Database</i></span>
                </div>
                {/* Section is used to add a patient to the database */}
                <PatientCreateForm />

                {/* Patient data from firebase */}
                <DisplayPatients />
            </div>
        </div>
    )

}