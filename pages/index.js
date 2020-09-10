import Head from "next/head";
import Link from "next/link";
import TabbedComponent from "../components/tabbedComponent";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";

export default class Index extends React.Component {
  themeToggle = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
  };
  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }
  selectTab = (display) => {
    this.setState(() => ({ showTab: display }));
  };
  componentDidMount() {
    const state = localStorage.getItem("state");
    if (state) {
      this.setState(JSON.parse(state));
    }
  }
  state = {
    dark: true,
    showTab: "skills",
  };

  render() {
    return (
      <div className={`container ${this.state.dark ? "dark" : "light"}`}>
        <Head>
          <title>Santosh's Portfolio | Santosh [Mik]'s Portfolio</title>
          <link rel="icon" href="https://i.imgur.com/CmYcjAK.png" />
        </Head>

        <main>
          <h1 className="title">
            <img className="pfp" src="/profile/profile.gif" />
            <span>
              {/* {`${this.state.dark ? "☀️" : "🌑"}`} */}
              <button className="themeSwitch" onClick={this.themeToggle}>
                <img
                  width="75vw"
                  title="Theme Switch"
                  src={`${
                    this.state.dark
                      ? "/logos/celestrial sun.png"
                      : "/logos/celestrial moon.png"
                  }`}
                />
              </button>
              <p>
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .changeCursor(" ")
                      .typeString("Mik")
                      .pauseFor(8000)
                      .deleteAll()
                      .typeString("Santosh")
                      .pauseFor(8000)
                      .start();
                  }}
                />{" "}
              </p>
              <p className="description">
                Hi there, I'm a 21 year old with a degree in{" "}
                <b>Industrial Engineering & Management</b>
              </p>
              <p>
                <b o="#grid" className="glyph-gradient">
                  ⋇
                </b>{" "}
              </p>
            </span>
          </h1>
          <div id="grid" className="grid">
            <button
              className={`${
                this.state.showTab === "aboutme" ? "button active" : "button"
              }`}
              onClick={() => this.selectTab("aboutme")}
            >
              about me
            </button>
            <button
              className={`${
                this.state.showTab === "skills" ? "button active" : "button"
              }`}
              onClick={() => this.selectTab("skills")}
            >
              skills
            </button>
            <button
              className={`${
                this.state.showTab === "projects" ? "button active" : "button"
              }`}
              onClick={() => this.selectTab("projects")}
            >
              projects
            </button>
            <button
              className={`${
                this.state.showTab === "works" ? "button active" : "button"
              }`}
              onClick={() => this.selectTab("works")}
            >
              works
            </button>
            <span className="">
              <TabbedComponent display={this.state.showTab} />
            </span>
          </div>
        </main>
        <Footer dark={this.state.dark} />

        <style jsx>{`
          .pfp {
            position: relative;
            border-radius: 100%;
            border: 4px solid transparent;
            background: rgb(131, 58, 180);
            background: linear-gradient(
              210deg,
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
          .button {
            width: 120px;
            height: 30px;
            border: 2px solid #96979c;
            border-radius: 15px;
            box-sizing: border-box;
            background: inherit;
            color: inherit;
            font-size: 1rem;
            overflow: auto;
            transition: 0.4s ease all;
          }
          .active,
          .button:hover {
            color: black;
            border-radius: 100rem;
            font-family: "Avenir Next";
            font-size: 1rem;
            box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
            border: solid 3px transparent;
            background-image: linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
              ),
              linear-gradient(
                210deg,
                #405de6,
                #5851db,
                #833ab4,
                #c13584,
                #e1306c,
                #fd1d1d
              );
            background-origin: border-box;
            background-clip: content-box, border-box;
            box-shadow: 2px 1000px 1px #fff inset;
          }
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 0;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1;
            font-size: 1.5rem;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .logo {
            height: 1em;
          }

          .glyph-gradient {
            background: -webkit-linear-gradient(
              210deg,
              #405de6,
              #5851db,
              #833ab4,
              #c13584,
              #e1306c,
              #fd1d1d
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: 3s pulse linear 1s infinite;
          }

          @keyframe pulse {
            0% {
              background: -webkit-linear-gradient(black, white);
            }
            ,
            100% {
              background: -webkit-linear-gradient(pink, red);
            }
          }

          @keyframes spinright {
          }

          .themeSwitch {
            position: absolute;
            float: right;
            border: none;
            outline: none;
            background: inherit;
          }

          @media (max-width: 600px) {
            .pfp {
              width: 50vw;
            }
            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }
            .themeSwitch {
              height: 20px;
              width: 20px;
            }
            .grid {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}
