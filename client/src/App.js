import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Impact } from "./components/Impact";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Banner />
      <Impact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
