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
        <div className="align-items-center justify-content-center">
         <div className="profile-img">
           <img className='img-fluid'
            src="../../Images/propic_college.jpg" alt=""/>
         </div>
          <h5>
            I am a junior Full-Stack web developer with over one year of
            front-end-focused experience. I can write reusable, maintainable,
            and scalable code for mobile-responsive websites. My work history
            demonstrates a solid track record in leading and working on
            both medium and large-sized projects. My passion is to learn more
            web-related technologies to build user-friendly web applications and
            work with bigger software-related companies.
          </h5>
        </div>
        <h3 className='mt-5'>Technologies</h3>
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
        <h3>Tools</h3>
        <h4 className="mt-3 badges">
          <span class="badge rounded-pill bg-secondary">Next JS</span>{" "}
          <span class="badge rounded-pill bg-secondary">Gatsby</span>{" "}
          <span class="badge rounded-pill bg-secondary">Node Mailer</span>
          <span class="badge rounded-pill bg-secondary">Redux</span>{" "}
          <span class="badge rounded-pill bg-secondary">Tailwind CSS</span>{" "}
          <span class="badge rounded-pill bg-secondary">Git</span>{" "}
          <span class="badge rounded-pill bg-secondary">Express JS</span>{" "}
          <span class="badge rounded-pill bg-secondary">Chrome Dev Tools</span>
        </h4>
      </div>

      <div className="mt-4">
        <h2>Educational Qualifications</h2>
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
      </div>
    </div>
  );
};

export default About;
