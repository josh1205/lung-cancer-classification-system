// Auth
import { useUserAuth } from "../../contexts/UserAuthContext";

// React
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//Bootstrap
import Button from 'react-bootstrap/Button';

export const Dashboard = () => {
<<<<<<< Updated upstream
=======
    // React Hooks
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tumorWidth, setTumorWidth] = useState("");
    const [stage, setStage] = useState("");
    const [imageName, setImageName] = useState("");
    //below is fhe upload CT img button
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

    // Auth
>>>>>>> Stashed changes
    const { user, logOut} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogout = async () => {
      setError("");
      try {
          await logOut();
          navigate("/");
      } catch (error) {
          setError(error.message);
      }
    }
    return (
        <div>
<<<<<<< Updated upstream
            <h1>Welcome to the dashboard</h1>
            <div>{user.email}</div>
=======
            <h1>Welcome to the Vanilla Dashboard</h1>
            <span>{`Practitioner email: ${user.email}`}</span>
            <div>
      <h3>Top Nav Links</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button  type="button" className="m-3 btn btn-primary">
        Upload CT Scan
      </button>
      {image && (
        <div>
          <h3>Preview: User current CT scan</h3>
          <img src={image} alt="Preview" style={{ width: "500px", height: "500px" }} />
          
        </div>
      )}
      <button onClick={handleProfile} type="button" className="m-3 btn btn-primary">
        Profile
      </button>
      <button onClick={handleLogout} type="button" className="m-3 btn btn-primary">
        Logout
      </button>
      
    </div>
            <div>
                <div>
                    <h3>Main Page</h3>
                    <span><i>Patient Database</i></span>
                </div>
                {/* Section is used to add a patient to the database */}
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
                        <div className="form-group mb-2">
                            <label>CT Scan (Not Ready)</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="exampleInputStage"
                                placeholder="Scan 1"
                                onChange={(event) => setImageName(event.target.value)}
                            />
                            <input
                                type="file"
                                className="form-control"
                                id="exampleInputStage"
                                placeholder="14.2"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handlePatientCreation}>Submit</button>
                    </form>

                </div>

                {/* Patient data from firebase */}
                <h5>Patients from database</h5>
                <div className="container">
                    {patientsError && <strong>Error: { patientsError.message }</strong>}
                    {patientsLoading && <span>Loading...</span>}
                    {patients && (
                        <div className="row">
                                {patients.docs.map((doc) => (
                                    <React.Fragment key={doc.id}>
                                        <div className="card patient-card mx-2 pt-1">
                                                <img className="card-img-top image-shape" src={doc.data().url} alt="Patient CT Scan" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{`${doc.data().first_name} ${doc.data().last_name}`}</h5>
                                                    
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">{`Email: ${doc.data().email}`}</li>
                                                    <li className="list-group-item">{`Stage: ${doc.data().stage}`}</li>
                                                    <li className="list-group-item">{`Tumor Width: ${doc.data().tumor_width}`}</li>
                                                </ul>
                                        </div>
                                    </React.Fragment>
                                ))}
>>>>>>> Stashed changes

            <Button onClick={handleLogout}>Logout</Button>
            {error}
        </div>
    )

}