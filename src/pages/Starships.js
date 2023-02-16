import React, { useEffect, useState } from "react";
import { BtnShip, TextShip } from "../style/Styled";
import axios from "axios";
import "../style/Styles.css";
import ShipInfo from "../components/ShipInfo";
import noImage from '../assets/noImage.PNG';

export default function Starships() {
  const [ship, setShip] = useState();
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then((response) => {
      setShip(response.data.results);
    });
  }, []);

  const clicked = (url) => {
    setActive(!active);
    console.log('url', url.hash);
    let id = url.replaceAll("[^0-9.]", ""); 
    console.log('id', id);
    setSelected(id)
  } 

  return (
    <div className="starships">
      {ship &&
        ship.map((ship, index) => {
          return (
            <BtnShip
              key={ship.name}
              onClick={() => clicked(ship.url)}
            >
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
            console.log(selected+2);
            return selected === index ? (
              <div key={ship.name}>
                <div className="starship-info">
                  <h1 className="ships">
                    <strong style={{ color: "white" }}>{ship.name}</strong>
                  </h1>
                  <img src={`https://starwars-visualguide.com/assets/img/starships/${selected}.jpg`} 
                  onError={(e)=>{e.currentTarget.src=noImage}} 
                  alt='starship'></img>
                  <TextShip className="ships">
                    <strong style={{ color: "white" }}>MODEL:</strong>{" "}
                    {ship.model}
                  </TextShip>
                  <TextShip className="ships">
                    <strong style={{ color: "white" }}>STARSHIP CLASS:</strong>{" "}
                    {ship.starship_class}
                  </TextShip>
                  <TextShip className="ships">
                    <strong style={{ color: "white" }}>MANUFACTURER:</strong>{" "}
                    {ship.manufacturer}
                  </TextShip>
                  <TextShip className="ships">
                    <strong style={{ color: "white" }}>COST:</strong>{" "}
                    {ship.cost_in_credits} CREDITS
                  </TextShip>
                </div>
                <div className="starship-dets">
                  <div className="starship-details">
                    <TextShip className="ships">
                      <strong style={{ color: "white" }}>CREW:</strong>{" "}
                      {ship.crew}
                    </TextShip>
                    <TextShip className="ships">
                      <strong style={{ color: "white" }}>
                        PASSENGER CAPACITY:
                      </strong>{" "}
                      {ship.passengers}
                    </TextShip>
                    <TextShip className="ships">
                      <strong style={{ color: "white" }}>
                        CARGO CAPACITY:
                      </strong>{" "}
                      {ship.cargo_capacity} TONS
                    </TextShip>
                    <TextShip className="ships">
                      <strong style={{ color: "white" }}>CONSUMABLES:</strong>{" "}
                      {ship.consumables} MONTHS
                    </TextShip>
                    <div className="starship-details">
                      <TextShip className="ships">
                        <strong style={{ color: "white" }}>LENGTH:</strong>{" "}
                        {ship.length} METERS
                      </TextShip>
                      <TextShip className="ships">
                        <strong style={{ color: "white" }}>
                          MAXIMUM ATMOSPHERING SPEED:
                        </strong>{" "}
                        {ship.max_atmosphering_speed} KM/H
                      </TextShip>
                      <TextShip className="ships">
                        <strong style={{ color: "white" }}>
                          HYPERDRIVE RATING:
                        </strong>{" "}
                        {ship.hyperdrive_rating}
                      </TextShip>
                      <TextShip className="ships">
                        <strong style={{ color: "white" }}>
                          MAXIMUM SPEED IN REALSPACE:
                        </strong>{" "}
                        {ship.MGLT} MGLT
                      </TextShip>
                    </div>
                    <TextShip className="ships">
                      <strong style={{ color: "white" }}>PILOTS:</strong>{" "}
                      {ship.pilots}
                    </TextShip>
                  </div>
                </div>
              </div>
            ) : (
              <div key={ship.name}></div>
            );
          })}
      </ShipInfo>
    </div>
  );
}
