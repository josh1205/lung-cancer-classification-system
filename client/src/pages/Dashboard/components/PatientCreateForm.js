// Database
import { collection, addDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

// Storage
import { ref } from 'firebase/storage';
import { useUploadFile, useDownloadURL } from 'react-firebase-hooks/storage';

// Auth
import { useUserAuth } from "../../../contexts/UserAuthContext";

// Firebase
import { db, storage } from "../../../firebase";


// React
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// CSS
import "./CSS/PatientCreateForm.css"

export default function PatientCreateForm() {
    // React Hooks
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tumorWidth, setTumorWidth] = useState("");
    const [stage, setStage] = useState("");
    const [imageName, setImageName] = useState("");
    const [selectedFile, setSelectedFile] = useState();

    // Auth
    const { user } = useUserAuth();

    // VARIABLES
    const navigate = useNavigate();
    const uid = `${user.uid}room`;
    const imagePath = `ctscans/${imageName}`

    // Refs
    const ctScanRef = ref(storage, imagePath);
    const patientsRef = collection(db, `rooms/${uid}/patients`,);

    // Firebase hooks
    const [uploadFile, uploading, uploadSnapshot, uploadError] = useUploadFile();
    const [url, urlLoading, urlError] = useDownloadURL(ref(storage, imagePath));
    const [patients, patientsLoading, patientsError] = useCollection(
        collection(db, `rooms/${uid}/patients`),
    );

    const patientData = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        stage: parseInt(stage),
        tumor_width: parseFloat(tumorWidth),
        image_name: imageName,
        url: url
    };


    // FUNCTIONS

    const upload = () => {
        if (selectedFile) {
          uploadFile(ctScanRef, selectedFile);
        }
    }

    const handlePatientCreation = (e) => {
        e.preventDefault();
        if (email && firstName && lastName && stage, tumorWidth && imageName && selectedFile) {
            upload();
        } else {
            alert("Not all create patient fields are filled");
        }
      };

    return (
        <div>
            <h5>Create a patient</h5>
            <div className="create-user-form">
                <form>
                    <div className="form-group mb-2">
                        <label>Email address</label>
                        <input 
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter..."
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>First name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputFirstName" 
                            placeholder="Alan" 
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>Last name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputLastName"
                            placeholder="Turing"
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>Stage</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="exampleInputStage"
                            placeholder="1"
                            onChange={(event) => setStage(event.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label>Tumor Width</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="exampleInputStage"
                            placeholder="14.2"
                            onChange={(event) => setTumorWidth(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>CT Scan (Not Ready)</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Image Name</span>
                            </div>
                            <input 
                                type="text"
                                className="form-control"
                                id="exampleInputStage"
                                placeholder="Scan 1"
                                onChange={(event) => setImageName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="file"
                            className="form-control"
                            id="exampleInputStage"
                            placeholder="14.2"
                            onChange={(e) => {
                                const file = e.target.files ? e.target.files[0] : undefined;
                                setSelectedFile(file);
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handlePatientCreation}>Submit</button>
                </form>
            </div>
        </div>
    )

}