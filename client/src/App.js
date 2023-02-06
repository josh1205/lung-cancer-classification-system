//Auth
import { UserAuthContextProvider } from "./contexts/UserAuthContext";

// Routing
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { SignIn } from "./pages/SignIn/SignIn";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Upload from "./pages/LandingPage/components/Upload";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/login" element={<SignIn />}/>
          <Route exact path="/upload" element={<Upload />}/>
          <Route exact path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
