
export default function Patient() {
    
    return (
        <div>
            <nav>
            <div className="heading">
            <h4>Navigation Bar</h4>
            </div>
            <ul class="topnav">
            <a class="active" href="userhomepage.html">Home</a>
            <a href="contactdoctor.html">Contact Doctor</a>
            <a href="updateuserinfo.html">Update Information</a>
            <a href="#logout">Logout</a>
            </ul>
            </nav>
            <div className="top-text">
                <h1>Welcome back, Alan Turing</h1>
            </div>
            <div className="body-text">
                <h2>Your Diagnosis: Stage 1A Lung Cancer<br></br><br></br></h2>
                <h3>Tumor Image Below</h3>
                <img src="ctscan.png" alt="CT Scan" style="width:400px;height:400px;"></img>
                <h2><br style = "line-height:500px;"></br>Tumor Information</h2>
                <p>
                <br></br>Tumor Width: 14.2mm
                <br></br>Date of Scan: January 1st, 2023
                <br></br>Doctor in Charge of Scan: Dr. Lavieri
                <br></br>Doctor Note: Stop smoking, take Tramadol 2x a day
                </p>
            
                <h3><br style = "line-height:500px;"></br>Click <a href="https://www.cancerresearchuk.org/about-cancer/lung-cancer/stages-types-grades/stage-1" target="_blank">here</a> 
                to learn more about your diagnosis</h3>
            </div>
        </div>
    )

}