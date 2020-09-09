import { render } from "react-dom";

export default function TabbedComponent(props) {
  const Components = {
    aboutme: (
      <div>
        <p>
          Hi there, I'm a 21 year old with a degree in Industrial Engineering &
          Management. I go by the alias of Mik online and Santosh irl, you can
          call me whichever. I'm Vegan, I love cats, and I'm pretty good with a{" "}
          <code>*nix</code> computer. <b Style="color: blue">more...</b>
        </p>
      </div>
    ),
    skills: (
      <div>
        <p>
          I'm good with computers, like scary good.
          <ul>
            <li></li>
          </ul>
        </p>
      </div>
    ),
    projects: (
      <div>
        <p>
          According to GitHub, I've worked on 48 projects, between you and me,
          I've worked on more ;){" "}
          <a href="projects.greatermik.xyz" alt="Project Portfolio">
            check out my project portfilio to know more
          </a>
        </p>
      </div>
    ),
    works: (
      <div>
        <p>
          I have some work experince in the manufacturing and software industry,
          thought internships in{" "}
        </p>
        <ul>
          <li>SV Industries</li>
          <li>Sansera</li>
          <li>Fanlytiks</li>
          <li>Volvo CE</li>
        </ul>
      </div>
    ),
  };

  return Components[props.display];
}
