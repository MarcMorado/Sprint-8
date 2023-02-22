import "../style/Styles.css";
import { Slideshow, Slide } from "../components/Slide";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home-promo">
        <h1 className="home-land">
          all of your star wars favourites now streaming on disney +
        </h1>
        {/* <Slideshow /> */}
        {/* https://www.youtube.com/watch?v=q00ldTrywLU */}
        <div className="img-slide">
          <Slideshow controles={true}>
            <Slide>
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
            </Slide>
            <Slide>
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
                          href="https://youtu.be/W2WfJU0adaA"
                          className="home-land"
                        >
                          watch trailer
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide>
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
            </Slide>
          </Slideshow>
        </div>
      </div>
    </div>
  );
}
