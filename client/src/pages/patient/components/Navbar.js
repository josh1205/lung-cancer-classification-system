import '../styling.css'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <span className="navbar-brand mb-0 h1">Logo</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                  <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a className="nav-link" href="" onClick={() => navigate('/patient')}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="" onClick={() => navigate('/contact-doctor')}>Contact Doctor</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="" onClick={() => navigate('/update-userinfo')}>Update Information</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="" onClick={() => navigate('/dashboard')}>Logout</a>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
    )

}