// React
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Auth
import { useUserAuth } from "../../../../../contexts/UserAuthContext";

// Assets
import logo from "../../../../../assets/img/lung-logo.svg"

//CSS
import './CSS/Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();
    const { logOut } = useUserAuth();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // FUNCTIONS
    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <img src={logo} alt="logo" className="mx-3" style={{width: 80, padding: 0, marginRight: 20, margin: 0 }}/>
                    <span className="navbar-brand h1">Lung cancer classification system</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-3" id="navbarColor01">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn btn-secondary rounded-pill ms-4" style={{ width: 100 }}>Upload</button>
                            </li>
                            <li class="nav-item py-1 col-12 col-lg-auto">
                                <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                                <hr class="d-lg-none text-white-50" />
                            </li>
                        </ul>
                        <ul>
                            {/* Avatar */}
                            <li>
                                <a className="avatar" onClick={toggleDropdown} href="#" id="navbarDropdownMenuLink"
                                role="button"aria-expanded="false">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle" style={{ height: 60, width: 60, padding: 0, margin: 0 }}
                                    height="22" alt="Avatar" loading="lazy" />
                                </a>
                                {isDropdownOpen && (
                                    <ul className="nav-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="nav-dropdown-item" onClick={() => navigate('/profile')} href="#">Profile</a>
                                        </li>
                                        <li>
                                            <a className="nav-dropdown-item" onClick={handleLogout} href="#">Logout</a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}