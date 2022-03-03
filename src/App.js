import React from "react";
import logo from './logo.svg';
import Header from "./components/header/header.component";
import HomePage from "./components/homepage/homepage.component";
import { Routes,Link,Route } from "react-router-dom";
import './App.css';
import EveningE from "./pages/electrical/eveninge.component";
import MorningE from "./pages/electrical/morninge.component";
import EveningM from "./pages/mechanical/eveningm.component";
import MorningM from "./pages/mechanical/morningm.component";
import AllData from "./pages/alldata.component";



function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home Page</h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/alldata" element={<AllData/>} />
        <Route exact path="/eveninge" element={<EveningE />} />
        <Route exact path="/morninge" element={<MorningE/>} />
        <Route exact path="/eveningm" element={<EveningM/>} />
        <Route path="/morningm" element={<MorningM/>} />
        
      </Routes>

    </div>
  );
}

export default App;
