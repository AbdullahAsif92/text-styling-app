import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const forTypingColor = (event) =>{
      props.setColorInputText(event.target.value)
    }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
          <input 
          className={`form-control w-25 mx-2 custom-textarea ${props.mode}`} 
          id='navBarColor' 
          style={props.mode === 'dark' ? {backgroundColor:"Black",color:"white"} : {backgroundColor:"white",color:"black"}} 
          value={props.colorInputText} 
          onChange={forTypingColor} 
          placeholder="Enter Color Or Hex Code For Dark Mode"/>
          <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
