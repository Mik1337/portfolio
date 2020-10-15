import PropTypes from "prop-types";
import Tree from "react-tree-graph";

// import { useMediaQuery } from "react-responsive";
import useWindowDimensions from "./useWindowDimension";

export default function Stats(props) {
  // const isSmallScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const { height, width } = useWindowDimensions();

  const margins = { bottom: 100, left: 20, right: 150, top: 10 };
  const data = {
    name: "Mik",
    textProps: { x: 0, y: -20 },
    children: [
      {
        name: "Front End",
        textProps: { x: 0, y: -20 },
        children: [
          {
            name: "HTML / CSS",
          },
          {
            name: "JavaScipt",
          },
          {
            name: "ReactJS",
          },
          {
            name: "VueJS",
          },
        ],
      },
      {
        name: "Computer Languages",
        textProps: { x: 0, y: -20 },
        children: [
          {
            name: "Python",
          },
          {
            name: "NodeJS",
          },
          {
            name: "Shell",
          },
        ],
      },
      {
        name: "DataBases",
        textProps: { x: 0, y: -20 },
        children: [
          {
            name: "PostgreSQL",
          },
          {
            name: "MySQL",
          },
          {
            name: "MongoDB",
          },
        ],
      },
      {
        name: "Misc",
        textProps: { x: 0, y: -20 },
        children: [
          {
            name: "FMEA",
          },
          {
            name: "Canva",
          },
          {
            name: "GraphQL",
          },
          {
            name: "JAMSTACK",
          },
        ],
      },
    ],
  };

  return (
    <div className="main-div" className="title" id="skills" title="skills">
      <p>skills</p>{" "}
      <p className="description">
        {console.log({ height, width })}
        <Tree data={data} animated height={height} width={width - 20} />
        {/* {isSmallScreen ? (
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Mik1337&title_color=ff69b4&langs_count=10&layout=compact&theme=${
              props.dark ? "dark" : "light"
            }`}
            alt="My top used programming, scripting or markup Languages"
            className="skill"
          />
        ) : (
          <Tilt gyroscope scale={isSmallScreen ? 1.5 : 1}>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Mik1337&title_color=ff69b4&langs_count=10&layout=compact&theme=${
                props.dark ? "dark" : "light"
              }`}
              alt="My top used programming, scripting or markup Languages"
              className="skill"
            />
          </Tilt>
        )} */}
        <style jsx>
          {`
            .skill {
              height: 300px;
              width: 420px;
            }
            @media (max-width: 600px) {
              .skill {
                padding: 10px;
                width: 90vw;
              }
            }
          `}
        </style>
      </p>
    </div>
  );
}
