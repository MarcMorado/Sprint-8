import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Slideshow = () => {
  const slideshow = useRef(null);

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length -1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

      slideshow.current.style.transition = `3000ms ease-out all`;

      const sizeSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(${sizeSlide}px)`;

      setTimeout(()=>{
      slideshow.current.style.transition = `3000ms ease-out all`;
        slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;
      },30)
  };

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      console.log("asd");
    //   const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = `3000ms ease-out all`;
      const sizeSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild();
      };
      slideshow.current.addEventListener("transitioned", transition);
    }
  };

  return (
    <div>
      <div className="img-slide">
        <div>
          <div className="contenedor-slide" ref={slideshow}>
            {/* STARSHIPS */}
            <div className="slide">
              <div className="background-image">
                <img
                  className="img-alien"
                  src="https://lumiere-a.akamaihd.net/v1/images/swce23-hero-celebrity-guests-desktop_662de22b.jpeg?region=0,0,1600,680&width=1536"
                  alt="Alien holding lightsaber"
                />
              </div>
              <div className="content-overlay">
                <div
                  className="content-body"
                  style={{
                    backgroundColor: "rgba(00,00,00,0.7)",
                    borderRadius: "25px",
                    padding: "10px",
                    top: "100px",
                    position: "relative",
                  }}
                >
                  <div className="content-description">
                    <h1 className="ships-title" style={{ color: "white" }}>
                      Starships
                    </h1>
                    <p className="home-land">Browse our Databank!</p>
                    <div className="content-btns">
                      <button className="ships-btn">
                        <Link to="/starships">Ships</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BAD BATCH */}
            <div className="slide">
              <div className="background-image">
                <img
                  className="img-alien"
                  src="https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-5-things-empire-desktop_1d6ab87f.jpeg?region=0,0,1600,680&width=1536"
                  alt="Alien holding lightsaber"
                />
              </div>
              <div className="content-overlay-2">
                <div className="content-body">
                  <div className="content-title">
                    <img
                      className="content-img"
                      src="https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-teaser-trailer-logotitle_5dfd0d5e.png?region=0,0,1200,750"
                      alt="Star Wars Tales From the Galaxy"
                    />
                  </div>
                  <div className="content-description">
                    <p className="home-land">
                      Exciting combat, new enemies, and more in the official
                      trailer for
                    </p>
                    <i className="home-land">Star Wars: The Bad Batch!</i>
                    <div className="content-btns">
                      <button className="batch-btn">
                        <a
                          href="https://www.youtube.com/watch?v=eZNMyaZ--h8"
                          className="home-land"
                        >
                          watch trailer
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* TALES */}
            <div className="slide">
              <div className="background-image">
                <img
                  className="img-alien"
                  src="https://lumiere-a.akamaihd.net/v1/images/sw-tales-swge-ee-trailer-slide-desktop_283c2c3a.jpeg?region=0,0,1600,680&width=1536"
                  alt="Alien holding lightsaber"
                />
              </div>
              <div className="content-overlay">
                <div className="content-body">
                  <div className="content-title">
                    <img
                      className="content-img"
                      src="https://lumiere-a.akamaihd.net/v1/images/sw-tales-from-galaxy-s-edge-enhanced-logo-desktop-1200w_672e581d.png?region=0,0,1200,562"
                      alt="Star Wars Tales From the Galaxy"
                    />
                  </div>
                  <div className="content-description">
                    <p className="home-land">
                      Exciting combat, new enemies, and more in the official
                      trailer for
                    </p>
                    <i className="home-land">
                      Star Wars: Tales from the Galaxy's Edge- Enhanced Edition!
                    </i>
                    <div className="content-btns">
                      <button className="alien-btn">
                        <a
                          href="https:/youtu.be/XIgHA0iq27g"
                          className="home-land"
                        >
                          watch trailer
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-arrow">
            <button className="arrow-btn" onClick={anterior}>
              <IoIosArrowDropleftCircle
                style={{ height: "6em", width: "6em" }}
              />
            </button>
            <button className="arrow-btn" onClick={siguiente}>
              <IoIosArrowDroprightCircle
                style={{ height: "6em", width: "6em" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default Slideshow;
