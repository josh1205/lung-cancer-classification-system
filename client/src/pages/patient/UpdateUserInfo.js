import './styling.css'
import ctscan from './ctscan.png'

import Navbar from './components/Navbar'
import { useEffect } from 'react'

export default function UpdateUserInfo() {

    useEffect(() => {
        document
          .getElementById('target')
          .addEventListener('change', function () {
            'use strict';
            var vis = document.querySelector('.vis'),   
                target = document.getElementById(this.value);
            if (vis !== null) {
                vis.className = 'inv';
            }
            if (target !== null ) {
                target.className = 'vis';
            }
          });
      }, []);
    
    
    return (
        <div>
            <Navbar />
            <div className="top-text">
                <h1>Update Information</h1>
            </div>
            <div className="body-text">
                <label htmlFor="info">Choose what information you would like to update:</label>

                <select id="target">
                    <option value="">Select...</option>
                    <option value="content_1">Your Medical History</option>
                    <option value="content_2">Family Medical History</option>
                    <option value="content_3">Your Contact Info</option>
                </select>

                <div id="content_1" className="inv">
                    <label htmlFor="medDocumentPatient">
                        <br style={{ lineHeight: 500 }}/>Upload Medical Document (docx/pdf allowed):
                    </label>
                    <input type="file" id="medDocumentPatient" accept=".doc,.docx,.pdf" />
                    <button type="submit">Submit</button>
                </div>
            </div>

            <div id="content_2" className="inv">
                <form>
                    <label htmlFor="relation"><br style={{ lineHeight: 500 }}/>Relation of family member to you:</label>
                    <br/>
                    <input type="text" id="relation" name="relation" />
                    <br/>
                    <label htmlFor="diagnosticInfoFamily">Diagnosis received:</label>
                    <br/>
                    <input type="text" id="diagnosticInfoFamily" name="diagnosticInfoFamily" />
                    <br/>
                    <label htmlFor="diagnosticDate">Date of diagnosis (if available):</label>
                    <br/>
                    <input type="text" id="diagnosticDate" name="diagnosticDate"/>
                    <br/>
                    <button id="submit">Submit</button>
                </form>
            </div>

            <div id="content_3" className="inv">

                <label htmlFor="info"><br style={{ lineHeight: 500 }} />Choose what information you would like to update (leave blank if still correct):</label>

                <form>
                    <label htmlFor="email">
                        <br style={{ lineHeight: 500 }} />Email:
                    </label>
                    <br />
                    <input type="text" id="email" name="email" />
                    <br />
                    <label htmlFor="patientPhoneNumber">Phone Number (enter as ##########):</label>
                    <br />
                    <input type="text" id="patientPhoneNumber" name="patientPhoneNumber" />
                    <br />
                    <button id="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}