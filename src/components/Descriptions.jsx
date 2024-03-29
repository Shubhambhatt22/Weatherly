import React from "react";
import "./descriptions.css";

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import { useSelector } from "react-redux";

const Descriptions = ({ weather, units }) => {
  const weatherdata = useSelector((data) => data);
  if (weatherdata === undefined || units === undefined)
    return (
      <div className="center">
        {" "}
        <h1>Loading...</h1>
      </div>
    );
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min,
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max,
      unit: tempUnit,
    },

    {
      id: 3,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },

    {
      id: 4,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed,
      unit: windUnit,
    },
  ];

  return (
    <div className="section section_descriptions">
      {cards === undefined ? (
        <h1>Loading...</h1>
      ) : (
        cards.map(({ id, icon, title, data, unit }) => (
          <div key={id} className="card">
            <div className="description_card-icon">
              {icon}
              <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Descriptions;
