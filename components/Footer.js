export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <a href="https://wa.me/message/3HRHSASR2NPIG1">
            <img
              src={`${
                this.props.dark
                  ? "/logos/WhatsApp_Logo_Light.png"
                  : "/logos/WhatsApp_Logo_Dark.png"
              }`}
              title="Send me a message on WhatsApp"
              width="auto"
              height="59px"
              alt="WhatsApp Business Profile"
            />
          </a>
          <a href="https://www.netlify.com">
            <img
              src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
              alt="Deploys by Netlify"
            />
          </a>
          <a href="https://github.com/Mik1337/">
            <img
              src={`${
                this.props.dark
                  ? "/logos/GitHub-Mark-Light-64px.png"
                  : "/logos/GitHub-Mark-64px.png"
              }`}
              title="Check out my GitHub Profile"
              alt="GitHub Repository"
            />
          </a>
        </footer>
        <style jsx>
          {`
            footer {
              width: 100%;
              border-top: 1px solid #eaeaea;
              padding-top: 0.5em;
              padding-bottom: 0.5em;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            footer img {
              margin-left: 0.5rem;
              height: 40px;
              width: auto;
            }

            footer a {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </>
    );
  }
}
