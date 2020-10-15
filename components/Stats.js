import PropTypes from "prop-types";
import Tree from "react-tree-graph";

// import { useMediaQuery } from "react-responsive";
import useWindowDimensions from "./useWindowDimension";

export default function Stats(props) {
  // const isSmallScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const { width, height } = useWindowDimensions(1346, 1000);
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
        {console.log({ width, height })}
        <Tree data={data} animated height={height} width={width - 20} />
        <style jsx>
          {`
            svg.custom .node circle {
              fill: #f3f3ff;
              stroke: #2593b8;
              stroke-width: 1.5px;
            }
          `}
        </style>
      </p>
    </div>
  );
}
