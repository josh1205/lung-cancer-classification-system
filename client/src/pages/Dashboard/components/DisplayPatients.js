// Database
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

// Auth
import { useUserAuth } from "../../../contexts/UserAuthContext";

// Firebase
import { db } from "../../../firebase";

// React
import React from "react";

// CSS
import "./CSS/DisplayPatients.css"

export default function DisplayPatients() {
    // Auth
    const { user } = useUserAuth();

    // VARIABLES
    const room = `${user.uid}room`;

    // Firebase hooks
    const [patients, patientsLoading, patientsError] = useCollection(
        collection(db, `rooms/${room}/patients`),
    );

    return (
        <div>
            <h5>Patients from database</h5>
            <div className="container">
                {patientsError && <strong>Error: { patientsError.message }</strong>}
                {patientsLoading && <span>Loading...</span>}
                {patients && (
                    <div className="row">
                            {patients.docs.map((doc) => (
                                <React.Fragment key={doc.id}>
                                    <div className="card patient-card mx-2 pt-1">
                                            <h5 className="card-title">{`${doc.data().first_name} ${doc.data().last_name}`}</h5>
                                            <img id="patient-img-tag" className="card-img-top image-shape" src="" alt="Patient CT Scan" />
                                            <div className="card-body">
                                                <strong>{`${doc.data().image_name}`}</strong>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">{`Email: ${doc.data().email}`}</li>
                                                <li className="list-group-item">{`Stage: ${doc.data().stage}`}</li>
                                                <li className="list-group-item">{`Tumor Width: ${doc.data().tumor_width}`}</li>
                                            </ul>
                                    </div>
                                </React.Fragment>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}