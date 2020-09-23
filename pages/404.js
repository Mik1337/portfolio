import Head from "next/head";

export default class Error extends React.Component {
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
      <div className={`${this.state.dark ? "dark" : "light"}`}>
        <Head>
          <title>404: Page Not Found | Mik </title>
          <link rel="icon" href="https://i.imgur.com/CmYcjAK.png" />
        </Head>
        <main
          Style="
          color: #000;
          background: #fff;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
            'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif;
          height: 100vh;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
        >
          <div>
            <h1
              Style="
              display: inline-block;
              border-right: 1px solid rgba(0, 0, 0, 0.3);
              margin: 0;
              margin-right: 20px;
              padding: 10px 23px 10px 0;
              font-size: 24px;
              font-weight: 500;
              vertical-align: top;
            "
            >
              404
            </h1>
            <div
              Style="
              display: inline-block;
              text-align: left;
              line-height: 49px;
              height: 49px;
              vertical-align: middle;
            "
            >
              <h2
                Style="
                font-size: 14px;
                font-weight: normal;
                line-height: inherit;
                margin: 0;
                padding: 0;
              "
              >
                This page could not be found.
              </h2>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
