import React from "react";
import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Nav.Link className="navbar-brand name" as={Link} to={`/`} >
          Mehzad Galib
        </Nav.Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse topbar" id="navbarNav">
          <ul className="navbar-nav ms-auto ml-5">
            <li className="nav-item nav-elements">
              <Nav.Link as={Link} to={`/home`} className="nav-link active" aria-current="page" >
                Home
              </Nav.Link>
            </li>
            <li className="nav-item nav-elements">
            <Nav.Link as={Link} to={`/projects`} className="nav-link active" aria-current="page">
                Projects
              </Nav.Link>
            </li>
            <li className="nav-item nav-elements">
            <Nav.Link as={Link} to={`/blogs`} className="nav-link active" aria-current="page" >
                Blogs
              </Nav.Link>
            </li>
            <li className="nav-item nav-elements">
            <Nav.Link as={Link} to={`/about`} className="nav-link active" aria-current="page" >
                About Me
              </Nav.Link>
            </li>
            <li className="nav-item nav-elements">
            <Nav.Link as={Link} to={`/contact`} className="nav-link active" aria-current="page" >
                Contact Me
              </Nav.Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
