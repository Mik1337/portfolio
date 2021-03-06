import { useState } from "react";

export default function AboutMe(props) {
  const [more, showMore] = useState(false);
  return (
    <div className="title" id="aboutme" title="About Me">
      <p>about me</p>{" "}
      <p className="description fixed-witdh">
        Earned a degree in Industrial Engineering and Management and am keen on
        learning new technologies that excite me. I have experience working in
        various fields across tech, manufacturing and NGOs. ＼(★^∀^★)／{" "}
        <small>
          <a className="small-a" onClick={() => showMore(!more)}>
            {more ? "" : " show more..."}
          </a>
        </small>
        {more && (
          <p>
            I'm <b Style="color: #33c748">Vegan</b>, I love cats, and I'm pretty
            good with a <code>*nix</code> computer. My top 3 Manga
            recomendations are{" "}
            <a
              className="a-a"
              target="_blank"
              href="https://www.viz.com/haikyu"
            >
              Haikyuu
            </a>
            ,{" "}
            <a
              className="a-a"
              target="_blank"
              href="https://page.kakao.com/home?seriesId=50866481"
            >
              Solo Leveling
            </a>{" "}
            &{" "}
            <a
              className="a-a"
              target="_blank"
              href="https://www.viz.com/one-piece"
            >
              One Piece.
            </a>
            <small>
              <a className="small-a" onClick={() => showMore(!more)}>
                {more ? " show less..." : ""}
              </a>
            </small>
          </p>
        )}
      </p>
      <style jsx>
        {`
          .fixed-witdh {
            text-align: left;
            padding-left: 2vw;
            max-width: 1000px;
            margin: auto;
            // border: 3px solid #73AD21;
          }
          .small-a {
            color: inherit;
            font-size: 1rem;
            transition: ease-in 0.1s;
          }
          .small-a:hover {
            font-weight: bold;
          }
          .a-a {
            color: inherit;
            font-style: italic;

            background-image: linear-gradient(210deg, white, white),
              linear-gradient(
                90deg,
                #405de6,
                #5851db,
                #833ab4,
                #c13584,
                #e1306c,
                #fd1d1d
              );
            background-size: 0% 3px, 100% 4px;
            background-position: 0 bottom, 0 bottom;
            transition: background-size 0.3s ease-in-out;
            background-repeat: no-repeat;
            padding-bottom: 0px;
            border-bottom: 2px solid transparent;

            transition: ease-in 0.1s;
          }
          .a-a:hover {
            font-size: 1.5rem;
            text-decoration: none;
            font-style: normal;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}
