import React from "react";
import './style/Styles.css'
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';
import Starships from "./pages/Starships";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/starships' element={<Starships />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
