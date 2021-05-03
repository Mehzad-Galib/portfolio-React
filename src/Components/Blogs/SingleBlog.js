import React from 'react';
import { Nav } from 'react-bootstrap';

const SingleBlog = (props) => {
    const {title, description, liveSite, image} = props.blog;
    return (
        <div className="col-md-4 col-sm-12">
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
            <Nav.Link href={liveSite} target="_blank">
              <button className="btn btn-outline-warning">
                Live Website
              </button>
            </Nav.Link>
          </div>
        </div>
      </div>
    );
};

export default SingleBlog;