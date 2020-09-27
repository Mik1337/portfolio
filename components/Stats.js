import Tilt from "react-parallax-tilt";

export default class Stats extends React.Component {
  render() {
    return (
      <div className="main-div">
        <Tilt gyroscope scale={1.5}>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Mik1337&title_color=ff69b4&langs_count=10&layout=compact&theme=${
              this.props.dark ? "dark" : "light"
            }`}
            alt="My top used programming, scripting or markup Languages"
            className="skill"
          />
        </Tilt>
        <style jsx>
          {`
            .skill {
              padding: 20px;
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
      </div>
    );
  }
}
