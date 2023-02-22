import React from "react";
import './style/Styles.css'
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';
import Starships from "./pages/Starships";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SingUp from "./pages/SingUp";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/starships' element={<Starships />} />
          <Route path='/singup' element={<SingUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
