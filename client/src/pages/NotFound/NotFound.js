// Auth
import { useUserAuth } from "../../contexts/UserAuthContext";

// React
import React from "react";
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Button from 'react-bootstrap/Button';

export default function NotFound() {
  const { user } = useUserAuth();
    const navigate = useNavigate();

    const handleLandingPageRedirect = async () => {
      navigate("/")
    }

    const handleDashboardRedirect = async () => {
      navigate("/dashboard");
    }

  if (!user) {
    return (
      <>
        404 User not logged in
        <Button onClick={handleLandingPageRedirect}>Back to homepage</Button>
      </>
    );
  }
  return (
    <>
      You went to the wrong page
      <Button onClick={handleDashboardRedirect}>Back to dashboard</Button>
    </>
  )
}
