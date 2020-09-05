import Head from "next/head";

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
              <span className="text-gradient">
                <b>Industrial</b> <b>Engineering</b> <b>&</b> <b>Management</b>{" "}
              </span>
              <br />
            </p>
            <img src="/scrolldown.svg" className="glyph-gradient" />
          </span>
        </h1>

        <div className="timeline">
          <a></a>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Skill Sets &rarr;</h3>
            <p>Information about my skills and certificates I've earned.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Work Experiences &rarr;</h3>
            <p>Know more about the places I've worked and my role there.</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Languages &rarr;</h3>
            <p>I know quite a few Languages, humand and computer.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Projects &rarr;</h3>
            <p>Listing of all the Projects I've worked on.</p>
          </a>
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
          border-radius: 100%;
          border: 2px solid hotpink;
          box-shadow: 0 0 20px lightpink;
          padding-bottom: 0px;
        }
        .container {
          background: linear-gradient(
            lightpink,
            white,
            white,
            white,
            white,
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
          line-height: 0;
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
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
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
          width: 0.5em;
          animation: pulse 2s infinite;
        }

        .text-gradient b:nth-of-type(1) {
          // Industrial
          color: #d60270;
        }

        .text-gradient b:nth-of-type(2) {
          // Engineering
          color: #9b4f96;
        }

        .text-gradient b:nth-of-type(3) {
          // &
          background: -webkit-linear-gradient(45deg, #d60270, #9b4f96, #0038a8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gradient b:nth-of-type(4) {
          // Management
          color: #0038a8;
        }

        @keyframe pulse {
          0% {
            color: red !important;
          }
          ,
          100% {
            color: pink !important;
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
          .text-gradient b:nth-of-type(1n) {
            color: inherit;
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
