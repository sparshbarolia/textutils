import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  if(mode === "light"){
    document.body.style.backgroundColor = '#F0FFFF';
  }
  
  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#0C2D48';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#F0FFFF";
    }
  }

  return (
    <>
      <Router>
        <Navbar TitleText="TextCase" AboutText="about" mode={mode} switchModeFunc={switchMode} />
        {/* <Navbar TitleText="TextUtils" AboutText="about" mode = "dark" /> */}

        {/* my-3 , y me 3 ki margin dedegi */}
        <div className="container my-3" >

          <Routes>
            {/* path="/" ka mtlb h ki ye root page h mtlb default yahi khulega sbse pehle */}
            <Route exact path="/"
              element={<TextForm heading="Enter your text here (⌐▨_▨)" mode={mode}/>} >
            </Route>
            
            {/* jb bhi about pr click krte h to /about jud jata h(http://localhost:3001 se http://localhost:3001/about hojata h) */}
            {/* to /about pr jaye jb bhi to About file khol do */}
            <Route exact path="/aboutPrLejao"
              element = {<About mode={mode} />}>
            </Route>
          </Routes>
        </div>

        <Footer mode={mode}/>

      </Router>
    </>
  );
}

export default App;