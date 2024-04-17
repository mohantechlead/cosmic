import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ParticlesBackground from "./components/ParticlesBackground";


function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path = "/" element = {<Landing />} />
    //   </Routes>
    //   </BrowserRouter>
     
    // </div>
    <div className='App'>
    <ParticlesBackground />
    <div className='particlesheader'>
      <h1>Paridh</h1>
    </div>
    </div>
  );
}

export default App;
