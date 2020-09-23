import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

import {
  FaCode,
  FaDatabase,
  FaPython,
  FaJsSquare,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaTerminal,
  FaMarkdown,
} from "react-icons/fa";

export default class Languages extends React.Component {
  themeToggle = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
    // localStorage.setItem("state", JSON.stringify({ dark }));
  };
  state = {
    dark: true,
  };
  render() {
    return (
      <div className={`container ${this.state.dark ? "dark" : "light"}`}>
        <Head>
          <title>Languages | Santosh [Mik]'s Portfolio</title>
          <link rel="icon" href="https://i.imgur.com/CmYcjAK.png" />
        </Head>

        <Header display="language" dark={this.state.dark} />

        <main>
          <p className="human">
            <h3>🗣️ Spoken Languages</h3>
            <ul>
              <li>English</li>
              <li>Tamil</li>
              <li>Kannada</li>
              <li>Hindi</li>
            </ul>
          </p>
          <p className="computer">
            <h3>
              <FaCode className="react-icons" />
              Computer Languages
            </h3>
            <ul className="hidebullet">
              <li>
                <FaPython />
                Python
              </li>
              <li>
                <FaJsSquare />
                JavaScript
              </li>
              <li>
                <FaNodeJs />
                NodeJS
              </li>
              <li>
                <FaTerminal />
                Shell (*nix)
              </li>
              <li>CPP</li>
              <li>
                <FaHtml5 />
                HTML5
              </li>
              <li>
                <FaCss3 />
                CSS3
              </li>
              <li>
                <FaMarkdown />
                Markdown
              </li>
            </ul>
            <h3>
              <FaDatabase /> DataBase Languages
            </h3>
          </p>
          <p>
            <ul>
              <li>MariaDB</li>
              <li>PostgeSQL</li>
              <li>MongoDB</li>
            </ul>
          </p>
        </main>
        <Footer dark={this.state.dark} />
        <style jsx>{`
          .react-icons {
            font-size: 24px;
            color: pink;
          }
          .computer ul {
            // list-style-type: none;
            list-style-image: url("/celestrial_moon.png");
          }
          .container {
            min-height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}
