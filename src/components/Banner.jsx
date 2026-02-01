// src/components/Banner.jsx
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <p className="cherry-red">Hi, my name is</p>

        <h2 className="big-heading" id="name">
          Christopher Lefrancois
        </h2>

        <h3 className="big-heading" id="fullstack">
          I am a Fullstack Developer
        </h3>

        <p>
          Hi, I’m Christopher Lefrancois — a freelance web developer building modern, reliable web applications for small businesses and entrepreneurs.
          I specialize in Ruby on Rails and React, and I also bring solid bookkeeping knowledge to help clients not only build their tools, but understand their numbers and operations.
          <br />
          <br />
          <p>Available for remote projects — websites, dashboards, and e-commerce solutions.</p>
        </p>
      </div>
    </div>
  );
}
