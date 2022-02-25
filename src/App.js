import React, { useState } from "react";
import ReactJsTyping from "reactjs-typing-effect";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ador1 from "./bgimages/Ador1.PNG";
import ador2 from "./bgimages/Ador2.PNG";
import ador3 from "./bgimages/Ador3.PNG";
import ador4 from "./bgimages/Ador4.PNG";
import ador5 from "./bgimages/Ador5.PNG";

function App() {
  const titles = [
    "Kind",
    "Authentic",
    "Radiant",
    "Ravishing",
    "Easy-going",
    "Noteworthy",
  ];

  return (
    <React.Fragment>
      <section id="home" className="landing-page">
        <div>
          <h1>Karren Vergara Pulido</h1>
          <p>
            <ReactJsTyping StringList={titles} speed={750} />
          </p>
        </div>
      </section>

      <main>
        <section id="about" className="about">
          <div className="main-container">
            <div className="container-title">
              <h2>What Karren means</h2>
              <p>
                If you Google the word "Karren" it means a ribbed and fluted
                rock surface resulting at least in part from differential
                solution. A very out of this world meaning. But if you search
                the meaning of the name, it means "pure". How about that, a very
                positive one.
              </p>
            </div>
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="main-container">
            <div className="container-title">
              <h2>Free Spirited and Outgoing</h2>
              <p>
                She loves to travel. Loves sunrise and sunsets. Will take her
                time to take photos and videos of breathtaking scenery.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="main-container">
            <div className="container-title">
              <h2>Dog lover</h2>
              <p>
                She used to have a dog named Ador (short for Labrador) which she
                loves so much. Sadly he passed away couple of years ago.
              </p>
              <Carousel>
                <div>
                  <img src={ador1} alt="ador1" />
                  <p className="legend">Ador 1</p>
                </div>
                <div>
                  <img src={ador2} alt="ador2" />
                  <p className="legend">Ador 2</p>
                </div>
                <div>
                  <img src={ador3} alt="ador3" />
                  <p className="legend">Ador 3</p>
                </div>
                <div>
                  <img src={ador4} alt="ador4" />
                  <p className="legend">Ador 4</p>
                </div>
                <div>
                  <img src={ador5} alt="ador5" />
                  <p className="legend">Ador 5</p>
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="main-container">
            <div className="container-title">
              <h2>Businesswoman at heart</h2>
              <p>
                She owned several businesses before taking chance in Australia.
                Shortlist of her owned businesses before:
              </p>
              <div className="container-content">
                <div className="projects-content">
                  <ul>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Damas Food Services</strong> -{" "}
                      <span>Home-cooked Mediterranean food trays</span>
                      <br />
                    </li>
                    <li>
                      <i className="fas fa-chevron-right"></i>
                      <strong>Relx Pens and Pods</strong> -{" "}
                      <span>Dealer of said vape equipment</span>
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="contact" className="contact">
          <div className="main-container">
            <div className="container-title">
              <h2>Contact</h2>
              <p>Feel free to contact me.</p>
              <div className="container-content">
                <div className="contact-details">
                  <ul>
                    <li>
                      <i className="far fa-envelope"></i>
                      <span>Email:</span>
                      <a href="mailto:allisonlaya.feliciano@gmail.com">
                        allisonlaya.feliciano@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <span>Phone:</span>
                      <span>09175394025 / 09275124936</span>
                    </li>
                    <li>
                      <i className="fab fa-telegram"></i>
                      <span>Telegram:</span>
                      <span>09275124936 (Alli)</span>
                    </li>
                    <li>
                      <i className="fab fa-viber"></i>
                      <span>Viber:</span>
                      <span>09275124936 (Alli)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </React.Fragment>
  );
}

export default App;
