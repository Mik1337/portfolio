export default class Stats extends React.Component {
  render() {
    return (
      <div className="main-div">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=Mik1337&title_color=60c576&show_icons=true&include_all_commits=true&count_private=true&theme=${
            this.props.dark ? "dark" : "light"
          }`}
          alt="My GitHub Stats"
          className="skill"
        />
        &nbsp;
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Mik1337&title_color=60c576&langs_count=10&layout=compact&theme=${
            this.props.dark ? "dark" : "light"
          }`}
          alt="My top used programming, scripting or markup Languages"
          className="skill"
        />
        <style jsx>
          {`
            .main-div {
              display: flex;
              flex-direction: column;
            }
            .skill {
              width: 420px;
            }
            @media (max-width: 600px) {
              .skill {
                width: 90vw;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
