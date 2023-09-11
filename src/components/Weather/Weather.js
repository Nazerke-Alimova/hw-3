import React from "react";
import "../Weather/Weather.css"

export default function Weather({description}) {
  return <div className="weather">{description}</div>;
}
