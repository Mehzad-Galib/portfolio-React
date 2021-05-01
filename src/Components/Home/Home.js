import React from "react";
import "./Home.css";
import proPic from "../../Images/propic.jpg";
import Typical from "react-typical";

const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center">
        <div className="mt-5">
          
          <div className="intro">
            <h1 className="text-white">Mehzad Galib</h1>
            <div className="typist text-white h4">
              <Typical
                steps={["Developer", 3000, "Programmer", 2000, "Learner", 2000, "Designer", 2500]}
                loop={Infinity}
                wrapper="b"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
