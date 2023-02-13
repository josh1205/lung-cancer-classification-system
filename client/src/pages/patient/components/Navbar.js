import '../styling.css'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="heading">
                <h4 onClick={() => navigate('/dashboard')}>Navigation Bar</h4>
            </div>
            <ul className="topnav">
                <a className="active" href="" onClick={() => navigate('/patient')}>Home</a>
                <a href="" onClick={() => navigate('/contact-doctor')}>Contact Doctor</a>
                <a href="" onClick={() => navigate('/update-userinfo')}>Update Information</a>
                <a href="#logout">Logout</a>
            </ul>
        </nav>
    )

}