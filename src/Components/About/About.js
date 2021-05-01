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

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center">About Me</h2>
      <div className="mt-5">
        <h3>Comfortable At</h3>
        <h4 className="mt-3 badges">
          <span class="badge rounded-pill bg-secondary">React JS</span>{" "}
          <span class="badge rounded-pill bg-secondary">HTML</span>{" "}
          <span class="badge rounded-pill bg-secondary">CSS</span>
          <span class="badge rounded-pill bg-secondary">Bootstrap</span>{" "}
          <span class="badge rounded-pill bg-secondary">MongoDB</span>{" "}
          <span class="badge rounded-pill bg-secondary">Javascript</span>{" "}
          <span class="badge rounded-pill bg-secondary">Firebase</span>{" "}
          <span class="badge rounded-pill bg-secondary">Material UI</span>{" "}
          <span class="badge rounded-pill bg-secondary">Netlify</span>
          <span class="badge rounded-pill bg-secondary">Heroku</span>
        </h4>
      </div>
      <div className="mt-5">
        <h3>Familiar With</h3>
        <h4 className="mt-3 badges">
          <span class="badge rounded-pill bg-secondary">Next JS</span>{" "}
          <span class="badge rounded-pill bg-secondary">Gatsby</span>{" "}
          <span class="badge rounded-pill bg-secondary">Node Mailer</span>
          <span class="badge rounded-pill bg-secondary">Redux</span>{" "}
          <span class="badge rounded-pill bg-secondary">Tailwind CSS</span>{" "}
          <span class="badge rounded-pill bg-secondary">Bulma CSS</span>{" "}
          <span class="badge rounded-pill bg-secondary">Git</span>{" "}
          <span class="badge rounded-pill bg-secondary">Express JS</span>{" "}
          <span class="badge rounded-pill bg-secondary">Chrome Dev Tools</span>
          <span class="badge rounded-pill bg-secondary">Figma</span>
        </h4>
      </div>

      <div className="mt-4">
        <h2>Educational Qualifications</h2>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary"> <h4><span style={{color:'purple'}}>Bangladesh University of Engineering and Technology</span> <br/>
              UnderGraduate</h4>
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
              <Typography color="textSecondary"><h4><span style={{color: 'purple'}}>New Govt. Degree College, Rajshahi</span><br/>
                  HSC</h4></Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography> 2015-2017
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary"><h4><span style={{color: 'purple'}}>Rajshahi Collegiate School, Rajshahi</span><br/>
                  Science</h4></Typography>
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
      </div>
    </div>
  );
};

export default About;
