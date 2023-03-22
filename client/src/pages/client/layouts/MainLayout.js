// React
import React from "react";

// Components
import Navbar from "../components/Navbar";

export default function MainLayout({children}) {
    
    return (
        <>
            <Navbar />
            {children}
        </>
    )

}