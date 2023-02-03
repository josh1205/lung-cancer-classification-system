//Auth
import { UserAuthContextProvider } from "./contexts/UserAuthContext";

// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <LandingPage />
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
