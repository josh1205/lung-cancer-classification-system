// Auth
import { useUserAuth } from "../../contexts/UserAuthContext";

// React
import React from "react";

// Components
import DisplayPatients from "./components/DisplayPatients"

// Layout
import MainLayout from "./layouts/MainLayout";

export default function Dashboard() {
    // Auth
    const { user } = useUserAuth();

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
                    <span><i>Patient Database</i></span>
                </div>

                {/* Patient data from firebase */}
                <DisplayPatients />
            </div>
        </MainLayout>
    )

}