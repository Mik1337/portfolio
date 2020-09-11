import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

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
          <p Style="font-size: 12px; color: transparent">
            So, I should be putting more effort into this, but I can't seem to.
            If you're reading just for the lulz, don't mind me lol. If you're an
            employee, uh Hire me pls
          </p>
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem uuid="hardon">
              {/* 🥵 */}
              <AccordionItemHeading>
                <AccordionItemButton>Hard Skills</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ul>
                  <li>Multilingual</li>
                  <li>Database Management</li>
                  <li>Programming Languages</li>
                  <small>
                    Such as{" "}
                    <ul>
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>NodeJS</li>
                      <li>Shell Scripts</li>
                    </ul>
                  </small>
                  <li>Web Languages</li>
                  <small>
                    Such as{" "}
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                    </ul>
                  </small>
                  <li>Failure Mode Analysis</li>
                  <small>PFMEA</small>
                  <li>Office Suite</li>
                  <small>
                    <ul>
                      <li>MS Office</li>
                      <li>Google Suite</li>
                    </ul>
                  </small>
                  <li>GNU/Linux</li>
                  <li>SEO</li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="softs">
              {/* 😫 */}
              <AccordionItemHeading>
                <AccordionItemButton>Soft Skills</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ul>
                  <li>Listening</li>
                  <li>Presentaion</li>
                  <li>Creativity</li>
                  <li>
                    Can perform{" "}
                    <a href="https://www.youtube.com/watch?v=a01QQZyl-_I">
                      Under Preassure
                    </a>
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
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
          I have some work experince in the manufacturing and software industry
          thought internships and projects in the following Companies{" "}
        </p>
        <Accordion
          allowZeroExpanded={true}
          allowMultipleExpanded={true}
          // preExpanded="f2019"
        >
          <AccordionItem uuid="svi2017">
            <AccordionItemHeading>
              <AccordionItemButton>SV Industries</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion-inner-item">
                <ul>
                  <li>
                    <b>Industry</b>: Crane manufacturing
                  </li>
                  <li>
                    <b>Role</b>: Trainee
                  </li>
                  <li>
                    <b>Department</b>: Design
                  </li>
                  <li>
                    <b>Duration</b>: 2 weeks (2017)
                  </li>
                  <li>
                    <a href="http://svind.co.in/">
                      <b>website</b>: svind.co.in
                    </a>
                  </li>
                </ul>
                {/* <img Style="accordion-inner-image" src="/logos/svi2017.png" /> */}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="sel2018">
            <AccordionItemHeading>
              <AccordionItemButton>
                Sansera Engineering Limited
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion-inner-item">
                <ul>
                  <li>
                    <b>Industry</b>: Automotive and aerospace
                  </li>
                  <li>
                    <b>Role</b>: Intern
                  </li>
                  <li>
                    <b>Department</b>: Maintenence
                  </li>
                  <li>
                    <b>Duration</b>: 4 weeks (2018)
                  </li>
                </ul>
                {/* <img
                  Style="accordion-inner-image"
                  src="/logos/Sansera-Logo.png"
                /> */}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="f2019">
            <AccordionItemHeading>
              <AccordionItemButton>Fanlytiks</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion-inner-item">
                <ul>
                  <li>
                    <b>Industry</b>: Sports
                  </li>
                  <li>
                    <b>Role</b>: Full Stack Developer Intern
                  </li>
                  <li>
                    <b>Duration</b>: 5 months (2019)
                  </li>
                </ul>
                {/* <img Style="accordion-inner-image" src="/logos/f2019.png" /> */}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="vce2020">
            <AccordionItemHeading>
              <AccordionItemButton>Volvo CE </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion-inner-item">
                <ul>
                  <li>
                    <b>Industry</b>: Construction Equipment
                  </li>
                  <li>
                    <b>Role</b>: Project Intern
                  </li>
                  <li>
                    <b>Project Title</b>: PFMEA of Tier 4 Compactors
                  </li>
                  <li>
                    <b>Department</b>: Manufacturing Engineering
                  </li>
                  <li>
                    <b>Duration</b>: 8 weeks (2020)
                  </li>
                </ul>
                {/* <img
                  Style="accordion-inner-image"
                  src="/logos/volvo-logo-iron-mark.png"
                /> */}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <p Style="text-decoration: line-through">
          This list in incomplete, help me expand it by hiring me.
        </p>
      </div>
    ),
  };

  return Components[props.display];
}
