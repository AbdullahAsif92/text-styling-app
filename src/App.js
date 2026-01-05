import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  // custom dark mode color 
  const [colorInputText,setColorInputText] = useState("");

  // mode logic
  const [mode,setmode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = colorInputText === "" ? "black" : colorInputText;
      showAlert("success","Dark Mode Has Been Enabled");
      document.title = "Dark Mode Enabled"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white";
      showAlert("success","Light Mode Has Been Enabled");
      document.title = "Light Mode Enabled"
    }
  }
  // alert logic 
  const [alert,setalert] = useState(null);
  const showAlert = (type,message) => {
    setalert({
      type : type,
      message : message
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  return (
    <>
    <Router>
      <Navbar title="Text Styling App" toggleMode={toggleMode} mode={mode} showAlert={showAlert} colorInputText={colorInputText} setColorInputText={setColorInputText}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Write Text In The Blew Box" mode={mode} colorInputText={colorInputText}/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
