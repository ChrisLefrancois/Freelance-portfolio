// src/components/Projects.jsx
import "./Projects.css";

import { useEffect, useRef } from "react";

import platogelato from "../assets/projects/platogelato.png";
import tadybakingco from "../assets/projects/tadybakingco.png";
import theater1 from "../assets/projects/theater.png";
import theater2 from "../assets/projects/theater2.png";
import theater3 from "../assets/projects/theater3.png";
import flight3 from "../assets/projects/flight3.png";
import hafh1 from "../assets/projects/hafh.png";
import hafh2 from "../assets/projects/hafh2.png";
import hafh3 from "../assets/projects/hafh3.png";
import cycleasy from "../assets/projects/cycleasy.png";


function RevealProject({ className, children }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const project = el.querySelector(".project");
          project?.classList.add("show");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="project-wrap">
      <div className={`project ${className}`}>{children}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="m-5 text-center">3. Projects</h2>

        <div className="projects">
          {/* Plato Gelato */}
          <RevealProject className="plato-gelato">
            <div className="image-container">
              <img src={platogelato} alt="Plato Gelato" />
            </div>
            <div className="description-container">
              <h3>Plato Gelato</h3>
              <h4>
                Stack: <span>React</span>
              </h4>
              <ul>
                <li>A simple one-page website for a Montreal gelato shop.</li>
                <li>It uses Google Maps to show the location.</li>
              </ul>
              <div className="links">
                <a href="https://github.com/ChrisLefrancois/gelato-shop" target="_blank" rel="noreferrer">
                  Repo
                </a>
                <a href="https://www.platogelato.com/" target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>
            </RevealProject>

          {/* Tady Baking Co */}
          <RevealProject className="tady-bakery">
            <div className="image-container">
              <img src={tadybakingco} alt="Tady Baking Co" />
            </div>
            <div className="description-container">
              <h3>Tady Baking Co.</h3>
              <h4>
                Stack: <span>React</span>, <span>Node.js</span>, <span>MongoDB</span>, <span>Express</span>,{" "}
                <span>Stripe</span>
              </h4>
              <ul>
                <li>An e-commerce site for a home bakery in Ajax, Ontario.</li>
                <li>Uses Stripe API for payment.</li>
                <li>Includes an admin dashboard.</li>
              </ul>
              <div className="links">
                <a href="https://github.com/ChrisLefrancois/TadyBakingCO" target="_blank" rel="noreferrer">
                  Repo
                </a>
                <a href="https://www.tadybakingco.ca/" target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>
            </RevealProject>

          {/* Theater (Bootstrap carousel) */}
          <RevealProject className="Theater">
            <div className="image-container">
              <div id="carouselTheater" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={theater1} className="d-block w-100" alt="Theater" />
                  </div>
                  <div className="carousel-item">
                    <img src={theater3} className="d-block w-100" alt="Theater" />
                  </div>
                  <div className="carousel-item">
                    <img src={theater2} className="d-block w-100" alt="Theater" />
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselTheater" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselTheater" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="description-container">
              <h3>Theater</h3>
              <h4>
                Stack: <span>Ruby on Rails</span>, <span>JavaScript</span>, <span>PostgreSQL</span>
              </h4>
              <ul>
                <li>Virtual classroom for high school students going to see a play.</li>
                <li>Students complete activities to get familiar with the play.</li>
                <li>Requires a student or teacher account to log in.</li>
              </ul>
              <div className="links">
                <a href="https://github.com/reemgawad/theatr" target="_blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </div>
            </RevealProject>

          {/* Flight Finder */}
          <RevealProject className="flight-finder">
            <div className="image-container">
              <img src={flight3} alt="Flight Finder" />
            </div>
            <div className="description-container">
              <h3>Flight Finder</h3>
              <h4>
                Stack: <span>Python</span>, <span>smtplib</span>, <span>Tequila API</span>
              </h4>
              <ul>
                <li>An app that looks for cheap flights departing from Montreal.</li>
                <li>Reads destinations from a Google Sheet.</li>
                <li>Sends an email alert when it finds a price below your target.</li>
              </ul>
              <div className="links">
                <a href="https://github.com/ChrisLefrancois/Flightclub" target="_blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </div>
            </RevealProject>

          {/* Home Away From Home (Bootstrap carousel) */}
          <RevealProject className="hafh">
            <div className="image-container">
              <div id="carouselHafh" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={hafh1} className="d-block w-100" alt="Home Away From Home" />
                  </div>
                  <div className="carousel-item">
                    <img src={hafh2} className="d-block w-100" alt="Home Away From Home" />
                  </div>
                  <div className="carousel-item">
                    <img src={hafh3} className="d-block w-100" alt="Home Away From Home" />
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselHafh" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselHafh" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="description-container">
              <h3>Home Away From Home</h3>
              <h4>
                Stack: <span>Ruby on Rails</span>, <span>JavaScript</span>, <span>PostgreSQL</span>, <span>Mapbox API</span>
              </h4>
              <ul>
                <li>Social platform to help people integrate into a new country with others from their country of origin.</li>
                <li>Create or join events with people from your country of origin.</li>
                <li>Unfortunately, this website is not online anymore.</li>
              </ul>
              <div className="links">
                <a href="https://github.com/ChrisLefrancois/home_away" target="_blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </div>
            </RevealProject>

          {/* Cycleasy */}
          <RevealProject className="cycleasy">
            <div className="image-container">
              <img src={cycleasy} alt="Cycleasy" />
            </div>
            <div className="description-container">
              <h3>Cycleasy</h3>
              <h4>
                Stack: <span>Ruby on Rails</span>, <span>JavaScript</span>, <span>PostgreSQL</span>, <span>Mapbox API</span>
              </h4>
              <ul>
                <li>Airbnb clone built for Le Wagon Montreal coding bootcamp.</li>
                <li>Book a bike or rent your bike for a few days.</li>
                <li>Unfortunately, the website is not online anymore.</li>
              </ul>
              <div className="links">
                <a href="https://github.com/paullanza/cycleasy" target="_blank" rel="noreferrer">
                  Repo
                </a>
              </div>
            </div>
            </RevealProject>

        </div>
      </div>
    </section>
  );
}
