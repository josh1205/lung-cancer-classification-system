import './styling.css'
import Navbar from './components/Navbar'

export default function ContactDoctor() {

    return (
        <div>
            <Navbar />
            <div className="top-text">
                <h1>Contact Your Doctor</h1>
            </div>
            <div className="body-text">
                <p>
                    <br style={{ lineHeight: 500 }} />Your Doctor: Dr. Lavieri - Radiologist
                    <br />Office Phone Number: 561-111-1111
                    <br />Office Hours: Monday-Friday 8pm-5pm
                </p>
            </div>
        </div>
    )

}