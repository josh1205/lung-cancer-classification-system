import React from "react";
import { useUserAuth } from "../../contexts/UserAuthContext";
import AdminPage from "./AdminPage";
import DisplayPatients from "./components/DisplayPatients";
import MainLayout from "./layouts/MainLayout";


export default function Dashboard() {
  const { user } = useUserAuth();
  console.log(user); // Add this line to check the user object

  const isAdmin = user.email === "admin@gmail.com";

  return (
    <MainLayout>
      {isAdmin ? (
        <AdminPage />
      ) : (
        <>
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

            <DisplayPatients />
          </div>
        </>
      )}
    </MainLayout>
  );
}






