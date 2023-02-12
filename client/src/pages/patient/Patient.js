import './styling.css'
import ctscan from './ctscan.png'

import Navbar from './components/Navbar'

export default function Patient() {
    
    return (
        <div>
            <Navbar />
            <div className="top-text">
                <h1>Welcome back, Alan Turing</h1>
            </div>
            <div className="body-text">
                <h2>Your Diagnosis: Stage 1A Lung Cancer<br></br><br></br></h2>
                <h3>Tumor Image Below</h3>
                <img style={{ width: 400, height:400 }} src={ctscan} alt="CT Scan" />
                <h2><br style={{ lineHeight: 500 }}></br>Tumor Information</h2>
                <p>
                <br></br>Tumor Width: 14.2mm
                <br></br>Date of Scan: January 1st, 2023
                <br></br>Doctor in Charge of Scan: Dr. Lavieri
                <br></br>Doctor Note: Stop smoking, take Tramadol 2x a day
                </p>
            
                <h3><br style={{ lineHeight: 500 }} ></br>Click <a href="https://www.cancerresearchuk.org/about-cancer/lung-cancer/stages-types-grades/stage-1" target="_blank">here</a> to learn more about your diagnosis</h3>
            </div>
        </div>
    )

}