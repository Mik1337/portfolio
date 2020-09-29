import Head from "next/head";
import Typewriter from "typewriter-effect";

import Splash from "../components/Splash";
import AboutMe from "../components/AboutMe";
import TimeLine from "../components/TimeLine";
import Stats from "../components/Stats";
import Interests from "../components/Interests";
import Footer from "../components/Footer";

export default class Index extends React.Component {
  themeToggle = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
  };
  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }
  componentDidMount() {
    const state = localStorage.getItem("state");
    if (state) {
      this.setState(JSON.parse(state));
    }
  }
  state = {
    dark: true,
  };
  render() {
    return (
      <div className={`container ${this.state.dark ? "dark" : "light"}`}>
        <Head>
          <title>Santosh | Mik </title>
          <link rel="icon" href="https://i.imgur.com/CmYcjAK.png" />
        </Head>

        <main>
          <h1 className="title" id="root">
            <img
              className="pfp"
              alt="Profile Picture"
              src={"/profile/profile.gif"}
              // src="/profile/tobero.jpeg"
              // src="/profile/kawaii.jpeg"
              // src="/profile/almostfamous.jpeg"
            />
            {/* <video
              className="pfp"
              autoPlay={true}
              controls={false}
              loop={true}
              alt="Profile Picture"
              src="/profile/output.webm"
            /> */}
            <span>
              <button className="themeSwitch" onClick={this.themeToggle}>
                <img
                  width="75vw"
                  title="Theme Switch"
                  alt="Theme Toggle Button"
                  src={`${
                    this.state.dark
                      ? "/logos/celestrial sun.webp"
                      : "/logos/celestrial moon.webp"
                  }`}
                />
              </button>
              <p alt="Name: Santosh or Mik">
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
                <b
                  alt="Section End Indicator"
                  o="#grid"
                  className="glyph-gradient"
                >
                  <a href="#aboutme">⋇</a>
                </b>{" "}
              </p>
            </span>
          </h1>
          <AboutMe />
          <TimeLine dark={this.state.dark} />
          <Stats dark={this.state.dark} />
          <Interests theme={this.state.dark ? "#2C2F33" : "lavender"} />
        </main>
        <Footer dark={this.state.dark} />

        <style jsx>{`
          .pfp {
            width: 328px;
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
          }
          .button {
            width: 120px;
            height: 30px;
            border: 2px solid #96979c;
            border-radius: 100rem;
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

          .themeSwitch {
            position: absolute;
            float: right;
            border: none;
            outline: none;
            background: inherit;
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

          .skill-interest {
            display: flex;
            justify-content: space-around;
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
            .skill-interest {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        `}</style>
      </div>
    );
  }
}
