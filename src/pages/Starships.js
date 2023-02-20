import React, { useEffect, useState } from "react";
import { BtnShip, TextShip } from "../style/Styled";
import axios from "axios";
import "../style/Styles.css";
import ShipInfo from "../components/ShipInfo";
import noImage from "../assets/noImage.PNG";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Starships() {
  const [ship, setShip] = useState();
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => {
        setShip(response.data.results);
      });
    console.log(page);
  }, [page]);

  const clicked = (url, index) => {
    setCounter(index);
    setActive(!active);
    let id = url.replace(/\D/g, "");
    setSelected(id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="starships">
      {ship &&
        ship.map((ship, index) => {
          return (
            <BtnShip key={ship.name} onClick={() => clicked(ship.url, index)}>
              <TextShip className="ships">
                <strong>{ship.name}</strong>
              </TextShip>
              <TextShip className="ships">{ship.model}</TextShip>
            </BtnShip>
          );
        })}
      <ShipInfo active={active} toggle={() => setActive(!active)}>
        {ship &&
          ship.map((ship, index) => {
            return counter === index ? (
              <div key={ship.name}>
                <div className="starship-info">
                  <h1 className="ships-title">
                    <strong style={{ color: "white" }}>{ship.name}</strong>
                  </h1>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/starships/${selected}.jpg`}
                    onError={(e) => {
                      e.currentTarget.src = noImage;
                    }}
                    alt="starship"
                  ></img>
                  <TextShip className="ships-main">
                    <strong style={{ color: "white" }}>MODEL :</strong>{" "}
                    {ship.model}
                  </TextShip>
                  <TextShip className="ships-main">
                    <strong style={{ color: "white" }}>STARSHIP CLASS :</strong>{" "}
                    {ship.starship_class}
                  </TextShip>
                  <TextShip className="ships-main">
                    <strong style={{ color: "white" }}>MANUFACTURER :</strong>{" "}
                    {ship.manufacturer}
                  </TextShip>
                  <TextShip className="ships-main">
                    <strong style={{ color: "white" }}>COST :</strong>{" "}
                    {ship.cost_in_credits} CREDITS
                  </TextShip>
                </div>
                <div className="starship-dets">
                  <div className="starship-details-left">
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>CREW :</strong>{" "}
                      {ship.crew}
                    </TextShip>
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>
                        PASSENGER CAPACITY :
                      </strong>{" "}
                      {ship.passengers}
                    </TextShip>
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>
                        CARGO CAPACITY :
                      </strong>{" "}
                      {ship.cargo_capacity} TONS
                    </TextShip>
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>CONSUMABLES :</strong>{" "}
                      {ship.consumables} MONTHS
                    </TextShip>
                  </div>
                  <div className="starship-details-right">
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>LENGTH :</strong>{" "}
                      {ship.length} METERS
                    </TextShip>
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>
                        MAXIMUM ATMOSPHERING SPEED :
                      </strong>{" "}
                      {ship.max_atmosphering_speed} KM/H
                    </TextShip>
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>
                        HYPERDRIVE RATING :
                      </strong>{" "}
                      {ship.hyperdrive_rating}
                    </TextShip>
                    <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>
                        MAXIMUM SPEED IN REALSPACE :
                      </strong>{" "}
                      {ship.MGLT} MGLT
                    </TextShip>
                  </div>
                  {/* PILOTS */}
                  {/* <TextShip className="ships-secondary">
                      <strong style={{ color: "white" }}>PILOTS :</strong>{" "}
                      {ship.pilots}
                    </TextShip> */}
                </div>
              </div>
            ) : (
              <div key={ship.name}></div>
            );
          })}
      </ShipInfo>
      <div className="page-btns">
        <button
          className="page-btn"
          onClick={() => (page > 1 ? setPage(page - 1) : null)}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="page-btn"
          onClick={() => (page < 4 ? setPage(page + 1) : null)}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
