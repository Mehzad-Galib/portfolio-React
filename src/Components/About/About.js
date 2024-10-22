import React from "react";
import "./About.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from 'react-reveal/Bounce';

const About = () => {
  return (
    <div className="container">
      <Flip top>
        <h2 className="text-center">About Me</h2>
      </Flip>

      <div className="mt-5">
        <div className="align-items-center justify-content-center">
          <Fade left>
            <h5>
            Recent graduate and pursuing MSc degree in CSE (Data Science) from BUET, bringing statistical and predictive analytics expertise and ability to work within a range of data environments. Learned and applied several programming languages, tools along with database technologies, and done some real-world projects with useful insights. Looking to apply practical data science experience with strong skills in research and programming methodologies. 

            </h5>
          </Fade>
        </div>
        <LightSpeed top>
          <h3 className="mt-5">Programming Languages</h3>
          <h4 className="mt-3 badges">
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              C
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">C++</span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Python
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              R
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Javascript
            </span>


          </h4>
        </LightSpeed>
      </div>
    
      <div className="mt-5">
        <LightSpeed bottom>
          <h3>Statistical Softwares and Packages</h3>
    
          <h4 className="mt-3 badges">
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              SPSS
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              MS Excel
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Pandas
            </span>
            
            <span className="badge m-2 p-3 rounded-pill bg-secondary">NumPy</span>{" "}
          </h4>
        </LightSpeed>
      </div>

          <div className="mt-5">
        <LightSpeed bottom>
          <h3>Data Visualization Tools</h3>
    
          <h4 className="mt-3 badges">
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Matplotlib
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Scikit-learn
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Power BI
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">Tableau</span>{" "}
          </h4>
        </LightSpeed>
      </div>

        <div className="mt-5">
        <LightSpeed bottom>
          <h3>Database Softwares</h3>
    
          <h4 className="mt-3 badges">
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              MySQL
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              PostgreSQL
            </span>{" "}
          </h4>
        </LightSpeed>
      </div>

      <div className="mt-4">
        <Bounce bottom>
        <h2>Educational Background</h2>
        <Timeline align="alternate">

              <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">
                {" "}
                <h4>
                  <span style={{ color: "purple" }}>
                    Bangladesh University of Engineering and Technology (BUET)
                  </span>{" "}
                  <br />
                  MSc in CSE (Data Science)
                </h4>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>2024 - Present</Typography>
            </TimelineContent>
          </TimelineItem>
  
    
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">
                {" "}
                <h4>
                  <span style={{ color: "purple" }}>
                    Bangladesh University of Engineering and Technology (BUET)
                  </span>{" "}
                  <br />
                  UnderGraduate
                </h4>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>2018- 2023</Typography>
            </TimelineContent>
          </TimelineItem>

  
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">
                <h4>
                  <span style={{ color: "purple" }}>
                    New Govt. Degree College, Rajshahi
                  </span>
                  <br />
                  HSC
                </h4>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography> 2015-2017</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">
                <h4>
                  <span style={{ color: "purple" }}>
                    Rajshahi Collegiate School, Rajshahi
                  </span>
                  <br />
                  SSC
                </h4>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>2007-2015</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </Bounce>

        
      </div>
    </div>
  );
};

export default About;
