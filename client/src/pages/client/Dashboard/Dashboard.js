// Auth
import { useUserAuth } from "../../../contexts/UserAuthContext";

// React
import React from "react";
import { useNavigate } from 'react-router-dom';

// Components
import PatientCreateForm from "./components/PatientCreateForm"
import DisplayPatients from "./components/DisplayPatients"

// Layout
import MainLayout from "../layouts/MainLayout/MainLayout";

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

    const handlePatient = async () => {
      try {
        navigate("/patient");
      } catch (error) {
        console.log(error.message)
      }
    }

    return (
        <MainLayout>
          <div class="container mt-5">
            <div class="row">
              <div class="col-12 text-center">
                <h1 className="align-center">Welcome to the Dashboard {user.email}</h1>
              </div>
            </div>
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
        </MainLayout>
    )

}