import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Santosh's Portfol.io</title>
        <link rel="icon" href="https://i.imgur.com/CmYcjAK.png" />
      </Head>

      <main>
        <h1 className="title">
          <img className="pfp" src="/profile.gif" />
          <span>
            <p>Mik</p>
            <p className="description">
              Hi there, I'm a 21 year old with a degree in{" "}
              <b>Industrial Engineering & Management</b>
            </p>
            <p>
              <b className="glyph-gradient">⋇</b>{" "}
            </p>
          </span>
        </h1>

        <div className="timeline">
          <a></a>
        </div>

        <div className="grid">
          <Link href="/skill">
            <a className="card">
              <h3>Skill Set &rarr;</h3>
              <p>Information about my skills and certificates I've earned.</p>
            </a>
          </Link>

          <Link href="work">
            <a className="card">
              <h3>Work Experience &rarr;</h3>
              <p>Know more about the places I've worked and my role there.</p>
            </a>
          </Link>

          <Link href="languages">
            <a className="card">
              <h3>Languages &rarr;</h3>
              <p>I know quite a few Languages, human and computer.</p>
            </a>
          </Link>

          <Link href="projects">
            <a className="card">
              <h3>Projects &rarr;</h3>
              <p>List of some of the Projects I've worked on.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        {/* <a href="https://twitter.com/cosmik_san">@cosmik_san</a> */}
        <a href="https://www.netlify.com">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </footer>

      <style jsx>{`
        .pfp {
          position: relative;
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
          border-radius: 100%;
        }
        .container {
          background: linear-gradient(
            Lavenderblush,
            white,
            white,
            white,
            white
          );
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
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
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          border-width: 2px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: inherit;
          transform: scale(1.1);
          border-image-slice: 1;
          border-radius: 10px;
          background: linear-gradient(
            45deg,
            #405de6,
            #5851db,
            #833ab4,
            #c13584,
            #e1306c,
            #fd1d1d
          );
        }
        .card:before {
          display: none;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .glyph-gradient {
          background: -webkit-linear-gradient(
            45deg,
            #405de6,
            #5851db,
            #833ab4,
            #c13584,
            #e1306c,
            #fd1d1d
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: 3s linear 1s infinite;
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

        @media (max-width: 600px) {
          .pfp {
            width: 50vw;
          }
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
