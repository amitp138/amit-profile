import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Shri gauridutt mittal vidyalaya
          </h3>
          <p> SSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
         
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            RGIT,mumbai
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
         
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CRID committee
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            web Team member
          </h4>

         
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
         
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MESA committee
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
           web Team member and publicity team member
          </h4>

          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
         
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Globalshala Ltd
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            social media analyst
          </h4>

         
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
         
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            hactoberfest 2022
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            completed hactoberfest 2022
          </h4>

          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
