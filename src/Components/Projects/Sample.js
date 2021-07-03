import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import './Simple.css'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const Sample = (props) => {
  const { title, description, github, liveSite, image } = props.project;
  return (
    <>
      <div className="col-md-4 col-12">
        <div className="card mt-3 mb-5 projectCard">
          <img
            className="card-img-top"
            style={{ height: "20rem" }}
            src={image}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title text-white">{title}</h5>
            <p className="card-text text-white">{description}</p>
          </div>
          <div className="card-body d-flex justify-content-center">
            <Nav.Link href={github} target="_blank">
              <button className="btn btn-outline-primary" type="button">
               <FontAwesomeIcon icon={faGithubSquare} /> Source Code
              </button>
            </Nav.Link>
            <Nav.Link href={liveSite} target="_blank">
              <button className="btn btn-outline-warning">
              <FontAwesomeIcon icon={faGlobe} /> Preview
              </button>
            </Nav.Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sample;
