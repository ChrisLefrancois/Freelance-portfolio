import "./About.css";
import RailsIcon from "../assets/rails.svg?react";


export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="m-5 text-center">4. About Me</h2>

        <div className="info-card inf">
          <div>
            <div className="card-text">
              <p>
                Hello! I'm a passionate full-stack developer with a love for
                solving complex problems. I began my coding journey in late 2021
                and made a career transition in early 2022 by completing an
                intensive coding bootcamp. Since then, I’ve worked on a variety
                of freelance projects, continually expanding my skill set.
              </p>

              <p>
                I specialize in building robust Ruby on Rails applications and
                creating modern front-end experiences with React. I enjoy
                working in fast-paced environments and focus on building
                practical, maintainable solutions for real-world problems.
              </p>

              <p>
                Outside of coding, you’ll usually find me on the soccer field or
                experimenting with new recipes in the kitchen. I’m always eager
                to learn, improve, and take on new challenges.
              </p>
            </div>
          </div>

          <div>
            <div className="icons">
              <Skill icon={<i className="fa-brands fa-git-alt icon-size"></i>} label="Git" />
              <Skill icon={<RailsIcon className="icon-size rails-icon" />} label="Rails" />
              <Skill icon={<i className="fa-brands fa-html5 icon-size"></i>} label="HTML" />
              <Skill icon={<i className="fa-brands fa-css3-alt icon-size"></i>} label="CSS" />
              <Skill icon={<i className="fa-brands fa-node icon-size"></i>} label="Node.js" />
              <Skill icon={<i className="fa-brands fa-bootstrap icon-size"></i>} label="Bootstrap" />
              <Skill icon={<i className="fa-solid fa-database icon-size"></i>} label="SQL" />
              <Skill icon={<i className="fa-brands fa-react icon-size"></i>} label="React" />
              <Skill icon={<i className="fa-brands fa-figma icon-size"></i>} label="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, label }) {
  return (
    <div className="skill">
      {icon}
      <p>{label}</p>
    </div>
  );
}
