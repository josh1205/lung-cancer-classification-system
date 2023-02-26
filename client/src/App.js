//Auth
import { UserAuthContextProvider } from "./contexts/UserAuthContext";

// Routing
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Style
import 'bootswatch/dist/yeti/bootstrap.min.css';
import './App.css';

// Pages
import LandingPage from "./pages/shared/LandingPage/LandingPage";
import SignIn from "./pages/shared/SignIn/SignIn";
import Dashboard from "./pages/client/Dashboard/Dashboard";
import NotFound from "./pages/shared/NotFound/NotFound";
import Upload from "./pages/shared/LandingPage/components/Upload";
import Profile from "./pages/shared/Profile/Profile"
import Patient from "./pages/patient/Patient"
import ContactDoctor from "./pages/patient/ContactDoctor";
import UpdateUserInfo from "./pages/patient/UpdateUserInfo";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/login" element={<SignIn />}/>
          <Route exact path="/resetPassword" element={<ResetPassword />}/>
          <Route exact path="/upload" element={<Upload />}/>
          <Route exact path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route exact path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }/>
          <Route exact path="/patient" element={<Patient />}/>
          <Route exact path="/contact-doctor" element={<ContactDoctor />}/>
          <Route exact path="/update-userinfo" element={<UpdateUserInfo />}/>
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
