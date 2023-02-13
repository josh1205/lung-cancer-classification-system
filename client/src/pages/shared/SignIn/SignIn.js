//Auth
import { useUserAuth } from "../../../contexts/UserAuthContext";

//React
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Custom CSS
import './SignIn.css'

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
      e.preventDefault();
      setError("");
      try {
          await logIn(email, password);
          navigate("/dashboard");
      } catch (error) {
          setError(error.message);
      }
  }
  
  return (
    <div className="login-form">
      <Form>
        <h2 className="text-center">Log in</h2>       
        <Form.Group className="mb-3">
            <Form.Control type="email" className="form-control" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required="required" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control type="password" className="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)} required="required" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Button variant="primary" type="submit" onClick={handleSignIn}>Log in</Button>
        </Form.Group>
        {error}    
    </Form>
  </div>
  )
}