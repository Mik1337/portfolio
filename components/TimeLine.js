import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { UniversityTopy, GenericWork } from "./Icons";

export default class TimeLine extends React.Component {
  render() {
    return (
      <div className="timeline">
        <VerticalTimeline layout="2-columns">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `${this.props.dark ? "black" : "white"}`,
              color: `${this.props.dark ? "white" : "black"}`,
              borderTop: "7px solid #ffce00",
              borderRight: "2px solid #ffce00",
              borderLeft: "2px solid #ffce00",
              borderBottom: "2px solid #ffce00",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #ffce00" }}
            date="Septermber 2020 - present"
            // dateClassName="highlight"
            iconStyle={{ background: "#ffce00", color: "white" }}
            icon={<GenericWork />}
          >
            <h3 className="vertical-timeline-element-title">The/Nudge</h3>
            ----------
            <h4 className="vertical-timeline-element-subtitle">Consultant</h4>
            <p>Intern</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `${this.props.dark ? "black" : "white"}`,
              color: `${this.props.dark ? "white" : "black"}`,
              borderTop: "7px solid #1251b5",
              borderRight: "2px solid #1251b5",
              borderLeft: "2px solid #1251b5",
              borderBottom: "2px solid #1251b5",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1251b5" }}
            date="Febuary 2020 - March 2020"
            iconStyle={{ background: "#1251b5", color: "#fff" }}
            icon={<GenericWork />}
          >
            <h3 className="vertical-timeline-element-title">Volvo CE</h3>
            ----------
            <h5 className="vertical-timeline-element-subtitle">
              Project Intern
            </h5>
            <p>
              Process Failure Mode and Effect Analysis (PFMEA) on Volvo CE Tier
              4 Compactors
              <small> (SD100C, DD90C, DD100C)</small>
              <br />
              {/* <small>
                <b>
                  Memorable Event: Our client entered DST, throwing our weekly 7.30PM IST meeting off by an hour :(
                </b>
              </small> */}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `${this.props.dark ? "black" : "white"}`,
              color: `${this.props.dark ? "white" : "black"}`,
              borderTop: "7px solid #3180ff",
              borderRight: "2px solid #3180ff",
              borderLeft: "2px solid #3180ff",
              borderBottom: "2px solid #3180ff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #3180ff" }}
            date="July 2019 - November 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GenericWork />}
          >
            <h3 className="vertical-timeline-element-title">Fanlytiks</h3>
            ----------
            <h5 className="vertical-timeline-element-subtitle">Full Stack</h5>
            <p>
              API, Feature Development, GraphQL, React.JS, Next.JS, JWT,
              PostgresQL
              <br />
              {/* <small>
                <b>
                  Memorable Event: Our client entered DST, throwing our weekly 7.30PM IST meeting off by an hour :(
                </b>
              </small> */}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `${this.props.dark ? "black" : "white"}`,
              color: `${this.props.dark ? "white" : "black"}`,
              borderTop: "7px solid #2e8dcd",
              borderRight: "2px solid #2e8dcd",
              borderLeft: "2px solid #2e8dcd",
              borderBottom: "2px solid #2e8dcd",
            }}
            contentArrowStyle={{ borderRight: "7px solid #2e8dcd" }}
            date="Febuary 2018 - March 2018"
            iconStyle={{ background: "#2e8dcd", color: "#fff" }}
            icon={<GenericWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Sansera Engineering
            </h3>
            ----------
            <h5 className="vertical-timeline-element-subtitle">Intern</h5>
            <p>Intern in the Maintenence Department, </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: `${this.props.dark ? "black" : "white"}`,
              color: `${this.props.dark ? "white" : "black"}`,
              borderTop: "7px solid #f4a24a",
              borderRight: "2px solid #f4a24a",
              borderLeft: "2px solid #f4a24a",
              borderBottom: "2px solid #f4a24a",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f4a24a" }}
            date="July 2017 - Augest 2017"
            iconStyle={{ background: "#f4a24a", color: "#fff" }}
            icon={<GenericWork />}
          >
            <h3
              className="vertical-timeline-element-subtitle"
              title="S.V. Material Handling Systems Pvt. Ltd."
            >
              S.V Industry
            </h3>
            ----------
            <h5 className="vertical-timeline-element-title">Trainee</h5>
            <p>Engineering Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: `${this.props.dark ? "black" : "white"}`,
              color: `${this.props.dark ? "white" : "black"}`,
              borderTop: "7px solid #78100d",
              borderRight: "2px solid #78100d",
              borderLeft: "2px solid #78100d",
              borderBottom: "2px solid #78100d",
            }}
            contentArrowStyle={{ borderRight: "7px solid #78100d" }}
            date="2016 - 2020"
            iconStyle={{ background: "#78100d", color: "#fff" }}
            icon={<UniversityTopy />}
          >
            <h3 className="vertical-timeline-element-title">
              JSS Academy of Technical Education - Bengaluru
            </h3>
            ----------
            <h5 className="vertical-timeline-element-subtitle">
              Industrial Engineering and Management
            </h5>
            <p>Bachelor's degree</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "hotpink", color: "#fff" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
        <style jsx>
          {`
            .timeline {
              margin: 0;
              line-height: 1;
              font-size: 2rem;
            }
          `}
        </style>
      </div>
    );
  }
}
