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
            A fresher looking for challenging yet rewarding career with a progressive organization. Always seeking new technologies and enjoying working as a team.
            </h5>
          </Fade>
        </div>
        <LightSpeed top>
          <h3 className="mt-5">Technologies</h3>
          <h4 className="mt-3 badges">
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              HTML5
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">CSS3</span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Bootstrap
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Tableau
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Javascript
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              React JS
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              MongoDB
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Express JS
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Material UI
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Node JS
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Redux
            </span>
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
             REST API 
            </span>
          </h4>
        </LightSpeed>
      </div>
      <div className="mt-5">
        <LightSpeed bottom>
          <h3>Tools</h3>
          <h4 className="mt-3 badges">
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Power BI
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Heroku
            </span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Netlify
            </span>
            
            <span className="badge m-2 p-3 rounded-pill bg-secondary">Git</span>{" "}
            <span className="badge m-2 p-3 rounded-pill bg-secondary">
              Chrome Dev Tools
            </span>
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
                    Bangladesh University of Engineering and Technology
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
              <Typography>2018- Present</Typography>
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
