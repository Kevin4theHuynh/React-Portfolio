import React from 'react'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'white'}} href="#aboutMe">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'white'}} href="#myProjects">portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'white'}} href="#contactMe">contact me</a>
          </li>
        </ul>
        
      </div>
    
      </div>
    </nav>
      )
    }
