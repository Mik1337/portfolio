import {
  FaLanguage,
  FaProjectDiagram,
  FaCogs,
  FaDiagnoses,
} from "react-icons/fa";

export default class Header extends React.Component {
  themeToggle = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
    // localStorage.setItem("state", JSON.stringify({ dark }));
  };
  render() {
    return (
      <>
        <header>
          <a href="/">
            <img
              src="/logos/profile.gif"
              className="pfp"
              title="Home"
              alt="Home Icon"
            />
          </a>{" "}
          <h1 title={this.props.display}>
            {this.props.display === "language" ? <FaLanguage /> : null}
            {this.props.display === "project" ? <FaProjectDiagram /> : null}
            {this.props.display === "work" ? <FaCogs /> : null}
            {this.props.display === "skill" ? (
              <p>
                {" "}
                My <FaDiagnoses /> Skills{" "}
              </p>
            ) : null}
          </h1>{" "}
          <button className="themeSwitch" onClick={this.themeToggle}>
            <img
              width="75vw"
              src={`${
                this.props.dark
                  ? "/logos/celestrial sun.png"
                  : "/logos/celestrial moon.png"
              }`}
            />
          </button>
        </header>
        <style jsx>
          {`
            header {
              width: 100%;
              height: 75px;
              border-bottom: 1px solid gray;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            header img {
              margin-left: 0.5rem;
            }

            header a {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            button {
              float: right;
              border: none;
              outline: none;
              background: inherit;
            }

            .pfp {
              position: relative;
              border-radius: 100%;
              width: 64px;
              border: 4px solid transparent;
              background: linear-gradient(
                45deg,
                #405de6,
                #5851db,
                #833ab4,
                #c13584,
                #e1306c,
                #fd1d1d
              );
              -webkit-animation: spinright 10s infinite;
              animation: spinright 3s infinite;
            }
          `}
        </style>
      </>
    );
  }
}
